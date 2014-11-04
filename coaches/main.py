import webapp2
import jinja2
import get_data
import sys

sys.path.insert(0, 'lib')

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader('templates'),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True,
)


class MainHandler(webapp2.RequestHandler):
    def get(self):

        teamName = get_data.all_coach_data()[1]
        coachName = get_data.all_coach_data()[2]
        teamKey = get_data.all_coach_data()[0]

        values = {
            'coachName': coachName,
            'teamName': teamName,
            'teamKey': teamKey,
        }

        template = JINJA_ENVIRONMENT.get_template('index.html')
        self.response.write(template.render(values))

app = webapp2.WSGIApplication([
    ('/', MainHandler)
], debug=True)
