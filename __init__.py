# Client __init__.py
#   Edit this file to configure your integrations with this client and the Back End
#   Imports may show errors prior to creating & installing - follow the README.md for more.

# Overlord library
from core.library import client


class Client(client.NativeClient):

    # Client.ENV is a file path to the environment file
    ENV = __file__.replace('__init__.py', '.env')

    # Client.NAME and directory name for this client source files should be identical
    NAME = 'new_overlord_client'

    # Client.PORT by default will be automatically determined if PORT is None.
    # otherwise you can specify a port number as a string.
    PORT = None
