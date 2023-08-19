import sqlite3
import uuid
import bcrypt

class User:
    def __init__(self, user_id, name, hashed_password):
        self.id = user_id
        self.name = name
        self.hashed_password = hashed_password

class UserManager:
    def __init__(self, db_name):
        # Establish a connection to the SQLite database
        self.conn = sqlite3.connect(db_name)
        self.create_tables()

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
                raise ValueError("Username already exists.")

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

        return User(user_id, name, hashed_password)

    def _hash_password(self, password):
        # Generate a salt, hash the password, and return the hashed result
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(password.encode('utf-8'), salt)
        return hashed.decode('utf-8')

    def verify_password(self, user_id, password):
        with self.conn:
            # Retrieve hashed password from the 'users' table and compare with provided password
            cursor = self.conn.execute('''
                SELECT password
                FROM users
                WHERE id = ?
            ''', (user_id,))
            row = cursor.fetchone()
            if row:
                hashed_password = row[0]
                return bcrypt.checkpw(password.encode('utf-8'), hashed_password.encode('utf-8'))
            else:
                return False

    def update_score(self, user_id, score):
        # Update user's score in the 'scores' table
        with self.conn:
            self.conn.execute('''
                UPDATE scores
                SET score = ?
                WHERE user_id = ?
            ''', (score, user_id))

    def get_score(self, user_id):
        # Retrieve user's score from the 'scores' table
        with self.conn:
            cursor = self.conn.execute('''
                SELECT score
                FROM scores
                WHERE user_id = ?
            ''', (user_id,))
            row = cursor.fetchone()
            if row:
                return row[0]
            else:
                return None

if __name__ == "__main__":
    db_name = "user_scores.db"
    score_manager = UserManager(db_name)

    # Close the database connection
    score_manager.conn.close()

""" 
    # EXAMPLE USAGE
    
    # Create two sample users
    user1 = score_manager.create_user("Benutzer3", "pass123")
    user2 = score_manager.create_user("Benutzer4", "secure456")

    # Verify passwords
    print(score_manager.verify_password(user1.id, "pass123"))  # True
    print(score_manager.verify_password(user2.id, "wrongpass"))  # False

    # Update and retrieve scores
    score_manager.update_score(user1.id, 100)
    score_manager.update_score(user2.id, 150)

    # Print user scores
    print(f"{user1.name}'s Score: {score_manager.get_score(user1.id)}")
    print(f"{user2.name}'s Score: {score_manager.get_score(user2.id)}") 
"""
    