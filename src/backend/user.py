class User:
    def __init__(self, conn, user_id, name, password):
        self.conn = conn
        self.id = user_id
        self.name = name
        self.password = password

    def update_score(self, score):
        # Update user's score in the 'scores' table
        with self.conn:
            self.conn.execute('''
                UPDATE scores
                SET score = ?
                WHERE user_id = ?
            ''', (score, self.id))

    def get_score(self):
        # Retrieve user's score from the 'scores' table
        with self.conn:
            cursor = self.conn.execute('''
                SELECT score
                FROM scores
                WHERE user_id = ?
            ''', (self.id,))
            row = cursor.fetchone()
            if row:
                return row[0]
            else:
                return None