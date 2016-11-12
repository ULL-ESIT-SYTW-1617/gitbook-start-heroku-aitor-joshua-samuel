#Práctica: Plugin para despliegues en Heroku

##¿Qué hace el módulo?

Este plugin extiende el paquete gitbook-start con un nuevo plugin que permita realizar el despliegue en Heroku con un simple gulp deploy-heroku. Puede encontrar el paquete gitbook-start y el otro plugin para el iaas-ull-es en la zona de Repositorio.

#####Instalación:

```shell
npm install --save gitbook-start-heroku-aitor-joshua-samuel
```

Para añadir el plugin al paquete  gitbook-start ejecutar el siguiente comando:

```shell
gitbook-start -d heroku --> Añades el plugin en gitbook-start
```
#####Instrucciones:

* Al ejecutar el comando anterior, te pide el token de heroku y el nombre que quieres ponerle a la app
* El token de Heroku se puede obtener mediante el CLI de heroku con: ```heroku auth:token```
* Una vez desplegado se puede desplegar en Heroku con la siguente tarea de Gulp:

```shell
gulp deploy-heroku --> Depsliega tu libro en heroku
```

* Ejemplo de uso:

```
linux@user: gitbook-start -d heroku
? Introduce tu token de Heroku: mi-token
? Introduzca el nombre de su app en Heroku: mi-aplicación
Aplicación creada: mi-aplicación
```


##Autores

1. [Aitor Bernal Falcón](http://chinegua.github.io/)
2. [Samuel Ramos Barroso](http://losnen.github.io/)
3. [Joshua Pérez García](http://joshuape.github.io/)


##Repositorio

* [Repositorio de entrega del main](https://github.com/ULL-ESIT-SYTW-1617/practica-plugins-heroku-aitor-joshua-samuel)
* [Repositorio de entrega del plugin heroku](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-heroku-aitor-joshua-samuel)
* [Repositorio de entrega del plugin iaas](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-iaas-ull-es-aitor-joshua-samuel)
* [Enlace a NPM del main](https://www.npmjs.com/package/gitbook-start-aitor-joshua-samuel)
* [Enlace a NPM del plugin heroku](https://www.npmjs.com/package/gitbook-start-heroku-aitor-joshua-samuel)
* [Enlace a NPM del plugin iaas](https://www.npmjs.com/package/gitbook-start-iaas-ull-es-aitor-joshua-samuel)


##Enlaces de interés
* [La práctica en gitbook](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaplugin.html)
