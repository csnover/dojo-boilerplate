
DEST ?= $(error Specify a destination (e.g., DEST=/var/www/foo))

all: clone
	@@echo "Complete"


clone:
	cp -R ${PWD} ${DEST}
	@@echo "${PWD} cloned to new project: ${DEST}"

