from java.lang import Throwable
logger = system.util.getLogger(system.util.getProjectName() + '.' + __name__)

def some_func():
    try:
        some_action() # or business logic
    except Throwable, t:
        logger.error("some exception from java func calls",t)
    except Exception, e:
        logger.error("some exception from jython func calls",e)
