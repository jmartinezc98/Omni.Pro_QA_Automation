Automation-Test-Omni.Pro
Este repositorio contiene pruebas automatizadas desarrolladas con Cypress y Node.js, utilizando JavaScript en el entorno de desarrollo Visual Studio Code.

Descripción:
El propósito de este proyecto es realizar pruebas automatizadas en dos páginas web: Dubai Store y Compra en Línea. Se han automatizado casos de prueba para evaluar la funcionalidad de estas páginas en dispositivos de escritorio y móviles, tanto en escenarios positivos como negativos.

Tecnologías Utilizadas:
- Cypress
- Node.js
- JavaScript
- VC
Se ha empleado la dependencia Mochawesome de Node.js para generar informes detallados sobre la ejecución de las pruebas.

Instalación:
Para ejecutar las pruebas automatizadas, primero debe asegurar de tener instalado Node.js y Cypress. Se puede instalar con los siguientes comandos:

# (https://nodejs.org/)
Instalar Node.js
- npm install

# (https://www.cypress.io/)
Instalar Cypress
- npm install cypress

# Ejecución de Pruebas y Generación de Informe
Para ejecutar las pruebas y generar un informe utilizando Mochawesome, se debe ejecutar el siguiente comando en tu terminal:
- npx cypress run --reporter cypress-mochawesome-reporter

Reporte de Ejecución:
En el proyecto se incluye el archivo reportExecutionTest.html, que contiene el informe detallado de las pruebas realizadas. Este informe incluye capturas de pantalla, descripciones de casos y el estado del resultado final de los escenarios de prueba.

Repositorio:
https://github.com/jmartinezc98/Omni.Pro_QA_Automation.git

Autor:
Elaborado por: Jhon Edison Marinez Caro.
