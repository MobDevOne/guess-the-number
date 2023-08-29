import uuid
from collections import defaultdict

class SessionHandler:
    def __init__(self):
        self.sessions = defaultdict(dict)

    def _create_session(self, session_id, username):
        # TODO: get random number
        random_number = 42

        self.sessions[session_id] = {
            "username": username,
            "tries": 0,
            "random_number": random_number,
        }

    def _remove_session(self, session_id):
        if session_id in self.sessions:
            del self.sessions[session_id]

    def remove_user_sessions(self, username):
        sessions_to_remove = []
        for session_id, session in self.sessions.items():
            if session["username"] == username:
                sessions_to_remove.append(session_id)
        
        for session_id in sessions_to_remove:
            self._remove_session(session_id)

    def open_new_session(self, username):
        self.remove_user_session(username)
        session_id = self._generate_session_id()
        self._create_session(session_id, username)

    def get_session(self, session_id):
        return self.sessions.get(session_id, None)

    def update_tries(self, session_id):
        session = self.get_session(session_id)
        if session:
            session["tries"] += 1

    def get_tries(self, session_id):
        session = self.get_session(session_id)
        if session:
            return session["tries"]
        return None

    def _generate_session_id(self):
        return str(uuid.uuid4())

# Example usage
if __name__ == "__main__":
    session_handler = SessionHandler()

    session_id1 = "abc123"
    session_id2 = "def456"
    username = "player1"

    session_handler = SessionHandler()

    session_id1 = "abc123"
    session_id2 = "def456"
    username = "player1"

    session_handler.open_new_session(session_id1, username)
    print(f"Session 1 exists: {session_id1 in session_handler.sessions}")
    print(f"Session 2 exists: {session_id2 in session_handler.sessions}")

    session_handler.open_new_session(session_id2, username)
    print(f"Session 1 exists: {session_id1 in session_handler.sessions}")
    print(f"Session 2 exists: {session_id2 in session_handler.sessions}")

    session_handler.remove_user_sessions(username)
    print(f"Session 1 exists: {session_id1 in session_handler.sessions}")
    print(f"Session 2 exists: {session_id2 in session_handler.sessions}")