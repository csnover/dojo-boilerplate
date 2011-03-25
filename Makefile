
new ?= $(error Specify a destination (e.g., new=/var/www/foo))

all: clone
	@@echo "Complete"


clone:
	cp -R ${PWD} ${new}
	@@echo "${PWD} cloned to new project: ${new}"

