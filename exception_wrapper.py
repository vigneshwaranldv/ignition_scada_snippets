import sys

def exception_wrapper(func):
    def decorator(*args, **kwargs):
        try:
            # send to logger-info
            # print for script console
            print('Calling Function - {}'.format(func.__name__))
            return func(*args, **kwargs)
        except:
            # send to logger-error
            print(str(sys.exc_info()))
            return None
    
    return decorator

## usage example ##
############################################################
# @exception_wrapper									   #
# def some_function(a,b):								   #
#     return a/b										   #
#														   #
## the above can be used in place of the below approach ##
# def some_old_function(a,b):							   #
#     try:												   #
#         return a/b									   #
#     except:											   #
#         print(str(sys.exc_info()))					   #
#         return None									   #
############################################################
