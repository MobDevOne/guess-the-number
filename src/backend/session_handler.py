import uuid
from collections import defaultdict
from game_manager import GameManager


class SessionHandler:
    def __init__(self):
        self.sessions = defaultdict(dict)

    def _create_session(self, session_id, username):

        self.sessions[session_id] = {
            "username": username,
            "tries": 0,
            "random_number": 0,
        }

    def _remove_session(self, session_id):
        if session_id in self.sessions:
            del self.sessions[session_id]

    def start_game(self, session_id):
        random_number = GameManager.get_random_number()

        self.sessions[session_id]['random_number'] = random_number
        self.sessions[session_id]['tries'] = 0

    def remove_user_sessions(self, username):
        sessions_to_remove = []
        for session_id, session in self.sessions.items():
            if session["username"] == username:
                sessions_to_remove.append(session_id)

        for session_id in sessions_to_remove:
            self._remove_session(session_id)

    def open_new_session(self, username):
        self.remove_user_sessions(username)
        session_id = self._generate_session_id()
        self._create_session(session_id, username)

        return session_id

    def get_session(self, session_id):
        return self.sessions.get(session_id, None)

    def get_random_number_for_session(self, session_id):
        return self.sessions.get(session_id, {}).get('random_number', 0)

    # get username for session
    def get_username_for_session(self, session_id):
        return self.sessions.get(session_id, {}).get('username', 0)

    def update_tries(self, session_id):
        session = self.get_session(session_id)
        if session:
            self.sessions[session_id]['tries'] += 1

    def get_tries(self, session_id):
        session = self.get_session(session_id)
        if session:
            return session["tries"]
        return None

    @staticmethod
    def _generate_session_id():
        return str(uuid.uuid4())


# Example usage
if __name__ == "__main__":
    session_handler = SessionHandler()

    username = "player1"

    session_handler.open_new_session(username)
