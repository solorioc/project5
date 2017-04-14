#MakeFile to build and deploy the tictactoe server and testclient
# For CSC3004 Software Development

# Put your user name below:
USER= solorioc

CC= g++

#For Optimization
#CFLAGS= -O2
#For debugging
CFLAGS= -g

RM= /bin/rm -f

all: PutHTML

PutHTML:
	cp interactive_periodic_table.html /var/www/html/class/softdev/$(USER)
	cp stylesheet_periodic_table.css /var/www/html/class/softdev/$(USER)
	cp java_periodic_table.js /var/www/html/class/softdev/$(USER)
	cp allelements.xml /var/www/html/class/softdev/$(USER)
	#echo "Current contents of your HTML directory: "
	#ls -l /var/www/html/class/softdev/$(USER)

clean:
	rm -f *.o interactive_periodic_table.html stylesheet_periodic_table.css xml_processing.js
