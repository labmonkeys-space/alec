##
# Makefile to build ALEC from source
##
.DEFAULT_GOAL := compile
MAVEN_SETTINGS_XML    ?= ./.cicd-assets/settings.xml
MAVEN_ARGS            := --settings $(MAVEN_SETTINGS_XML)
ARTIFACTS_DIR         := target/artifacts

.PHONY: help
help:
	@echo ""
	@echo "Makefile to build artifacts for ALEC"
	@echo ""
	@echo "Requirements to build:"
	@echo "  * OpenJDK 17 Development Kit"
	@echo "  * Maven 3"
	@echo ""
	@echo "Build targets:"
	@echo "  help:                  Show this help"
	@echo "  compile:               Build from source with Maven target package"
	@echo "  unit-tests:            Run the JUnit test suite using Maven target test"
	@echo "  integration-tests:     Run the integration test suite using Maven target integration-test"
	@echo ""

.PHONY: deps-build
deps-build:
	@echo "Check build dependencies: Java JDK and Maven"
	command -v $(MAVEN_BIN)
	command -v java
	command -v javac
	command -v mvn
	mkdir -p $(ARTIFACTS_DIR)

.PHONY compile:
compile: deps-build
	mvn $(MAVEN_ARGS) -DskipTests -Dbuild.packages package

.PHONY unit-tests:
unit-tests: deps-build
	mvn -X $(MAVEN_ARGS) test

.PHONY integration-tests:
integration-tests: deps-build
	mvn -X $(MAVEN_ARGS) integration-test
