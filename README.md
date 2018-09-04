<h1>HTML5_Template</h1>
<p>Free HTML5 Template with Gulp, Sass, Bower, Bootstrap and JQuery.<br />
Автор сборки: <a href="http://www.vsmirnov.ru/" target="_blank">Смирнов Владимир</a> aka Quazimorda.</p>

<h2>Бесплатный шаблон для ускорения работы над сайтом, включайющий в&nbsp;себя:</h2>

<ul>
	<li>сетку Bootstrap 4 для адаптивной вёрстки;</li>
	<li>плагин JQuery;</li>
	<li>препроцессор SASS для работы над стилями проекта;</li>
	<li>сборщик пакетов Gulp для работы над сайтом;</li>
	<li>Bower для добавления на сайте всевозможных плагинов.</li>
</ul>
 
<h2>Структура папок и файлов шаблона:</h2>

<ul>
	<li>app/&nbsp;&mdash; собственно папка проекта;
		<ul>
			<li>css/&nbsp;&mdash; папка с готовыми стилями сайта;</li>
			<li>fonts/&nbsp;&mdash; папка со шрифтами;</li>
			<li>images/&nbsp;&mdash; папка с графикой для сайта;</li>
			<li>js/&nbsp;&mdash; папка, содержит пользовательские скрипты;</li>
			<li>libs/&nbsp;&mdash; папка, указанная для плагинов, которые устанавливает Bower;</li>
			<li>sass/&nbsp;&mdash; папка с sass-файлами, для редактирования стилей сайта;</li>
			<li>index.html&nbsp;&mdash; стартовая страница проекта с полностью валидным кодом;</li>
		</ul>
	</li>
	<li>.bowerrc&nbsp;&mdash; файл настроек bower (указывает путь к папке, куда устанавливаются плагины для сайта;</li>
	<li>bower.json&nbsp;&mdash; файл-манифест, в котором указаны зависимости, подключенных через него плагинов;</li>
	<li>gulpfile.js&nbsp;&mdash; файл всего проекта, в нём описаны задачи, выполняемые в рамках работы над сайтом;</li>
</ul>

<h2>Для работы шаблона вам потребуются:</h2>

<ul>
	<li><strong>npm</strong>&nbsp;&mdash; командная строка npm. Под управлением Windows нужно установить <a href="https://nodejs.org/" target="_blank">Node.js</a>;</li>
	<li><strong>gulp</strong>&nbsp;&mdash; сборщик пакетов <a href="https://gulpjs.com/" target="_blank">Gulp</a>;</li>
	<li><strong>bower</strong>&nbsp;&mdash; сборщик пакетов <a href="https://www.npmjs.com/package/bower" target="_blank">Bower</a>.</li>
</ul>

<h2>В шаблоне уже есть:</h2>

<ul>
	<li>установлены и подключены шрифты семейства Open Sans и Font Awesome&nbsp;4.7;</li>
	<li>Посредством Gulp установлены все необходимые зависимости для корректной работы проекта, включая препроцессор SASS;</li>
	<li>Посредством Bower установлены и подключены JQuery, сетка Bootstrap 4, плагины Normalize и html5shiv.</li>
</ul>
