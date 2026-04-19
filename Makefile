.PHONY: start ip
.DEFAULT_GOAL := start

ip:
	@echo "http://$$(curl -s ifconfig.me):8888/gustavo-moura"

start: ip
	npm start
