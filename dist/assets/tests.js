'use strict';

define('catvsdog-ember-app/tests/acceptance/percentage-vote-by-date-test', ['qunit', 'catvsdog-ember-app/tests/helpers/module-for-acceptance'], function (_qunit, _moduleForAcceptance) {
  'use strict';

  (0, _moduleForAcceptance.default)('Acceptance | percentage vote by date');

  (0, _qunit.test)('visiting /percentage-vote-by-date', function (assert) {
    visit('/percentage-vote-by-date');

    andThen(function () {
      assert.equal(currentURL(), '/percentage-vote-by-date');
    });
  });
});
define('catvsdog-ember-app/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/percentage-vote-by-date.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/percentage-vote-by-date.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/not-found.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/not-found.js should pass ESLint\n\n');
  });

  QUnit.test('routes/percentage-vote-by-date.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/percentage-vote-by-date.js should pass ESLint\n\n');
  });

  QUnit.test('services/fetch.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/fetch.js should pass ESLint\n\n');
  });

  QUnit.test('services/result-percentage-service.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/result-percentage-service.js should pass ESLint\n\n');
  });
});
define("catvsdog-ember-app/tests/ember-sinon-qunit/only", ["exports", "ember-sinon-qunit/test-support/only"], function (exports, _only) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    console.warn("Using deprecated import path for ember-sinon-qunit; use `import test from 'ember-sinon-qunit/test-support/only';` instead.");
    return _only.default.apply(this, arguments);
  };
});
define("catvsdog-ember-app/tests/ember-sinon-qunit/test", ["exports", "ember-sinon-qunit/test-support/test"], function (exports, _test) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    console.warn("Using deprecated import path for ember-sinon-qunit; use `import test from 'ember-sinon-qunit/test-support/test';` instead.");
    return _test.default.apply(this, arguments);
  };
});
define('catvsdog-ember-app/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('catvsdog-ember-app/tests/helpers/inject-mock', ['exports', 'sinon'], function (exports, _sinon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.injectMock = injectMock;
  function injectMock(context, name) {
    var definition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var stub = Ember.Object.create(definition);
    var mock = _sinon.default.mock(stub);
    context.register('service:' + name, { create: function create() {
        return stub;
      } });
    context.inject.service(name, { as: name });
    return mock;
  }
});
define('catvsdog-ember-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'catvsdog-ember-app/tests/helpers/start-app', 'catvsdog-ember-app/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('catvsdog-ember-app/tests/helpers/start-app', ['exports', 'catvsdog-ember-app/app', 'catvsdog-ember-app/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('catvsdog-ember-app/tests/integration/services/fetch-test', ['ember-qunit', 'moment'], function (_emberQunit, _moment) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:fetch', 'Integration | Service | fetch', {});

  // Replace this with your real tests.

  (0, _emberQunit.test)('getAResult', function (assert) {
    // GIVEN
    assert.expect(1);
    var fetch = this.subject();
    // WHEN
    var date = (0, _moment.default)().format("YYYY-MM-DD");
    return fetch.fetch('http://localhost:9000/api/v1/vote-percentages?date=' + date).then(function (response) {
      assert.equal(response.status, 200);
    });
  });
});
define('catvsdog-ember-app/tests/integration/services/result-percentage-service-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:result-percentage-service', 'Integration | Service | result percentage service', {
    integration: true
  });

  (0, _emberQunit.test)('getPercentageVoteReturnVote', function (assert) {
    // GIVEN
    assert.expect(1);
    var resultPercentageService = this.subject();
    var date = "2017-01-19";
    // WHEN
    return resultPercentageService.getPercentageVote(date).then(function (result) {
      // THEN
      assert.ok(result);
    });
  });
});
define('catvsdog-ember-app/tests/test-helper', ['catvsdog-ember-app/app', 'catvsdog-ember-app/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('catvsdog-ember-app/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('acceptance/percentage-vote-by-date-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/percentage-vote-by-date-test.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/inject-mock.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/inject-mock.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/services/fetch-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/services/fetch-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/services/result-percentage-service-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/services/result-percentage-service-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/percentage-vote-by-date-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/percentage-vote-by-date-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/not-found-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/not-found-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/percentage-vote-by-date-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/percentage-vote-by-date-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/fetch-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/fetch-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/result-percentage-service-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/result-percentage-service-test.js should pass ESLint\n\n');
  });
});
define('catvsdog-ember-app/tests/unit/controllers/percentage-vote-by-date-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  // import Moment from 'moment'
  // import Controller from '@ember/controller';

  (0, _emberQunit.moduleFor)('controller:percentage-vote-by-date', 'Unit | Controller | percentage vote by date', {
    // Specify the other units that are required for this test.
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });

  // test('CallTheRouteMethodWithFormattedDate',function (assert) {
  //   // GIVEN
  //   let percentageVoteByDate = this.subject();
  //   const today = Moment()
  //   const formatedToday = today.format("YYYY-MM-DD")
  //   percentageVoteByDate.set("percentage-vote-by-date", Controller.extend({
  //       actions: {
  //         dateSelected: (date) => {
  //           // THEN
  //           assert.equal(date,formatedToday)
  //           assert.ok(true, 'Action bubbled!')
  //         }
  //       }
  //     }).create())
  //   // WHEN
  //   percentageVoteByDate.send('dateSelected',today)
  // })
});
define('catvsdog-ember-app/tests/unit/routes/index-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('catvsdog-ember-app/tests/unit/routes/not-found-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:not-found', 'Unit | Route | not found', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('catvsdog-ember-app/tests/unit/routes/percentage-vote-by-date-test', ['ember-qunit', 'catvsdog-ember-app/tests/helpers/inject-mock', 'moment'], function (_emberQunit, _injectMock, _moment) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:percentage-vote-by-date', 'Unit | Route | percentage vote by date', {
    beforeEach: function beforeEach() {
      this.resultPercentageServiceMock = (0, _injectMock.injectMock)(this, 'result-percentage-service', {
        getPercentageVote: function getPercentageVote() {}
      });
    },
    afterEach: function afterEach() {
      this.resultPercentageServiceMock.restore();
    }
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

  (0, _emberQunit.test)('whenDateSelectedCallResultPercentageServiceWithDate', function (assert) {
    var _this = this;

    // GIVEN
    assert.expect(2);
    var percentageVoteByDateroute = this.subject();
    percentageVoteByDateroute.set('controller', {
      set: function set() {
        assert.ok(true);
      }
    });
    var date = "24-07-1993";
    this.resultPercentageServiceMock.expects('getPercentageVote').once().withArgs(date).resolves({ cat: 1, dog: 0 });
    // WHEN
    percentageVoteByDateroute.send('dateSelectedR', date).then(function () {
      _this.resultPercentageServiceMock.verify();
    });
    //THEN
  });

  (0, _emberQunit.test)('whenDateSelectedChangePercentageValue', function (assert) {
    // GIVEN
    assert.expect(2);
    var percentageVoteByDateroute = this.subject();
    var date = "24-07-1993";
    var expectedPercentage = { cat: 1, dog: 0 };
    percentageVoteByDateroute.set('controller', {
      set: function set(modelValueName, percentage) {
        //THEN
        assert.equal(modelValueName, "model.percentage");
        assert.deepEqual(percentage, expectedPercentage);
      }
    });
    this.resultPercentageServiceMock.expects('getPercentageVote').resolves(expectedPercentage);
    // WHEN
    percentageVoteByDateroute.send('dateSelectedR', date);
  });

  (0, _emberQunit.test)('whenThereIsNoResult,SetPercentageToUndifined', function (assert) {
    // GIVEN
    assert.expect(2);
    var percentageVoteByDateroute = this.subject();
    var date = "24-07-1993";
    percentageVoteByDateroute.set('controller', {
      set: function set(modelValueName, percentage) {
        //THEN
        assert.equal(modelValueName, "model.percentage");
        assert.deepEqual(percentage, undefined);
      }
    });
    this.resultPercentageServiceMock.expects('getPercentageVote').resolves({});
    // WHEN
    percentageVoteByDateroute.send('dateSelectedR', date);
  });

  (0, _emberQunit.test)('whenModelInit,InitVariable', function (assert) {
    // GIVEN
    var percentageVoteByDateroute = this.subject();
    var expectedDate = (0, _moment.default)().format("YYYY-MM-DD");
    var expectedPercentage = { cat: 0.3, dog: 0.7 };
    this.resultPercentageServiceMock.expects('getPercentageVote').once().withArgs(expectedDate).resolves(expectedPercentage);
    // WHEN
    return percentageVoteByDateroute.model().then(function () {
      // THEN
      assert.equal(percentageVoteByDateroute.get('date'), expectedDate);
    });
  });

  (0, _emberQunit.test)('whenModelInit,UpdatePercentageToTodayDate', function (assert) {
    var _this2 = this;

    // GIVEN
    var percentageVoteByDateroute = this.subject();
    var expectedDate = (0, _moment.default)().format("YYYY-MM-DD");
    var expectedPercentage = { cat: 0.3, dog: 0.7 };
    this.resultPercentageServiceMock.expects('getPercentageVote').once().withArgs(expectedDate).resolves(expectedPercentage);
    // WHEN
    return percentageVoteByDateroute.model().then(function (model) {
      //THEN
      var percentage = model.percentage;
      assert.deepEqual(percentage, expectedPercentage);
      _this2.resultPercentageServiceMock.verify();
    });
  });
});
define('catvsdog-ember-app/tests/unit/services/fetch-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('service:fetch', 'Unit | Service | fetch', {});

  // Replace this with your real tests.

  (0, _emberQunit.test)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });
});
define('catvsdog-ember-app/tests/unit/services/result-percentage-service-test', ['ember-qunit', 'catvsdog-ember-app/config/environment', 'ember-sinon-qunit/test-support/test', 'catvsdog-ember-app/tests/helpers/inject-mock'], function (_emberQunit, _environment, _test, _injectMock) {
  'use strict';

  var API_HOST = _environment.default.API_HOST || "http://localhost";
  var API_PORT = _environment.default.API_PORT || "9000";
  var API_ROUTE = _environment.default.API_ROUTE || "/api/v1";

  (0, _emberQunit.moduleFor)('service:result-percentage-service', 'Unit | Service | result percentage service', {
    beforeEach: function beforeEach() {
      this.fetchServiceMock = (0, _injectMock.injectMock)(this, 'fetch', {
        fetch: function fetch() {}
      });
    },
    afterEach: function afterEach() {
      this.fetchServiceMock.restore();
    }
  });

  (0, _test.default)('it exists', function (assert) {
    var service = this.subject();
    assert.ok(service);
  });

  (0, _test.default)('getPercentageVoteReturnVote', function (assert) {
    // GIVEN
    var resultPercentageService = this.subject();
    var resultPercentageExpected = { "cat": 0.5, "dog": 0.5 };
    var date = "2018-01-19";
    var response = {
      status: 200,
      json: function json() {
        return { "cat": 0.5, "dog": 0.5 };
      }
    };
    this.fetchServiceMock.expects('fetch').resolves(response);

    // WHEN
    resultPercentageService.getPercentageVote(date).then(function (result) {
      // THEN
      assert.deepEqual(result, resultPercentageExpected);
    });
  });

  (0, _test.default)('getPercentageVoteCallFetchWithAppropriateQuery', function () {
    // GIVEN
    var resultPercentageService = this.subject();
    var date = "2018-01-19";
    var query = API_HOST + ':' + API_PORT + API_ROUTE + '/vote-percentages?date=' + date;
    var response = {
      status: 200,
      json: function json() {
        return "not mocked";
      }
    };
    this.fetchServiceMock.expects('fetch').once().withArgs(query).resolves(response);
    // WHEN
    resultPercentageService.getPercentageVote(date);
    // THEN
    this.fetchServiceMock.verify();
  });

  (0, _test.default)('getPercentageVoteReturnVoidObjectWhenServerAnswerVoidObject', function (assert) {
    // GIVEN
    var resultPercentageService = this.subject();
    var resultPercentageExpected = {};
    var date = "2018-01-19";
    var query = API_HOST + ':' + API_PORT + API_ROUTE + '/vote-percentages?date=' + date;
    var response = {
      status: 200,
      json: function json() {
        return {};
      }
    };
    this.fetchServiceMock.expects('fetch').once().withArgs(query).resolves(response);
    // WHEN
    resultPercentageService.getPercentageVote(date).then(function (result) {
      // THEN
      assert.deepEqual(result, resultPercentageExpected);
    });
  });

  (0, _test.default)('returnVoidWhenApiReturnError', function (assert) {
    // GIVEN
    var resultPercentageService = this.subject();
    var resultPercentageExpected = {};
    var date = "2018-01-19";
    var query = API_HOST + ':' + API_PORT + API_ROUTE + '/vote-percentages?date=' + date;
    var response = {
      status: 404
    };
    this.fetchServiceMock.expects('fetch').once().withArgs(query).resolves(response);
    // WHEN
    resultPercentageService.getPercentageVote(date).then(function (result) {
      // THEN
      assert.deepEqual(result, resultPercentageExpected);
    });
  });
});
require('catvsdog-ember-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
