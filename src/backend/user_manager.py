import sqlite3
import uuid
from src.backend.user import User

class UserManager:
    def __init__(self, db_name):
        # Establish a connection to the SQLite database
        self.conn = sqlite3.connect(db_name)
        self.create_tables()

    def close(self):
        # Closes the database connection
        self.conn.close() 

    def create_tables(self):
        # Create 'users' and 'scores' tables if they don't exist
        with self.conn:
            self.conn.execute('''
                CREATE TABLE IF NOT EXISTS users (
                    id TEXT PRIMARY KEY,
                    name TEXT UNIQUE,
                    password TEXT
                )
            ''')

            self.conn.execute('''
                CREATE TABLE IF NOT EXISTS scores (
                    user_id TEXT PRIMARY KEY,
                    score INTEGER
                )
            ''')

    def create_user(self, name, password):
        with self.conn:
            # Check if the username already exists
            cursor = self.conn.execute('''
                SELECT id
                FROM users
                WHERE name = ?
            ''', (name,))
            existing_user = cursor.fetchone()

            if existing_user:
                raise ValueError("username already exists")

            # Generate a unique user ID and hash the password
            user_id = str(uuid.uuid4())[:8]
            hashed_password = self._hash_password(password)
            
            # Insert user into 'users' table and initialize score in 'scores' table
            self.conn.execute('''
                INSERT INTO users (id, name, password)
                VALUES (?, ?, ?)
            ''', (user_id, name, hashed_password))
            
            self.conn.execute('''
                INSERT INTO scores (user_id, score)
                VALUES (?, ?)
            ''', (user_id, 0))

        return User(self.conn, user_id, name, hashed_password)
    
    def remove_user(self, name):
        with self.conn:
            # Check if the username exists and get user_id
            user_id = self._get_user_id(name)
            
            # Delete user from 'users' table and the corresponding score in 'scores' table
            self.conn.execute('''
                DELETE FROM users 
                WHERE name = ?
            ''', (name,))
            
            self.conn.execute('''
                DELETE FROM scores 
                WHERE user_id = ?
            ''', (user_id,))
            
            return True
     
    def _verify_username(self, username):
        # Check if given username exists
        with self.conn:
            cursor = self.conn.execute('''
                SELECT COUNT(*)
                FROM users
                WHERE name = ?                           
            ''', (username,))
            row = cursor.fetchone()
            if row[0] == 1:
                return True
            else:
                return False
    
    def _get_user_id(self, username):
        # Get id for given username
        with self.conn:
            cursor = self.conn.execute('''
                SELECT id
                FROM users
                WHERE name = ?                           
            ''', (username,))
            row = cursor.fetchone()
            if row:
                user_id = row [0]
                return user_id
            else:
                raise ValueError(f"user {username} does not exist")
