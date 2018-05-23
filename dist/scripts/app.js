(function() {
  angular.module('identifiAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'angular-parallax', 'infinite-scroll', 'LocalStorageModule', 'rzModule']);

  angular.module('identifiAngular').filter('escape', [
    function() {
      return function(input) {
        return encodeURIComponent(encodeURIComponent(input));
      };
    }
  ]);

  angular.module('identifiAngular').filter('encodeURIComponent', [
    function() {
      return function(input) {
        return encodeURIComponent(input);
      };
    }
  ]);

  angular.module('identifiAngular').filter('highlight', function($sce) {
    return function(text, phrase) {
      if (typeof text === 'string' && phrase) {
        text = text.replace(new RegExp('(' + phrase + ')', 'gi'), '<b>$1</b>');
        return $sce.trustAsHtml(text.toString());
      }
      return text;
    };
  });

  angular.module('identifiAngular').filter('ordinal', function() {
    return function(input) {
      var s, v;
      s = ['th', 'st', 'nd', 'rd'];
      v = input % 100;
      return input + (s[(v - 20) % 10] || s[v] || s[0]);
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlcyI6WyJpbmRleC5tb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixFQUNFLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsU0FBM0IsRUFBc0MsWUFBdEMsRUFBb0QsWUFBcEQsRUFDQSxRQURBLEVBQ1UsWUFEVixFQUN3QixXQUR4QixFQUNxQyxjQURyQyxFQUNxRCxrQkFEckQsRUFFQSxpQkFGQSxFQUVtQixvQkFGbkIsRUFFeUMsVUFGekMsQ0FERjs7RUFLQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsUUFBekMsRUFBbUQ7SUFBRSxTQUFBO2FBQ25ELFNBQUMsS0FBRDtlQUNFLGtCQUFBLENBQW1CLGtCQUFBLENBQW1CLEtBQW5CLENBQW5CO01BREY7SUFEbUQsQ0FBRjtHQUFuRDs7RUFJQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsb0JBQXpDLEVBQStEO0lBQUUsU0FBQTthQUMvRCxTQUFDLEtBQUQ7ZUFDRSxrQkFBQSxDQUFtQixLQUFuQjtNQURGO0lBRCtELENBQUY7R0FBL0Q7O0VBS0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLE1BQWxDLENBQXlDLFdBQXpDLEVBQXNELFNBQUMsSUFBRDtXQUNwRCxTQUFDLElBQUQsRUFBTyxNQUFQO01BQ0UsSUFBRyxPQUFPLElBQVAsS0FBZSxRQUFmLElBQTRCLE1BQS9CO1FBQ0UsSUFBQSxHQUFPLElBQUksQ0FBQyxPQUFMLENBQWEsSUFBSSxNQUFKLENBQVcsR0FBQSxHQUFNLE1BQU4sR0FBZSxHQUExQixFQUErQixJQUEvQixDQUFiLEVBQW1ELFdBQW5EO0FBQ1AsZUFBTyxJQUFJLENBQUMsV0FBTCxDQUFpQixJQUFJLENBQUMsUUFBTCxDQUFBLENBQWpCLEVBRlQ7O0FBR0EsYUFBTztJQUpUO0VBRG9ELENBQXREOztFQU9BLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxTQUF6QyxFQUFvRCxTQUFBO1dBQ2xELFNBQUMsS0FBRDtBQUNFLFVBQUE7TUFBQSxDQUFBLEdBQUksQ0FDRixJQURFLEVBRUYsSUFGRSxFQUdGLElBSEUsRUFJRixJQUpFO01BTUosQ0FBQSxHQUFJLEtBQUEsR0FBUTthQUNaLEtBQUEsR0FBUSxDQUFDLENBQUUsQ0FBQSxDQUFDLENBQUEsR0FBSSxFQUFMLENBQUEsR0FBVyxFQUFYLENBQUYsSUFBb0IsQ0FBRSxDQUFBLENBQUEsQ0FBdEIsSUFBNEIsQ0FBRSxDQUFBLENBQUEsQ0FBL0I7SUFSVjtFQURrRCxDQUFwRDtBQXJCQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInLFxuICBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLFxuICAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICdhbmd1bGFyLXBhcmFsbGF4JyxcbiAgJ2luZmluaXRlLXNjcm9sbCcsICdMb2NhbFN0b3JhZ2VNb2R1bGUnLCAncnpNb2R1bGUnXVxuXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuZmlsdGVyICdlc2NhcGUnLCBbIC0+XG4gIChpbnB1dCkgLT5cbiAgICBlbmNvZGVVUklDb21wb25lbnQgZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0KVxuIF1cbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5maWx0ZXIgJ2VuY29kZVVSSUNvbXBvbmVudCcsIFsgLT5cbiAgKGlucHV0KSAtPlxuICAgIGVuY29kZVVSSUNvbXBvbmVudCBpbnB1dFxuIF1cblxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZpbHRlciAnaGlnaGxpZ2h0JywgKCRzY2UpIC0+XG4gICh0ZXh0LCBwaHJhc2UpIC0+XG4gICAgaWYgdHlwZW9mIHRleHQgPT0gJ3N0cmluZycgYW5kIHBocmFzZVxuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShuZXcgUmVnRXhwKCcoJyArIHBocmFzZSArICcpJywgJ2dpJyksICc8Yj4kMTwvYj4nKVxuICAgICAgcmV0dXJuICRzY2UudHJ1c3RBc0h0bWwgdGV4dC50b1N0cmluZygpXG4gICAgcmV0dXJuIHRleHRcblxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZpbHRlciAnb3JkaW5hbCcsIC0+XG4gIChpbnB1dCkgLT5cbiAgICBzID0gW1xuICAgICAgJ3RoJ1xuICAgICAgJ3N0J1xuICAgICAgJ25kJ1xuICAgICAgJ3JkJ1xuICAgIF1cbiAgICB2ID0gaW5wdXQgJSAxMDBcbiAgICBpbnB1dCArIChzWyh2IC0gMjApICUgMTBdIG9yIHNbdl0gb3Igc1swXSlcbiJdfQ==

(function() {
  angular.module('identifiAngular').component('message', {
    bindings: {
      msgData: '=',
      pageInfo: '=?'
    },
    templateUrl: 'app/components/message/message.template.html'
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsU0FESCxDQUNhLFNBRGIsRUFFSTtJQUFBLFFBQUEsRUFDRTtNQUFBLE9BQUEsRUFBUyxHQUFUO01BQ0EsUUFBQSxFQUFVLElBRFY7S0FERjtJQUdBLFdBQUEsRUFBYSw4Q0FIYjtHQUZKO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuICAuY29tcG9uZW50ICdtZXNzYWdlJyxcbiAgICBiaW5kaW5nczpcbiAgICAgIG1zZ0RhdGE6ICc9J1xuICAgICAgcGFnZUluZm86ICc9PydcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS50ZW1wbGF0ZS5odG1sJ1xuIl19

(function() {
  angular.module('identifiAngular').directive('identicon', function() {
    return {
      scope: {
        identity: '='
      },
      link: function(scope, element, attrs) {
        var update;
        attrs.showDistance = typeof attrs.showDistance === 'undefined' ? true : !!parseInt(attrs.showDistance);
        attrs.border = isNaN(attrs.border) ? 3 : attrs.border;
        update = function() {
          var identicon;
          if (scope.identity && scope.identity.identicon) {
            identicon = scope.identity.identicon(attrs.width, attrs.border, attrs.showDistance);
            element.empty();
            return element.append(identicon);
          }
        };
        return scope.$watchGroup(['identity'], update);
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQ0UsQ0FBQyxTQURILENBQ2EsV0FEYixFQUMwQixTQUFBO1dBQ3RCO01BQUEsS0FBQSxFQUNFO1FBQUEsUUFBQSxFQUFVLEdBQVY7T0FERjtNQUVBLElBQUEsRUFBTSxTQUFDLEtBQUQsRUFBUSxPQUFSLEVBQWlCLEtBQWpCO0FBQ0osWUFBQTtRQUFBLEtBQUssQ0FBQyxZQUFOLEdBQXdCLE9BQU8sS0FBSyxDQUFDLFlBQWIsS0FBNkIsV0FBaEMsR0FBaUQsSUFBakQsR0FBMkQsQ0FBQyxDQUFDLFFBQUEsQ0FBUyxLQUFLLENBQUMsWUFBZjtRQUNsRixLQUFLLENBQUMsTUFBTixHQUFrQixLQUFBLENBQU0sS0FBSyxDQUFDLE1BQVosQ0FBSCxHQUE0QixDQUE1QixHQUFtQyxLQUFLLENBQUM7UUFDeEQsTUFBQSxHQUFTLFNBQUE7QUFDUCxjQUFBO1VBQUEsSUFBRyxLQUFLLENBQUMsUUFBTixJQUFrQixLQUFLLENBQUMsUUFBUSxDQUFDLFNBQXBDO1lBQ0UsU0FBQSxHQUFZLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBZixDQUF5QixLQUFLLENBQUMsS0FBL0IsRUFBc0MsS0FBSyxDQUFDLE1BQTVDLEVBQW9ELEtBQUssQ0FBQyxZQUExRDtZQUNaLE9BQU8sQ0FBQyxLQUFSLENBQUE7bUJBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxTQUFmLEVBSEY7O1FBRE87ZUFLVCxLQUFLLENBQUMsV0FBTixDQUFrQixDQUFDLFVBQUQsQ0FBbEIsRUFBZ0MsTUFBaEM7TUFSSSxDQUZOOztFQURzQixDQUQxQjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiIyBjb2ZmZWVsaW50OiBkaXNhYmxlPW1heF9saW5lX2xlbmd0aFxuYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbiAgLmRpcmVjdGl2ZSAnaWRlbnRpY29uJywgLT5cbiAgICBzY29wZTpcbiAgICAgIGlkZW50aXR5OiAnPSdcbiAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgICAgYXR0cnMuc2hvd0Rpc3RhbmNlID0gaWYgdHlwZW9mIGF0dHJzLnNob3dEaXN0YW5jZSA9PSAndW5kZWZpbmVkJyB0aGVuIHRydWUgZWxzZSAhIXBhcnNlSW50KGF0dHJzLnNob3dEaXN0YW5jZSlcbiAgICAgIGF0dHJzLmJvcmRlciA9IGlmIGlzTmFOKGF0dHJzLmJvcmRlcikgdGhlbiAzIGVsc2UgYXR0cnMuYm9yZGVyXG4gICAgICB1cGRhdGUgPSAtPlxuICAgICAgICBpZiBzY29wZS5pZGVudGl0eSAmJiBzY29wZS5pZGVudGl0eS5pZGVudGljb25cbiAgICAgICAgICBpZGVudGljb24gPSBzY29wZS5pZGVudGl0eS5pZGVudGljb24oYXR0cnMud2lkdGgsIGF0dHJzLmJvcmRlciwgYXR0cnMuc2hvd0Rpc3RhbmNlKVxuICAgICAgICAgIGVsZW1lbnQuZW1wdHkoKVxuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGlkZW50aWNvbilcbiAgICAgIHNjb3BlLiR3YXRjaEdyb3VwIFsnaWRlbnRpdHknXSwgdXBkYXRlXG4iXX0=

(function() {
  angular.module('identifiAngular').directive('focusOn', function() {
    return function(scope, elem, attr) {
      scope.$on('focusOn', function(e, name) {
        if (name === attr.focusOn) {
          elem[0].focus();
        }
      });
    };
  });

  angular.module('identifiAngular').factory('focus', function($rootScope, $timeout) {
    return function(name) {
      $timeout(function() {
        $rootScope.$broadcast('focusOn', name);
      });
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQ0EsQ0FBQyxTQURELENBQ1csU0FEWCxFQUNzQixTQUFBO1dBQ3BCLFNBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxJQUFkO01BQ0UsS0FBSyxDQUFDLEdBQU4sQ0FBVSxTQUFWLEVBQXFCLFNBQUMsQ0FBRCxFQUFJLElBQUo7UUFDbkIsSUFBRyxJQUFBLEtBQVEsSUFBSSxDQUFDLE9BQWhCO1VBQ0UsSUFBSyxDQUFBLENBQUEsQ0FBRSxDQUFDLEtBQVIsQ0FBQSxFQURGOztNQURtQixDQUFyQjtJQURGO0VBRG9CLENBRHRCOztFQVNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDQSxDQUFDLE9BREQsQ0FDUyxPQURULEVBQ2tCLFNBQUMsVUFBRCxFQUFhLFFBQWI7V0FDaEIsU0FBQyxJQUFEO01BQ0UsUUFBQSxDQUFTLFNBQUE7UUFDUCxVQUFVLENBQUMsVUFBWCxDQUFzQixTQUF0QixFQUFpQyxJQUFqQztNQURPLENBQVQ7SUFERjtFQURnQixDQURsQjtBQVRBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbi5kaXJlY3RpdmUgJ2ZvY3VzT24nLCAtPlxuICAoc2NvcGUsIGVsZW0sIGF0dHIpIC0+XG4gICAgc2NvcGUuJG9uICdmb2N1c09uJywgKGUsIG5hbWUpIC0+XG4gICAgICBpZiBuYW1lID09IGF0dHIuZm9jdXNPblxuICAgICAgICBlbGVtWzBdLmZvY3VzKClcbiAgICAgIHJldHVyblxuICAgIHJldHVyblxuXG5hbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuLmZhY3RvcnkgJ2ZvY3VzJywgKCRyb290U2NvcGUsICR0aW1lb3V0KSAtPlxuICAobmFtZSkgLT5cbiAgICAkdGltZW91dCAtPlxuICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0ICdmb2N1c09uJywgbmFtZVxuICAgICAgcmV0dXJuXG4gICAgcmV0dXJuXG4iXX0=

(function() {
  angular.module('identifiAngular').factory('Messages', [
    '$resource', '$location', function($resource, $location) {
      var host, path;
      path = $location.absUrl();
      host = path.match(/\/ip[nf]s\//) ? 'https://identi.fi/' : '';
      return $resource(host + 'api/messages/:id');
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuc2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsT0FBbEMsQ0FBMEMsVUFBMUMsRUFBc0Q7SUFDcEQsV0FEb0QsRUFFcEQsV0FGb0QsRUFHcEQsU0FBQyxTQUFELEVBQVksU0FBWjtBQUNFLFVBQUE7TUFBQSxJQUFBLEdBQU8sU0FBUyxDQUFDLE1BQVYsQ0FBQTtNQUNQLElBQUEsR0FBVSxJQUFJLENBQUMsS0FBTCxDQUFXLGFBQVgsQ0FBSCxHQUFpQyxvQkFBakMsR0FBMkQ7YUFDbEUsU0FBQSxDQUFVLElBQUEsR0FBTyxrQkFBakI7SUFIRixDQUhvRDtHQUF0RDtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiIyBNZXNzYWdlcyBzZXJ2aWNlIHVzZWQgdG8gY29tbXVuaWNhdGUgd2l0aCBNZXNzYWdlcyBSRVNUIGVuZHBvaW50c1xuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZhY3RvcnkgJ01lc3NhZ2VzJywgW1xuICAnJHJlc291cmNlJ1xuICAnJGxvY2F0aW9uJ1xuICAoJHJlc291cmNlLCAkbG9jYXRpb24pIC0+XG4gICAgcGF0aCA9ICRsb2NhdGlvbi5hYnNVcmwoKVxuICAgIGhvc3QgPSBpZiBwYXRoLm1hdGNoIC9cXC9pcFtuZl1zXFwvLyB0aGVuICdodHRwczovL2lkZW50aS5maS8nIGVsc2UgJydcbiAgICAkcmVzb3VyY2UgaG9zdCArICdhcGkvbWVzc2FnZXMvOmlkJ1xuXVxuIl19

(function() {
  'use strict';
  var hasProp = {}.hasOwnProperty;

  angular.module('identifiAngular').controller('MessagesController', [
    '$scope', '$rootScope', '$window', '$stateParams', '$location', '$http', 'Messages', 'config', '$timeout', 'localStorageService', function($scope, $rootScope, $window, $stateParams, $location, $http, Messages, config, $timeout, localStorageService) {
      $scope.idType = $stateParams.type;
      $scope.idValue = $stateParams.value;
      $scope.filters.type = 'rating';
      $scope.resetMsgs = function() {
        var msgs, prop, value;
        msgs = localStorageService.get('localMessages') || {};
        return $scope.msgs = {
          loading: false,
          finished: false,
          list: (function() {
            var results;
            results = [];
            for (prop in msgs) {
              if (!hasProp.call(msgs, prop)) continue;
              value = msgs[prop];
              results.push(value);
            }
            return results;
          })()
        };
      };
      $scope.resetMsgs();
      $scope.iconCount = function(rating) {
        return new Array(Math.max(1, Math.abs(rating)));
      };
      $scope.iconStyle = function(rating) {
        var iconStyle;
        iconStyle = 'neutral';
        if (rating > 0) {
          iconStyle = 'positive';
        } else if (rating < 0) {
          iconStyle = 'negative';
        }
        return iconStyle;
      };
      $scope.iconClass = function(rating) {
        var iconStyle;
        iconStyle = 'glyphicon-question-sign';
        if (rating > 0) {
          iconStyle = 'glyphicon-thumbs-up';
        } else if (rating < 0) {
          iconStyle = 'glyphicon-thumbs-down';
        }
        return iconStyle;
      };
      $scope.collapseFilters = $window.innerWidth < 992;
      $scope.find = function() {
        var searchKey;
        if ($scope.msgs.loading) {
          return;
        }
        $scope.msgs.loading = true;
        searchKey = '';
        if ($scope.msgs.list.length) {
          searchKey = $scope.msgs.list[$scope.msgs.list.length - 1].searchKey;
        }
        return $scope.identifiIndex.messagesByTimestamp.searchText('', $scope.filters.limit, searchKey, true).then(function(res) {
          var i, len, m, messages, pair, ref, ref1;
          messages = [];
          for (i = 0, len = res.length; i < len; i++) {
            pair = res[i];
            m = $window.identifiLib.Message.fromJws(pair.value.jws);
            m.authorPos = pair.value.author_pos;
            m.authorNeg = pair.value.author_neg;
            m.authorTrustDistance = pair.value.distance;
            m.authorName = pair.value.author_name;
            m.searchKey = pair.key;
            m.isVerification = (ref = m.signedData.type) === 'verification' || ref === 'verify_identity';
            m.isUnverification = (ref1 = m.signedData.type) === 'unverification' || ref1 === 'unverify_identity';
            messages.push(m);
          }
          $scope.processMessages(messages);
          Array.prototype.push.apply($scope.msgs.list, messages);
          if (res.length < $scope.filters.limit - 1) {
            $scope.$apply(function() {
              return $scope.msgs.finished = true;
            });
          }
          return $scope.$apply(function() {
            return $scope.msgs.loading = false;
          });
        });
      };
      $scope.setFilters = function(filters) {
        angular.extend($scope.filters, filters);
        $scope.resetMsgs();
        return $timeout(function() {
          return $rootScope.$broadcast('msgScrollCheck');
        });
      };
      $scope.findOne = function() {
        var getMessageFromApi, hash, processResponse, query;
        if ($stateParams.id) {
          processResponse = function() {
            $scope.processMessages([$scope.message], {}, true);
            $scope.setPageTitle('Message ' + hash);
            $scope.setMsgRawData($scope.message);
            $scope.message.authorGravatar = CryptoJS.MD5($scope.message.authorEmail || $scope.message.data.author[0][1]).toString();
            $scope.message.recipientGravatar = CryptoJS.MD5($scope.message.recipientEmail || $scope.message.data.recipient[0][1]).toString();
            $scope.message.hash = hash;
            return $scope.getIdentityProfile({
              type: 'keyID',
              value: $scope.message.signer_keyid
            }, function(profile) {
              return $scope.$apply(function() {
                return $scope.message.verifiedBy = profile;
              });
            });
          };
          getMessageFromApi = function() {
            return $scope.message = Messages.get({
              id: hash,
              viewpoint_name: $scope.filters.viewpoint_name,
              viewpoint_value: $scope.filters.viewpoint_value,
              max_distance: $scope.filters.max_distance
            }, processResponse);
          };
          hash = $stateParams.id;
          query = null;
          return $scope.$watch('apiReady', function(isReady) {
            if (isReady) {
              if (hash.match(/^Qm[1-9A-Za-z]{40,50}$/)) {
                return $scope.ipfsGet(hash).then(function(res) {
                  $scope.message = {
                    'jws': res
                  };
                  return processResponse();
                })["catch"](function(err) {
                  console.log('failed to get msg from ipfs', err);
                  return getMessageFromApi();
                });
              } else {
                return getMessageFromApi();
              }
            }
          });
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtBQUFBLE1BQUE7O0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLG9CQUE3QyxFQUFtRTtJQUNqRSxRQURpRSxFQUVqRSxZQUZpRSxFQUdqRSxTQUhpRSxFQUlqRSxjQUppRSxFQUtqRSxXQUxpRSxFQU1qRSxPQU5pRSxFQVFqRSxVQVJpRSxFQVNqRSxRQVRpRSxFQVVqRSxVQVZpRSxFQVdqRSxxQkFYaUUsRUFZakUsU0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixPQUFyQixFQUE4QixZQUE5QixFQUE0QyxTQUE1QyxFQUF1RCxLQUF2RCxFQUE4RCxRQUE5RCxFQUF3RSxNQUF4RSxFQUFnRixRQUFoRixFQUEwRixtQkFBMUY7TUFDRSxNQUFNLENBQUMsTUFBUCxHQUFnQixZQUFZLENBQUM7TUFDN0IsTUFBTSxDQUFDLE9BQVAsR0FBaUIsWUFBWSxDQUFDO01BRTlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBZixHQUFzQjtNQUV0QixNQUFNLENBQUMsU0FBUCxHQUFtQixTQUFBO0FBQ2pCLFlBQUE7UUFBQSxJQUFBLEdBQU8sbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEIsQ0FBQSxJQUE0QztlQUNuRCxNQUFNLENBQUMsSUFBUCxHQUNFO1VBQUEsT0FBQSxFQUFTLEtBQVQ7VUFDQSxRQUFBLEVBQVUsS0FEVjtVQUVBLElBQUE7O0FBQU87aUJBQUEsWUFBQTs7OzJCQUFBO0FBQUE7O2NBRlA7O01BSGU7TUFNbkIsTUFBTSxDQUFDLFNBQVAsQ0FBQTtNQUVBLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFNBQUMsTUFBRDtlQUNqQixJQUFJLEtBQUosQ0FBVSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQsRUFBWSxJ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Lm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuY29udHJvbGxlciAnTWVzc2FnZXNDb250cm9sbGVyJywgW1xuICAnJHNjb3BlJ1xuICAnJHJvb3RTY29wZSdcbiAgJyR3aW5kb3cnXG4gICckc3RhdGVQYXJhbXMnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgIyAnQXV0aGVudGljYXRpb24nXG4gICdNZXNzYWdlcydcbiAgJ2NvbmZpZydcbiAgJyR0aW1lb3V0J1xuICAnbG9jYWxTdG9yYWdlU2VydmljZSdcbiAgKCRzY29wZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHN0YXRlUGFyYW1zLCAkbG9jYXRpb24sICRodHRwLCBNZXNzYWdlcywgY29uZmlnLCAkdGltZW91dCwgbG9jYWxTdG9yYWdlU2VydmljZSkgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuaWRUeXBlID0gJHN0YXRlUGFyYW1zLnR5cGVcbiAgICAkc2NvcGUuaWRWYWx1ZSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuXG4gICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9ICdyYXRpbmcnXG5cbiAgICAkc2NvcGUucmVzZXRNc2dzID0gLT5cbiAgICAgIG1zZ3MgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnbG9jYWxNZXNzYWdlcycpIG9yIHt9XG4gICAgICAkc2NvcGUubXNncyA9XG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIGZpbmlzaGVkOiBmYWxzZVxuICAgICAgICBsaXN0OiAodmFsdWUgZm9yIG93biBwcm9wLCB2YWx1ZSBvZiBtc2dzKVxuICAgICRzY29wZS5yZXNldE1zZ3MoKVxuXG4gICAgJHNjb3BlLmljb25Db3VudCA9IChyYXRpbmcpIC0+XG4gICAgICBuZXcgQXJyYXkoTWF0aC5tYXgoMSwgTWF0aC5hYnMocmF0aW5nKSkpXG5cbiAgICAkc2NvcGUuaWNvblN0eWxlID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICduZXV0cmFsJ1xuICAgICAgaWYgcmF0aW5nID4gMFxuICAgICAgICBpY29uU3R5bGUgPSAncG9zaXRpdmUnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ25lZ2F0aXZlJ1xuICAgICAgaWNvblN0eWxlXG5cbiAgICAkc2NvcGUuaWNvbkNsYXNzID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICdnbHlwaGljb24tcXVlc3Rpb24tc2lnbidcbiAgICAgIGlmIHJhdGluZyA+IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtdXAnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtZG93bidcbiAgICAgIGljb25TdHlsZVxuXG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuXG4gICAgJHNjb3BlLmZpbmQgPSAtPlxuICAgICAgcmV0dXJuIGlmICRzY29wZS5tc2dzLmxvYWRpbmdcbiAgICAgICRzY29wZS5tc2dzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAjIEdldCBsYXRlc3QgbWVzc2FnZXMgZnJvbSBpcGZzIGluZGV4XG4gICAgICBzZWFyY2hLZXkgPSAnJ1xuICAgICAgaWYgJHNjb3BlLm1zZ3MubGlzdC5sZW5ndGhcbiAgICAgICAgc2VhcmNoS2V5ID0gJHNjb3BlLm1zZ3MubGlzdFskc2NvcGUubXNncy5saXN0Lmxlbmd0aCAtIDFdLnNlYXJjaEtleVxuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXgubWVzc2FnZXNCeVRpbWVzdGFtcC5zZWFyY2hUZXh0KCcnLCAkc2NvcGUuZmlsdGVycy5saW1pdCwgc2VhcmNoS2V5LCB0cnVlKSAjIFRPRE86IGltcGxlbWVudCBpbiBpZGVudGlmaS1saWJcbiAgICAgIC50aGVuIChyZXMpIC0+XG4gICAgICAgIG1lc3NhZ2VzID0gW11cbiAgICAgICAgZm9yIHBhaXIgaW4gcmVzXG4gICAgICAgICAgbSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5mcm9tSndzKHBhaXIudmFsdWUuandzKVxuICAgICAgICAgIG0uYXV0aG9yUG9zID0gcGFpci52YWx1ZS5hdXRob3JfcG9zXG4gICAgICAgICAgbS5hdXRob3JOZWcgPSBwYWlyLnZhbHVlLmF1dGhvcl9uZWdcbiAgICAgICAgICBtLmF1dGhvclRydXN0RGlzdGFuY2UgPSBwYWlyLnZhbHVlLmRpc3RhbmNlXG4gICAgICAgICAgbS5hdXRob3JOYW1lID0gcGFpci52YWx1ZS5hdXRob3JfbmFtZVxuICAgICAgICAgIG0uc2VhcmNoS2V5ID0gcGFpci5rZXlcbiAgICAgICAgICBtLmlzVmVyaWZpY2F0aW9uID0gbS5zaWduZWREYXRhLnR5cGUgaW4gWyd2ZXJpZmljYXRpb24nLCAndmVyaWZ5X2lkZW50aXR5J11cbiAgICAgICAgICBtLmlzVW52ZXJpZmljYXRpb24gPSBtLnNpZ25lZERhdGEudHlwZSBpbiBbJ3VudmVyaWZpY2F0aW9uJywgJ3VudmVyaWZ5X2lkZW50aXR5J11cbiAgICAgICAgICBtZXNzYWdlcy5wdXNoKG0pXG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgbWVzc2FnZXNcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLm1zZ3MubGlzdCwgbWVzc2FnZXMpXG4gICAgICAgIGlmIHJlcy5sZW5ndGggPCAkc2NvcGUuZmlsdGVycy5saW1pdCAtIDEgIyBidWdcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tc2dzLmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tc2dzLmxvYWRpbmcgPSBmYWxzZVxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5maWx0ZXJzLCBmaWx0ZXJzXG4gICAgICAkc2NvcGUucmVzZXRNc2dzKClcbiAgICAgICR0aW1lb3V0IC0+ICRyb290U2NvcGUuJGJyb2FkY2FzdCAnbXNnU2Nyb2xsQ2hlY2snXG5cbiAgICAjIEZpbmQgZXhpc3RpbmcgTWVzc2FnZVxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgIGlmICRzdGF0ZVBhcmFtcy5pZFxuICAgICAgICBwcm9jZXNzUmVzcG9uc2UgPSAtPlxuICAgICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMoWyRzY29wZS5tZXNzYWdlXSwge30sIHRydWUpXG4gICAgICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSAnTWVzc2FnZSAnICsgaGFzaFxuICAgICAgICAgICRzY29wZS5zZXRNc2dSYXdEYXRhKCRzY29wZS5tZXNzYWdlKVxuICAgICAgICAgICRzY29wZS5tZXNzYWdlLmF1dGhvckdyYXZhdGFyID0gQ3J5cHRvSlMuTUQ1KCRzY29wZS5tZXNzYWdlLmF1dGhvckVtYWlsIG9yICRzY29wZS5tZXNzYWdlLmRhdGEuYXV0aG9yWzBdWzFdKS50b1N0cmluZygpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50R3JhdmF0YXIgPSBDcnlwdG9KUy5NRDUoJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50RW1haWwgb3IgJHNjb3BlLm1lc3NhZ2UuZGF0YS5yZWNpcGllbnRbMF1bMV0pLnRvU3RyaW5nKClcbiAgICAgICAgICAkc2NvcGUubWVzc2FnZS5oYXNoID0gaGFzaFxuICAgICAgICAgICRzY29wZS5nZXRJZGVudGl0eVByb2ZpbGUgeyB0eXBlOiAna2V5SUQnLCB2YWx1ZTogJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyX2tleWlkIH0sIChwcm9maWxlKSAtPlxuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5ID0gcHJvZmlsZVxuXG4gICAgICAgIGdldE1lc3NhZ2VGcm9tQXBpID0gLT5cbiAgICAgICAgICAkc2NvcGUubWVzc2FnZSA9IE1lc3NhZ2VzLmdldFxuICAgICAgICAgICAgaWQ6IGhhc2hcbiAgICAgICAgICAgIHZpZXdwb2ludF9uYW1lOiAkc2NvcGUuZmlsdGVycy52aWV3cG9pbnRfbmFtZVxuICAgICAgICAgICAgdmlld3BvaW50X3ZhbHVlOiAkc2NvcGUuZmlsdGVycy52aWV3cG9pbnRfdmFsdWVcbiAgICAgICAgICAgIG1heF9kaXN0YW5jZTogJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlXG4gICAgICAgICAgLCBwcm9jZXNzUmVzcG9uc2VcblxuICAgICAgICBoYXNoID0gJHN0YXRlUGFyYW1zLmlkXG4gICAgICAgIHF1ZXJ5ID0gbnVsbFxuICAgICAgICAkc2NvcGUuJHdhdGNoICdhcGlSZWFkeScsIChpc1JlYWR5KSAtPlxuICAgICAgICAgIGlmIGlzUmVhZHlcbiAgICAgICAgICAgIGlmIGhhc2gubWF0Y2ggL15RbVsxLTlBLVphLXpdezQwLDUwfSQvICMgbG9va3MgbGlrZSBhbiBpcGZzIGFkZHJlc3NcbiAgICAgICAgICAgICAgJHNjb3BlLmlwZnNHZXQoaGFzaCkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgICAgICRzY29wZS5tZXNzYWdlID0geyAnandzJzogcmVzIH0gIyBzYW1lIGZvcm1hdCBhcyB0aGUgb2JqZWN0IHJldHVybmVkIGJ5IE1lc3NhZ2VzLmdldFxuICAgICAgICAgICAgICAgIHByb2Nlc3NSZXNwb25zZSgpXG4gICAgICAgICAgICAgIC5jYXRjaCAoZXJyKSAtPiAjIGZhbGxiYWNrIGdvIGxvY2FsIGlmIGlwZnMgbm90IGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nICdmYWlsZWQgdG8gZ2V0IG1zZyBmcm9tIGlwZnMnLCBlcnJcbiAgICAgICAgICAgICAgICBnZXRNZXNzYWdlRnJvbUFwaSgpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGdldE1lc3NhZ2VGcm9tQXBpKClcblxuICAgIHJldHVyblxuXVxuIl19

(function() {
  'use strict';
  angular.module('identifiAngular').controller('MainController', [
    '$scope', '$rootScope', '$location', '$http', '$state', 'config', 'localStorageService', '$uibModal', '$window', '$q', 'focus', function($scope, $rootScope, $location, $http, $state, config, localStorageService, $uibModal, $window, $q, focus) {

      /*
      Persona.watch
        loggedInUser: Authentication.user.email
        onlogin: (assertion) ->
          $http.post('/auth/persona', assertion: assertion).then ->
            location.reload()
             * FIXME
                          onlogout: ->
       */
      var jws, previousState, previousStateParams, privateKey, scrollTo, token;
      $scope.authentication = {};
      $scope.localMessages = localStorageService.get('localMessages') || {};
      localStorageService.set('localMessages', $scope.localMessages);
      $scope.nodeInfo = {
        keyID: null
      };
      $scope.ipfsStorage = {};
      $scope.getIdKey = function(id) {
        if (Array.isArray(id)) {
          return encodeURIComponent(id[0]) + ':' + encodeURIComponent(id[1]);
        } else {
          return encodeURIComponent(id.name) + ':' + encodeURIComponent(id.val);
        }
      };
      $scope.loginWithKey = function(privateKeyPEM) {
        var publicKeyHash, publicKeyHex;
        $scope.privateKey = KEYUTIL.getKeyFromPlainPrivatePKCS8PEM(privateKeyPEM);
        $scope.publicKey = new KJUR.crypto.ECDSA({
          'curve': 'secp256k1',
          'pub': $scope.privateKey.pubKeyHex
        });
        localStorageService.set('privateKeyPEM', privateKeyPEM);
        publicKeyHex = KEYUTIL.getHexFromPEM(KEYUTIL.getPEM($scope.publicKey));
        publicKeyHash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(publicKeyHex));
        $scope.authentication.user = {
          idType: 'keyID',
          idValue: publicKeyHash
        };
        if ($scope.loginModal) {
          return $scope.loginModal.close();
        }
      };
      privateKey = localStorageService.get('privateKeyPEM');
      if (privateKey) {
        $scope.loginWithKey(privateKey);
      }
      token = $location.search().token;
      if (token) {
        jws = KJUR.jws.JWS.parse(token).payloadObj;
        $scope.authentication.token = token;
        $scope.authentication.user = jws.user;
        localStorageService.set('token', token);
        previousState = localStorageService.get('state') || 'identities.list';
        previousStateParams = localStorageService.get('stateParams') || {};
        $state.go(previousState, previousStateParams);
      } else {
        token = localStorageService.get('token');
        if (token) {
          jws = KJUR.jws.JWS.parse(token).payloadObj;
          $scope.authentication.token = token;
          $scope.authentication.user = jws.user;
        }
      }
      $scope.query = {};
      $scope.query.term = '';
      $scope.previousSearchKey = '';
      $scope.ids = {
        list: []
      };
      $scope.phoneRegex = /^\+?\d+$/;
      $scope.ipfs = new Ipfs({
        init: true,
        EXPERIMENTAL: {
          pubsub: true
        },
        start: true,
        repo: 'ipfs6-identifi',
        config: {
          Bootstrap: ['/dns4/ams-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLer265NRgSp2LA3dPaeykiS1J6DifTC88f5uVQKNAd', '/dns4/sfo-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLju6m7xTh3DuokvT3886QRYqxAzb1kShaanJgW36yx', '/dns4/lon-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLMeWqB7YGVLJN3pNLQpmmEk35v6wYtsMGLzSr5QBU3', '/dns4/sfo-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLnSGccFuZQJzRadHn95W2CrSFmZuTdDWP8HXaHca9z', '/dns4/sfo-3.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLPppuBtQSGwKDZT2M73ULpjvfd3aZ6ha4oFGL1KrGM', '/dns4/sgp-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLSafTMBsPKadTEgaXctDQVcqN88CNLHXMkTNwMKPnu', '/dns4/nyc-1.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLueR4xBeUbY9WZ9xGUUxunbKWcrNFTDAadQJmocnWm', '/dns4/nyc-2.bootstrap.libp2p.io/tcp/443/wss/ipfs/QmSoLV4Bbm51jM9C4gDYZQ9Cy3U6aXMJDAbzgu2fzaDs64']
        }
      });
      $http.get('/api', {
        timeout: 2000
      }).then(function(res) {
        return $scope.nodeInfo = angular.extend($scope.nodeInfo, res.data);
      }, function(err) {
        return $scope.nodeInfo = {
          loginOptions: [true],
          keyID: null
        };
      });
      $scope.ipfs.on('ready', function() {
        console.log($scope.ipfs);
        $window.ipfs = $scope.ipfs;
        return $scope.ipfs.pubsub.subscribe('identifi', function(msg) {
          var hash, localMessages;
          msg = {
            jws: $scope.ipfs.types.Buffer(msg.data).toString()
          };
          hash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(msg.jws));
          console.log('identifi message received', msg, hash);
          localMessages = localStorageService.get('localMessages');
          $scope.processMessages([msg]);
          localMessages[hash] = msg;
          return localStorageService.set('localMessages', localMessages);
        });
      });
      $scope.initIpfsIndexes = function() {
        var indexRoot;
        $window.identifiLib.Index.load().then(function(results) {
          $scope.identifiIndex = results;
          console.log('Got index', $scope.identifiIndex);
          return $scope.$apply(function() {
            return $scope.apiReady = true;
          });
        });
        indexRoot = '/ipns/Qmbb1DRwd75rZk5TotTXJYzDSJL6BaNT1DAQ6VbKcKLhbs';
        return $http.get('https://identi.fi' + indexRoot + '/info')["catch"](function(err) {
          return $http.get('https://ipfs.io' + indexRoot + '/info');
        }).then(function(res) {
          return $scope.nodeInfo.profile = $scope.profileFromData(res.data, ['keyID', res.data.keyID]);
        })["catch"](function(e) {
          return console.log('initialization failed:', e);
        });
      };
      $scope.initIpfsIndexes();
      $scope.setPageTitle = function(title) {
        $rootScope.pageTitle = 'Identifi';
        if (title) {
          return $rootScope.pageTitle += ' - ' + title;
        }
      };
      $scope.ipfsGet = function(uri, getJson) {
        var jsIpfsGet;
        jsIpfsGet = function() {
          console.log('Getting from js-ipfs', uri);
          return $scope.ipfs.files.cat(uri).then(function(stream) {
            return new Promise(function(resolve, reject) {
              stream.on('data', function(file) {
                file = $scope.ipfs.types.Buffer(file).toString();
                if (getJson) {
                  file = JSON.parse(file);
                }
                return resolve(file);
              });
              return stream.on('error', function(error) {
                return reject(error);
              });
            });
          });
        };
        if ($scope.ipfsStorage.apiRoot) {
          return $http.get($scope.ipfsStorage.apiRoot + '/ipfs/' + uri).then(function(res) {
            return res.data;
          })["catch"](function() {
            return jsIpfsGet();
          });
        } else {
          return jsIpfsGet();
        }
      };
      $scope.newMessage = {
        rating: 1,
        comment: ''
      };
      $scope.newVerification = {
        type: '',
        value: ''
      };
      $scope.createMessage = function(event, params, id) {
        var hash, header, message, options, payload, publicKeyHash, publicKeyHex;
        if (event) {
          event.stopPropagation();
        }
        message = {
          context: 'identifi'
        };
        if (params.type === 'rating') {
          angular.extend(message, {
            maxRating: 3,
            minRating: -3
          });
        }
        angular.extend(message, params);
        options = {};
        if ($scope.privateKey) {
          publicKeyHex = KEYUTIL.getHexFromPEM(KEYUTIL.getPEM($scope.publicKey));
          publicKeyHash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(publicKeyHex));
          message.author = [['keyID', publicKeyHash]];
          message.timestamp = new Date().toISOString();
          header = JSON.stringify({
            alg: 'ES256',
            kid: publicKeyHex
          });
          payload = JSON.stringify(message);
          jws = KJUR.jws.JWS.sign("ES256", header, payload, $scope.privateKey);
          hash = CryptoJS.enc.Base64.stringify(CryptoJS.SHA256(jws));
          message = {
            jws: jws,
            hash: hash
          };
          $scope.ipfs.files.add(new $scope.ipfs.types.Buffer(jws)).then(function(i) {
            return $scope.ipfs.pubsub.publish('identifi', new $scope.ipfs.types.Buffer(jws));
          });
        } else {
          options = {
            headers: {
              'Authorization': 'Bearer ' + $scope.authentication.token
            }
          };
        }
        return $http.post('/api/messages', message, options)["catch"](function() {
          return $http.post('https://identi.fi/api/messages', message, options);
        }).then((function(response) {
          console.log(response);
          $scope.newMessage.comment = '';
          $scope.newMessage.rating = 1;
          $scope.newVerification.type = '';
          $scope.newVerification.value = '';
          $scope.$root.$broadcast('MessageAdded', {
            message: response.data,
            id: id
          });
          if (response.data.ipfsIndexRoot) {
            $scope.getIpfsIndexes($scope.ipfsStorage.apiRoot + '/ipfs/' + response.data.ipfsIndexRoot);
          }
          return response.data;
        }), function(errorResponse) {
          $scope.error = errorResponse.data || JSON.stringify(errorResponse);
          return console.error(errorResponse);
        });
      };
      $scope.addAttribute = function() {
        return $location.path('#/identities/create/' + $scope.query.term);
      };
      $scope.login = function() {
        return $scope.filters.max_distance = -1;
      };
      $scope.openLoginModal = function() {
        $scope.loginModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/main/login.modal.html',
          size: 'lg',
          scope: $scope
        });
        $scope.loginModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart', function() {
          return $scope.loginModal.close();
        });
      };
      $scope.generateKey = function() {
        var keypair;
        keypair = KEYUTIL.generateKeypair('EC', 'secp256k1');
        $scope.privateKey = keypair.prvKeyObj;
        $scope.publicKey = keypair.pubKeyObj;
        return $scope.privateKeyPEM = KEYUTIL.getPEM($scope.privateKey, 'PKCS8PRV');
      };
      $scope.downloadKey = function() {
        var hiddenElement;
        hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI($scope.privateKeyPEM);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'identifi_private_key.txt';
        return hiddenElement.click();
      };
      $scope.logout = function() {
        $scope.filters.max_distance = 0;
        $scope.privateKeyPEM = '';
        $scope.authentication = {};
        localStorageService.clearAll();
        $state.go('identities.list');
        $scope.privateKey = null;
        return $scope.publicKey = null;
      };
      $scope.msgFilter = function(value, index, array) {
        var data, neutralRating;
        data = value.data || value.signedData;
        if ($scope.filters.type) {
          if ($scope.filters.type.match(/^rating/)) {
            if (data.type !== 'rating') {
              return false;
            }
            neutralRating = (data.maxRating + data.minRating) / 2;
            if ($scope.filters.type === 'rating:positive' && data.rating <= neutralRating) {
              return false;
            } else if ($scope.filters.type === 'rating:negative' && data.rating >= neutralRating) {
              return false;
            } else if ($scope.filters.type === 'rating:neutral' && data.rating !== neutralRating) {
              return false;
            }
          } else if (data.type !== $scope.filters.type) {
            return false;
          }
        }
        if ($scope.filters.max_distance) {
          if ($scope.filters.max_distance === 0 && typeof value.authorTrustDistance !== 'number') {
            return false;
          } else if ($scope.filters.max_distance > 0 && value.authorTrustDistance > $scope.filters.max_distance) {
            return false;
          }
        }
        return true;
      };
      $scope.removeFocus = function(event) {
        return event.currentTarget.blur();
      };
      $scope.logoClicked = function() {
        focus('searchFocus');
        if ($state.is('identities.list')) {
          if ($scope.query.term !== '') {
            $scope.query.term = '';
            return $scope.search();
          }
        } else {
          $scope.query.term = '';
          $scope.ids.list = [];
          $scope.ids.finished = false;
          return $state.go('identities.list');
        }
      };
      $scope.setMsgRawData = function(msg) {
        var showRawData;
        showRawData = {
          hash: msg.hash,
          data: msg.data,
          priority: msg.priority,
          jws: msg.jws
        };
        return msg.strData = JSON.stringify(showRawData, void 0, 2);
      };
      $scope.profileFromData = function(data, fallbackId) {
        if (data.attrs && data.attrs.length) {
          return new $window.identifiLib.Identity({
            attrs: data.attrs
          });
        }
        return new $window.identifiLib.Identity({
          attrs: [fallbackId]
        });
      };
      $scope.openMessage = function(event, message, size) {
        var modalInstance, t;
        t = event.target;
        if (angular.element(t).closest('a').length) {
          return;
        }
        $scope.setMsgRawData(message);
        $scope.message = message;
        $scope.identifiIndex.get($scope.message.signer_keyid, 'keyID').then(function(profile) {
          if (!profile) {
            profile = new $window.identifiLib.Identity({
              attrs: [['keyID', $scope.message.signer_keyid]]
            });
          }
          return $scope.$apply(function() {
            return $scope.message.verifiedBy = profile;
          });
        });
        modalInstance = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/messages/show.modal.html',
          size: size,
          scope: $scope
        });
        modalInstance.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart', function() {
          return modalInstance.close();
        });
      };
      $scope.filters = $scope.filters || config.defaultFilters;

      /*
      $scope.authentication = Authentication
      if Authentication.user
        if Authentication.user.provider == 'persona'
          Authentication.user.idType = 'email'
        else
          Authentication.user.idType = 'url'
        switch Authentication.user.provider
          when 'persona'
            Authentication.user.idValue = Authentication.user.email
          when 'twitter'
            Authentication.user.idValue = 'https://twitter.com/' + Authentication.user.username
          else
            Authentication.user.idValue = Authentication.user.providerData.link
            break
       */
      $scope.isCollapsed = false;
      $scope.toggleCollapsibleMenu = function() {
        return $scope.isCollapsed = !$scope.isCollapsed;
      };
      $scope.processMessages = function(messages, msgOptions, verifySignature) {
        var processMessage;
        processMessage = function(msg) {
          var alpha, i, index, keyHash, maxRatingDiff, minRatingDiff, neutralRating, parsedJws, rating, ref, ref1, signedData, smallestIndex;
          parsedJws = KJUR.jws.JWS.parse(msg.jws);
          msg.data = parsedJws.payloadObj;
          if (!msg.signer_keyid) {
            keyHash = CryptoJS.SHA256(parsedJws.headerObj.kid);
            msg.signer_keyid = CryptoJS.enc.Base64.stringify(keyHash);
          }
          if (msg.getAuthor) {
            msg.author = msg.getAuthor();
          }
          msg.linkToAuthor = msg.data.author[0];
          i = void 0;
          i = 0;
          smallestIndex = 1000;
          while (i < msg.data.author.length) {
            index = config.uniqueAttributeTypes.indexOf(msg.data.author[i][0]);
            if (index > -1 && index < smallestIndex) {
              smallestIndex = index;
              msg.linkToAuthor = msg.data.author[i];
            } else if (!msg.author_name && ((ref = msg.data.author[i][0]) === 'name' || ref === 'nickname')) {
              msg.author_name = msg.data.author[i][1];
            }
            i++;
          }
          msg.linkToRecipient = msg.data.recipient[0];
          i = 0;
          smallestIndex = 1000;
          while (i < msg.data.recipient.length) {
            index = config.uniqueAttributeTypes.indexOf(msg.data.recipient[i][0]);
            if (index > -1 && index < smallestIndex) {
              smallestIndex = index;
              msg.linkToRecipient = msg.data.recipient[i];
            } else if (!msg.recipient_name && ((ref1 = msg.data.recipient[i][0]) === 'name' || ref1 === 'nickname')) {
              msg.recipient_name = msg.data.recipient[i][1];
            }
            i++;
          }
          signedData = msg.data;
          alpha = void 0;
          msg.iconStyle = '';
          msg.hasSuccess = '';
          msg.bgColor = '';
          msg.iconCount = new Array(1);
          switch (signedData.type) {
            case 'verify_identity':
            case 'verification':
              msg.iconStyle = 'glyphicon glyphicon-ok positive';
              msg.hasSuccess = 'has-success';
              return msg.isVerification = true;
            case 'connection':
              msg.iconStyle = 'glyphicon glyphicon-ok positive';
              return msg.hasSuccess = 'has-success';
            case 'unverify_identity':
            case 'unverification':
              msg.iconStyle = 'glyphicon glyphicon-remove negative';
              msg.hasSuccess = 'has-error';
              msg.bgColor = 'background-color: #FFF0DE;border-color:#FFE2C6;';
              return msg.isUnverification = true;
            case 'rating':
              rating = signedData.rating;
              neutralRating = (signedData.minRating + signedData.maxRating) / 2;
              maxRatingDiff = signedData.maxRating - neutralRating;
              minRatingDiff = signedData.minRating - neutralRating;
              if (rating > neutralRating) {
                msg.iconStyle = 'glyphicon glyphicon-thumbs-up positive';
                msg.iconCount = maxRatingDiff < 2 ? msg.iconCount : new Array(Math.ceil(3 * rating / maxRatingDiff));
                alpha = (rating - neutralRating - 0.5) / maxRatingDiff / 1.25 + 0.2;
                return msg.bgColor = 'background-color: rgba(223,240,216,' + alpha + ');';
              } else if (rating < neutralRating) {
                msg.iconStyle = 'glyphicon glyphicon-thumbs-down negative';
                msg.iconCount = minRatingDiff > -2 ? msg.iconCount : new Array(Math.ceil(3 * rating / minRatingDiff));
                alpha = (rating - neutralRating + 0.5) / minRatingDiff / 1.25 + 0.2;
                return msg.bgColor = 'background-color:rgba(242,222,222,' + alpha + ');';
              } else {
                msg.bgColor = 'background-color: #fcf8e3;';
                return msg.iconStyle = 'glyphicon glyphicon-question-sign neutral';
              }
          }
        };
        return angular.forEach(messages, function(msg, key) {
          var k, v;
          for (k in msgOptions) {
            v = msgOptions[k];
            msg[k] = v;
          }
          if (msg.ipfs_hash && !msg.jws) {
            return $scope.ipfsGet(msg.ipfs_hash).then(function(res) {
              msg.jws = res;
              return processMessage(msg);
            });
          } else {
            return processMessage(msg);
          }
        });
      };
      $scope.$on('$stateChangeSuccess', function() {
        return $scope.isCollapsed = false;
      });
      scrollTo = function(el) {
        var pos;
        if (!el) {
          return;
        }
        pos = el.getBoundingClientRect();
        if (pos.top) {
          if (pos.top - 60 < $window.pageYOffset) {
            $window.scrollTo(0, pos.top - 60);
          } else if (pos.bottom > $window.pageYOffset + ($window.innerHeight || document.documentElement.clientHeight)) {
            $window.scrollTo(0, pos.bottom - ($window.innerHeight || document.documentElement.clientHeight) + 15);
          }
        }
      };
      $scope.setIdentityNames = function(i, htmlSafe) {
        if (i.mostVerifiedAttributes.name) {
          i.primaryName = i.mostVerifiedAttributes.name.attribute.val;
        } else if (i.mostVerifiedAttributes.nickname) {
          i.primaryName = i.mostVerifiedAttributes.nickname.attribute.val;
        } else {
          i.primaryName = i.data.attrs[0].val;
        }
        if (i.primaryName) {
          if (i.mostVerifiedAttributes.nickname && i.mostVerifiedAttributes.nickname.attribute.val !== i.primaryName) {
            i.nickname = i.mostVerifiedAttributes.nickname.attribute.val;
            if (htmlSafe) {
              i.nickname = i.nickname.replace('<', '&lt;');
            }
          }
        }
        if (htmlSafe) {
          return i.primaryName = i.primaryName.replace('<', '&lt;');
        }
      };
      $scope.searchRequest = null;
      $scope.search = function(query, limit) {
        var cursor, searchKey;
        $scope.ids.loading = true;
        $scope.identitiesByHash = {};
        searchKey = encodeURIComponent((query || $scope.query.term || '').toLowerCase());
        $scope.searchKey = searchKey;
        if (searchKey !== $scope.previousSearchKey) {
          $scope.ids.list = [];
          $scope.ids.finished = false;
          $scope.identitiesByHash = {};
        }
        $scope.previousSearchKey = searchKey;
        limit = limit || 40;
        cursor = false;
        if ($scope.ids.list.length) {
          cursor = $scope.ids.list[$scope.ids.list.length - 1].cursor;
        }
        if (searchKey.length) {
          $scope.searchRequest = $scope.identifiIndex.search(searchKey, void 0, limit, cursor).then(function(identities) {
            return {
              identities: identities,
              searchKey: searchKey
            };
          });
        } else {
          $scope.searchRequest = $scope.identifiIndex.search(searchKey, void 0, limit, cursor).then(function(identities) {
            return {
              identities: identities,
              searchKey: searchKey
            };
          });
        }
        $scope.searchRequest = $scope.searchRequest.then(function(res) {
          var identities;
          if (res.searchKey !== $scope.searchKey) {
            return;
          }
          identities = res.identities;
          identities.forEach(function(i) {
            return $scope.setIdentityNames(i, true);
          });
          searchKey = encodeURIComponent((query || $scope.query.term || '').toLowerCase());
          if (searchKey !== $scope.previousSearchKey) {
            return;
          }
          $scope.ids.list = $scope.ids.list || [];
          if (identities.length < limit) {
            $scope.ids.finished = true;
          }
          if (identities.length && $scope.ids.list.length && $scope.getIdKey(identities[0].linkTo) === $scope.getIdKey($scope.ids.list[$scope.ids.list.length - 1].linkTo)) {
            identities.shift();
          }
          $scope.ids.list = $scope.ids.list.concat(identities);
          if (identities.length > 0 && $scope.ids.list.length === identities.length) {
            $scope.ids.activeKey = 0;
            $scope.ids.list[0].active = true;
          }
          $scope.$apply(function() {
            return $scope.ids.loading = false;
          });
          return $scope.ids.list;
        });
        return $scope.searchRequest;
      };
      $scope.searchKeydown = function(event) {
        var el, id, wait;
        switch ((event ? event.which : -1)) {
          case 38:
            event.preventDefault();
            if ($scope.ids.activeKey > 0) {
              $scope.ids.list[$scope.ids.activeKey].active = false;
              $scope.ids.list[$scope.ids.activeKey - 1].active = true;
              $scope.ids.activeKey--;
            }
            return scrollTo(document.getElementById('result' + $scope.ids.activeKey));
          case 40:
            event.preventDefault();
            if ($scope.ids.activeKey < ($scope.ids.list.length || 0) - 1) {
              $scope.ids.list[$scope.ids.activeKey].active = false;
              $scope.ids.list[$scope.ids.activeKey + 1].active = true;
              $scope.ids.activeKey++;
            }
            return scrollTo(document.getElementById('result' + $scope.ids.activeKey));
          case 13:
            event.preventDefault();
            id = $scope.ids.list[$scope.ids.activeKey];
            return $state.go('identities.show', {
              type: id.linkTo.name,
              value: id.linkTo.val
            });
          case -1:
            clearTimeout($scope.timer);
            $scope.query.term = '';
            return $scope.search();
          case 33:
          case 34:
          case 35:
          case 36:
          case 37:
          case 39:
            break;
          default:
            el = angular.element(event.currentTarget);
            clearTimeout($scope.timer);
            wait = setTimeout((function() {
              $scope.query.term = el.val();
              $scope.search();
            }), 300);
            $scope.timer = wait;
            break;
        }
      };
      return $scope.dropdownSearchSelect = function(item) {
        $state.go('identities.show', {
          type: item.linkTo.name,
          value: item.linkTo.val
        });
        return $scope.query.term = '';
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLGdCQUE3QyxFQUErRDtJQUM3RCxRQUQ2RCxFQUU3RCxZQUY2RCxFQUc3RCxXQUg2RCxFQUk3RCxPQUo2RCxFQUs3RCxRQUw2RCxFQU03RCxRQU42RCxFQU83RCxxQkFQNkQsRUFRN0QsV0FSNkQsRUFTN0QsU0FUNkQsRUFVN0QsSUFWNkQsRUFXN0QsT0FYNkQsRUFnQjdELFNBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsU0FBckIsRUFBZ0MsS0FBaEMsRUFBdUMsTUFBdkMsRUFBK0MsTUFBL0MsRUFDQSxtQkFEQSxFQUNxQixTQURyQixFQUNnQyxPQURoQyxFQUN5QyxFQUR6QyxFQUM2QyxLQUQ3Qzs7QUFFRTs7Ozs7Ozs7O0FBQUEsVUFBQTtNQVdBLE1BQU0sQ0FBQyxjQUFQLEdBQXdCO01BQ3hCLE1BQU0sQ0FBQyxhQUFQLEdBQXVCLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLGVBQXhCLENBQUEsSUFBNEM7TUFDbkUsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEIsRUFBeUMsTUFBTSxDQUFDLGFBQWhEO01BRUEsTUFBTSxDQUFDLFFBQVAsR0FBa0I7UUFBRSxLQUFBLEVBQU8sSUFBVDs7TUFDbEIsTUFBTSxDQUFDLFdBQVAsR0FBcUI7TUFFckIsTUFBTSxDQUFDLFFBQVAsR0FBa0IsU0FBQyxFQUFEO1FBQ2hCLElBQUcsS0FBSyxDQUFDLE9BQU4sQ0FBYyxFQUFkLENBQUg7QUFDRSxpQkFBTyxrQkFBQSxDQUFtQixFQUFHLENBQUEsQ0FBQSxDQUF0QixDQUFBLEdBQTRCLEdBQTVCLEdBQWtDLGtCQUFBLENBQW1CLEVBQUcsQ0FBQSxDQUFBLENBQXRCLEVBRDNDO1NBQUEsTUFBQTtB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QixLQUFBLEVBQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUF6QzthQUE3QjtBQWxCSixlQW1CTyxDQUFDLENBbkJSO1lBb0JJLFlBQUEsQ0FBYSxNQUFNLENBQUMsS0FBcEI7WUFDQSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQWIsR0FBb0I7bUJBQ3BCLE1BQU0sQ0FBQyxNQUFQLENBQUE7QUF0QkosZUF1Qk8sRUF2QlA7QUFBQSxlQXVCVyxFQXZCWDtBQUFBLGVBdUJlLEVBdkJmO0FBQUEsZUF1Qm1CLEVBdkJuQjtBQUFBLGVBdUJ1QixFQXZCdkI7QUFBQSxlQXVCMkIsRUF2QjNCO0FBdUIyQjtBQXZCM0I7WUF5QkksRUFBQSxHQUFLLE9BQU8sQ0FBQyxPQUFSLENBQWdCLEtBQUssQ0FBQyxhQUF0QjtZQUNMLFlBQUEsQ0FBYSxNQUFNLENBQUMsS0FBcEI7WUFDQSxJQUFBLEdBQU8sVUFBQSxDQUFXLENBQUMsU0FBQTtjQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDLElBQWIsR0FBb0IsRUFBRSxDQUFDLEdBQUgsQ0FBQTtjQUNwQixNQUFNLENBQUMsTUFBUCxDQUFBO1lBRmlCLENBQUQsQ0FBWCxFQUlKLEdBSkk7WUFLUCxNQUFNLENBQUMsS0FBUCxHQUFlO0FBQ2Y7QUFqQ0o7TUFEcUI7YUFvQ3ZCLE1BQU0sQ0FBQyxvQkFBUCxHQUE4QixTQUFDLElBQUQ7UUFDNUIsTUFBTSxDQUFDLEVBQVAsQ0FBVSxpQkFBVixFQUE2QjtVQUFFLElBQUEsRUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQXBCO1VBQTBCLEtBQUEsRUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQTdDO1NBQTdCO2VBQ0EsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLEdBQW9CO01BRlE7SUF4Z0JoQyxDQWhCNkQ7R0FBL0Q7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmNvbnRyb2xsZXIgJ01haW5Db250cm9sbGVyJywgW1xuICAnJHNjb3BlJ1xuICAnJHJvb3RTY29wZSdcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAnJHN0YXRlJ1xuICAnY29uZmlnJyxcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICckdWliTW9kYWwnXG4gICckd2luZG93J1xuICAnJHEnXG4gICdmb2N1cydcblxuICAjJ0F1dGhlbnRpY2F0aW9uJ1xuICAjJ01lbnVzJ1xuICAjJ1BlcnNvbmEnXG4gICgkc2NvcGUsICRyb290U2NvcGUsICRsb2NhdGlvbiwgJGh0dHAsICRzdGF0ZSwgY29uZmlnLFxuICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLCAkdWliTW9kYWwsICR3aW5kb3csICRxLCBmb2N1cykgLT4gIyBBdXRoZW50aWNhdGlvbiwgTWVudXMsIFBlcnNvbmFcbiAgICAjIyNcbiAgICBQZXJzb25hLndhdGNoXG4gICAgICBsb2dnZWRJblVzZXI6IEF1dGhlbnRpY2F0aW9uLnVzZXIuZW1haWxcbiAgICAgIG9ubG9naW46IChhc3NlcnRpb24pIC0+XG4gICAgICAgICRodHRwLnBvc3QoJy9hdXRoL3BlcnNvbmEnLCBhc3NlcnRpb246IGFzc2VydGlvbikudGhlbiAtPlxuICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgIyBGSVhNRVxuICAgICAgICAgICAgICAgICAgICAgICAgb25sb2dvdXQ6IC0+XG4gICAgIyMjXG5cbiAgICAjIHNldCBhdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5hdXRoZW50aWNhdGlvbiA9IHt9ICMgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUubG9jYWxNZXNzYWdlcyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhbE1lc3NhZ2VzJykgb3Ige31cbiAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnbG9jYWxNZXNzYWdlcycsICRzY29wZS5sb2NhbE1lc3NhZ2VzKVxuXG4gICAgJHNjb3BlLm5vZGVJbmZvID0geyBrZXlJRDogbnVsbCB9XG4gICAgJHNjb3BlLmlwZnNTdG9yYWdlID0ge31cblxuICAgICRzY29wZS5nZXRJZEtleSA9IChpZCkgLT5cbiAgICAgIGlmIEFycmF5LmlzQXJyYXkoaWQpXG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaWRbMF0pICsgJzonICsgZW5jb2RlVVJJQ29tcG9uZW50KGlkWzFdKVxuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGlkLm5hbWUpICsgJzonICsgZW5jb2RlVVJJQ29tcG9uZW50KGlkLnZhbClcblxuICAgICRzY29wZS5sb2dpbldpdGhLZXkgPSAocHJpdmF0ZUtleVBFTSkgLT5cbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0gS0VZVVRJTC5nZXRLZXlGcm9tUGxhaW5Qcml2YXRlUEtDUzhQRU0ocHJpdmF0ZUtleVBFTSlcbiAgICAgICRzY29wZS5wdWJsaWNLZXkgPSBuZXcgS0pVUi5jcnlwdG8uRUNEU0EoeydjdXJ2ZSc6ICdzZWNwMjU2azEnLCAncHViJzogJHNjb3BlLnByaXZhdGVLZXkucHViS2V5SGV4fSlcbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdwcml2YXRlS2V5UEVNJywgcHJpdmF0ZUtleVBFTSlcbiAgICAgIHB1YmxpY0tleUhleCA9IEtFWVVUSUwuZ2V0SGV4RnJvbVBFTShLRVlVVElMLmdldFBFTSgkc2NvcGUucHVibGljS2V5KSlcbiAgICAgIHB1YmxpY0tleUhhc2ggPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnN0cmluZ2lmeShDcnlwdG9KUy5TSEEyNTYocHVibGljS2V5SGV4KSlcbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyID1cbiAgICAgICAgaWRUeXBlOiAna2V5SUQnXG4gICAgICAgIGlkVmFsdWU6IHB1YmxpY0tleUhhc2hcbiAgICAgICRzY29wZS5sb2dpbk1vZGFsLmNsb3NlKCkgaWYgJHNjb3BlLmxvZ2luTW9kYWxcblxuICAgIHByaXZhdGVLZXkgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgncHJpdmF0ZUtleVBFTScpXG4gICAgaWYgcHJpdmF0ZUtleVxuICAgICAgJHNjb3BlLmxvZ2luV2l0aEtleShwcml2YXRlS2V5KVxuICAgIHRva2VuID0gJGxvY2F0aW9uLnNlYXJjaCgpLnRva2VuXG4gICAgaWYgdG9rZW5cbiAgICAgIGp3cyA9IEtKVVIuandzLkpXUy5wYXJzZSh0b2tlbikucGF5bG9hZE9ialxuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnRva2VuID0gdG9rZW5cbiAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyID0gandzLnVzZXJcbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCd0b2tlbicsIHRva2VuKVxuICAgICAgcHJldmlvdXNTdGF0ZSA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdzdGF0ZScpIHx8ICdpZGVudGl0aWVzLmxpc3QnXG4gICAgICBwcmV2aW91c1N0YXRlUGFyYW1zID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ3N0YXRlUGFyYW1zJykgfHwge31cbiAgICAgICRzdGF0ZS5nbyhwcmV2aW91c1N0YXRlLCBwcmV2aW91c1N0YXRlUGFyYW1zKVxuICAgIGVsc2VcbiAgICAgIHRva2VuID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ3Rva2VuJylcbiAgICAgIGlmIHRva2VuXG4gICAgICAgIGp3cyA9IEtKVVIuandzLkpXUy5wYXJzZSh0b2tlbikucGF5bG9hZE9ialxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udG9rZW4gPSB0b2tlblxuICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlciA9IGp3cy51c2VyXG5cbiAgICAkc2NvcGUucXVlcnkgPSB7fVxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXkgPSAnJ1xuICAgICRzY29wZS5pZHMgPSB7IGxpc3Q6IFtdIH1cbiAgICAkc2NvcGUucGhvbmVSZWdleCA9IC9eXFwrP1xcZCskL1xuXG4gICAgJHNjb3BlLmlwZnMgPSBuZXcgSXBmcyhcbiAgICAgIGluaXQ6IHRydWVcbiAgICAgIEVYUEVSSU1FTlRBTDoge1xuICAgICAgICBwdWJzdWI6IHRydWVcbiAgICAgIH0sXG4gICAgICBzdGFydDogdHJ1ZVxuICAgICAgcmVwbzogJ2lwZnM2LWlkZW50aWZpJ1xuICAgICAgY29uZmlnOiBCb290c3RyYXA6IFtcbiAgICAgICAgJy9kbnM0L2Ftcy0xLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTGVyMjY1TlJnU3AyTEEzZFBhZXlraVMxSjZEaWZUQzg4ZjV1VlFLTkFkJ1xuICAgICAgICAnL2RuczQvc2ZvLTEuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29ManU2bTd4VGgzRHVva3ZUMzg4NlFSWXF4QXpiMWtTaGFhbkpnVzM2eXgnXG4gICAgICAgICcvZG5zNC9sb24tMS5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xNZVdxQjdZR1ZMSk4zcE5MUXBtbUVrMzV2NndZdHNNR0x6U3I1UUJVMydcbiAgICAgICAgJy9kbnM0L3Nmby0yLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTG5TR2NjRnVaUUp6UmFkSG45NVcyQ3JTRm1adVRkRFdQOEhYYUhjYTl6J1xuICAgICAgICAnL2RuczQvc2ZvLTMuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MUHBwdUJ0UVNHd0tEWlQyTTczVUxwanZmZDNhWjZoYTRvRkdMMUtyR00nXG4gICAgICAgICcvZG5zNC9zZ3AtMS5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xTYWZUTUJzUEthZFRFZ2FYY3REUVZjcU44OENOTEhYTWtUTndNS1BudSdcbiAgICAgICAgJy9kbnM0L255Yy0xLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTHVlUjR4QmVVYlk5V1o5eEdVVXh1bmJLV2NyTkZUREFhZFFKbW9jbldtJ1xuICAgICAgICAnL2RuczQvbnljLTIuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MVjRCYm01MWpNOUM0Z0RZWlE5Q3kzVTZhWE1KREFiemd1MmZ6YURzNjQnXG4gICAgICBdKVxuXG4gICAgIyBHZXQgcG9zc2libGUgbG9naW4gb3B0aW9uc1xuICAgICRodHRwLmdldCgnL2FwaScsIHsgdGltZW91dDogMjAwMCB9KVxuICAgIC50aGVuIChyZXMpIC0+XG4gICAgICAkc2NvcGUubm9kZUluZm8gPSBhbmd1bGFyLmV4dGVuZCAkc2NvcGUubm9kZUluZm8sIHJlcy5kYXRhXG4gICAgLCAoZXJyKSAtPlxuICAgICAgJHNjb3BlLm5vZGVJbmZvID0geyBsb2dpbk9wdGlvbnM6IFt0cnVlXSwga2V5SUQ6IG51bGwgfVxuXG4gICAgJHNjb3BlLmlwZnMub24gJ3JlYWR5JywgLT5cbiAgICAgIGNvbnNvbGUubG9nICRzY29wZS5pcGZzXG4gICAgICAkd2luZG93LmlwZnMgPSAkc2NvcGUuaXBmc1xuICAgICAgJHNjb3BlLmlwZnMucHVic3ViLnN1YnNjcmliZSAnaWRlbnRpZmknLCAobXNnKSAtPlxuICAgICAgICBtc2cgPSB7IGp3czogJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyKG1zZy5kYXRhKS50b1N0cmluZygpIH1cbiAgICAgICAgaGFzaCA9IENyeXB0b0pTLmVuYy5CYXNlNjQuc3RyaW5naWZ5KENyeXB0b0pTLlNIQTI1Nihtc2cuandzKSlcbiAgICAgICAgY29uc29sZS5sb2cgJ2lkZW50aWZpIG1lc3NhZ2UgcmVjZWl2ZWQnLCBtc2csIGhhc2hcbiAgICAgICAgbG9jYWxNZXNzYWdlcyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhbE1lc3NhZ2VzJylcbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyhbbXNnXSlcbiAgICAgICAgbG9jYWxNZXNzYWdlc1toYXNoXcKgPSBtc2dcbiAgICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2xvY2FsTWVzc2FnZXMnLCBsb2NhbE1lc3NhZ2VzKVxuICAgICAgIyRzY29wZS5pbml0SXBmc0luZGV4ZXMoKVxuXG4gICAgJHNjb3BlLmluaXRJcGZzSW5kZXhlcyA9IC0+XG4gICAgICAkd2luZG93LmlkZW50aWZpTGliLkluZGV4LmxvYWQoKVxuICAgICAgLnRoZW4gKHJlc3VsdHMpIC0+XG4gICAgICAgICRzY29wZS5pZGVudGlmaUluZGV4ID0gcmVzdWx0c1xuICAgICAgICBjb25zb2xlLmxvZyAnR290IGluZGV4JywgJHNjb3BlLmlkZW50aWZpSW5kZXhcbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUuYXBpUmVhZHkgPSB0cnVlXG5cbiAgICAgIGluZGV4Um9vdCA9ICcvaXBucy9RbWJiMURSd2Q3NXJaazVUb3RUWEpZekRTSkw2QmFOVDFEQVE2VmJLY0tMaGJzJ1xuICAgICAgJGh0dHAuZ2V0ICdodHRwczovL2lkZW50aS5maScgKyBpbmRleFJvb3QgKyAnL2luZm8nXG4gICAgICAuY2F0Y2ggKGVycikgLT5cbiAgICAgICAgJGh0dHAuZ2V0ICdodHRwczovL2lwZnMuaW8nICsgaW5kZXhSb290ICsgJy9pbmZvJ1xuICAgICAgLnRoZW4gKHJlcykgLT5cbiAgICAgICAgJHNjb3BlLm5vZGVJbmZvLnByb2ZpbGUgPSAkc2NvcGUucHJvZmlsZUZyb21EYXRhKHJlcy5kYXRhLCBbJ2tleUlEJywgcmVzLmRhdGEua2V5SURdKVxuICAgICAgLmNhdGNoIChlKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnaW5pdGlhbGl6YXRpb24gZmFpbGVkOicsIGVcblxuICAgICRzY29wZS5pbml0SXBmc0luZGV4ZXMoKVxuXG4gICAgJHNjb3BlLnNldFBhZ2VUaXRsZSA9ICh0aXRsZSkgLT5cbiAgICAgICRyb290U2NvcGUucGFnZVRpdGxlID0gJ0lkZW50aWZpJ1xuICAgICAgaWYgKHRpdGxlKVxuICAgICAgICAkcm9vdFNjb3BlLnBhZ2VUaXRsZSArPSAnIC0gJyArIHRpdGxlXG5cbiAgICAkc2NvcGUuaXBmc0dldCA9ICh1cmksIGdldEpzb24pIC0+XG4gICAgICBqc0lwZnNHZXQgPSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnR2V0dGluZyBmcm9tIGpzLWlwZnMnLCB1cmlcbiAgICAgICAgJHNjb3BlLmlwZnMuZmlsZXMuY2F0KHVyaSkudGhlbiAoc3RyZWFtKSAtPlxuICAgICAgICAgIG5ldyBQcm9taXNlIChyZXNvbHZlLCByZWplY3QpIC0+XG4gICAgICAgICAgICBzdHJlYW0ub24gJ2RhdGEnLCAoZmlsZSkgLT5cbiAgICAgICAgICAgICAgZmlsZSA9ICRzY29wZS5pcGZzLnR5cGVzLkJ1ZmZlcihmaWxlKS50b1N0cmluZygpXG4gICAgICAgICAgICAgIGZpbGUgPSBKU09OLnBhcnNlKGZpbGUpIGlmIGdldEpzb25cbiAgICAgICAgICAgICAgcmVzb2x2ZShmaWxlKVxuICAgICAgICAgICAgc3RyZWFtLm9uICdlcnJvcicsIChlcnJvcikgLT5cbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKVxuXG4gICAgICBpZiAkc2NvcGUuaXBmc1N0b3JhZ2UuYXBpUm9vdFxuICAgICAgICByZXR1cm4gJGh0dHAuZ2V0KCRzY29wZS5pcGZzU3RvcmFnZS5hcGlSb290ICsgJy9pcGZzLycgKyB1cmkpXG4gICAgICAgIC50aGVuIChyZXMpIC0+IHJlcy5kYXRhXG4gICAgICAgIC5jYXRjaCAtPiBqc0lwZnNHZXQoKVxuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4ganNJcGZzR2V0KClcblxuICAgICRzY29wZS5uZXdNZXNzYWdlID1cbiAgICAgIHJhdGluZzogMVxuICAgICAgY29tbWVudDogJydcbiAgICAkc2NvcGUubmV3VmVyaWZpY2F0aW9uID1cbiAgICAgIHR5cGU6ICcnXG4gICAgICB2YWx1ZTogJydcbiAgICAjIENyZWF0ZSBuZXcgTWVzc2FnZVxuICAgICRzY29wZS5jcmVhdGVNZXNzYWdlID0gKGV2ZW50LCBwYXJhbXMsIGlkKSAtPlxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCkgaWYgZXZlbnRcbiAgICAgICMgQ3JlYXRlIG5ldyBNZXNzYWdlIG9iamVjdFxuICAgICAgbWVzc2FnZSA9XG4gICAgICAgIGNvbnRleHQ6ICdpZGVudGlmaSdcblxuICAgICAgaWYgcGFyYW1zLnR5cGUgPT0gJ3JhdGluZydcbiAgICAgICAgYW5ndWxhci5leHRlbmQgbWVzc2FnZSxcbiAgICAgICAgICBtYXhSYXRpbmc6IDNcbiAgICAgICAgICBtaW5SYXRpbmc6IC0zXG4gICAgICBhbmd1bGFyLmV4dGVuZCBtZXNzYWdlLCBwYXJhbXNcbiAgICAgIG9wdGlvbnMgPSB7fVxuICAgICAgaWYgJHNjb3BlLnByaXZhdGVLZXlcbiAgICAgICAgcHVibGljS2V5SGV4ID0gS0VZVVRJTC5nZXRIZXhGcm9tUEVNKEtFWVVUSUwuZ2V0UEVNKCRzY29wZS5wdWJsaWNLZXkpKVxuICAgICAgICBwdWJsaWNLZXlIYXNoID0gQ3J5cHRvSlMuZW5jLkJhc2U2NC5zdHJpbmdpZnkoQ3J5cHRvSlMuU0hBMjU2KHB1YmxpY0tleUhleCkpXG4gICAgICAgIG1lc3NhZ2UuYXV0aG9yID0gW1sna2V5SUQnLCBwdWJsaWNLZXlIYXNoXV1cbiAgICAgICAgbWVzc2FnZS50aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKClcbiAgICAgICAgaGVhZGVyID0gSlNPTi5zdHJpbmdpZnkoeyBhbGc6ICdFUzI1NicsIGtpZDogcHVibGljS2V5SGV4IH0pXG4gICAgICAgIHBheWxvYWQgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKVxuICAgICAgICBqd3MgPSBLSlVSLmp3cy5KV1Muc2lnbihcIkVTMjU2XCIsIGhlYWRlciwgcGF5bG9hZCwgJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAgIGhhc2ggPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnN0cmluZ2lmeShDcnlwdG9KUy5TSEEyNTYoandzKSlcbiAgICAgICAgbWVzc2FnZSA9IHsgandzOiBqd3MsIGhhc2g6IGhhc2ggfVxuICAgICAgICAkc2NvcGUuaXBmcy5maWxlcy5hZGQobmV3ICRzY29wZS5pcGZzLnR5cGVzLkJ1ZmZlcihqd3MpKS50aGVuIChpKSAtPlxuICAgICAgICAgICRzY29wZS5pcGZzLnB1YnN1Yi5wdWJsaXNoKCdpZGVudGlmaScsIG5ldyAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIoandzKSlcbiAgICAgIGVsc2VcbiAgICAgICAgb3B0aW9ucyA9XG4gICAgICAgICAgaGVhZGVyczpcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ0JlYXJlciAnICsgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnRva2VuXG5cbiAgICAgICRodHRwLnBvc3QoJy9hcGkvbWVzc2FnZXMnLCBtZXNzYWdlLCBvcHRpb25zKVxuICAgICAgLmNhdGNoIC0+XG4gICAgICAgICRodHRwLnBvc3QoJ2h0dHBzOi8vaWRlbnRpLmZpL2FwaS9tZXNzYWdlcycsIG1lc3NhZ2UsIG9wdGlvbnMpXG4gICAgICAudGhlbiAoKHJlc3BvbnNlKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyByZXNwb25zZVxuICAgICAgICAjIENsZWFyIGZvcm0gZmllbGRzXG4gICAgICAgICRzY29wZS5uZXdNZXNzYWdlLmNvbW1lbnQgPSAnJ1xuICAgICAgICAkc2NvcGUubmV3TWVzc2FnZS5yYXRpbmcgPSAxXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICcnXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUgPSAnJ1xuICAgICAgICAkc2NvcGUuJHJvb3QuJGJyb2FkY2FzdCAnTWVzc2FnZUFkZGVkJyxcbiAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhXG4gICAgICAgICAgaWQ6IGlkXG4gICAgICAgICRzY29wZS5nZXRJcGZzSW5kZXhlcyAkc2NvcGUuaXBmc1N0b3JhZ2UuYXBpUm9vdCArICcvaXBmcy8nICsgcmVzcG9uc2UuZGF0YS5pcGZzSW5kZXhSb290IGlmIHJlc3BvbnNlLmRhdGEuaXBmc0luZGV4Um9vdFxuICAgICAgICByZXNwb25zZS5kYXRhXG4gICAgICApLCAoZXJyb3JSZXNwb25zZSkgLT5cbiAgICAgICAgJHNjb3BlLmVycm9yID0gZXJyb3JSZXNwb25zZS5kYXRhIHx8IEpTT04uc3RyaW5naWZ5KGVycm9yUmVzcG9uc2UpXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JSZXNwb25zZSlcblxuICAgICRzY29wZS5hZGRBdHRyaWJ1dGUgPSAtPlxuICAgICAgJGxvY2F0aW9uLnBhdGggJyMvaWRlbnRpdGllcy9jcmVhdGUvJyArICRzY29wZS5xdWVyeS50ZXJtXG5cbiAgICAkc2NvcGUubG9naW4gPSAtPlxuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlID0gLTEgIyBiZWNhdXNlIHRoZSB1c2VyIGRvZXNuJ3QgaGF2ZSBhIHRydXN0IGluZGV4IHlldFxuXG4gICAgJHNjb3BlLm9wZW5Mb2dpbk1vZGFsID0gLT5cbiAgICAgICRzY29wZS5sb2dpbk1vZGFsID0gJHVpYk1vZGFsLm9wZW4oXG4gICAgICAgIGFuaW1hdGlvbjogJHNjb3BlLmFuaW1hdGlvbnNFbmFibGVkXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21haW4vbG9naW4ubW9kYWwuaHRtbCdcbiAgICAgICAgc2l6ZTogJ2xnJ1xuICAgICAgICBzY29wZTogJHNjb3BlXG4gICAgICApXG4gICAgICAkc2NvcGUubG9naW5Nb2RhbC5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdGFydCcsIC0+XG4gICAgICAgICRzY29wZS5sb2dpbk1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5nZW5lcmF0ZUtleSA9IC0+XG4gICAgICBrZXlwYWlyID0gS0VZVVRJTC5nZW5lcmF0ZUtleXBhaXIoJ0VDJywgJ3NlY3AyNTZrMScpXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IGtleXBhaXIucHJ2S2V5T2JqXG4gICAgICAkc2NvcGUucHVibGljS2V5ID0ga2V5cGFpci5wdWJLZXlPYmpcbiAgICAgICRzY29wZS5wcml2YXRlS2V5UEVNID0gS0VZVVRJTC5nZXRQRU0oJHNjb3BlLnByaXZhdGVLZXksICdQS0NTOFBSVicpXG5cbiAgICAkc2NvcGUuZG93bmxvYWRLZXkgPSAtPlxuICAgICAgaGlkZGVuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgICAgaGlkZGVuRWxlbWVudC5ocmVmID0gJ2RhdGE6dGV4dC9jc3Y7Y2hhcnNldD11dGYtOCwnICsgZW5jb2RlVVJJKCRzY29wZS5wcml2YXRlS2V5UEVNKVxuICAgICAgaGlkZGVuRWxlbWVudC50YXJnZXQgPSAnX2JsYW5rJ1xuICAgICAgaGlkZGVuRWxlbWVudC5kb3dubG9hZCA9ICdpZGVudGlmaV9wcml2YXRlX2tleS50eHQnXG4gICAgICBoaWRkZW5FbGVtZW50LmNsaWNrKClcblxuICAgICRzY29wZS5sb2dvdXQgPSAtPlxuICAgICAgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlID0gMFxuICAgICAgJHNjb3BlLnByaXZhdGVLZXlQRU0gPSAnJ1xuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge31cbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXJBbGwoKVxuICAgICAgJHN0YXRlLmdvKCdpZGVudGl0aWVzLmxpc3QnKVxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBudWxsXG4gICAgICAkc2NvcGUucHVibGljS2V5ID0gbnVsbFxuXG4gICAgJHNjb3BlLm1zZ0ZpbHRlciA9ICh2YWx1ZSwgaW5kZXgsIGFycmF5KSAtPlxuICAgICAgZGF0YSA9IHZhbHVlLmRhdGEgb3IgdmFsdWUuc2lnbmVkRGF0YVxuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlLm1hdGNoIC9ecmF0aW5nL1xuICAgICAgICAgIGlmIGRhdGEudHlwZSAhPSAncmF0aW5nJ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChkYXRhLm1heFJhdGluZyArIGRhdGEubWluUmF0aW5nKSAvIDJcbiAgICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6cG9zaXRpdmUnIGFuZCBkYXRhLnJhdGluZyA8PSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpuZWdhdGl2ZScgYW5kIGRhdGEucmF0aW5nID49IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOm5ldXRyYWwnIGFuZCBkYXRhLnJhdGluZyAhPSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSBpZiBkYXRhLnR5cGUgIT0gJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZSA9PSAwIGFuZCB0eXBlb2YgdmFsdWUuYXV0aG9yVHJ1c3REaXN0YW5jZSAhPSAnbnVtYmVyJ1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZSA+IDAgYW5kIHZhbHVlLmF1dGhvclRydXN0RGlzdGFuY2UgPiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2VcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiB0cnVlXG5cbiAgICAkc2NvcGUucmVtb3ZlRm9jdXMgPSAoZXZlbnQpIC0+XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmJsdXIoKVxuXG4gICAgJHNjb3BlLmxvZ29DbGlja2VkID0gLT5cbiAgICAgIGZvY3VzKCdzZWFyY2hGb2N1cycpXG4gICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMubGlzdCdcbiAgICAgICAgaWYgJHNjb3BlLnF1ZXJ5LnRlcm0gIT0gJydcbiAgICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gW11cbiAgICAgICAgJHNjb3BlLmlkcy5maW5pc2hlZCA9IGZhbHNlXG4gICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5saXN0J1xuXG4gICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEgPSAobXNnKSAtPlxuICAgICAgc2hvd1Jhd0RhdGEgPVxuICAgICAgICBoYXNoOiBtc2cuaGFzaFxuICAgICAgICBkYXRhOiBtc2cuZGF0YVxuICAgICAgICBwcmlvcml0eTogbXNnLnByaW9yaXR5XG4gICAgICAgIGp3czogbXNnLmp3c1xuICAgICAgbXNnLnN0ckRhdGEgPSBKU09OLnN0cmluZ2lmeShzaG93UmF3RGF0YSwgdW5kZWZpbmVkLCAyKVxuXG4gICAgJHNjb3BlLnByb2ZpbGVGcm9tRGF0YSA9IChkYXRhLCBmYWxsYmFja0lkKSAtPlxuICAgICAgaWYgZGF0YS5hdHRycyBhbmQgZGF0YS5hdHRycy5sZW5ndGhcbiAgICAgICAgcmV0dXJuIG5ldyAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5KHthdHRyczpkYXRhLmF0dHJzfSlcbiAgICAgIHJldHVybiBuZXcgJHdpbmRvdy5pZGVudGlmaUxpYi5JZGVudGl0eSh7YXR0cnM6W2ZhbGxiYWNrSWRdfSlcblxuICAgICRzY29wZS5vcGVuTWVzc2FnZSA9IChldmVudCwgbWVzc2FnZSwgc2l6ZSkgLT5cbiAgICAgIHQgPSBldmVudC50YXJnZXRcbiAgICAgIHJldHVybiBpZiBhbmd1bGFyLmVsZW1lbnQodCkuY2xvc2VzdCgnYScpLmxlbmd0aFxuICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEobWVzc2FnZSlcbiAgICAgICRzY29wZS5tZXNzYWdlID0gbWVzc2FnZVxuICAgICAgIyBUT0RPOiBjaGVjayBzaWdcbiAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmdldCgkc2NvcGUubWVzc2FnZS5zaWduZXJfa2V5aWQsICdrZXlJRCcpLnRoZW4gKHByb2ZpbGUpIC0+XG4gICAgICAgIHVubGVzcyBwcm9maWxlXG4gICAgICAgICAgcHJvZmlsZSA9IG5ldyAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5KHthdHRyczpbWydrZXlJRCcsICRzY29wZS5tZXNzYWdlLnNpZ25lcl9rZXlpZF1dfSlcbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5ID0gcHJvZmlsZVxuICAgICAgbW9kYWxJbnN0YW5jZSA9ICR1aWJNb2RhbC5vcGVuKFxuICAgICAgICBhbmltYXRpb246ICRzY29wZS5hbmltYXRpb25zRW5hYmxlZFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9zaG93Lm1vZGFsLmh0bWwnXG4gICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgc2NvcGU6ICRzY29wZVxuICAgICAgKVxuICAgICAgbW9kYWxJbnN0YW5jZS5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdGFydCcsIC0+XG4gICAgICAgIG1vZGFsSW5zdGFuY2UuY2xvc2UoKVxuXG4gICAgJHNjb3BlLmZpbHRlcnMgPSAkc2NvcGUuZmlsdGVycyBvciBjb25maWcuZGVmYXVsdEZpbHRlcnNcblxuICAgICMjI1xuICAgICRzY29wZS5hdXRoZW50aWNhdGlvbiA9IEF1dGhlbnRpY2F0aW9uXG4gICAgaWYgQXV0aGVudGljYXRpb24udXNlclxuICAgICAgaWYgQXV0aGVudGljYXRpb24udXNlci5wcm92aWRlciA9PSAncGVyc29uYSdcbiAgICAgICAgQXV0aGVudGljYXRpb24udXNlci5pZFR5cGUgPSAnZW1haWwnXG4gICAgICBlbHNlXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uLnVzZXIuaWRUeXBlID0gJ3VybCdcbiAgICAgIHN3aXRjaCBBdXRoZW50aWNhdGlvbi51c2VyLnByb3ZpZGVyXG4gICAgICAgIHdoZW4gJ3BlcnNvbmEnXG4gICAgICAgICAgQXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlID0gQXV0aGVudGljYXRpb24udXNlci5lbWFpbFxuICAgICAgICB3aGVuICd0d2l0dGVyJ1xuICAgICAgICAgIEF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZSA9ICdodHRwczovL3R3aXR0ZXIuY29tLycgKyBBdXRoZW50aWNhdGlvbi51c2VyLnVzZXJuYW1lXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBBdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWUgPSBBdXRoZW50aWNhdGlvbi51c2VyLnByb3ZpZGVyRGF0YS5saW5rXG4gICAgICAgICAgYnJlYWtcbiAgICAjIyNcblxuICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlXG4gICAgIyAkc2NvcGUubWVudSA9IE1lbnVzLmdldE1lbnUoJ3RvcGJhcicpXG5cbiAgICAkc2NvcGUudG9nZ2xlQ29sbGFwc2libGVNZW51ID0gLT5cbiAgICAgICRzY29wZS5pc0NvbGxhcHNlZCA9ICEkc2NvcGUuaXNDb2xsYXBzZWRcblxuICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgPSAobWVzc2FnZXMsIG1zZ09wdGlvbnMsIHZlcmlmeVNpZ25hdHVyZSkgLT5cbiAgICAgIHByb2Nlc3NNZXNzYWdlID0gKG1zZykgLT5cbiAgICAgICAgcGFyc2VkSndzID0gS0pVUi5qd3MuSldTLnBhcnNlKG1zZy5qd3MpXG4gICAgICAgIG1zZy5kYXRhID0gcGFyc2VkSndzLnBheWxvYWRPYmpcbiAgICAgICAgdW5sZXNzIG1zZy5zaWduZXJfa2V5aWRcbiAgICAgICAgICBrZXlIYXNoID0gQ3J5cHRvSlMuU0hBMjU2KHBhcnNlZEp3cy5oZWFkZXJPYmoua2lkKVxuICAgICAgICAgIG1zZy5zaWduZXJfa2V5aWQgPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnN0cmluZ2lmeShrZXlIYXNoKVxuXG4gICAgICAgIG1zZy5hdXRob3IgPSBtc2cuZ2V0QXV0aG9yKCkgaWYgbXNnLmdldEF1dGhvclxuICAgICAgICAjIFRPRE86IG1ha2Ugc3VyZSBtZXNzYWdlIHNpZ25hdHVyZSBpcyBjaGVja2VkXG5cbiAgICAgICAgbXNnLmxpbmtUb0F1dGhvciA9IG1zZy5kYXRhLmF1dGhvclswXVxuICAgICAgICBpID0gdW5kZWZpbmVkXG4gICAgICAgIGkgPSAwXG4gICAgICAgIHNtYWxsZXN0SW5kZXggPSAxMDAwXG4gICAgICAgIHdoaWxlIGkgPCBtc2cuZGF0YS5hdXRob3IubGVuZ3RoXG4gICAgICAgICAgaW5kZXggPSBjb25maWcudW5pcXVlQXR0cmlidXRlVHlwZXMuaW5kZXhPZihtc2cuZGF0YS5hdXRob3JbaV1bMF0pXG4gICAgICAgICAgaWYgaW5kZXggPiAtMSBhbmQgaW5kZXggPCBzbWFsbGVzdEluZGV4XG4gICAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBtc2cuZGF0YS5hdXRob3JbaV1cbiAgICAgICAgICBlbHNlIGlmICFtc2cuYXV0aG9yX25hbWUgYW5kIG1zZy5kYXRhLmF1dGhvcltpXVswXSBpbiBbJ25hbWUnLCAnbmlja25hbWUnXVxuICAgICAgICAgICAgbXNnLmF1dGhvcl9uYW1lID0gbXNnLmRhdGEuYXV0aG9yW2ldWzFdXG4gICAgICAgICAgaSsrXG4gICAgICAgIG1zZy5saW5rVG9SZWNpcGllbnQgPSBtc2cuZGF0YS5yZWNpcGllbnRbMF1cbiAgICAgICAgaSA9IDBcbiAgICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgICAgd2hpbGUgaSA8IG1zZy5kYXRhLnJlY2lwaWVudC5sZW5ndGhcbiAgICAgICAgICBpbmRleCA9IGNvbmZpZy51bmlxdWVBdHRyaWJ1dGVUeXBlcy5pbmRleE9mKG1zZy5kYXRhLnJlY2lwaWVudFtpXVswXSlcbiAgICAgICAgICBpZiBpbmRleCA+IC0xIGFuZCBpbmRleCA8IHNtYWxsZXN0SW5kZXhcbiAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgbXNnLmxpbmtUb1JlY2lwaWVudCA9IG1zZy5kYXRhLnJlY2lwaWVudFtpXVxuICAgICAgICAgIGVsc2UgaWYgIW1zZy5yZWNpcGllbnRfbmFtZSBhbmQgbXNnLmRhdGEucmVjaXBpZW50W2ldWzBdIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgICBtc2cucmVjaXBpZW50X25hbWUgPSBtc2cuZGF0YS5yZWNpcGllbnRbaV1bMV1cbiAgICAgICAgICBpKytcbiAgICAgICAgc2lnbmVkRGF0YSA9IG1zZy5kYXRhXG4gICAgICAgIGFscGhhID0gdW5kZWZpbmVkXG4gICAgICAgIG1zZy5pY29uU3R5bGUgPSAnJ1xuICAgICAgICBtc2cuaGFzU3VjY2VzcyA9ICcnXG4gICAgICAgIG1zZy5iZ0NvbG9yID0gJydcbiAgICAgICAgbXNnLmljb25Db3VudCA9IG5ldyBBcnJheSgxKVxuICAgICAgICBzd2l0Y2ggc2lnbmVkRGF0YS50eXBlXG4gICAgICAgICAgd2hlbiAndmVyaWZ5X2lkZW50aXR5JywgJ3ZlcmlmaWNhdGlvbidcbiAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1vayBwb3NpdGl2ZSdcbiAgICAgICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJ2hhcy1zdWNjZXNzJ1xuICAgICAgICAgICAgbXNnLmlzVmVyaWZpY2F0aW9uID0gdHJ1ZVxuICAgICAgICAgIHdoZW4gJ2Nvbm5lY3Rpb24nXG4gICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tb2sgcG9zaXRpdmUnXG4gICAgICAgICAgICBtc2cuaGFzU3VjY2VzcyA9ICdoYXMtc3VjY2VzcydcbiAgICAgICAgICB3aGVuICd1bnZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmaWNhdGlvbidcbiAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgbmVnYXRpdmUnXG4gICAgICAgICAgICBtc2cuaGFzU3VjY2VzcyA9ICdoYXMtZXJyb3InXG4gICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGMERFO2JvcmRlci1jb2xvcjojRkZFMkM2OydcbiAgICAgICAgICAgIG1zZy5pc1VudmVyaWZpY2F0aW9uID0gdHJ1ZVxuICAgICAgICAgIHdoZW4gJ3JhdGluZydcbiAgICAgICAgICAgIHJhdGluZyA9IHNpZ25lZERhdGEucmF0aW5nXG4gICAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKHNpZ25lZERhdGEubWluUmF0aW5nICsgc2lnbmVkRGF0YS5tYXhSYXRpbmcpIC8gMlxuICAgICAgICAgICAgbWF4UmF0aW5nRGlmZiA9IHNpZ25lZERhdGEubWF4UmF0aW5nIC0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgbWluUmF0aW5nRGlmZiA9IHNpZ25lZERhdGEubWluUmF0aW5nIC0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgaWYgcmF0aW5nID4gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLXVwIHBvc2l0aXZlJ1xuICAgICAgICAgICAgICBtc2cuaWNvbkNvdW50ID0gaWYgbWF4UmF0aW5nRGlmZiA8IDIgdGhlbiBtc2cuaWNvbkNvdW50IGVsc2UgbmV3IEFycmF5KE1hdGguY2VpbCgzICogcmF0aW5nIC8gbWF4UmF0aW5nRGlmZikpXG4gICAgICAgICAgICAgIGFscGhhID0gKHJhdGluZyAtIG5ldXRyYWxSYXRpbmcgLSAwLjUpIC8gbWF4UmF0aW5nRGlmZiAvIDEuMjUgKyAwLjJcbiAgICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKTsnXG4gICAgICAgICAgICBlbHNlIGlmIHJhdGluZyA8IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy1kb3duIG5lZ2F0aXZlJ1xuICAgICAgICAgICAgICBtc2cuaWNvbkNvdW50ID0gaWYgbWluUmF0aW5nRGlmZiA+IC0yIHRoZW4gbXNnLmljb25Db3VudCBlbHNlIG5ldyBBcnJheShNYXRoLmNlaWwoMyAqIHJhdGluZyAvIG1pblJhdGluZ0RpZmYpKVxuICAgICAgICAgICAgICBhbHBoYSA9IChyYXRpbmcgLSBuZXV0cmFsUmF0aW5nICsgMC41KSAvIG1pblJhdGluZ0RpZmYgLyAxLjI1ICsgMC4yXG4gICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDIsMjIyLDIyMiwnICsgYWxwaGEgKyAnKTsnXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7J1xuICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tcXVlc3Rpb24tc2lnbiBuZXV0cmFsJ1xuXG4gICAgICBhbmd1bGFyLmZvckVhY2ggbWVzc2FnZXMsIChtc2csIGtleSkgLT5cbiAgICAgICAgbXNnW2tdID0gdiBmb3IgaywgdiBvZiBtc2dPcHRpb25zXG4gICAgICAgIGlmIG1zZy5pcGZzX2hhc2ggYW5kIG5vdCBtc2cuandzXG4gICAgICAgICAgJHNjb3BlLmlwZnNHZXQobXNnLmlwZnNfaGFzaCkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgbXNnLmp3cyA9IHJlc1xuICAgICAgICAgICAgcHJvY2Vzc01lc3NhZ2UobXNnKVxuICAgICAgICBlbHNlIHByb2Nlc3NNZXNzYWdlKG1zZylcblxuICAgICMgQ29sbGFwc2luZyB0aGUgbWVudSBhZnRlciBuYXZpZ2F0aW9uXG4gICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3VjY2VzcycsIC0+XG4gICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZVxuXG4gICAgc2Nyb2xsVG8gPSAoZWwpIC0+XG4gICAgICBpZiAhZWxcbiAgICAgICAgcmV0dXJuXG4gICAgICBwb3MgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgaWYgcG9zLnRvcFxuICAgICAgICBpZiBwb3MudG9wIC0gNjAgPCAkd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MudG9wIC0gNjBcbiAgICAgICAgZWxzZSBpZiBwb3MuYm90dG9tID4gJHdpbmRvdy5wYWdlWU9mZnNldCArICgkd2luZG93LmlubmVySGVpZ2h0IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MuYm90dG9tIC0gKCR3aW5kb3cuaW5uZXJIZWlnaHQgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyAxNVxuICAgICAgcmV0dXJuXG5cbiAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcyA9IChpLCBodG1sU2FmZSkgLT5cbiAgICAgIGlmIGkubW9zdFZlcmlmaWVkQXR0cmlidXRlcy5uYW1lXG4gICAgICAgIGkucHJpbWFyeU5hbWUgPSBpLm1vc3RWZXJpZmllZEF0dHJpYnV0ZXMubmFtZS5hdHRyaWJ1dGUudmFsXG4gICAgICBlbHNlIGlmIGkubW9zdFZlcmlmaWVkQXR0cmlidXRlcy5uaWNrbmFtZVxuICAgICAgICBpLnByaW1hcnlOYW1lID0gaS5tb3N0VmVyaWZpZWRBdHRyaWJ1dGVzLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWxcbiAgICAgIGVsc2VcbiAgICAgICAgaS5wcmltYXJ5TmFtZSA9IGkuZGF0YS5hdHRyc1swXS52YWxcbiAgICAgIGlmIGkucHJpbWFyeU5hbWVcbiAgICAgICAgaWYgaS5tb3N0VmVyaWZpZWRBdHRyaWJ1dGVzLm5pY2tuYW1lIGFuZCBpLm1vc3RWZXJpZmllZEF0dHJpYnV0ZXMubmlja25hbWUuYXR0cmlidXRlLnZhbCAhPSBpLnByaW1hcnlOYW1lXG4gICAgICAgICAgaS5uaWNrbmFtZSA9IGkubW9zdFZlcmlmaWVkQXR0cmlidXRlcy5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsXG4gICAgICAgICAgaS5uaWNrbmFtZSA9IGkubmlja25hbWUucmVwbGFjZSgnPCcsICcmbHQ7JykgaWYgaHRtbFNhZmVcbiAgICAgIGkucHJpbWFyeU5hbWUgPSBpLnByaW1hcnlOYW1lLnJlcGxhY2UoJzwnLCAnJmx0OycpIGlmIGh0bWxTYWZlXG5cbiAgICAkc2NvcGUuc2VhcmNoUmVxdWVzdCA9IG51bGxcbiAgICAkc2NvcGUuc2VhcmNoID0gKHF1ZXJ5LCBsaW1pdCkgLT5cbiAgICAgICRzY29wZS5pZHMubG9hZGluZyA9IHRydWVcbiAgICAgICRzY29wZS5pZGVudGl0aWVzQnlIYXNoID0ge31cbiAgICAgIHNlYXJjaEtleSA9IGVuY29kZVVSSUNvbXBvbmVudCgocXVlcnkgb3IgJHNjb3BlLnF1ZXJ5LnRlcm0gb3IgJycpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAkc2NvcGUuc2VhcmNoS2V5ID0gc2VhcmNoS2V5XG4gICAgICBpZiBzZWFyY2hLZXkgIT0gJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5XG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAgICRzY29wZS5pZHMuZmluaXNoZWQgPSBmYWxzZVxuICAgICAgICAkc2NvcGUuaWRlbnRpdGllc0J5SGFzaCA9IHt9XG4gICAgICAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXkgPSBzZWFyY2hLZXlcbiAgICAgIGxpbWl0ID0gbGltaXQgb3IgNDBcbiAgICAgIGN1cnNvciA9IGZhbHNlXG4gICAgICBpZiAkc2NvcGUuaWRzLmxpc3QubGVuZ3RoXG4gICAgICAgIGN1cnNvciA9ICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmxpc3QubGVuZ3RoIC0gMV0uY3Vyc29yXG4gICAgICBpZiBzZWFyY2hLZXkubGVuZ3RoXG4gICAgICAgICRzY29wZS5zZWFyY2hSZXF1ZXN0ID0gJHNjb3BlLmlkZW50aWZpSW5kZXguc2VhcmNoKHNlYXJjaEtleSwgdW5kZWZpbmVkLCBsaW1pdCwgY3Vyc29yKVxuICAgICAgICAudGhlbiAoaWRlbnRpdGllcykgLT4ge2lkZW50aXRpZXMsIHNlYXJjaEtleX1cbiAgICAgICAgIyBUT0RPOiB1c2UgZGlzdGFuY2UgaW5kZXggaW4gaWRlbnRpZmlMaWI/XG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5zZWFyY2hSZXF1ZXN0ID0gJHNjb3BlLmlkZW50aWZpSW5kZXguc2VhcmNoKHNlYXJjaEtleSwgdW5kZWZpbmVkLCBsaW1pdCwgY3Vyc29yKVxuICAgICAgICAudGhlbiAoaWRlbnRpdGllcykgLT4ge2lkZW50aXRpZXMsIHNlYXJjaEtleX1cbiAgICAgICRzY29wZS5zZWFyY2hSZXF1ZXN0ID0gJHNjb3BlLnNlYXJjaFJlcXVlc3QudGhlbiAocmVzKSAtPlxuICAgICAgICByZXR1cm4gaWYgcmVzLnNlYXJjaEtleSAhPSAkc2NvcGUuc2VhcmNoS2V5XG4gICAgICAgIGlkZW50aXRpZXMgPSByZXMuaWRlbnRpdGllc1xuICAgICAgICBpZGVudGl0aWVzLmZvckVhY2ggKGkpIC0+ICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKGksIHRydWUpXG4gICAgICAgIHNlYXJjaEtleSA9IGVuY29kZVVSSUNvbXBvbmVudCgocXVlcnkgb3IgJHNjb3BlLnF1ZXJ5LnRlcm0gb3IgJycpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIGlmIHNlYXJjaEtleSAhPSAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXlcbiAgICAgICAgICByZXR1cm4gIyBzZWFyY2gga2V5IGNoYW5nZWRcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gJHNjb3BlLmlkcy5saXN0IG9yIFtdXG4gICAgICAgIGlmIGlkZW50aXRpZXMubGVuZ3RoIDwgbGltaXRcbiAgICAgICAgICAkc2NvcGUuaWRzLmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICBpZiBpZGVudGl0aWVzLmxlbmd0aCAmJiAkc2NvcGUuaWRzLmxpc3QubGVuZ3RoICYmXG4gICAgICAgICRzY29wZS5nZXRJZEtleShpZGVudGl0aWVzWzBdLmxpbmtUbykgPT0gJHNjb3BlLmdldElkS2V5KCRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmxpc3QubGVuZ3RoIC0gMV0ubGlua1RvKVxuICAgICAgICAgIGlkZW50aXRpZXMuc2hpZnQoKSAjIFByZXZlbnQgZHVwbGljYXRlXG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9ICRzY29wZS5pZHMubGlzdC5jb25jYXQoaWRlbnRpdGllcylcbiAgICAgICAgaWYgaWRlbnRpdGllcy5sZW5ndGggPiAwICYmICRzY29wZS5pZHMubGlzdC5sZW5ndGggPT0gaWRlbnRpdGllcy5sZW5ndGhcbiAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleSA9IDBcbiAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbMF0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5pZHMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICRzY29wZS5pZHMubGlzdFxuICAgICAgcmV0dXJuICRzY29wZS5zZWFyY2hSZXF1ZXN0XG5cbiAgICAkc2NvcGUuc2VhcmNoS2V5ZG93biA9IChldmVudCkgLT5cbiAgICAgIHN3aXRjaCAoaWYgZXZlbnQgdGhlbiBldmVudC53aGljaCBlbHNlIC0xKVxuICAgICAgICB3aGVuIDM4XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID4gMFxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5IC0gMV0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXktLVxuICAgICAgICAgIHNjcm9sbFRvIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkpXG4gICAgICAgIHdoZW4gNDBcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPCAoJHNjb3BlLmlkcy5saXN0Lmxlbmd0aCB8fCAwKSAtIDFcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleV0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleSArIDFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5KytcbiAgICAgICAgICBzY3JvbGxUbyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5KVxuICAgICAgICB3aGVuIDEzXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlkID0gJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XVxuICAgICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiBpZC5saW5rVG8ubmFtZSwgdmFsdWU6IGlkLmxpbmtUby52YWwgfVxuICAgICAgICB3aGVuIC0xXG4gICAgICAgICAgY2xlYXJUaW1lb3V0ICRzY29wZS50aW1lclxuICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICAgICAkc2NvcGUuc2VhcmNoKClcbiAgICAgICAgd2hlbiAzMywgMzQsIDM1LCAzNiwgMzcsIDM5XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBlbCA9IGFuZ3VsYXIuZWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAgIGNsZWFyVGltZW91dCAkc2NvcGUudGltZXJcbiAgICAgICAgICB3YWl0ID0gc2V0VGltZW91dCgoLT5cbiAgICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gZWwudmFsKClcbiAgICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgKSwgMzAwKVxuICAgICAgICAgICRzY29wZS50aW1lciA9IHdhaXRcbiAgICAgICAgICBicmVha1xuXG4gICAgJHNjb3BlLmRyb3Bkb3duU2VhcmNoU2VsZWN0ID0gKGl0ZW0pIC0+XG4gICAgICAkc3RhdGUuZ28oJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogaXRlbS5saW5rVG8ubmFtZSwgdmFsdWU6IGl0ZW0ubGlua1RvLnZhbCB9KVxuICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuXVxuIl19

(function() {
  'use strict';
  angular.module('identifiAngular').controller('IdentitiesController', [
    '$scope', '$state', '$rootScope', '$window', '$stateParams', '$location', '$http', '$q', '$timeout', 'config', 'localStorageService', function($scope, $state, $rootScope, $window, $stateParams, $location, $http, $q, $timeout, config, localStorageService) {
      var addLocalMessages, messagesAdded, thumbsDownObj, thumbsUpObj;
      $scope.activeTab = 0;
      $scope.activateTab = function(tabId) {
        return $scope.activeTab = tabId;
      };
      $scope.info = {};
      $scope.sent = [];
      $scope.received = [];
      $scope.connections = {};
      thumbsUpObj = {};
      thumbsDownObj = {};
      $scope.thumbsUp = [];
      $scope.thumbsDown = [];
      $scope.verifications = [];
      if ($stateParams.search) {
        $scope.query.term = $stateParams.search;
      }
      $scope.newAttribute = {
        type: '',
        value: $stateParams.value
      };
      $scope.filters.type = null;
      $scope.collapseLevel = {};
      $scope.collapseFilters = $window.innerWidth < 992;
      $scope.slider = {
        value: 0,
        options: {
          floor: -3,
          ceil: 3,
          hidePointerLabels: true,
          hideLimitLabels: true
        }
      };
      messagesAdded = false;
      $scope.$on('MessageAdded', function(event, args) {
        var ref;
        $scope.localMessages[args.message.hash] = args.message;
        $scope.localMessages[args.message.hash].local = true;
        localStorageService.set('localMessages', $scope.localMessages);
        messagesAdded = true;
        if (!$state.is('identities.show')) {
          return;
        }
        if (((ref = args.message.signedData.type) === 'verify_identity' || ref === 'unverify_identity') && !args.id.confirmed) {
          return $scope.getConnections();
        } else if (args.message.signedData.type === 'rating') {
          if (messagesAdded) {
            $scope.received.shift();
          }
          $scope.processMessages([args.message]);
          return $scope.received.unshift(args.message);
        }
      });
      $scope.addEntry = function(event, entry) {
        var params, recipient;
        recipient = [];
        if (entry.name) {
          recipient.push(['name', entry.name]);
        }
        if (entry.email) {
          recipient.push(['email', entry.email]);
        }
        if (entry.url) {
          recipient.push(['url', entry.url]);
        }
        if (entry.phone) {
          recipient.push(['phone', entry.phone]);
        }
        params = {
          type: 'verify_identity',
          recipient: recipient
        };
        return $scope.createMessage(event, params).then(function(response) {
          return $state.go('messages.show', {
            id: response.ipfs_hash
          });
        }, function(error) {
          return console.log("error", error);
        });
      };
      $scope.getConnections = function() {
        var alpha, c, conn, connections, has, hash, i, id, idKey, j, k, key, len, len1, len2, mostConfirmations, msg, percentage, r, ref, ref1, ref2, ref3, ref4;
        $scope.connections = {};
        connections = $scope.identity.data.attrs || [];
        if (connections.length > 0) {
          c = connections[0];
          mostConfirmations = c.conf;
        } else {
          mostConfirmations = 1;
        }
        for (i = 0, len = connections.length; i < len; i++) {
          id = connections[i];
          $scope.connections[$scope.getIdKey(id)] = Object.assign({}, id);
        }
        ref = $scope.localMessages;
        for (hash in ref) {
          msg = ref[hash];
          msg.data = msg.data || msg.signedData;
          if ((ref1 = msg.data.type) === 'verify_identity' || ref1 === 'unverify_identity') {
            has = false;
            ref2 = msg.data.recipient;
            for (j = 0, len1 = ref2.length; j < len1; j++) {
              r = ref2[j];
              if (r[0] === $scope.idType && r[1] === $scope.idValue) {
                has = true;
                break;
              }
            }
            if (!has) {
              continue;
            }
            ref3 = msg.data.recipient;
            for (k = 0, len2 = ref3.length; k < len2; k++) {
              r = ref3[k];
              if (!(r[0] === $scope.idType && r[1] === $scope.idValue)) {
                idKey = $scope.getIdKey(r);
                if ($scope.connections.hasOwnProperty(idKey)) {
                  if (msg.data.type === 'verify_identity') {
                    $scope.connections[idKey].conf += 1;
                  }
                  if (msg.data.type === 'unverify_identity') {
                    $scope.connections[idKey].ref += 1;
                  }
                } else {
                  $scope.connections[idKey] = {
                    name: msg.data.recipient[1][0],
                    val: msg.data.recipient[1][1],
                    conf: msg.data.type === 'verify_identity' ? 1 : 0,
                    ref: msg.data.type === 'unverify_identity' ? 1 : 0
                  };
                }
                break;
              }
            }
          }
        }
        ref4 = $scope.connections;
        for (key in ref4) {
          conn = ref4[key];
          conn.isCurrent = conn.name === $scope.idType && conn.val === $scope.idValue;
          switch (conn.name) {
            case 'email':
              conn.iconStyle = 'glyphicon glyphicon-envelope';
              conn.btnStyle = 'btn-success';
              conn.link = 'mailto:' + conn.val;
              conn.quickContact = true;
              $scope.info.email = $scope.info.email || conn.val;
              break;
            case 'bitcoin_address':
            case 'bitcoin':
              conn.iconStyle = 'fa fa-bitcoin';
              conn.btnStyle = 'btn-primary';
              conn.link = 'https://blockchain.info/address/' + conn.val;
              conn.quickContact = true;
              break;
            case 'gpg_fingerprint':
            case 'gpg_keyid':
              conn.iconStyle = 'fa fa-key';
              conn.btnStyle = 'btn-default';
              conn.link = 'https://pgp.mit.edu/pks/lookup?op=get&search=0x' + conn.val;
              break;
            case 'account':
              conn.iconStyle = 'fa fa-at';
              break;
            case 'nickname':
              $scope.info.nickname = $scope.info.nickname || conn.val;
              conn.iconStyle = 'glyphicon glyphicon-font';
              break;
            case 'name':
              $scope.info.name = $scope.info.name || conn.val;
              conn.iconStyle = 'glyphicon glyphicon-font';
              break;
            case 'tel':
            case 'phone':
              conn.iconStyle = 'glyphicon glyphicon-earphone';
              conn.btnStyle = 'btn-success';
              conn.link = 'tel:' + conn.val;
              conn.quickContact = true;
              break;
            case 'keyID':
              conn.iconStyle = 'fa fa-key';
              break;
            case 'coverPhoto':
              if (conn.val.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
                $scope.coverPhoto = $scope.coverPhoto || {
                  'background-image': 'url(' + ($scope.ipfsStorage.apiRoot || '') + conn.val + ')'
                };
              }
              break;
            case 'profilePhoto':
              if (conn.val.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
                $scope.profilePhoto = $scope.profilePhoto || ($scope.ipfsStorage.apiRoot || '') + conn.val;
              }
              break;
            case 'url':
              conn.link = conn.val;
              if (conn.val.indexOf('facebook.com/') > -1) {
                conn.iconStyle = 'fa fa-facebook';
                conn.btnStyle = 'btn-facebook';
                conn.link = conn.val;
                conn.linkName = conn.val.split('facebook.com/')[1];
                conn.quickContact = true;
              } else if (conn.val.indexOf('twitter.com/') > -1) {
                conn.iconStyle = 'fa fa-twitter';
                conn.btnStyle = 'btn-twitter';
                conn.link = conn.val;
                conn.linkName = conn.val.split('twitter.com/')[1];
                conn.quickContact = true;
              } else if (conn.val.indexOf('plus.google.com/') > -1) {
                conn.iconStyle = 'fa fa-google-plus';
                conn.btnStyle = 'btn-google-plus';
                conn.link = conn.val;
                conn.linkName = conn.val.split('plus.google.com/')[1];
                conn.quickContact = true;
              } else if (conn.val.indexOf('linkedin.com/') > -1) {
                conn.iconStyle = 'fa fa-linkedin';
                conn.btnStyle = 'btn-linkedin';
                conn.link = conn.val;
                conn.linkName = conn.val.split('linkedin.com/')[1];
                conn.quickContact = true;
              } else if (conn.val.indexOf('github.com/') > -1) {
                conn.iconStyle = 'fa fa-github';
                conn.btnStyle = 'btn-github';
                conn.link = conn.val;
                conn.linkName = conn.val.split('github.com/')[1];
                conn.quickContact = true;
              } else {
                conn.iconStyle = 'glyphicon glyphicon-link';
                conn.btnStyle = 'btn-default';
              }
          }
          if (conn.val && conn.val.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
            conn.link = ($scope.ipfsStorage.apiRoot || '') + conn.val;
            conn.linkName = conn.val;
            conn.iconStyle = 'glyphicon glyphicon-link';
            conn.btnStyle = 'btn-default';
          }
          if (conn.conf + conn.ref > 0) {
            percentage = conn.conf * 100 / (conn.conf + conn.ref);
            if (percentage >= 80) {
              alpha = conn.conf / mostConfirmations * 0.7 + 0.3;
            } else if (percentage >= 60) {
              conn.rowClass = 'warning';
            } else {
              conn.rowClass = 'danger';
            }
          }
          $scope.hasQuickContacts = $scope.hasQuickContacts || conn.quickContact;
        }
        $scope.connectionsLength = Object.keys($scope.connections).length;
        return $scope.setPageTitle($scope.info.name || $scope.info.nickname || $scope.idValue);
      };
      $scope.getConnectingMsgs = function(id1, id2) {
        var getVerifications;
        getVerifications = $q(function(resolve) {
          if (!$scope.verifications.length) {
            if ($scope.receivedIndex) {
              return $scope.receivedIndex.searchText('', 10000, false, true).then(function(res) {
                res.forEach(function(row) {
                  var msg, ref;
                  msg = row.value;
                  if (!msg.signedData) {
                    msg.signedData = KJUR.jws.JWS.parse(msg.jws).payloadObj;
                  }
                  if (((ref = msg.signedData.type) === 'verify_identity' || ref === 'verification' || ref === 'unverify_identity' || ref === 'unverification')) {
                    msg.gravatar = CryptoJS.MD5(msg.authorEmail || msg.signedData.author[0][1]).toString();
                    msg.linkToAuthor = msg.signedData.author[0];
                    return $scope.verifications.push(msg);
                  }
                });
                return resolve();
              });
            } else {
              return resolve();
            }
          } else {
            return resolve();
          }
        });
        return getVerifications.then(function() {
          var msgs;
          msgs = [];
          $scope.verifications.forEach(function(msg) {
            var hasId1, hasId2, i, id, len, ref;
            hasId1 = hasId2 = false;
            ref = msg.signedData.recipient;
            for (i = 0, len = ref.length; i < len; i++) {
              id = ref[i];
              if (id[0] === id2.name && id[1] === id2.val) {
                return msgs.push(msg);
              }
            }
          });
          return msgs;
        });
      };
      $scope.connectionClicked = function(event, id) {
        if (id.connecting_msgs) {
          return id.collapse = !id.collapse;
        } else {
          return $scope.getConnectingMsgs([$scope.idType, $scope.idValue], id).then(function(msgs) {
            id.connecting_msgs = msgs;
            return id.collapse = !id.collapse;
          });
        }
      };
      $scope.getSentMsgs = function() {
        var cursor;
        if ($scope.sent.loading || !$scope.identity || !$scope.identity.data.sent) {
          return;
        }
        $scope.sent.loading = true;
        cursor = $scope.sent.length ? $scope.sent[$scope.sent.length - 1].cursor : '';
        return $scope.identifiIndex.getSentMsgs($scope.identity, $scope.filters.limit, cursor).then(function(sent) {
          $scope.processMessages(sent, {
            authorIsSelf: true
          });
          return $scope.$apply(function() {
            Array.prototype.push.apply($scope.sent, sent);
            $scope.sent.loading = false;
            if (sent.length < $scope.filters.limit - 1) {
              return $scope.sent.finished = true;
            }
          });
        })["catch"](function(error) {
          console.log('error loading sent messages', error);
          return $scope.sent.finished = true;
        });
      };
      $scope.getReceivedMsgs = function() {
        var cursor;
        if ($scope.received.loading || !$scope.identity || !$scope.identity.data.received) {
          return;
        }
        $scope.received.loading = true;
        cursor = $scope.received.length ? $scope.received[$scope.received.length - 1].cursor : '';
        return $scope.identifiIndex.getReceivedMsgs($scope.identity, $scope.filters.limit, cursor).then(function(received) {
          $scope.processMessages(received, {
            recipientIsSelf: true
          });
          return $scope.$apply(function() {
            Array.prototype.push.apply($scope.received, received);
            $scope.received.loading = false;
            if (received.length < $scope.filters.limit - 1) {
              $scope.received.finished = true;
            }
            return received.forEach(function(msg) {
              var neutralRating;
              neutralRating = (msg.data.maxRating + msg.data.minRating) / 2;
              if (Object.keys(thumbsUpObj).length < 12 && msg.data.rating > neutralRating) {
                thumbsUpObj[msg.linkToAuthor] = msg;
                $scope.thumbsUp = Object.values(thumbsUpObj);
                return $scope.hasThumbsUp = true;
              } else if (Object.keys(thumbsDownObj).length < 12 && msg.data.rating < neutralRating) {
                thumbsDownObj[msg.linkToAuthor] = msg;
                $scope.thumbsDown = Object.values(thumbsDownObj);
                return $scope.hasThumbsDown = true;
              }
            });
          });
        })["catch"](function(error) {
          console.log('error loading received messages', error);
          return $scope.received.finished = true;
        });
      };
      addLocalMessages = function() {
        var connectionsToAdd, hash, msg, msgs, results;
        msgs = localStorageService.get('localMessages') || {};
        connectionsToAdd = {};
        results = [];
        for (hash in msgs) {
          msg = msgs[hash];
          msg.data = msg.data || msg.signedData;
          if (msg.data.recipient[0][0] === $scope.idType && msg.data.recipient[0][1] === $scope.idValue) {
            $scope.received.unshift(msg);
          }
          if (msg.data.author[0][0] === $scope.idType && msg.data.author[0][1] === $scope.idValue) {
            results.push($scope.sent.unshift(msg));
          } else {
            results.push(void 0);
          }
        }
        return results;
      };
      $scope.setFilters = function(filters) {
        angular.extend($scope.filters, filters);
        $scope.sent = [];
        $scope.received = [];
        addLocalMessages();
        return $timeout(function() {
          return $rootScope.$broadcast('msgScrollCheck');
        });
      };
      $scope.findOne = function() {
        $scope.idType = $stateParams.type;
        $scope.idValue = $stateParams.value;
        $scope.isCurrentUser = $scope.authentication && $scope.authentication.user && $scope.idType === $scope.authentication.user.idType && $scope.idValue === $scope.authentication.user.idValue;
        $scope.isUniqueType = config.uniqueAttributeTypes.indexOf($scope.idType) > -1;
        if (!$scope.isUniqueType) {
          $state.go('identities.list', {
            search: $scope.idValue
          });
          $scope.tabs[2].active = true;
        }
        $scope.setPageTitle($scope.idValue);
        $scope.$watch('apiReady', function(isReady) {
          if (isReady) {
            return $scope.identifiIndex.get($scope.idValue, $scope.idType).then(function(profile) {
              if (profile) {
                $scope.identity = profile;
                $scope.setIdentityNames($scope.identity);
                $scope.info.identity = $scope.identity;
                $scope.getSentMsgs(0);
                $scope.getReceivedMsgs(0);
              } else {
                $scope.$apply(function() {
                  return $scope.identity = new $window.identifiLib.Identity({
                    attrs: [
                      {
                        name: $scope.idType,
                        val: $scope.idValue
                      }
                    ]
                  });
                });
              }
              return $scope.$apply(function() {
                addLocalMessages();
                return $scope.getConnections();
              });
            })["catch"](function(err) {
              return console.log('error fetching profile', err);
            });
          }
        });
        if ($scope.idType === 'keyID' && $scope.idValue === $scope.nodeInfo.keyID) {
          return $scope.distance = 0;
        }
      };
      if ($state.is('identities.show')) {
        return $scope.findOne();
      }
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLHNCQUE3QyxFQUFxRTtJQUNuRSxRQURtRSxFQUVuRSxRQUZtRSxFQUduRSxZQUhtRSxFQUluRSxTQUptRSxFQUtuRSxjQUxtRSxFQU1uRSxXQU5tRSxFQU9uRSxPQVBtRSxFQVFuRSxJQVJtRSxFQVNuRSxVQVRtRSxFQVduRSxRQVhtRSxFQVluRSxxQkFabUUsRUFhbkUsU0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixVQUFqQixFQUE2QixPQUE3QixFQUFzQyxZQUF0QyxFQUFvRCxTQUFwRCxFQUErRCxLQUEvRCxFQUFzRSxFQUF0RSxFQUEwRSxRQUExRSxFQUFvRixNQUFwRixFQUE0RixtQkFBNUY7QUFDRSxVQUFBO01BQUEsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFDbkIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsU0FBQyxLQUFEO2VBQVcsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFBOUI7TUFDckIsTUFBTSxDQUFDLElBQVAsR0FBYztNQUNkLE1BQU0sQ0FBQyxJQUFQLEdBQWM7TUFDZCxNQUFNLENBQUMsUUFBUCxHQUFrQjtNQUNsQixNQUFNLENBQUMsV0FBUCxHQUFxQjtNQUNyQixXQUFBLEdBQWM7TUFDZCxhQUFBLEdBQWdCO01BQ2hCLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO01BQ2xCLE1BQU0sQ0FBQyxVQUFQLEdBQW9CO01BQ3BCLE1BQU0sQ0FBQyxhQUFQLEdBQXVCO01BQ3ZCLElBQTJDLFlBQVksQ0FBQyxNQUF4RDtRQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBYixHQUFvQixZQUFZLENBQUMsT0FBakM7O01BQ0EsTUFBTSxDQUFDLFlBQVAsR0FDRTtRQUFBLElBQUEsRUFBTSxFQUFOO1FBQ0EsS0FBQSxFQUFPLFlBQVksQ0FBQyxLQURwQjs7TUFFRixNQUFNLENBQUMsT0FBTyxDQUFDLElBQWYsR0FBc0I7TUFDdEIsTUFBTSxDQUFDLGFBQVAsR0FBdUI7TUFDdkIsTUFBTSxDQUFDLGVBQVAsR0FBeUIsT0FBTyxDQUFDLFVBQVIsR0FBcUI7TUFDOUMsTUFBTSxDQUFDLE1BQVAsR0FDRTtRQUFBLEtBQUEsRUFBTyxDQUFQO1FBQ0EsT0FBQSxFQUNFO1VBQUEsS0FBQSxFQUFPLENBQUMsQ0FBUjtVQUNBLElBQUEsRUFBTSxDQUROO1VBRUEsaUJBQUEsRUFBbUIsSUFGbkI7VUFHQSxlQUFBLEVBQWlCLElBSGpCO1NBRkY7O01BT0YsYUFBQSxHQUFnQjtNQUNoQixNQUFNLENBQUMsR0FBUCxDQUFXLGNBQVgsRUFBMkIsU0FBQyxLQUFELEVBQVEsSUFBUjtBQUN6QixZQUFBO1FBQUEsTUFBTSxDQUFDLGFBQWMsQ0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQWIsQ0FBckIsR0FBMEMsSUFBSSxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxhQUFjLENBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFiLENBQWtCLENBQUMsS0FBeEMsR0FBZ0Q7UUFDaEQsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEIsRUFBeUMsTUFBTSxDQUFDLGFBQWhEO1FBQ0EsYUFBQSxHQUFnQjtRQUNoQixJQUFBLENBQWMsTUFBTSxDQUFDLEVBQVAsQ0FBVSxpQkFBVixDQUFkO0FBQUEsaUJBQUE7O1FBQ0EsSUFBRyxRQUFBLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQXhCLEtBQWlDLGlCQUFqQyxJQUFBLEdBQUEsS0FBb0QsbUJBQXBELENBQUEsSUFBNkUsQ0FBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQTVGO2lCQUNFLE1BQU0sQ0FBQyxjQUFQLENBQUEsRUFERjtTQUFBLE1BRUssSUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUF4QixLQUFnQyxRQUFuQztVQUNILElBQUcsYUFBSDtZQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBaEIsQ0FBQSxFQURGOztVQUVBLE1BQU0sQ0FBQyxlQUFQLENBQXVCLENBQUMsSUFBSSxDQUFDLE9BQU4sQ0FBdkI7aUJBQ0EsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFoQixDQUF3QixJQUFJLENBQUMsT0FBN0IsRUFKRzs7TUFSb0IsQ0FBM0I7TUFjQSxNQUFNLENBQUMsUUFBUCxHQUFrQixTQUFDLEtBQUQsRUFBUSxLQUFSO0FBQ2hCLFlBQUE7UUFBQSxTQUFBLEdBQVk7UUFDWixJQUFHLEtBQUssQ0FBQyxJQUFUO1VBQ0UsU0FBUyxDQUFDLElBQVYsQ0FBZSxDQUFDLE1BQUQsRUFBUyxLQUFLLENBQUMsSUFBZixDQUFmLEVBREY7O1FBRUEsSUFBRyxLQUFLLENBQUMsS0FBVDtVQUNFLFNBQVMsQ0FBQyxJQUFWLENBQWUsQ0FBQyxPQUFELEVBQVUsS0FBSyxDQUFDLEtBQWhCLENBQWYsRUFERjs7UUFFQSxJQUFHLEtBQUssQ0FBQyxHQUFUO1VBQ0UsU0FBUyxDQUFDLElBQVYsQ0FBZSxDQUFDLEtBQUQsRUFBUSxLQUFLLENBQUMsR0FBZCxDQUFmLEVBREY7O1FBRUEsSUFBRyxLQUFLLENBQUMsS0FBVDtVQUNFLFNBQVMsQ0FBQyxJQUFWLENBQWUsQ0FBQyxPQUFELEVBQVUsS0FBSyxDQUFDLEtBQWhCLENBQWYsRUFERjs7UUFFQSxNQUFBLEdBQ0U7VUFBQSxJQUFBLEVBQU0saUJBQU47VUFDQSxTQUFBLEVBQVcsU0FEWDs7ZUFFRixNQUFNLENBQUMsYUFBUCxDQUFxQixLQUFyQixFQUE0QixNQUE1QixDQUFtQyxDQUFDLElBQXBDLENBQXlDLFNBQUMsUUFBRDtpQkFDdkMsTUFBTSxDQUFDLEVBQVAsQ0FBVSxlQUFWLEVBQTJCO1lBQUUsRUFBQSxFQUFJLFFBQVEsQ0FBQyxTQUFmO1dBQTNCO1FBRHVDLENBQXpDLEVBRUUsU0FBQyxLQUFEO2lCQUNBLE9BQU8sQ0FBQyxHQUFSLENBQVksT0FBWixFQUFxQixLQUFyQjtRQURBLENBRkY7TUFiZ0I7TUFrQmxCLE1BQU0sQ0FBQyxjQUFQLEdBQXdCLFNBQUE7QUFDdEIsWUFBQTtRQUFBLE1BQU0sQ0FBQyxXQUFQLEdBQXFCO1FBQ3JCLFdBQUEsR0FBYyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFyQixJQUE4QjtRQUM1QyxJQUFHLFdBQVcsQ0FBQyxNQUFaLEdBQXFCLENBQXhCO1VBQ0UsQ0FBQSxHQUFJLFdBQVksQ0FBQSxDQUFBO1VBQ2hCLGlCQUFBLEdBQW9CLENBQUMsQ0FBQyxLQUZ4QjtTQUFBLE1BQUE7VUFJRSxpQkFBQSxHQUFvQixFQUp0Qjs7QUFLQSxhQUFBLDZDQUFBOztVQUNFLE1BQU0sQ0FBQyxXQUFZLENBQUEsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsRUFBaEIsQ0FBQSxDQUFuQixHQUEwQyxNQUFNLENBQUMsTUFBUCxDQUFjLEVBQWQsRUFBa0IsRUFBbEI7QUFENUM7QUFFQTtBQUFBLGFBQUEsV0FBQTs7VUFDRSxHQUFHLENBQUMsSUFBSixHQUFXLEdBQUcsQ0FBQyxJQUFKLElBQVksR0FBRyxDQUFDO1VBQzNCLFlBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFULEtBQWtCLGlCQUFsQixJQUFBLElBQUEsS0FBcUMsbUJBQXhDO1lBQ0UsR0FBQSxHQUFNO0FBQ047QUFBQSxpQkFBQSx3Q0FBQTs7Y0FDRSxJQUFHLENBQUUsQ0FBQSxDQUFBLENBQUYsS0FBUSxNQUFNLENBQUMsTUFBZixJQUEwQixDQUFFLENBQUEsQ0FBQSxDQUFGLEtBQVEsTUFBTSxDQUFDLE9BQTVDO2dCQUNFLEdBQUEsR0FBTTtBQUNOLHNCQUZGOztBQURGO1lBSUEsSUFBQSxDQUFnQixHQUFoQjtBQUFBLHVCQUFBOztBQUNBO0FBQUEsaUJBQUEsd0NBQUE7O2NBQ0UsSUFBQSxDQUFBLENBQU8sQ0FBRSxDQUFBLENBQUEsQ0FBRixLQUFRLE1BQU0sQ0FBQyxNQUFmLElBQTBCLENBQUUsQ0FBQSxDQUFBLENBQUYsS0FBUSxNQUFNLENBQUMsT0FBaEQsQ0FBQTtnQkFDRSxLQUFBLEdBQVEsTUFBTSxDQUFDLFFBQVAsQ0FBZ0IsQ0FBaEI7Z0JBQ1IsSUFBRyxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQW5CLENBQWtDLEtBQWxDLENBQUg7a0JBQ0UsSUFBdUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFULEtBQWlCLGlCQUF4RDtvQkFBQSxNQUFNLENBQUMsV0FBWSxDQUFBLEtBQUEsQ0FBTSxDQUFDLElBQTFCLElBQWtDLEVBQWxDOztrQkFDQSxJQUFzQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQVQsS0FBaUIsbUJBQXZEO29CQUFBLE1BQU0sQ0FBQyxXQUFZLENBQUEsS0FBQSxDQUFNLENBQUMsR0FBMUIsSUFBaUMsRUFBakM7bUJBRkY7aUJBQUEsTUFBQTtrQkFJRSxNQUFNLENBQUMsV0FBWSxDQUFBLEtBQUEsQ0FBbkIsR0FDRTtvQkFBQSxJQUFBLEVBQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFVLENBQUEsQ0FBQSxDQUFHLENBQUEsQ0FBQSxDQUE1QjtvQkFDQSxHQUFBLEVBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFVLENBQUEsQ0FBQSxDQUFHLENBQUEsQ0FBQSxDQUQzQjtvQkFFQSxJQUFBLEVBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFULEtBQWlCLGlCQUFwQixHQUEyQyxDQUEzQyxHQUFrRCxDQUZ4RDtvQkFHQSxHQUFBLEVBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFULEtBQWlCLG1CQUFwQixHQUE2QyxDQUE3QyxHQUFvRCxDQUh6RDtvQkFMSjs7QUFTQSxzQkFYRjs7QUFERixhQVBGOztBQUZGO0FBc0JBO0FBQUEsYUFBQSxXQUFBOztVQUNFLElBQUksQ0FBQyxTQUFMLEdBQWlCLElBQUksQ0FBQyxJQUFMLEtBQWEsTUFBTSxDQUFDLE1BQXBCLElBQStCLElBQUksQ0FBQyxHQUFMLEtBQVksTUFBTSxDQUFDO0FBQ25FLGtCQUFPLElBQUksQ0FBQyxJQUFaO0FBQUEsaUJBQ08sT0FEUDtjQUVJLElBQUksQ0FBQyxTQUFMLEdBQWlCO2NBQ2pCLElBQUksQ0FBQyxRQUFMLEdBQWdCO2NBQ2hCLElBQUksQ0FBQyxJQUFMLEdBQVksU0FBQSxHQUFZLElBQUksQ0FBQztjQUM3QixJQUFJLENBQUMsWUFBTCxHQUFvQjtjQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQVosR0FBb0IsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFaLElBQXFCLElBQUksQ0FBQztBQUwzQztBQURQLGlCQU9PLGlCQVBQO0FBQUEsaUJBTzBCLFNBUDFCO2NBUUksSUFBSSxDQUFDLFNBQUwsR0FBaUI7Y0FDakIsSUFBSSxDQUFDLFFBQUwsR0FBZ0I7Y0FDaEIsSUFBSSxDQUFDLElBQUwsR0FBWSxrQ0FBQSxHQUFxQyxJQUFJLENBQUM7Y0FDdEQsSUFBSSxDQUFDLFlBQUwsR0FBb0I7QUFKRTtBQVAxQixpQkFZTyxpQkFaUDtBQUFBLGlCQVkwQixXQVoxQjtjQWFJLElBQUksQ0FBQyxTQUFMLEdBQWlCO2NBQ2pCLElBQUksQ0FBQyxRQUFMLEdBQWdCO2NBQ2hCLElBQUksQ0FBQyxJQUFMLEdBQVksaURBQUEsR0FBb0QsSUFBSSxDQUFDO0FBSC9DO0FBWjFCLGlCQWdCTyxTQWhCUDtjQWlCSSxJQUFJLENBQUMsU0FBTCxHQUFpQjtBQURkO0FBaEJQLGlCQWtCTyxVQWxCUDtjQW1CSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVosR0FBdUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFaLElBQXdCLElBQUksQ0FBQztjQUNwRCxJQUFJLENBQUMsU0FBTCxHQUFpQjtBQUZkO0FBbEJQLGlCQXFCTyxNQXJCUDtjQXNCSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQVosR0FBbUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFaLElBQW9CLElBQUksQ0FBQztjQUM1QyxJQUFJLENBQUMsU0FBTCxHQUFpQjtBQUZkO0FBckJQLGlCQXdCTyxLQXhCUDtBQUFBLGlCQXdCYyxPQXhCZDtjQXlCSSxJQUFJLENBQUMsU0FBTCxHQUFpQjtjQUNqQixJQUFJLENBQUMsUUFBTCxHQUFnQjtjQUNoQixJQUFJLENBQUMsSUFBTCxHQUFZLE1BQUEsR0FBUyxJQUFJLENBQUM7Y0FDMUIsSUFBSSxDQUFDLFlBQUwsR0FBb0I7QUFKVjtBQXhCZCxpQkE2Qk8sT0E3QlA7Y0E4QkksSUFBSSxDQUFDLFNBQUwsR0FBaUI7QUFEZDtBQTdCUCxpQkErQk8sWUEvQlA7Y0FnQ0ksSUFBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQVQsQ0FBZSw4QkFBZixDQUFIO2dCQUNFLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLE1BQU0sQ0FBQyxVQUFQLElBQXFCO2tCQUFFLGtCQUFBLEVBQW9CLE1BQUEsR0FBUyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsT0FBbkIsSUFBOEIsRUFBL0IsQ0FBVCxHQUE4QyxJQUFJLENBQUMsR0FBbkQsR0FBeUQsR0FBL0U7a0JBRDNDOztBQURHO0FBL0JQLGlCQWtDTyxjQWxDUDtjQW1DSSxJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBVCxDQUFlLDhCQUFmLENBQUg7Z0JBQ0UsTUFBTSxDQUFDLFlBQVAsR0FBc0IsTUFBTSxDQUFDLFlBQVAsSUFBdUIsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQW5CLElBQThCLEVBQS9CLENBQUEsR0FBcUMsSUFBSSxDQUFDLElBRHpGOztBQURHO0FBbENQLGlCQXFDTyxLQXJDUDtjQXNDSSxJQUFJLENBQUMsSUFBTCxHQUFZLElBQUksQ0FBQztjQUNqQixJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBVCxDQUFpQixlQUFqQixDQUFBLEdBQW9DLENBQUMsQ0FBeEM7Z0JBQ0UsSUFBSSxDQUFDLFNBQUwsR0FBaUI7Z0JBQ2pCLElBQUksQ0FBQyxRQUFMLEdBQWdCO2dCQUNoQixJQUFJLENBQUMsSUFBTCxHQUFZLElBQUksQ0FBQztnQkFDakIsSUFBSSxDQUFDLFFBQUwsR0FBZ0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFULENBQWUsZUFBZixDQUFnQyxDQUFBLENBQUE7Z0JBQ2hELElBQUksQ0FBQyxZQUFMLEdBQW9CLEtBTHRCO2VBQUEsTUFNSyxJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBVCxDQUFpQixjQUFqQixDQUFBLEdBQW1DLENBQUMsQ0FBdkM7Z0JBQ0gsSUFBSSxDQUFDLFNBQUwsR0FBaUI7Z0JBQ2pCLElBQUksQ0FBQyxRQUFMLEdBQWdCO2dCQUNoQixJQUFJLENBQUMsSUFBTCxHQUFZLElBQUksQ0FBQztnQkFDakIsSUFBSSxDQUFDLFFBQUwsR0FBZ0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFULENBQWUsY0FBZixDQUErQixDQUFBLENBQUE7Z0JBQy9DLElBQUksQ0FBQyxZQUFMLEdBQW9CLEtBTGpCO2VBQUEsTUFNQSxJQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBVCxDQUFpQixrQkFBakIsQ0FBQSxHQUF1QyxDQUFDLENBQTNDO2dCQUNILElBQUksQ0FBQyxTQUFMLEdBQWlCO2dCQUNqQixJQUFJLENBQUMsUUFBTCxHQUFnQjtnQkFDaEIsSUFBSSxDQUFDLElBQUwsR0FBWSxJQUFJLENBQUM7Z0JBQ2pCLElBQUksQ0FBQyxRQUFMLEdBQWdCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBVCxDQUFlLGtCQUFmLENBQW1DLENBQUEsQ0FBQTtnQkFDbkQsSUFBSSxDQUFDLFlBQUwsR0FBb0IsS0FMakI7ZUFBQSxNQU1BLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFULENBQWlCLGVBQWpCLENBQUEsR0FBb0MsQ0FBQyxDQUF4QztnQkFDSCxJQUFJLENBQUMsU0FBTCxHQUFpQjtnQkFDakIsSUFBSSxDQUFDLFFBQUwsR0FBZ0I7Z0JBQ2hCLElBQUksQ0FBQyxJQUFMLEdBQVksSUFBSSxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBTCxHQUFnQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQVQsQ0FBZSxlQUFmLENBQWdDLENBQUEsQ0FBQTtnQkFDaEQsSUFBSSxDQUFDLFlBQUwsR0FBb0IsS0FMakI7ZUFBQSxNQU1BLElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFULENBQWlCLGFBQWpCLENBQUEsR0FBa0MsQ0FBQyxDQUF0QztnQkFDSCxJQUFJLENBQUMsU0FBTCxHQUFpQjtnQkFDakIsSUFBSSxDQUFDLFFBQUwsR0FBZ0I7Z0JBQ2hCLElBQUksQ0FBQyxJQUFMLEdBQVksSUFBSSxDQUFDO2dCQUNqQixJQUFJLENBQUMsUUFBTCxHQUFnQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQVQsQ0FBZSxhQUFmLENBQThCLENBQUEsQ0FBQTtnQkFDOUMsSUFBSSxDQUFDLFlBQUwsR0FBb0IsS0FMakI7ZUFBQSxNQUFBO2dCQU9ILElBQUksQ0FBQyxTQUFMLEdBQWlCO2dCQUNqQixJQUFJLENBQUMsUUFBTCxHQUFnQixjQVJiOztBQS9EVDtVQXdFQSxJQUFHLElBQUksQ0FBQyxHQUFMLElBQWEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFULENBQWUsOEJBQWYsQ0FBaEI7WUFDRSxJQUFJLENBQUMsSUFBTCxHQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFuQixJQUE4QixFQUEvQixDQUFBLEdBQXFDLElBQUksQ0FBQztZQUN0RCxJQUFJLENBQUMsUUFBTCxHQUFnQixJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFNBQUwsR0FBaUI7WUFDakIsSUFBSSxDQUFDLFFBQUwsR0FBZ0IsY0FKbEI7O1VBS0EsSUFBRyxJQUFJLENBQUMsSUFBTCxHQUFZLElBQUksQ0FBQyxHQUFqQixHQUF1QixDQUExQjtZQUNFLFVBQUEsR0FBYSxJQUFJLENBQUMsSUFBTCxHQUFZLEdBQVosR0FBa0IsQ0FBQyxJQUFJLENBQUMsSUFBTCxHQUFZLElBQUksQ0FBQyxHQUFsQjtZQUMvQixJQUFHLFVBQUEsSUFBYyxFQUFqQjtjQUNFLEtBQUEsR0FBUSxJQUFJLENBQUMsSUFBTCxHQUFZLGlCQUFaLEdBQWdDLEdBQWhDLEdBQXNDLElBRGhEO2FBQUEsTUFHSyxJQUFHLFVBQUEsSUFBYyxFQUFqQjtjQUNILElBQUksQ0FBQyxRQUFMLEdBQWdCLFVBRGI7YUFBQSxNQUFBO2NBR0gsSUFBSSxDQUFDLFFBQUwsR0FBZ0IsU0FIYjthQUxQOztVQVNBLE1BQU0sQ0FBQyxnQkFBUCxHQUEwQixNQUFNLENBQUMsZ0JBQVAsSUFBMkIsSUFBSSxDQUFDO0FBeEY1RDtRQXlGQSxNQUFNLENBQUMsaUJBQVAsR0FBMkIsTUFBTSxDQUFDLElBQVAsQ0FBWSxNQUFNLENBQUMsV0FBbkIsQ0FBK0IsQ0FBQztlQUMzRCxNQUFNLENBQUMsWUFBUCxDQUFxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQVosSUFBb0IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFoQyxJQUE0QyxNQUFNLENBQUMsT0FBeEU7TUExSHNCO01BNEh4QixNQUFNLENBQUMsaUJBQVAsR0FBMkIsU0FBQyxHQUFELEVBQU0sR0FBTjtBQUN6QixZQUFBO1FBQUEsZ0JBQUEsR0FBbUIsRUFBQSxDQUFHLFNBQUMsT0FBRDtVQUNwQixJQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUF6QjtZQUNFLElBQUcsTUFBTSxDQUFDLGFBQVY7cUJBQ0UsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFyQixDQUFnQyxFQUFoQyxFQUFvQyxLQUFwQyxFQUEyQyxLQUEzQyxFQUFrRCxJQUFsRCxDQUF1RCxDQUFDLElBQXhELENBQTZELFNBQUMsR0FBRDtnQkFDM0QsR0FBRyxDQUFDLE9BQUosQ0FBWSxTQUFDLEdBQUQ7QUFDVixzQkFBQTtrQkFBQSxHQUFBLEdBQU0sR0FBRyxDQUFDO2tCQUNWLElBQUEsQ0FBTyxHQUFHLENBQUMsVUFBWDtvQkFDRSxHQUFHLENBQUMsVUFBSixHQUFpQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFiLENBQW1CLEdBQUcsQ0FBQyxHQUF2QixDQUEyQixDQUFDLFdBRC9DOztrQkFFQSxJQUFHLFFBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFmLEtBQXdCLGlCQUF4QixJQUFBLEdBQUEsS0FBMkMsY0FBM0MsSUFBQSxHQUFBLEtBQTJELG1CQUEzRCxJQUFBLEdBQUEsS0FBZ0YsZ0JBQWpGLENBQUg7b0JBQ0UsR0FBRyxDQUFDLFFBQUosR0FBZSxRQUFRLENBQUMsR0FBVCxDQUFhLEdBQUcsQ0FBQyxXQUFKLElBQW1CLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTyxDQUFBLENBQUEsQ0FBRyxDQUFBLENBQUEsQ0FBekQsQ0FBNEQsQ0FBQyxRQUE3RCxDQUFBO29CQUNmLEdBQUcsQ0FBQyxZQUFKLEdBQW1CLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTyxDQUFBLENBQUE7MkJBQ3pDLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBckIsQ0FBMEIsR0FBMUIsRUFIRjs7Z0JBSlUsQ0FBWjt1QkFRQSxPQUFBLENBQUE7Y0FUMkQsQ0FBN0QsRUFERjthQUFBLE1BQUE7cUJBWUUsT0FBQSxDQUFBLEVBWkY7YUFERjtXQUFBLE1BQUE7bUJBZUUsT0FBQSxDQUFBLEVBZkY7O1FBRG9CLENBQUg7ZUFpQm5CLGdCQUFnQixDQUFDLElBQWpCLENBQXNCLFNBQUE7QUFDcEIsY0FBQTtVQUFBLElBQUEsR0FBTztVQUNQLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBckIsQ0FBNkIsU0FBQyxHQUFEO0FBQzNCLGdCQUFBO1lBQUEsTUFBQSxHQUFTLE1BQUEsR0FBUztBQUNsQjtBQUFBLGlCQUFBLHFDQUFBOztjQUNFLElBQXdCLEVBQUcsQ0FBQSxDQUFBLENBQUgsS0FBUyxHQUFHLENBQUMsSUFBYixJQUFzQixFQUFHLENBQUEsQ0FBQSxDQUFILEtBQVMsR0FBRyxDQUFDLEdBQTNEO0FBQUEsdUJBQU8sSUFBSSxDQUFDLElBQUwsQ0FBVSxHQUFWLEVBQVA7O0FBREY7VUFGMkIsQ0FBN0I7QUFJQSxpQkFBTztRQU5hLENBQXRCO01BbEJ5QjtNQTBCM0IsTUFBTSxDQUFDLGlCQUFQLEdBQTJCLFNBQUMsS0FBRCxFQUFRLEVBQVI7UUFDekIsSUFBRyxFQUFFLENBQUMsZUFBTjtpQkFDRSxFQUFFLENBQUMsUUFBSCxHQUFjLENBQUMsRUFBRSxDQUFDLFNBRHBCO1NBQUEsTUFBQTtpQkFHRSxNQUFNLENBQUMsaUJBQVAsQ0FBeUIsQ0FBQyxNQUFNLENBQUMsTUFBUixFQUFnQixNQUFNLENBQUMsT0FBdkIsQ0FBekIsRUFBMEQsRUFBMUQsQ0FBNkQsQ0FBQyxJQUE5RCxDQUFtRSxTQUFDLElBQUQ7WUFDakUsRUFBRSxDQUFDLGVBQUgsR0FBcUI7bUJBQ3JCLEVBQUUsQ0FBQyxRQUFILEdBQWMsQ0FBQyxFQUFFLENBQUM7VUFGK0MsQ0FBbkUsRUFIRjs7TUFEeUI7TUFRM0IsTUFBTSxDQUFDLFdBQVAsR0FBcUIsU0FBQTtBQUNuQixZQUFBO1FBQUEsSUFBVSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQVosSUFBdUIsQ0FBSSxNQUFNLENBQUMsUUFBbEMsSUFBOEMsQ0FBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFqRjtBQUFBLGlCQUFBOztRQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBWixHQUFzQjtRQUN0QixNQUFBLEdBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFmLEdBQTJCLE1BQU0sQ0FBQyxJQUFLLENBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFaLEdBQXFCLENBQXJCLENBQXVCLENBQUMsTUFBL0QsR0FBMkU7ZUFDcEYsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFyQixDQUFpQyxNQUFNLENBQUMsUUFBeEMsRUFBa0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFqRSxFQUF3RSxNQUF4RSxDQUNBLENBQUMsSUFERCxDQUNNLFNBQUMsSUFBRDtVQUNKLE1BQU0sQ0FBQyxlQUFQLENBQXVCLElBQXZCLEVBQTZCO1lBQUUsWUFBQSxFQUFjLElBQWhCO1dBQTdCO2lCQUNBLE1BQU0sQ0FBQyxNQUFQLENBQWMsU0FBQTtZQUNaLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQXJCLENBQTJCLE1BQU0sQ0FBQyxJQUFsQyxFQUF3QyxJQUF4QztZQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBWixHQUFzQjtZQUN0QixJQUFHLElBQUksQ0FBQyxNQUFMLEdBQWMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFmLEdBQXVCLENBQXhDO3FCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBWixHQUF1QixLQUR6Qjs7VUFIWSxDQUFkO1FBRkksQ0FETixDQVFBLEVBQUMsS0FBRCxFQVJBLENBUU8sU0FBQyxLQUFEO1VBQ0wsT0FBTyxDQUFDLEdBQVIsQ0FBWSw2QkFBWixFQUEyQyxLQUEzQztpQkFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVosR0FBdUI7UUFGbEIsQ0FSUDtNQUptQjtNQWdCckIsTUFBTSxDQUFDLGVBQVAsR0FBeUIsU0FBQTtBQUN2QixZQUFBO1FBQUEsSUFBVSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQWhCLElBQTJCLENBQUksTUFBTSxDQUFDLFFBQXRDLElBQWtELENBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBckY7QUFBQSxpQkFBQTs7UUFDQSxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQWhCLEdBQTBCO1FBQzFCLE1BQUEsR0FBWSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQW5CLEdBQStCLE1BQU0sQ0FBQyxRQUFTLENBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFoQixHQUF5QixDQUF6QixDQUEyQixDQUFDLE1BQTNFLEdBQXVGO2VBQ2hHLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBckIsQ0FBcUMsTUFBTSxDQUFDLFFBQTVDLEVBQXNELE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBckUsRUFBNEUsTUFBNUUsQ0FDQSxDQUFDLElBREQsQ0FDTSxTQUFDLFFBQUQ7VUFDSixNQUFNLENBQUMsZUFBUCxDQUF1QixRQUF2QixFQUFpQztZQUFFLGVBQUEsRUFBaUIsSUFBbkI7V0FBakM7aUJBQ0EsTUFBTSxDQUFDLE1BQVAsQ0FBYyxTQUFBO1lBQ1osS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBckIsQ0FBMkIsTUFBTSxDQUFDLFFBQWxDLEVBQTRDLFFBQTVDO1lBQ0EsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFoQixHQUEwQjtZQUMxQixJQUFHLFFBQVEsQ0FBQyxNQUFULEdBQWtCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBZixHQUF1QixDQUE1QztjQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBaEIsR0FBMkIsS0FEN0I7O21CQUVBLFFBQVEsQ0FBQyxPQUFULENBQWlCLFNBQUMsR0FBRDtBQUNmLGtCQUFBO2NBQUEsYUFBQSxHQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBVCxHQUFxQixHQUFHLENBQUMsSUFBSSxDQUFDLFNBQS9CLENBQUEsR0FBNEM7Y0FDNUQsSUFBRyxNQUFNLENBQUMsSUFBUCxDQUFZLFdBQVosQ0FBd0IsQ0FBQyxNQUF6QixHQUFrQyxFQUFsQyxJQUF5QyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQVQsR0FBa0IsYUFBOUQ7Z0JBQ0UsV0FBWSxDQUFBLEdBQUcsQ0FBQyxZQUFKLENBQVosR0FBZ0M7Z0JBQ2hDLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLE1BQU0sQ0FBQyxNQUFQLENBQWMsV0FBZDt1QkFDbEIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsS0FIdkI7ZUFBQSxNQUlLLElBQUcsTUFBTSxDQUFDLElBQVAsQ0FBWSxhQUFaLENBQTBCLENBQUMsTUFBM0IsR0FBb0MsRUFBcEMsSUFBMkMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFULEdBQWtCLGFBQWhFO2dCQUNILGFBQWMsQ0FBQSxHQUFHLENBQUMsWUFBSixDQUFkLEdBQWtDO2dCQUNsQyxNQUFNLENBQUMsVUFBUCxHQUFvQixNQUFNLENBQUMsTUFBUCxDQUFjLGFBQWQ7dUJBQ3BCLE1BQU0sQ0FBQyxhQUFQLEdBQXVCLEtBSHBCOztZQU5VLENBQWpCO1VBTFksQ0FBZDtRQUZJLENBRE4sQ0FrQkEsRUFBQyxLQUFELEVBbEJBLENBa0JPLFNBQUMsS0FBRDtVQUNMLE9BQU8sQ0FBQyxHQUFSLENBQVksaUNBQVosRUFBK0MsS0FBL0M7aUJBQ0EsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFoQixHQUEyQjtRQUZ0QixDQWxCUDtNQUp1QjtNQTBCekIsZ0JBQUEsR0FBbUIsU0FBQTtBQUNqQixZQUFBO1FBQUEsSUFBQSxHQUFPLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLGVBQXhCLENBQUEsSUFBNEM7UUFDbkQsZ0JBQUEsR0FBbUI7QUFDbkI7YUFBQSxZQUFBOztVQUNFLEdBQUcsQ0FBQyxJQUFKLEdBQVcsR0FBRyxDQUFDLElBQUosSUFBWSxHQUFHLENBQUM7VUFDM0IsSUFBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVUsQ0FBQSxDQUFBLENBQUcsQ0FBQSxDQUFBLENBQXRCLEtBQTRCLE1BQU0sQ0FBQyxNQUFuQyxJQUE4QyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVUsQ0FBQSxDQUFBLENBQUcsQ0FBQSxDQUFBLENBQXRCLEtBQTRCLE1BQU0sQ0FBQyxPQUFwRjtZQUNFLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBaEIsQ0FBd0IsR0FBeEIsRUFERjs7VUFFQSxJQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFBLENBQUEsQ0FBRyxDQUFBLENBQUEsQ0FBbkIsS0FBeUIsTUFBTSxDQUFDLE1BQWhDLElBQTJDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTyxDQUFBLENBQUEsQ0FBRyxDQUFBLENBQUEsQ0FBbkIsS0FBeUIsTUFBTSxDQUFDLE9BQTlFO3lCQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBWixDQUFvQixHQUFwQixHQURGO1dBQUEsTUFBQTtpQ0FBQTs7QUFKRjs7TUFIaUI7TUFVbkIsTUFBTSxDQUFDLFVBQVAsR0FBb0IsU0FBQyxPQUFEO1FBQ2xCLE9BQU8sQ0FBQyxNQUFSLENBQWUsTUFBTSxDQUFDLE9BQXRCLEVBQStCLE9BQS9CO1FBQ0EsTUFBTSxDQUFDLElBQVAsR0FBYztRQUNkLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO1FBQ2xCLGdCQUFBLENBQUE7ZUFDQSxRQUFBLENBQVMsU0FBQTtpQkFBRyxVQUFVLENBQUMsVUFBWCxDQUFzQixnQkFBdEI7UUFBSCxDQUFUO01BTGtCO01BT3BCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQUE7UUFDZixNQUFNLENBQUMsTUFBUCxHQUFnQixZQUFZLENBQUM7UUFDN0IsTUFBTSxDQUFDLE9BQVAsR0FBaUIsWUFBWSxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxhQUFQLEdBQXVCLE1BQU0sQ0FBQyxjQUFQLElBQ3JCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFERCxJQUVyQixNQUFNLENBQUMsTUFBUCxLQUFpQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUZ2QixJQUdyQixNQUFNLENBQUMsT0FBUCxLQUFrQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztRQUMvQyxNQUFNLENBQUMsWUFBUCxHQUFzQixNQUFNLENBQUMsb0JBQW9CLENBQUMsT0FBNUIsQ0FBb0MsTUFBTSxDQUFDLE1BQTNDLENBQUEsR0FBcUQsQ0FBQztRQUM1RSxJQUFHLENBQUMsTUFBTSxDQUFDLFlBQVg7VUFDRSxNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWLEVBQTZCO1lBQUUsTUFBQSxFQUFRLE1BQU0sQ0FBQyxPQUFqQjtXQUE3QjtVQUNBLE1BQU0sQ0FBQyxJQUFLLENBQUEsQ0FBQSxDQUFFLENBQUMsTUFBZixHQUF3QixLQUYxQjs7UUFHQSxNQUFNLENBQUMsWUFBUCxDQUFvQixNQUFNLENBQUMsT0FBM0I7UUFDQSxNQUFNLENBQUMsTUFBUCxDQUFjLFVBQWQsRUFBMEIsU0FBQyxPQUFEO1VBQ3hCLElBQUcsT0FBSDttQkFDRSxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQXJCLENBQXlCLE1BQU0sQ0FBQyxPQUFoQyxFQUF5QyxNQUFNLENBQUMsTUFBaEQsQ0FBdUQsQ0FBQyxJQUF4RCxDQUE2RCxTQUFDLE9BQUQ7Y0FDM0QsSUFBRyxPQUFIO2dCQUNFLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO2dCQUNsQixNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsTUFBTSxDQUFDLFFBQS9CO2dCQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBWixHQUF1QixNQUFNLENBQUM7Z0JBQzlCLE1BQU0sQ0FBQyxXQUFQLENBQW1CLENBQW5CO2dCQUNBLE1BQU0sQ0FBQyxlQUFQLENBQXVCLENBQXZCLEVBTEY7ZUFBQSxNQUFBO2dCQU9FLE1BQU0sQ0FBQyxNQUFQLENBQWMsU0FBQTt5QkFDWixNQUFNLENBQUMsUUFBUCxHQUFrQixJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsUUFBeEIsQ0FBaUM7b0JBQUMsS0FBQSxFQUFNO3NCQUFDO3dCQUFDLElBQUEsRUFBSyxNQUFNLENBQUMsTUFBYjt3QkFBcUIsR0FBQSxFQUFJLE1BQU0sQ0FBQyxPQUFoQzt1QkFBRDtxQkFBUDttQkFBakM7Z0JBRE4sQ0FBZCxFQVBGOztxQkFTQSxNQUFNLENBQUMsTUFBUCxDQUFjLFNBQUE7Z0JBQ1osZ0JBQUEsQ0FBQTt1QkFDQSxNQUFNLENBQUMsY0FBUCxDQUFBO2NBRlksQ0FBZDtZQVYyRCxDQUE3RCxDQWFBLEVBQUMsS0FBRCxFQWJBLENBYU8sU0FBQyxHQUFEO3FCQUNMLE9BQU8sQ0FBQyxHQUFSLENBQVksd0JBQVosRUFBc0MsR0FBdEM7WUFESyxDQWJQLEVBREY7O1FBRHdCLENBQTFCO1FBaUJBLElBQUcsTUFBTSxDQUFDLE1BQVAsS0FBaUIsT0FBakIsSUFBNkIsTUFBTSxDQUFDLE9BQVAsS0FBa0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFsRTtpQkFDRSxNQUFNLENBQUMsUUFBUCxHQUFrQixFQURwQjs7TUE3QmU7TUFnQ2pCLElBQUcsTUFBTSxDQUFDLEVBQVAsQ0FBVSxpQkFBVixDQUFIO2VBQ0UsTUFBTSxDQUFDLE9BQVAsQ0FBQSxFQURGOztJQXJURixDQWJtRTtHQUFyRTtBQUZBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4jIElkZW50aXRpZXMgY29udHJvbGxlclxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmNvbnRyb2xsZXIgJ0lkZW50aXRpZXNDb250cm9sbGVyJywgW1xuICAnJHNjb3BlJ1xuICAnJHN0YXRlJ1xuICAnJHJvb3RTY29wZSdcbiAgJyR3aW5kb3cnXG4gICckc3RhdGVQYXJhbXMnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRxJ1xuICAnJHRpbWVvdXQnXG4gICMgJ0F1dGhlbnRpY2F0aW9uJ1xuICAnY29uZmlnJ1xuICAnbG9jYWxTdG9yYWdlU2VydmljZSdcbiAgKCRzY29wZSwgJHN0YXRlLCAkcm9vdFNjb3BlLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHAsICRxLCAkdGltZW91dCwgY29uZmlnLCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSAtPiAjLCBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5hY3RpdmVUYWIgPSAwXG4gICAgJHNjb3BlLmFjdGl2YXRlVGFiID0gKHRhYklkKSAtPiAkc2NvcGUuYWN0aXZlVGFiID0gdGFiSWRcbiAgICAkc2NvcGUuaW5mbyA9IHt9XG4gICAgJHNjb3BlLnNlbnQgPSBbXVxuICAgICRzY29wZS5yZWNlaXZlZCA9IFtdXG4gICAgJHNjb3BlLmNvbm5lY3Rpb25zID0ge31cbiAgICB0aHVtYnNVcE9iaiA9IHt9XG4gICAgdGh1bWJzRG93bk9iaiA9IHt9XG4gICAgJHNjb3BlLnRodW1ic1VwID0gW11cbiAgICAkc2NvcGUudGh1bWJzRG93biA9IFtdXG4gICAgJHNjb3BlLnZlcmlmaWNhdGlvbnMgPSBbXVxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJHN0YXRlUGFyYW1zLnNlYXJjaCBpZiAkc3RhdGVQYXJhbXMuc2VhcmNoXG4gICAgJHNjb3BlLm5ld0F0dHJpYnV0ZSA9XG4gICAgICB0eXBlOiAnJ1xuICAgICAgdmFsdWU6ICRzdGF0ZVBhcmFtcy52YWx1ZVxuICAgICRzY29wZS5maWx0ZXJzLnR5cGUgPSBudWxsXG4gICAgJHNjb3BlLmNvbGxhcHNlTGV2ZWwgPSB7fVxuICAgICRzY29wZS5jb2xsYXBzZUZpbHRlcnMgPSAkd2luZG93LmlubmVyV2lkdGggPCA5OTJcbiAgICAkc2NvcGUuc2xpZGVyID1cbiAgICAgIHZhbHVlOiAwXG4gICAgICBvcHRpb25zOlxuICAgICAgICBmbG9vcjogLTNcbiAgICAgICAgY2VpbDogM1xuICAgICAgICBoaWRlUG9pbnRlckxhYmVsczogdHJ1ZVxuICAgICAgICBoaWRlTGltaXRMYWJlbHM6IHRydWVcblxuICAgIG1lc3NhZ2VzQWRkZWQgPSBmYWxzZVxuICAgICRzY29wZS4kb24gJ01lc3NhZ2VBZGRlZCcsIChldmVudCwgYXJncykgLT5cbiAgICAgICRzY29wZS5sb2NhbE1lc3NhZ2VzW2FyZ3MubWVzc2FnZS5oYXNoXSA9IGFyZ3MubWVzc2FnZVxuICAgICAgJHNjb3BlLmxvY2FsTWVzc2FnZXNbYXJncy5tZXNzYWdlLmhhc2hdLmxvY2FsID0gdHJ1ZVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2xvY2FsTWVzc2FnZXMnLCAkc2NvcGUubG9jYWxNZXNzYWdlcylcbiAgICAgIG1lc3NhZ2VzQWRkZWQgPSB0cnVlXG4gICAgICByZXR1cm4gdW5sZXNzICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgaWYgYXJncy5tZXNzYWdlLnNpZ25lZERhdGEudHlwZSBpbiBbJ3ZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmeV9pZGVudGl0eSddIGFuZCBub3QgYXJncy5pZC5jb25maXJtZWRcbiAgICAgICAgJHNjb3BlLmdldENvbm5lY3Rpb25zKClcbiAgICAgIGVsc2UgaWYgYXJncy5tZXNzYWdlLnNpZ25lZERhdGEudHlwZSA9PSAncmF0aW5nJ1xuICAgICAgICBpZiBtZXNzYWdlc0FkZGVkXG4gICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLnNoaWZ0KClcbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBbYXJncy5tZXNzYWdlXVxuICAgICAgICAkc2NvcGUucmVjZWl2ZWQudW5zaGlmdCBhcmdzLm1lc3NhZ2VcblxuICAgICRzY29wZS5hZGRFbnRyeSA9IChldmVudCwgZW50cnkpIC0+XG4gICAgICByZWNpcGllbnQgPSBbXVxuICAgICAgaWYgZW50cnkubmFtZVxuICAgICAgICByZWNpcGllbnQucHVzaCBbJ25hbWUnLCBlbnRyeS5uYW1lXVxuICAgICAgaWYgZW50cnkuZW1haWxcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWydlbWFpbCcsIGVudHJ5LmVtYWlsXVxuICAgICAgaWYgZW50cnkudXJsXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsndXJsJywgZW50cnkudXJsXVxuICAgICAgaWYgZW50cnkucGhvbmVcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWydwaG9uZScsIGVudHJ5LnBob25lXVxuICAgICAgcGFyYW1zID1cbiAgICAgICAgdHlwZTogJ3ZlcmlmeV9pZGVudGl0eSdcbiAgICAgICAgcmVjaXBpZW50OiByZWNpcGllbnRcbiAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKGV2ZW50LCBwYXJhbXMpLnRoZW4gKHJlc3BvbnNlKSAtPlxuICAgICAgICAkc3RhdGUuZ28gJ21lc3NhZ2VzLnNob3cnLCB7IGlkOiByZXNwb25zZS5pcGZzX2hhc2ggfVxuICAgICAgLCAoZXJyb3IpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nIFwiZXJyb3JcIiwgZXJyb3JcblxuICAgICRzY29wZS5nZXRDb25uZWN0aW9ucyA9IC0+XG4gICAgICAkc2NvcGUuY29ubmVjdGlvbnMgPSB7fVxuICAgICAgY29ubmVjdGlvbnMgPSAkc2NvcGUuaWRlbnRpdHkuZGF0YS5hdHRycyBvciBbXVxuICAgICAgaWYgY29ubmVjdGlvbnMubGVuZ3RoID4gMFxuICAgICAgICBjID0gY29ubmVjdGlvbnNbMF1cbiAgICAgICAgbW9zdENvbmZpcm1hdGlvbnMgPSBjLmNvbmZcbiAgICAgIGVsc2VcbiAgICAgICAgbW9zdENvbmZpcm1hdGlvbnMgPSAxXG4gICAgICBmb3IgaWQgaW4gY29ubmVjdGlvbnNcbiAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zWyRzY29wZS5nZXRJZEtleShpZCldID0gT2JqZWN0LmFzc2lnbih7fSwgaWQpXG4gICAgICBmb3IgaGFzaCwgbXNnIG9mICRzY29wZS5sb2NhbE1lc3NhZ2VzXG4gICAgICAgIG1zZy5kYXRhID0gbXNnLmRhdGEgb3IgbXNnLnNpZ25lZERhdGFcbiAgICAgICAgaWYgbXNnLmRhdGEudHlwZSBpbiBbJ3ZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmeV9pZGVudGl0eSddXG4gICAgICAgICAgaGFzID0gZmFsc2VcbiAgICAgICAgICBmb3IgciBpbiBtc2cuZGF0YS5yZWNpcGllbnRcbiAgICAgICAgICAgIGlmIHJbMF0gPT0gJHNjb3BlLmlkVHlwZSBhbmQgclsxXcKgPT0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgICAgICAgaGFzID0gdHJ1ZVxuICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgIGNvbnRpbnVlIHVubGVzcyBoYXNcbiAgICAgICAgICBmb3IgciBpbiBtc2cuZGF0YS5yZWNpcGllbnRcbiAgICAgICAgICAgIHVubGVzcyByWzBdID09ICRzY29wZS5pZFR5cGUgYW5kIHJbMV3CoD09ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICAgICAgIGlkS2V5ID0gJHNjb3BlLmdldElkS2V5KHIpXG4gICAgICAgICAgICAgIGlmICRzY29wZS5jb25uZWN0aW9ucy5oYXNPd25Qcm9wZXJ0eShpZEtleSlcbiAgICAgICAgICAgICAgICAkc2NvcGUuY29ubmVjdGlvbnNbaWRLZXldLmNvbmYgKz0gMSBpZiBtc2cuZGF0YS50eXBlID09ICd2ZXJpZnlfaWRlbnRpdHknXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zW2lkS2V5XS5yZWYgKz0gMSBpZiBtc2cuZGF0YS50eXBlID09ICd1bnZlcmlmeV9pZGVudGl0eSdcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICRzY29wZS5jb25uZWN0aW9uc1tpZEtleV0gPVxuICAgICAgICAgICAgICAgICAgbmFtZTogbXNnLmRhdGEucmVjaXBpZW50WzFdWzBdXG4gICAgICAgICAgICAgICAgICB2YWw6IG1zZy5kYXRhLnJlY2lwaWVudFsxXVsxXVxuICAgICAgICAgICAgICAgICAgY29uZjogaWYgbXNnLmRhdGEudHlwZSA9PSAndmVyaWZ5X2lkZW50aXR5JyB0aGVuIDEgZWxzZSAwXG4gICAgICAgICAgICAgICAgICByZWY6IGlmIG1zZy5kYXRhLnR5cGUgPT0gJ3VudmVyaWZ5X2lkZW50aXR5JyB0aGVuIDEgZWxzZSAwXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICBmb3Iga2V5LCBjb25uIG9mICRzY29wZS5jb25uZWN0aW9uc1xuICAgICAgICBjb25uLmlzQ3VycmVudCA9IGNvbm4ubmFtZSA9PSAkc2NvcGUuaWRUeXBlIGFuZCBjb25uLnZhbCA9PSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICBzd2l0Y2ggY29ubi5uYW1lXG4gICAgICAgICAgd2hlbiAnZW1haWwnXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlJ1xuICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tc3VjY2VzcydcbiAgICAgICAgICAgIGNvbm4ubGluayA9ICdtYWlsdG86JyArIGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pbmZvLmVtYWlsID0gJHNjb3BlLmluZm8uZW1haWwgb3IgY29ubi52YWxcbiAgICAgICAgICB3aGVuICdiaXRjb2luX2FkZHJlc3MnLCAnYml0Y29pbidcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWJpdGNvaW4nXG4gICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1wcmltYXJ5J1xuICAgICAgICAgICAgY29ubi5saW5rID0gJ2h0dHBzOi8vYmxvY2tjaGFpbi5pbmZvL2FkZHJlc3MvJyArIGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICB3aGVuICdncGdfZmluZ2VycHJpbnQnLCAnZ3BnX2tleWlkJ1xuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEta2V5J1xuICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgICAgIGNvbm4ubGluayA9ICdodHRwczovL3BncC5taXQuZWR1L3Brcy9sb29rdXA/b3A9Z2V0JnNlYXJjaD0weCcgKyBjb25uLnZhbFxuICAgICAgICAgIHdoZW4gJ2FjY291bnQnXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1hdCdcbiAgICAgICAgICB3aGVuICduaWNrbmFtZSdcbiAgICAgICAgICAgICRzY29wZS5pbmZvLm5pY2tuYW1lID0gJHNjb3BlLmluZm8ubmlja25hbWUgb3IgY29ubi52YWxcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZm9udCdcbiAgICAgICAgICB3aGVuICduYW1lJ1xuICAgICAgICAgICAgJHNjb3BlLmluZm8ubmFtZSA9ICRzY29wZS5pbmZvLm5hbWUgb3IgY29ubi52YWxcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZm9udCdcbiAgICAgICAgICB3aGVuICd0ZWwnLCAncGhvbmUnXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWVhcnBob25lJ1xuICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tc3VjY2VzcydcbiAgICAgICAgICAgIGNvbm4ubGluayA9ICd0ZWw6JyArIGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICB3aGVuICdrZXlJRCdcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWtleSdcbiAgICAgICAgICB3aGVuICdjb3ZlclBob3RvJ1xuICAgICAgICAgICAgaWYgY29ubi52YWwubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICAgICAgJHNjb3BlLmNvdmVyUGhvdG8gPSAkc2NvcGUuY292ZXJQaG90byBvciB7ICdiYWNrZ3JvdW5kLWltYWdlJzogJ3VybCgnICsgKCRzY29wZS5pcGZzU3RvcmFnZS5hcGlSb290IG9yICcnKSArIGNvbm4udmFsICsgJyknIH1cbiAgICAgICAgICB3aGVuICdwcm9maWxlUGhvdG8nXG4gICAgICAgICAgICBpZiBjb25uLnZhbC5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgICAgICAkc2NvcGUucHJvZmlsZVBob3RvID0gJHNjb3BlLnByb2ZpbGVQaG90byBvciAoJHNjb3BlLmlwZnNTdG9yYWdlLmFwaVJvb3Qgb3IgJycpICsgY29ubi52YWxcbiAgICAgICAgICB3aGVuICd1cmwnXG4gICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgaWYgY29ubi52YWwuaW5kZXhPZignZmFjZWJvb2suY29tLycpID4gLTFcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtZmFjZWJvb2snXG4gICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWZhY2Vib29rJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2ZhY2Vib29rLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgY29ubi52YWwuaW5kZXhPZigndHdpdHRlci5jb20vJykgPiAtMVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS10d2l0dGVyJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi10d2l0dGVyJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ3R3aXR0ZXIuY29tLycpWzFdXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiBjb25uLnZhbC5pbmRleE9mKCdwbHVzLmdvb2dsZS5jb20vJykgPiAtMVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1nb29nbGUtcGx1cydcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbC5zcGxpdCgncGx1cy5nb29nbGUuY29tLycpWzFdXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiBjb25uLnZhbC5pbmRleE9mKCdsaW5rZWRpbi5jb20vJykgPiAtMVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1saW5rZWRpbidcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tbGlua2VkaW4nXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbC5zcGxpdCgnbGlua2VkaW4uY29tLycpWzFdXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiBjb25uLnZhbC5pbmRleE9mKCdnaXRodWIuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtZ2l0aHViJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1naXRodWInXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbC5zcGxpdCgnZ2l0aHViLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1saW5rJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICBpZiBjb25uLnZhbCBhbmQgY29ubi52YWwubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICBjb25uLmxpbmsgPSAoJHNjb3BlLmlwZnNTdG9yYWdlLmFwaVJvb3Qgb3IgJycpICsgY29ubi52YWxcbiAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWxcbiAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpbmsnXG4gICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgaWYgY29ubi5jb25mICsgY29ubi5yZWYgPiAwXG4gICAgICAgICAgcGVyY2VudGFnZSA9IGNvbm4uY29uZiAqIDEwMCAvIChjb25uLmNvbmYgKyBjb25uLnJlZilcbiAgICAgICAgICBpZiBwZXJjZW50YWdlID49IDgwXG4gICAgICAgICAgICBhbHBoYSA9IGNvbm4uY29uZiAvIG1vc3RDb25maXJtYXRpb25zICogMC43ICsgMC4zXG4gICAgICAgICAgICAjIGNvbm4ucm93U3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKSdcbiAgICAgICAgICBlbHNlIGlmIHBlcmNlbnRhZ2UgPj0gNjBcbiAgICAgICAgICAgIGNvbm4ucm93Q2xhc3MgPSAnd2FybmluZydcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBjb25uLnJvd0NsYXNzID0gJ2RhbmdlcidcbiAgICAgICAgJHNjb3BlLmhhc1F1aWNrQ29udGFjdHMgPSAkc2NvcGUuaGFzUXVpY2tDb250YWN0cyBvciBjb25uLnF1aWNrQ29udGFjdFxuICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zTGVuZ3RoID0gT2JqZWN0LmtleXMoJHNjb3BlLmNvbm5lY3Rpb25zKS5sZW5ndGhcbiAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUgKCRzY29wZS5pbmZvLm5hbWUgfHwgJHNjb3BlLmluZm8ubmlja25hbWUgfHwgJHNjb3BlLmlkVmFsdWUpXG5cbiAgICAkc2NvcGUuZ2V0Q29ubmVjdGluZ01zZ3MgPSAoaWQxLCBpZDIpIC0+XG4gICAgICBnZXRWZXJpZmljYXRpb25zID0gJHEgKHJlc29sdmUpIC0+XG4gICAgICAgIGlmICEkc2NvcGUudmVyaWZpY2F0aW9ucy5sZW5ndGhcbiAgICAgICAgICBpZiAkc2NvcGUucmVjZWl2ZWRJbmRleFxuICAgICAgICAgICAgJHNjb3BlLnJlY2VpdmVkSW5kZXguc2VhcmNoVGV4dCgnJywgMTAwMDAsIGZhbHNlLCB0cnVlKS50aGVuIChyZXMpIC0+XG4gICAgICAgICAgICAgIHJlcy5mb3JFYWNoIChyb3cpIC0+XG4gICAgICAgICAgICAgICAgbXNnID0gcm93LnZhbHVlXG4gICAgICAgICAgICAgICAgdW5sZXNzIG1zZy5zaWduZWREYXRhXG4gICAgICAgICAgICAgICAgICBtc2cuc2lnbmVkRGF0YSA9IEtKVVIuandzLkpXUy5wYXJzZShtc2cuandzKS5wYXlsb2FkT2JqXG4gICAgICAgICAgICAgICAgaWYgKG1zZy5zaWduZWREYXRhLnR5cGUgaW4gWyd2ZXJpZnlfaWRlbnRpdHknLCAndmVyaWZpY2F0aW9uJywgJ3VudmVyaWZ5X2lkZW50aXR5JywgJ3VudmVyaWZpY2F0aW9uJ10pXG4gICAgICAgICAgICAgICAgICBtc2cuZ3JhdmF0YXIgPSBDcnlwdG9KUy5NRDUobXNnLmF1dGhvckVtYWlsIG9yIG1zZy5zaWduZWREYXRhLmF1dGhvclswXVsxXSkudG9TdHJpbmcoKVxuICAgICAgICAgICAgICAgICAgbXNnLmxpbmtUb0F1dGhvciA9IG1zZy5zaWduZWREYXRhLmF1dGhvclswXVxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnZlcmlmaWNhdGlvbnMucHVzaCBtc2dcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICByZXNvbHZlKClcbiAgICAgIGdldFZlcmlmaWNhdGlvbnMudGhlbiAtPlxuICAgICAgICBtc2dzID0gW11cbiAgICAgICAgJHNjb3BlLnZlcmlmaWNhdGlvbnMuZm9yRWFjaCAobXNnKSAtPlxuICAgICAgICAgIGhhc0lkMSA9IGhhc0lkMiA9IGZhbHNlXG4gICAgICAgICAgZm9yIGlkIGluIG1zZy5zaWduZWREYXRhLnJlY2lwaWVudFxuICAgICAgICAgICAgcmV0dXJuIG1zZ3MucHVzaCBtc2cgaWYgaWRbMF3CoD09IGlkMi5uYW1lIGFuZCBpZFsxXSA9PSBpZDIudmFsXG4gICAgICAgIHJldHVybiBtc2dzXG5cbiAgICAkc2NvcGUuY29ubmVjdGlvbkNsaWNrZWQgPSAoZXZlbnQsIGlkKSAtPlxuICAgICAgaWYgaWQuY29ubmVjdGluZ19tc2dzXG4gICAgICAgIGlkLmNvbGxhcHNlID0gIWlkLmNvbGxhcHNlXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5nZXRDb25uZWN0aW5nTXNncyhbJHNjb3BlLmlkVHlwZSwgJHNjb3BlLmlkVmFsdWVdLCBpZCkudGhlbiAobXNncykgLT5cbiAgICAgICAgICBpZC5jb25uZWN0aW5nX21zZ3MgPSBtc2dzXG4gICAgICAgICAgaWQuY29sbGFwc2UgPSAhaWQuY29sbGFwc2VcblxuICAgICRzY29wZS5nZXRTZW50TXNncyA9IC0+XG4gICAgICByZXR1cm4gaWYgJHNjb3BlLnNlbnQubG9hZGluZyBvciBub3QgJHNjb3BlLmlkZW50aXR5IG9yIG5vdCAkc2NvcGUuaWRlbnRpdHkuZGF0YS5zZW50XG4gICAgICAkc2NvcGUuc2VudC5sb2FkaW5nID0gdHJ1ZVxuICAgICAgY3Vyc29yID0gaWYgJHNjb3BlLnNlbnQubGVuZ3RoIHRoZW4gJHNjb3BlLnNlbnRbJHNjb3BlLnNlbnQubGVuZ3RoIC0gMV0uY3Vyc29yIGVsc2UgJydcbiAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmdldFNlbnRNc2dzKCRzY29wZS5pZGVudGl0eSwgJHNjb3BlLmZpbHRlcnMubGltaXQsIGN1cnNvcilcbiAgICAgIC50aGVuIChzZW50KSAtPlxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIHNlbnQsIHsgYXV0aG9ySXNTZWxmOiB0cnVlIH1cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KCRzY29wZS5zZW50LCBzZW50KVxuICAgICAgICAgICRzY29wZS5zZW50LmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgIGlmIHNlbnQubGVuZ3RoIDwgJHNjb3BlLmZpbHRlcnMubGltaXQgLSAxXG4gICAgICAgICAgICAkc2NvcGUuc2VudC5maW5pc2hlZCA9IHRydWVcbiAgICAgIC5jYXRjaCAoZXJyb3IpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdlcnJvciBsb2FkaW5nIHNlbnQgbWVzc2FnZXMnLCBlcnJvclxuICAgICAgICAkc2NvcGUuc2VudC5maW5pc2hlZCA9IHRydWVcblxuICAgICRzY29wZS5nZXRSZWNlaXZlZE1zZ3MgPSAtPlxuICAgICAgcmV0dXJuIGlmICRzY29wZS5yZWNlaXZlZC5sb2FkaW5nIG9yIG5vdCAkc2NvcGUuaWRlbnRpdHkgb3Igbm90ICRzY29wZS5pZGVudGl0eS5kYXRhLnJlY2VpdmVkXG4gICAgICAkc2NvcGUucmVjZWl2ZWQubG9hZGluZyA9IHRydWVcbiAgICAgIGN1cnNvciA9IGlmICRzY29wZS5yZWNlaXZlZC5sZW5ndGggdGhlbiAkc2NvcGUucmVjZWl2ZWRbJHNjb3BlLnJlY2VpdmVkLmxlbmd0aCAtIDFdLmN1cnNvciBlbHNlICcnXG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXRSZWNlaXZlZE1zZ3MoJHNjb3BlLmlkZW50aXR5LCAkc2NvcGUuZmlsdGVycy5saW1pdCwgY3Vyc29yKVxuICAgICAgLnRoZW4gKHJlY2VpdmVkKSAtPlxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIHJlY2VpdmVkLCB7IHJlY2lwaWVudElzU2VsZjogdHJ1ZSB9XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSgkc2NvcGUucmVjZWl2ZWQsIHJlY2VpdmVkKVxuICAgICAgICAgICRzY29wZS5yZWNlaXZlZC5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICBpZiByZWNlaXZlZC5sZW5ndGggPCAkc2NvcGUuZmlsdGVycy5saW1pdCAtIDFcbiAgICAgICAgICAgICRzY29wZS5yZWNlaXZlZC5maW5pc2hlZCA9IHRydWVcbiAgICAgICAgICByZWNlaXZlZC5mb3JFYWNoIChtc2cpIC0+XG4gICAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKG1zZy5kYXRhLm1heFJhdGluZyArIG1zZy5kYXRhLm1pblJhdGluZykgLyAyXG4gICAgICAgICAgICBpZiBPYmplY3Qua2V5cyh0aHVtYnNVcE9iaikubGVuZ3RoIDwgMTIgYW5kIG1zZy5kYXRhLnJhdGluZyA+IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgdGh1bWJzVXBPYmpbbXNnLmxpbmtUb0F1dGhvcl0gPSBtc2dcbiAgICAgICAgICAgICAgJHNjb3BlLnRodW1ic1VwID0gT2JqZWN0LnZhbHVlcyh0aHVtYnNVcE9iailcbiAgICAgICAgICAgICAgJHNjb3BlLmhhc1RodW1ic1VwID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiBPYmplY3Qua2V5cyh0aHVtYnNEb3duT2JqKS5sZW5ndGggPCAxMiBhbmQgbXNnLmRhdGEucmF0aW5nIDwgbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICB0aHVtYnNEb3duT2JqW21zZy5saW5rVG9BdXRob3JdID0gbXNnXG4gICAgICAgICAgICAgICRzY29wZS50aHVtYnNEb3duID0gT2JqZWN0LnZhbHVlcyh0aHVtYnNEb3duT2JqKVxuICAgICAgICAgICAgICAkc2NvcGUuaGFzVGh1bWJzRG93biA9IHRydWVcbiAgICAgIC5jYXRjaCAoZXJyb3IpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdlcnJvciBsb2FkaW5nIHJlY2VpdmVkIG1lc3NhZ2VzJywgZXJyb3JcbiAgICAgICAgJHNjb3BlLnJlY2VpdmVkLmZpbmlzaGVkID0gdHJ1ZVxuXG4gICAgYWRkTG9jYWxNZXNzYWdlcyA9IC0+XG4gICAgICBtc2dzID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2FsTWVzc2FnZXMnKSBvciB7fVxuICAgICAgY29ubmVjdGlvbnNUb0FkZCA9IHt9XG4gICAgICBmb3IgaGFzaCwgbXNnIG9mIG1zZ3NcbiAgICAgICAgbXNnLmRhdGEgPSBtc2cuZGF0YSBvciBtc2cuc2lnbmVkRGF0YVxuICAgICAgICBpZiBtc2cuZGF0YS5yZWNpcGllbnRbMF1bMF0gPT0gJHNjb3BlLmlkVHlwZSBhbmQgbXNnLmRhdGEucmVjaXBpZW50WzBdWzFdID09ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLnVuc2hpZnQobXNnKVxuICAgICAgICBpZiBtc2cuZGF0YS5hdXRob3JbMF1bMF0gPT0gJHNjb3BlLmlkVHlwZSBhbmQgbXNnLmRhdGEuYXV0aG9yWzBdWzFdID09ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICAgJHNjb3BlLnNlbnQudW5zaGlmdChtc2cpXG5cbiAgICAkc2NvcGUuc2V0RmlsdGVycyA9IChmaWx0ZXJzKSAtPlxuICAgICAgYW5ndWxhci5leHRlbmQgJHNjb3BlLmZpbHRlcnMsIGZpbHRlcnNcbiAgICAgICRzY29wZS5zZW50ID0gW11cbiAgICAgICRzY29wZS5yZWNlaXZlZCA9IFtdXG4gICAgICBhZGRMb2NhbE1lc3NhZ2VzKClcbiAgICAgICR0aW1lb3V0IC0+ICRyb290U2NvcGUuJGJyb2FkY2FzdCAnbXNnU2Nyb2xsQ2hlY2snXG5cbiAgICAkc2NvcGUuZmluZE9uZSA9IC0+XG4gICAgICAkc2NvcGUuaWRUeXBlID0gJHN0YXRlUGFyYW1zLnR5cGVcbiAgICAgICRzY29wZS5pZFZhbHVlID0gJHN0YXRlUGFyYW1zLnZhbHVlXG4gICAgICAkc2NvcGUuaXNDdXJyZW50VXNlciA9ICRzY29wZS5hdXRoZW50aWNhdGlvbiBhbmRcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgYW5kXG4gICAgICAgICRzY29wZS5pZFR5cGUgPT0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRUeXBlIGFuZFxuICAgICAgICAkc2NvcGUuaWRWYWx1ZSA9PSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlXG4gICAgICAkc2NvcGUuaXNVbmlxdWVUeXBlID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YoJHNjb3BlLmlkVHlwZSkgPiAtMVxuICAgICAgaWYgISRzY29wZS5pc1VuaXF1ZVR5cGVcbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLmxpc3QnLCB7IHNlYXJjaDogJHNjb3BlLmlkVmFsdWUgfVxuICAgICAgICAkc2NvcGUudGFic1syXS5hY3RpdmUgPSB0cnVlXG4gICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICRzY29wZS5pZFZhbHVlXG4gICAgICAkc2NvcGUuJHdhdGNoICdhcGlSZWFkeScsIChpc1JlYWR5KSAtPlxuICAgICAgICBpZiBpc1JlYWR5XG4gICAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0KCRzY29wZS5pZFZhbHVlLCAkc2NvcGUuaWRUeXBlKS50aGVuIChwcm9maWxlKSAtPlxuICAgICAgICAgICAgaWYgcHJvZmlsZVxuICAgICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkgPSBwcm9maWxlXG4gICAgICAgICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKCRzY29wZS5pZGVudGl0eSlcbiAgICAgICAgICAgICAgJHNjb3BlLmluZm8uaWRlbnRpdHkgPSAkc2NvcGUuaWRlbnRpdHlcbiAgICAgICAgICAgICAgJHNjb3BlLmdldFNlbnRNc2dzKDApXG4gICAgICAgICAgICAgICRzY29wZS5nZXRSZWNlaXZlZE1zZ3MoMClcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgICAgICRzY29wZS5pZGVudGl0eSA9IG5ldyAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5KHthdHRyczpbe25hbWU6JHNjb3BlLmlkVHlwZSwgdmFsOiRzY29wZS5pZFZhbHVlfV19KVxuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgICBhZGRMb2NhbE1lc3NhZ2VzKClcbiAgICAgICAgICAgICAgJHNjb3BlLmdldENvbm5lY3Rpb25zKClcbiAgICAgICAgICAuY2F0Y2ggKGVycikgLT5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nICdlcnJvciBmZXRjaGluZyBwcm9maWxlJywgZXJyXG4gICAgICBpZiAkc2NvcGUuaWRUeXBlID09ICdrZXlJRCcgYW5kICRzY29wZS5pZFZhbHVlID09ICRzY29wZS5ub2RlSW5mby5rZXlJRFxuICAgICAgICAkc2NvcGUuZGlzdGFuY2UgPSAwXG5cbiAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICRzY29wZS5maW5kT25lKClcbl1cbiJdfQ==

(function() {
  angular.module('identifiAngular').run(function($log, $rootScope, $state, $stateParams, $window, localStorageService) {
    'ngInject';
    $log.debug('runBlock end');
    return $rootScope.$on('$stateChangeSuccess', function(event, current, previous) {
      $rootScope.pageTitle = $state.current.title || 'Identifi';
      localStorageService.set('state', current.name);
      localStorageService.set('stateParams', $stateParams);
      return $window.scrollTo(0, 0);
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucnVuLmpzIiwic291cmNlcyI6WyJpbmRleC5ydW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsR0FESCxDQUNPLFNBQUMsSUFBRCxFQUFPLFVBQVAsRUFBbUIsTUFBbkIsRUFBMkIsWUFBM0IsRUFBeUMsT0FBekMsRUFBa0QsbUJBQWxEO0lBQ0g7SUFDQSxJQUFJLENBQUMsS0FBTCxDQUFXLGNBQVg7V0FDQSxVQUFVLENBQUMsR0FBWCxDQUFlLHFCQUFmLEVBQXNDLFNBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsUUFBakI7TUFDcEMsVUFBVSxDQUFDLFNBQVgsR0FBdUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFmLElBQXdCO01BQy9DLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLE9BQXhCLEVBQWlDLE9BQU8sQ0FBQyxJQUF6QztNQUNBLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLGFBQXhCLEVBQXVDLFlBQXZDO2FBQ0EsT0FBTyxDQUFDLFFBQVIsQ0FBaUIsQ0FBakIsRUFBbUIsQ0FBbkI7SUFKb0MsQ0FBdEM7RUFIRyxDQURQO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuICAucnVuICgkbG9nLCAkcm9vdFNjb3BlLCAkc3RhdGUsICRzdGF0ZVBhcmFtcywgJHdpbmRvdywgbG9jYWxTdG9yYWdlU2VydmljZSkgLT5cbiAgICAnbmdJbmplY3QnXG4gICAgJGxvZy5kZWJ1ZyAncnVuQmxvY2sgZW5kJ1xuICAgICRyb290U2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdWNjZXNzJywgKGV2ZW50LCBjdXJyZW50LCBwcmV2aW91cykgLT5cbiAgICAgICRyb290U2NvcGUucGFnZVRpdGxlID0gJHN0YXRlLmN1cnJlbnQudGl0bGUgfHwgJ0lkZW50aWZpJ1xuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ3N0YXRlJywgY3VycmVudC5uYW1lKVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ3N0YXRlUGFyYW1zJywgJHN0YXRlUGFyYW1zKVxuICAgICAgJHdpbmRvdy5zY3JvbGxUbygwLDApXG4iXX0=

(function() {
  angular.module('identifiAngular').config(function($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider.state('identities', {
      url: '',
      template: "<ui-view/>",
      abstract: true
    }).state('identities.list', {
      url: '',
      templateUrl: 'app/identities/list.html',
      controller: 'IdentitiesController',
      controllerAs: 'identities',
      params: {
        search: ''
      },
      title: 'Identifi - Global Address Book'
    }).state('identities.create', {
      url: '/identities/create',
      templateUrl: 'app/identities/create.html',
      controller: 'IdentitiesController',
      controllerAs: 'identities'
    }).state('identities.show', {
      url: '/identities/:type/:value',
      templateUrl: 'app/identities/show.html',
      controller: 'IdentitiesController',
      controllerAs: 'identities'
    }).state('messages', {
      url: '/messages',
      template: "<ui-view/>",
      abstract: true
    }).state('messages.list', {
      url: '',
      templateUrl: 'app/messages/list.html',
      controller: 'MessagesController',
      controllerAs: 'messages',
      title: 'Identifi - Latest messages'
    }).state('messages.show', {
      url: '/:id',
      templateUrl: 'app/messages/show.html',
      controller: 'MessagesController',
      controllerAs: 'messages'
    }).state('about', {
      url: '/about',
      templateUrl: 'app/main/about.html',
      title: 'Identifi - About'
    });
    return $urlRouterProvider.otherwise('/');
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGUuanMiLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDRSxDQUFDLE1BREgsQ0FDVSxTQUFDLGNBQUQsRUFBaUIsa0JBQWpCO0lBQ047SUFDQSxjQUNFLENBQUMsS0FESCxDQUNTLFlBRFQsRUFFSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsUUFBQSxFQUFVLFlBRFY7TUFFQSxRQUFBLEVBQVUsSUFGVjtLQUZKLENBS0UsQ0FBQyxLQUxILENBS1MsaUJBTFQsRUFNSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLDBCQURiO01BRUEsVUFBQSxFQUFZLHNCQUZaO01BR0EsWUFBQSxFQUFjLFlBSGQ7TUFJQSxNQUFBLEVBQ0U7UUFBQSxNQUFBLEVBQVEsRUFBUjtPQUxGO01BTUEsS0FBQSxFQUFPLGdDQU5QO0tBTkosQ0FhRSxDQUFDLEtBYkgsQ0FhUyxtQkFiVCxFQWNJO01BQUEsR0FBQSxFQUFLLG9CQUFMO01BQ0EsV0FBQSxFQUFhLDRCQURiO01BRUEsVUFBQSxFQUFZLHNCQUZaO01BR0EsWUFBQSxFQUFjLFlBSGQ7S0FkSixDQWtCRSxDQUFDLEtBbEJILENBa0JTLGlCQWxCVCxFQW1CSTtNQUFBLEdBQUEsRUFBSywwQkFBTDtNQUNBLFdBQUEsRUFBYSwwQkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYyxZQUhkO0tBbkJKLENBdUJFLENBQUMsS0F2QkgsQ0F1QlMsVUF2QlQsRUF3Qkk7TUFBQSxHQUFBLEVBQUssV0FBTDtNQUNBLFFBQUEsRUFBVSxZQURWO01BRUEsUUFBQSxFQUFVLElBRlY7S0F4QkosQ0EyQkUsQ0FBQyxLQTNCSCxDQTJCUyxlQTNCVCxFQTRCSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLG9CQUZaO01BR0EsWUFBQSxFQUFjLFVBSGQ7TUFJQSxLQUFBLEVBQU8sNEJBSlA7S0E1QkosQ0FpQ0UsQ0FBQyxLQWpDSCxDQWlDUyxlQWpDVCxFQWtDSTtNQUFBLEdBQUEsRUFBSyxNQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLG9CQUZaO01BR0EsWUFBQSxFQUFjLFVBSGQ7S0FsQ0osQ0FzQ0UsQ0FBQyxLQXRDSCxDQXNDUyxPQXRDVCxFQXVDSTtNQUFBLEdBQUEsRUFBSyxRQUFMO01BQ0EsV0FBQSxFQUFhLHFCQURiO01BRUEsS0FBQSxFQUFPLGtCQUZQO0tBdkNKO1dBMkNBLGtCQUFrQixDQUFDLFNBQW5CLENBQTZCLEdBQTdCO0VBN0NNLENBRFY7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInXG4gIC5jb25maWcgKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUgJ2lkZW50aXRpZXMnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlOiBcIjx1aS12aWV3Lz5cIlxuICAgICAgICBhYnN0cmFjdDogdHJ1ZVxuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLmxpc3QnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvbGlzdC5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnSWRlbnRpdGllc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2lkZW50aXRpZXMnXG4gICAgICAgIHBhcmFtczpcbiAgICAgICAgICBzZWFyY2g6ICcnXG4gICAgICAgIHRpdGxlOiAnSWRlbnRpZmkgLSBHbG9iYWwgQWRkcmVzcyBCb29rJ1xuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLmNyZWF0ZScsXG4gICAgICAgIHVybDogJy9pZGVudGl0aWVzL2NyZWF0ZSdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvaWRlbnRpdGllcy9jcmVhdGUuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ0lkZW50aXRpZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdpZGVudGl0aWVzJ1xuICAgICAgLnN0YXRlICdpZGVudGl0aWVzLnNob3cnLFxuICAgICAgICB1cmw6ICcvaWRlbnRpdGllcy86dHlwZS86dmFsdWUnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvc2hvdy5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnSWRlbnRpdGllc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ2lkZW50aXRpZXMnXG4gICAgICAuc3RhdGUgJ21lc3NhZ2VzJyxcbiAgICAgICAgdXJsOiAnL21lc3NhZ2VzJ1xuICAgICAgICB0ZW1wbGF0ZTogXCI8dWktdmlldy8+XCJcbiAgICAgICAgYWJzdHJhY3Q6IHRydWVcbiAgICAgIC5zdGF0ZSAnbWVzc2FnZXMubGlzdCcsXG4gICAgICAgIHVybDogJydcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWVzc2FnZXMvbGlzdC5odG1sJ1xuICAgICAgICBjb250cm9sbGVyOiAnTWVzc2FnZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdtZXNzYWdlcydcbiAgICAgICAgdGl0bGU6ICdJZGVudGlmaSAtIExhdGVzdCBtZXNzYWdlcydcbiAgICAgIC5zdGF0ZSAnbWVzc2FnZXMuc2hvdycsXG4gICAgICAgIHVybDogJy86aWQnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21lc3NhZ2VzL3Nob3cuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnbWVzc2FnZXMnXG4gICAgICAuc3RhdGUgJ2Fib3V0JyxcbiAgICAgICAgdXJsOiAnL2Fib3V0J1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tYWluL2Fib3V0Lmh0bWwnXG4gICAgICAgIHRpdGxlOiAnSWRlbnRpZmkgLSBBYm91dCdcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UgJy8nXG4iXX0=

(function() {
  angular.module('identifiAngular').constant('moment', moment).constant('config', {
    defaultFilters: {
      type: null,
      limit: 50,
      max_distance: 0
    },
    uniqueAttributeTypes: ['email', 'url', 'keyID', 'tel', 'phone', 'account', 'bitcoin', 'gpg_keyid', 'gpg_fingerprint']
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uc3RhbnRzLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25zdGFudHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsUUFESCxDQUNZLFFBRFosRUFDc0IsTUFEdEIsQ0FFRSxDQUFDLFFBRkgsQ0FFWSxRQUZaLEVBR0k7SUFBQSxjQUFBLEVBQ0U7TUFBQSxJQUFBLEVBQU0sSUFBTjtNQUNBLEtBQUEsRUFBTyxFQURQO01BRUEsWUFBQSxFQUFjLENBRmQ7S0FERjtJQUlBLG9CQUFBLEVBQXNCLENBQ3BCLE9BRG9CLEVBRXBCLEtBRm9CLEVBR3BCLE9BSG9CLEVBSXBCLEtBSm9CLEVBS3BCLE9BTG9CLEVBTXBCLFNBTm9CLEVBT3BCLFNBUG9CLEVBUXBCLFdBUm9CLEVBU3BCLGlCQVRvQixDQUp0QjtHQUhKO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJylcbiAgLmNvbnN0YW50ICdtb21lbnQnLCBtb21lbnRcbiAgLmNvbnN0YW50ICdjb25maWcnLFxuICAgIGRlZmF1bHRGaWx0ZXJzOlxuICAgICAgdHlwZTogbnVsbFxuICAgICAgbGltaXQ6IDUwXG4gICAgICBtYXhfZGlzdGFuY2U6IDBcbiAgICB1bmlxdWVBdHRyaWJ1dGVUeXBlczogW1xuICAgICAgJ2VtYWlsJyxcbiAgICAgICd1cmwnLFxuICAgICAgJ2tleUlEJyxcbiAgICAgICd0ZWwnLFxuICAgICAgJ3Bob25lJyxcbiAgICAgICdhY2NvdW50JyxcbiAgICAgICdiaXRjb2luJyxcbiAgICAgICdncGdfa2V5aWQnLFxuICAgICAgJ2dwZ19maW5nZXJwcmludCdcbiAgICBdXG4iXX0=

(function() {
  angular.module('identifiAngular').config(function($logProvider) {
    'ngInject';
    return $logProvider.debugEnabled(true);
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uZmlnLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsTUFESCxDQUNVLFNBQUMsWUFBRDtJQUNOO1dBRUEsWUFBWSxDQUFDLFlBQWIsQ0FBMEIsSUFBMUI7RUFITSxDQURWO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuICAuY29uZmlnICgkbG9nUHJvdmlkZXIpIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgICMgRW5hYmxlIGxvZ1xuICAgICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQgdHJ1ZVxuICAgICMgU2V0IG9wdGlvbnMgdGhpcmQtcGFydHkgbGliXG4iXX0=

angular.module('identifiAngular').run(['$templateCache', function($templateCache) {$templateCache.put('app/identities/create.html','<div ng-init="newEntry = {}" class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><h3>Add public entry</h3><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide="authentication.user || !nodeInfo.loginOptions.length"><div class=panel-heading>Please log in to add entries.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label> <input type=text required autofocus id=idName name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label> <input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idPhone.$invalid }"><label for=idPhone>Phone number</label> <input type=text name=idPhone id=idPhone ng-pattern=phoneRegex ng-model=newEntry.phone class=form-control><p class=help-block>International format, no special characters other than leading +</p></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label> <input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="!(authentication.user || !nodeInfo.loginOptions.length) || !(newEntry.email || newEntry.url || newEntry.phone) || (addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid)">Add public entry</button><p class=help-block>More details can be added afterwards.</p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top25-xs></div><div ng-if="!query.term && !authentication.user" class=jumbotron><div class=align-center><h1>Global address book</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-book fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-book"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Find out who said what about a person or an organization.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Show content from trusted and real identities only.</p></div></div></div></div><table id=search-results class="table table-hover" infinite-scroll=search(query.term) infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || ids.loading || ids.finished"><tbody><tr ng-if="!query.term || (!ids.loading && !ids.list.length)" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ui-sref=identities.create>Add entry</a></td></tr><tr ng-repeat="result in ids.list" id=result{{$index}} ng-hide=!result.linkTo ui-sref="identities.show({ type: result.linkTo.name, value: result.linkTo.val })" class=search-result-row ng-class="{active: result.active}"><td class=gravatar-col><identicon identity=result border=3 width=50 positive-score=result.pos negative-score=result.neg></identicon></td><td><span ng-if="result.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.trustDistance > 0" ng-bind="result.trustDistance | ordinal" class="label label-default pull-right"></span> <a ng-bind-html=result.primaryName|highlight:query.term ui-sref="identities.show({ type: result.linkTo.name, value: result.linkTo.val })"></a> <small ng-if=!(result.mostVerifiedAttributes.name||result.mostVerifiedAttributes.nickname) class=list-group-item-text><span ng-bind-html=result.data.attrs[0].name|highlight:query.term></span></small><br><small><span ng-if=result.nickname ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.profile.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.profile.email|highlight:query.term></span> </span><span ng-if=result.profile.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.profile.facebook|highlight:query.term></span> </span><span ng-if=result.profile.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.profile.twitter|highlight:query.term></span> </span><span ng-if=result.profile.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.profile.googlePlus|highlight:query.term></span> </span><span ng-if=result.mostVerifiedAttributes.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.mostVerifiedAttributes.bitcoin.attribute.val|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if="apiReady && !ids.loading && !ids.list.length">No results</div></section></div>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 0 }" ng-click=activateTab(0)><span class=hidden-xs>Received </span>({{0+identity.receivedPositive+identity.receivedNeutral+identity.receivedNegative || received.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Sent </span>({{0+identity.sentPositive+identity.sentNeutral+identity.sentNegative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Identity </span>(<span ng-bind="connectionsLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType><div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon identity=identity border=4 show-distance=0 width=230></identicon><!-- <a ng-href="" class="circle {{profileImageCircleClass}}">\n                    <span class="arc"></span>\n                    <img ng-src="{{profilePhotoUrl}}" width="230" height="230" class="profile-image mar-right5">\n                  </a> --></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs visible-sm" ng-if=!(identity.mostVerifiedAttributes.name||identity.mostVerifiedAttributes.nickname)><span ng-bind=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a> </small></span><span ng-bind=identity.primaryName></span> <span ng-hide="!identity.nickname || identity.nickname == identity.primaryName">(<span class=text-muted ng-bind=identity.nickname></span>) </span><span ng-if="identity.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="identity.trustDistance > 0 && identity.trustDistance < 1000" ng-bind="identity.trustDistance | ordinal" class="label label-default pull-right"></span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><p><b>Received: <span ng-if="identity.receivedPositive || identity.receivedNegative"><span ng-bind="identity.receivedPositive / (identity.receivedPositive+identity.receivedNeutral+identity.receivedNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.receivedPositive || identity.receivedNegative)">&mdash; </span></b><span ng-if="identity.sentPositive || identity.sentNegative"><br>Sent: <span ng-if="identity.sentPositive || identity.sentNegative"><span ng-bind="identity.sentPositive / (identity.sentPositive+identity.sentNeutral+identity.sentNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.sentPositive || identity.sentNegative )">&mdash;</span></span></p><!--\n                <p class="received-stats">\n                  <div><strong>Received</strong></div>\n                  <div>\n                    <strong>\n                      <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.receivedPositive">-</span></span>\n                      <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.receivedNeutral">-</span></span>\n                      <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.receivedNegative">-</span></span>\n                    </strong>\n                  </div>\n                </p>\n                <p>\n                  <div>Sent</div>\n                  <div>\n                    <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.sentPositive">-</span></span>\n                    <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.sentNeutral">-</span></span>\n                    <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.sentNegative">-</span></span>\n                  </div>\n                </p> --><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="id in connections" ng-if=id.quickContact><a ng-href={{id.link}}><span ng-class=id.iconStyle></span><span ng-bind="id.linkName || id.val"></span></a></li><li ng-if=stats.first_seen><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && hasThumbsUp" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon identity=msg.author class=no-glow border=3 width=60></identicon></a></div><div ng-if="isUniqueType && hasThumbsDown" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon identity=msg.author class=no-glow border=3 width=60></identicon></a></div></div></div></div></div></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><uib-tabset active=activeTab><uib-tab ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+identity.receivedPositive+identity.receivedNeutral+identity.receivedNegative}})</span> <span class=visible-xs>Recv ({{0+identity.receivedPositive+identity.receivedNeutral+identity.receivedNegative}})</span></uib-tab-heading><div ng-show=authentication.user class="panel panel-default panel-success"><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment, recipient: [[idType, idValue]] })"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="Write feedback"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button type=submit class="pull-right ladda-button btn btn-primary" data-style=zoom-out><span class=ladda-label><span class="fa fa-edit"></span> Publish</span><span class=ladda-spinner></span></button></div></div></form></div></div><div infinite-scroll=getReceivedMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !identity || received.loading || received.finished ||\xA0activeTab != 0"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.receivedPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.receivedNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.receivedNegative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=info ng-repeat="msg in received | filter:msgFilter | orderBy:\'-data.timestamp\' as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="apiReady && !isCurrentUser && !received.loading && receivedFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if="apiReady && isCurrentUser && !received.loading && received.length == 0" class="alert alert-warning text-center"><i class="fa fa-info pull-right"></i><p>You have not received any trust ratings yet.</p><p>You need trust ratings to have your messages saved and displayed by others.</p><p>You can also ask someone to verify that {{idType}}:{{idValue}} belongs to your already trusted identity.</p></div><div ng-if=received.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=isUniqueType><uib-tab-heading>Sent ({{0+identity.sentPositive+identity.sentNeutral+identity.sentNegative}})</uib-tab-heading><div infinite-scroll=getSentMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !identity || sent.loading || sent.finished ||\xA0activeTab != 1"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span>Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.sentPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.sentNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.sentNegative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=info ng-repeat="msg in sent | filter:msgFilter | orderBy:\'-data.timestamp\' as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="!sent.loading && sentFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if=sent.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=true><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-show="connections.$resolved && connectionsLength > 0" ng-bind="connectionsLength - 1"></span><span ng-hide=connections.$resolved></span>)</uib-tab-heading><div id=connections><!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="id in connections" style={{id.rowStyle}} ng-class=id.rowClass ng-click="!id.isCurrent && connectionClicked($event, id)" class=id-row><td><div class="visible-xs mar-bot5"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><div><a style=min-width:45px class="pull-left btn btn-lg btn-social-icon mar-right15" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span> <span ng-if=id.iconStyle&&!id.link class="pull-left btn btn-lg btn-social-icon" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span></span></a><div class="hidden-xs pull-left"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><!--\n                              <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n                            --><div class=pull-right ng-if=!id.isCurrent><button autocomplete=off name=confirm class="ladda-button btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{id.conf}}</button> <button autocomplete=off name=unverify class="ladda-button btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{id.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!id.isCurrent class="active connectingmsgs"><td class="connectingmsgs ladda-button" data-style=zoom-in data-spinner-color=#000><div uib-collapse=!id.collapse><div ng-repeat="msg in id.connecting_msgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.data.type === \'verify_identity\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.data.type === \'unverify_identity\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" class=id-link><identicon identity=msg class=mar-right5 border=3 width=30 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span ng-bind=msg.author_name||msg.data.author[0][1]></span> </a></strong>- <span ng-bind="msg.data.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder=value ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder=type ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [newVerification.type, newVerification.value]] }, { conf: 0, ref: 0, name: newVerification.type, val: newVerification.value })" class="ladda-button btn btn-default" data-style=zoom-out ng-disabled=!authentication.user><span class=ladda-label><span class="glyphicon glyphicon-plus"></span> Add</span><span class=ladda-spinner></span></button></td></tr></tbody></table></div><div ng-if=!connections.$resolved style=position:relative;padding:20px us-spinner></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/main/about.html','<div class=container><div class=col-md-8><h3>About Identifi</h3><p class=lead>Identifi is an address book application that stores its data in a distributed fashion on the BitTorrent-like <a href=https://ipfs.io>IPFS</a> network. The stored information is not owned or centrally administered by anyone.</p><p>In addition to keeping your contact details such as phone number or bitcoin address up-to-date, you can give other users <b>trust ratings and feedback</b>. You can filter all shown information by your <b>web of trust</b>, for example by displaying only the information stored by your friends and the people they trust.</p><p>Identifi is free and open source software. The project is in alpha development stage.</p><ul><li><a href=http://identifi.org>Project page</a></li><li><a href=https://github.com/identifi>Source code</a></li></ul><h4>Available at</h4><ul><li><a href=https://identi.fi>https://identi.fi</a></li><li><a href=https://identifi.github.io/ >https://identifi.github.io/</a></li><li><a href=https://ipfs.io/ipns/identi.fi/ >https://ipfs.io/ipns/identi.fi/</a></li><li><a href=https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/ >https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/</a></li><li><a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome extension</a></li><!-- TODO: add dynamically updated /ipfs url --></ul><p>Also available as a <a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome plugin</a>.</p><h3>Privacy policy</h3><p>The Identifi network stores user-submitted identifiers which can be of arbitrary type, for example <i>name</i>, <i>email address</i> or <i>phone number</i>. All stored information is made public and broadcast to the <a href=https://ipfs.io>IPFS</a> network.</p></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><identicon identity=match.label border=3 width=46 class=mar-right10></identicon><span ng-bind-html="(match.label.profile.name || match.label.profile.nickname) | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><textarea rows=6 class=form-control placeholder="Enter private key" ng-model=privateKeyPEM></textarea><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--> <button class="btn btn-primary" ng-click=generateKey()>Generate new key</button> <button class="btn btn-default pull-right" ng-disabled=!privateKeyPEM ng-click=downloadKey()><i class="fa fa-download"></i> Download key</button> <button class="btn btn-primary" ng-click="loginWithKey(privateKeyPEM, publicKeyPEM)">Log in</button></div></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="alert alert-info">Viewing as: <strong ng-if=nodeInfo.profile><a ui-sref="identities.show({ type: \'keyID\', value: nodeInfo.keyID })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon identity=nodeInfo.profile border=3 width=35></identicon></span><span ng-bind=nodeInfo.profile.mostVerifiedAttributes.name.attribute.val></span></a></strong><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({max_distance: -1})" ng-class="{active: filters.max_distance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 1})" ng-class="{active: filters.max_distance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 2})" ng-class="{active: filters.max_distance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 3})" ng-class="{active: filters.max_distance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 0})" ng-class="{active: filters.max_distance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em;"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class=container><section><div id=messages class=row><div class=col-md-4><div ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div infinite-scroll=find() infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || msgs.loading || msgs.finished" infinite-scroll-listen-for-event=msgScrollCheck><message ng-repeat="msg in msgs.list | filter:msgFilter" msg-data=msg ng-click="openMessage($event, msg, \'lg\')"></message></div><div us-spinner ng-if=!messages.$resolved style=position:relative;padding:20px></div><div class="alert alert-info text-center" ng-if="!msgs.loading && !msgs.list.length">No messages to show</div></div></div></section></div>');
$templateCache.put('app/messages/show.html','<section ng-init=findOne()><div class="col-md-8 col-md-offset-2 msg-col"><message msg-data=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by: <a ng-if=false ng-bind=message.signerName||message.signer_keyid ui-sref="identities.show({type: \'keyID\', value: message.signer_keyid })"></a> <strong ng-if=message.verifiedBy><a ui-sref="identities.show({ type: \'keyID\', value: message.signer_keyid })" class=id-link><identicon identity=message.verifiedBy class=mar-right5 border=3 width=35></identicon><span ng-bind=message.verifiedBy.mostVerifiedAttributes.name.attribute.val></span> <small>{{message.signer_keyid}}</small></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-controller=MessagesController ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':$ctrl.msgData.isVerification}" style={{$ctrl.msgData.bgColor}} ng-if=$ctrl.msgData.data><div class=message-panel ng-class="{ \'panel-body\': !$ctrl.msgData.isVerification, \'panel-heading\': $ctrl.msgData.isVerification || $ctrl.msgData.isUnverification }"><p><span class="mar-left5 pull-right" ng-class=$ctrl.msgData.iconStyle ng-repeat="n in $ctrl.msgData.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=$ctrl.msgData.local></span> <strong><a ui-sref="identities.show({ type: $ctrl.msgData.linkToAuthor[0], value: $ctrl.msgData.linkToAuthor[1] })" class=id-link><identicon identity="($ctrl.msgData.authorIsSelf && $ctrl.pageInfo.identity) || $ctrl.msgData.author" class=mar-right5 border=3 width=35 positive-score=$ctrl.msgData.author_pos negative-score=$ctrl.msgData.author_neg></identicon><span ng-bind="($ctrl.msgData.authorIsSelf && ($ctrl.pageInfo.name || $ctrl.pageInfo.nickname))||$ctrl.msgData.author_name||$ctrl.msgData.linkToAuthor[1]"></span> </a></strong><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: $ctrl.msgData.linkToRecipient[0], value: $ctrl.msgData.linkToRecipient[1] })" ng-bind="($ctrl.msgData.recipientIsSelf && ($ctrl.pageInfo.name || $ctrl.pageInfo.nickname))||$ctrl.msgData.recipient_name||$ctrl.msgData.linkToRecipient[1]" class=id-link></a> - <a ui-sref="messages.show({ id: ($ctrl.msgData.ipfs_hash || $ctrl.msgData.hash) })" ng-bind="$ctrl.msgData.data.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block;></a></p><p ng-if="$ctrl.msgData.isVerification || $ctrl.msgData.isUnverification"><small ng-repeat="recipient in $ctrl.msgData.data.recipient">{{recipient[0]}}: <span ng-if="recipient[0] == \'email\' || recipient[0] == \'url\'" ng-bind-html="recipient[1] | linky"></span> <span ng-if="!(recipient[0] == \'email\' || recipient[0] == \'url\')" ng-bind=recipient[1]></span> <i class="fa fa-link" ng-if="!$last && $ctrl.msgData.isVerification"></i> <i class="fa fa-chain-broken" ng-if="!$last && $ctrl.msgData.isUnverification"></i></small></p><p ng-bind-html=$ctrl.msgData.data.comment|linky></p></div></div>');}]);