import unittest
from session_handler import SessionHandler  # Import your SessionHandler class

class TestSessionHandler(unittest.TestCase):

    def setUp(self):
        self.session_handler = SessionHandler()

    def test_create_session(self):
        session_id = "abc123"
        username = "user1"
        self.session_handler._create_session(session_id, username)
        session = self.session_handler.get_session(session_id)
        self.assertIsNotNone(session)
        self.assertEqual(session["username"], username)
        self.assertEqual(session["tries"], 0)
        self.assertEqual(session["random_number"], 42)

    def test_remove_session(self):
        session_id = "abc123"
        username = "user1"
        self.session_handler._create_session(session_id, username)
        self.session_handler._remove_session(session_id)
        session = self.session_handler.get_session(session_id)
        self.assertIsNone(session)

    def test_remove_user_sessions(self):
        session_id1 = "abc123"
        session_id2 = "def456"
        username = "user1"
        self.session_handler._create_session(session_id1, username)
        self.session_handler._create_session(session_id2, username)
        self.session_handler.remove_user_sessions(username)
        session1 = self.session_handler.get_session(session_id1)
        session2 = self.session_handler.get_session(session_id2)
        self.assertIsNone(session1)
        self.assertIsNone(session2)

    def test_open_new_session(self):
        session_id = "abc123"
        username = "user1"
        self.session_handler.open_new_session(username)
        session = self.session_handler.get_session(session_id)
        self.assertIsNotNone(session)
        self.assertEqual(session["username"], username)
        self.assertEqual(session["tries"], 0)
        self.assertEqual(session["random_number"], 42)

    def test_update_tries(self):
        session_id = "abc123"
        self.session_handler._create_session(session_id, "user1")
        self.session_handler.update_tries(session_id)
        self.assertEqual(self.session_handler.get_tries(session_id), 1)

    def test_get_username(self):
        session_id = "abc123"
        username = "user1"
        self.session_handler._create_session(session_id, username)
        self.assertEqual(self.session_handler.get_username(session_id), username)

    def test_generate_session_id(self):
        session_id = self.session_handler._generate_session_id()
        self.assertIsNotNone(session_id)

if __name__ == '__main__':
    unittest.main()
