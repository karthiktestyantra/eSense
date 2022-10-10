//import commands.js using ES2015 syntax:
import './commands'

//for mochawesore report with screenshots
import 'cypress-mochawesome-reporter/register';

//for using Xpath
require('cypress-xpath')

//for grouping/tags
require('cypress-grep')()

//for allure report
import "@shelex/cypress-allure-plugin";

//for mouse pointer location
import 'cypress-mouse-position/commands';



