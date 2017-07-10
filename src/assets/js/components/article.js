'use strict';

const Article = () => {
	const container = $('<div class="container"></div>');
	const row = $('<div class="row"></div>');
	const articleContainer = $('<div class="col s8"></div>');
	const title = $('<h4 class="uppercase">Mit busca estudiantes de todo el mundo que quieran estudiar gratis</h4>');
	const subtitle = $('<p>Ya no será necesario ir hasta el campus de MIT para estudiar allá, por medio de su curso gratuito en línea cualquier podrá hacerlo.</p>');
	const imageContainer = $('<div class="col s12"></div>')
	const image = $('<img src="assets/img/foto-n1.png" class="article-img">');
	const authorContainer = $('<div class="col s12 author-info"></div>');
	const authorImage = $('<img src="assets/img/authors/dianaluque.png" class="author">');
	const authorName = $('<p class="uppercase col s12">Diana Luque Lavado <br> 22.06.17 12:26 pm <br> @photosynthetica</p>');
	const article = $(`<p>Nuestro ingeniero había expresado su <b>deseo de estudiar en Stanford</b> y encontró la manera de hacerlo gratis 
						gracias a los cursos virtuales de tecnología y emprendimiento. Ahora <b>el Massachusetts Institute of Technology 
						(MIT) anunció su primer curso totalmente en línea a partir de marzo</b>, según lo reporta BBC News.</p>
						<p>Este primer proyecto en línea, el cual es un curso de circuitos y electrónica, fue bautizado como MITx 
						diseñado como un prototipo que busca romper las barreras de la educación, por medio de un sistema automatizado 
						que al final del curso hará que los estudiantes más exitosos reciban un certificado.</p>
						<p>MIT ofrece desde hace un tiempo varios cursos en línea. La diferencia, además de ser gratuito, es abierto 
						para cualquier estudiante del mundo sin requisitos de ingreso. Todo será por medio de su plataforma, los 
						materiales de estudio, junto con un laboratorio virtual y libros digitales o e-books para consulta.</p>
						<p>El curso de circuitos y electrónica comenzará el próximo lunes, y está basado en el que el campus ofrece 
						presencial con el mismo nombre. MIT asegura que no es una versión ligera del mismo sino que tendrá todos los 
						componentes e incluye ejercicios interactivos para comprobar los conocimientos de los estudiantes.</p>
						<p>El profesor Anant Agarwal, director del laboratorio de computación e inteligencia artificial de MIT, aclara
						 que no existirán requisitos como titulaciones para tomar el curso, pero <b>aconseja tener conocimientos en 
						 matemáticas, ciencias e inglés para quienes este no es su idioma nativo, y asumir un código de honor en el 
						 que los estudiantes se comprometan a un comportamiento honesto</b>.</p><p>Este primer curso es la prueba para los 
						 siguientes que MIT desea abrir en áreas como biología, física y matemáticas, como una forma de formar y 
						 acreditar personas para generar empleo. La universidad busca también llamar la atención de los empleadores y 
						 posibles interesados en financiación a futuro.</p><p>Existirá diferenciación entre un titulo obtenido de 
						 manera presencial y uno virtual, así como el material de estudio pero la idea con MITx es llegar a un grupo 
						 de estudiantes internacional y también entrar en la competición de ofertas educativas, no solo la de Stanford, 
						 sino también con lo que iTunes U ofrece en cuanto a lecturas.</p><p>Se pueden inscribir en el sitio web de MITx, 
						 en el que encontrarán un enlace que ‘enlistar’ o ‘enroll’ para este curso. De seguro se volverán a encontrar 
						 con nuestro ingeniero en la sala de estudio virtual.</p>`);

	authorContainer.append(authorImage, authorName);
	imageContainer.append(image);
	articleContainer.append(authorContainer, article);
	row.append(title, subtitle, imageContainer, articleContainer);
	container.append(row);

	return container;
}