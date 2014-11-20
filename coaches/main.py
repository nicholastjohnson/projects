import webapp2
import jinja2
import get_data
import os, sys

rootdir = os.path.dirname(os.path.abspath(__file__))
lib = os.path.join(rootdir, 'lib')
sys.path.append(lib)


JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader('templates'),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True,
)


class MainHandler(webapp2.RequestHandler):
    def get(self):

        data = get_data.all_coach_data()

        teamName = data[1]
        coachName = data[2]
        teamKey = data[0]

        values = {
            'coachName': coachName,
            'teamName': teamName,
            'teamKey': teamKey,
        }

        template = JINJA_ENVIRONMENT.get_template('index.html')
        self.response.write(template.render(values))

    def post(self):
        refreshRequest = self.request.get('refreshReq')

        if refreshRequest == "NICK":
            get_data.put_data_in_ndb()
        else:
            pass

        template = JINJA_ENVIRONMENT.get_template('index.html')
        self.response.write(template.render())

app = webapp2.WSGIApplication([
    ('/', MainHandler),
], debug=True)
