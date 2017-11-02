var TechListController = techApp.controller('TechListController', function ($scope) {
  $scope.techList = [
    {
      name: 'React',
      type: 'Front End',
      year: 2013,
      org: 'Facebook',
      currentVersion: '16.0.0',
      imageUrl: 'https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png',
      description: `React (sometimes styled React.js or ReactJS) is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations. React allows developers to create large web-applications that use data and can change over time without reloading the page. It aims primarily to provide speed, simplicity, and scalability. React processes only user interfaces in applications. This corresponds to View in the Model-View-Controller (MVC) pattern, and can be used in combination with other JavaScript libraries or frameworks in MVC, such as AngularJS`
    },
    {
      name: 'Angular',
      type: 'Front End',
      year: 2016,
      org: 'Google',
      currentVersion: '4.4.6',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      description: `Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop.`
    },
    {
      name: 'NodeJS',
      type: 'Back End',
      year: 2009,
      org: 'Community',
      currentVersion: '8.8.1',
      imageUrl: 'https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png',
      description: `Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.\nNode is similar in design to, and influenced by, systems like Ruby's Event Machine or Python's Twisted. Node takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems there is always a blocking call to start the event-loop. Typically behavior is defined through callbacks at the beginning of a script and at the end starts a server through a blocking call like EventMachine::run(). In Node there is no such start-the-event-loop call. Node simply enters the event loop after executing the input script. Node exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript — the event loop is hidden from the user.`
    },
    {
      name: 'Vue',
      type: 'Front End',
      year: 2014,
      org: 'Community',
      currentVersion: '2.4.4',
      imageUrl: 'https://vuejs.org/images/logo.png',
      description: 'Vue (pronounced like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.\nIf you are an experienced frontend developer and want to know how Vue compares to other libraries/frameworks, check out the Comparison with Other Frameworks.'
    },
    {
      name: 'AngularJS',
      type: 'Front End',
      year: 2010,
      org: 'Google',
      currentVersion: '1.6.6',
      imageUrl: 'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg',
      description: `AngularJS (commonly referred to as "Angular.js" or "AngularJS 1.X") is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. The JavaScript components complement Apache Cordova, the framework used for developing cross-platform mobile apps. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications. In 2014, the original AngularJS team began working on Angular (Application Platform). The AngularJS framework works by first reading the HTML page, which has additional custom tag attributes embedded into it. Angular interprets those attributes as directives to bind input or output parts of the page to a model that is represented by standard JavaScript variables. The values of those JavaScript variables can be manually set within the code, or retrieved from static or dynamic JSON resources. According to JavaScript analytics service Libscore, AngularJS is used on the websites of Wolfram Alpha, NBC, Walgreens, Intel, Sprint, ABC News, and about 12,000 other sites out of 1 million tested in October 2016. AngularJS is currently in the top 100 of the most starred projects on GitHub.`
    },
    {
      name: 'GraphQL',
      type: 'Back End',
      year: 2015,
      org: 'Facebook',
      currentVersion: '0.11.7',
      imageUrl: 'http://graphql.org/img/logo.svg',
      description: `AngularJS (commonly referred to as "Angular.js" or "AngularJS 1.X") is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications. The JavaScript components complement Apache Cordova, the framework used for developing cross-platform mobile apps. It aims to simplify both the development and the testing of such applications by providing a framework for client-side model–view–controller (MVC) and model–view–viewmodel (MVVM) architectures, along with components commonly used in rich Internet applications. In 2014, the original AngularJS team began working on Angular (Application Platform). The AngularJS framework works by first reading the HTML page, which has additional custom tag attributes embedded into it. Angular interprets those attributes as directives to bind input or output parts of the page to a model that is represented by standard JavaScript variables. The values of those JavaScript variables can be manually set within the code, or retrieved from static or dynamic JSON resources. According to JavaScript analytics service Libscore, AngularJS is used on the websites of Wolfram Alpha, NBC, Walgreens, Intel, Sprint, ABC News, and about 12,000 other sites out of 1 million tested in October 2016. AngularJS is currently in the top 100 of the most starred projects on GitHub.`
    }
  ];
  $scope.sortorder = '-year';
  $scope.filter = '';
});
