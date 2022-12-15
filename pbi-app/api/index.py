from http.server import BaseHTTPRequestHandler
from azure.identity import InteractiveBrowserCredential

class handler(BaseHTTPRequestHandler):

    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type','text/plain')
        self.end_headers()
        self.wfile.write('Hello world!'.encode('utf-8'))
        credential = InteractiveBrowserCredential()
        access_token_class = credential.get_token('https://analysis.windows.net/powerbi/api/.default')
        access_token=access_token_class.token
        self.wfile.write(access_token)
        return