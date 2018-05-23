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
      $scope.searchRequest = null;
      $scope.search = function(query, limit) {
        var cursor, searchKey;
        $scope.ids.loading = true;
        $scope.identitiesByHash = {};
        searchKey = encodeURIComponent((query || $scope.query.term || '').toLowerCase());
        if (searchKey !== $scope.previousSearchKey) {
          $scope.ids.list = [];
          $scope.ids.finished = false;
          $scope.identitiesByHash = {};
        }
        $scope.previousSearchKey = searchKey;
        limit = limit || 20;
        cursor = false;
        if ($scope.ids.list.length) {
          cursor = $scope.ids.list[$scope.ids.list.length - 1].cursor;
        }
        if (searchKey.length) {
          $scope.searchRequest = $scope.identifiIndex.search(searchKey, void 0, limit, cursor);
        } else {
          $scope.searchRequest = $scope.identifiIndex.search(searchKey, void 0, limit, cursor);
        }
        $scope.searchRequest = $scope.searchRequest.then(function(identities) {
          identities.forEach(function(i) {
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
                i.nickname = i.nickname.replace('<', '&lt;');
              }
            }
            return i.primaryName = i.primaryName.replace('<', '&lt;');
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
            return $scope.ids.list[0].active = true;
          }
        });
        return $scope.searchRequest.then(function() {
          $scope.$apply(function() {
            return $scope.ids.loading = false;
          });
          return $scope.ids.list;
        });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLGdCQUE3QyxFQUErRDtJQUM3RCxRQUQ2RCxFQUU3RCxZQUY2RCxFQUc3RCxXQUg2RCxFQUk3RCxPQUo2RCxFQUs3RCxRQUw2RCxFQU03RCxRQU42RCxFQU83RCxxQkFQNkQsRUFRN0QsV0FSNkQsRUFTN0QsU0FUNkQsRUFVN0QsSUFWNkQsRUFXN0QsT0FYNkQsRUFnQjdELFNBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsU0FBckIsRUFBZ0MsS0FBaEMsRUFBdUMsTUFBdkMsRUFBK0MsTUFBL0MsRUFDQSxtQkFEQSxFQUNxQixTQURyQixFQUNnQyxPQURoQyxFQUN5QyxFQUR6QyxFQUM2QyxLQUQ3Qzs7QUFFRTs7Ozs7Ozs7O0FBQUEsVUFBQTtNQVdBLE1BQU0sQ0FBQyxjQUFQLEdBQXdCO01BQ3hCLE1BQU0sQ0FBQyxhQUFQLEdBQXVCLG1CQUFtQixDQUFDLEdBQXBCLENBQXdCLGVBQXhCLENBQUEsSUFBNEM7TUFDbkUsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEIsRUFBeUMsTUFBTSxDQUFDLGFBQWhEO01BRUEsTUFBTSxDQUFDLFFBQVAsR0FBa0I7UUFBRSxLQUFBLEVBQU8sSUFBVDs7TUFDbEIsTUFBTSxDQUFDLFdBQVAsR0FBcUI7TUFFckIsTUFBTSxDQUFDLFFBQVAsR0FBa0IsU0FBQyxFQUFEO1FBQ2hCLElBQUcsS0FBSyxDQUFDLE9BQU4sQ0FBYyxFQUFkLENBQUg7QUFDRSxpQkFBTyxrQkFBQSxDQUFtQixFQUFHLENBQUEsQ0FBQSxDQUF0QixDQUFBLEdBQTRCLEdBQTVCLEdBQWtDLGtCQUFBLENBQW1CLEVBQUcsQ0FBQSxDQUFBLENBQXRCLEVBRDNDO1NBQUEsTUFBQTtB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QVcsQ0FBQyxTQUFBO2NBQ2pCLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBYixHQUFvQixFQUFFLENBQUMsR0FBSCxDQUFBO2NBQ3BCLE1BQU0sQ0FBQyxNQUFQLENBQUE7WUFGaUIsQ0FBRCxDQUFYLEVBSUosR0FKSTtZQUtQLE1BQU0sQ0FBQyxLQUFQLEdBQWU7QUFDZjtBQWpDSjtNQURxQjthQW9DdkIsTUFBTSxDQUFDLG9CQUFQLEdBQThCLFNBQUMsSUFBRDtRQUM1QixNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWLEVBQTZCO1VBQUUsSUFBQSxFQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBcEI7VUFBMEIsS0FBQSxFQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBN0M7U0FBN0I7ZUFDQSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQWIsR0FBb0I7TUFGUTtJQWpnQmhDLENBaEI2RDtHQUEvRDtBQURBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuY29udHJvbGxlciAnTWFpbkNvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckc3RhdGUnXG4gICdjb25maWcnLFxuICAnbG9jYWxTdG9yYWdlU2VydmljZSdcbiAgJyR1aWJNb2RhbCdcbiAgJyR3aW5kb3cnXG4gICckcSdcbiAgJ2ZvY3VzJ1xuXG4gICMnQXV0aGVudGljYXRpb24nXG4gICMnTWVudXMnXG4gICMnUGVyc29uYSdcbiAgKCRzY29wZSwgJHJvb3RTY29wZSwgJGxvY2F0aW9uLCAkaHR0cCwgJHN0YXRlLCBjb25maWcsXG4gIGxvY2FsU3RvcmFnZVNlcnZpY2UsICR1aWJNb2RhbCwgJHdpbmRvdywgJHEsIGZvY3VzKSAtPiAjIEF1dGhlbnRpY2F0aW9uLCBNZW51cywgUGVyc29uYVxuICAgICMjI1xuICAgIFBlcnNvbmEud2F0Y2hcbiAgICAgIGxvZ2dlZEluVXNlcjogQXV0aGVudGljYXRpb24udXNlci5lbWFpbFxuICAgICAgb25sb2dpbjogKGFzc2VydGlvbikgLT5cbiAgICAgICAgJGh0dHAucG9zdCgnL2F1dGgvcGVyc29uYScsIGFzc2VydGlvbjogYXNzZXJ0aW9uKS50aGVuIC0+XG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAjIEZJWE1FXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmxvZ291dDogLT5cbiAgICAjIyNcblxuICAgICMgc2V0IGF1dGhlbnRpY2F0aW9uXG4gICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge30gIyBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5sb2NhbE1lc3NhZ2VzID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2FsTWVzc2FnZXMnKSBvciB7fVxuICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdsb2NhbE1lc3NhZ2VzJywgJHNjb3BlLmxvY2FsTWVzc2FnZXMpXG5cbiAgICAkc2NvcGUubm9kZUluZm8gPSB7IGtleUlEOiBudWxsIH1cbiAgICAkc2NvcGUuaXBmc1N0b3JhZ2UgPSB7fVxuXG4gICAgJHNjb3BlLmdldElkS2V5ID0gKGlkKSAtPlxuICAgICAgaWYgQXJyYXkuaXNBcnJheShpZClcbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChpZFswXSkgKyAnOicgKyBlbmNvZGVVUklDb21wb25lbnQoaWRbMV0pXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaWQubmFtZSkgKyAnOicgKyBlbmNvZGVVUklDb21wb25lbnQoaWQudmFsKVxuXG4gICAgJHNjb3BlLmxvZ2luV2l0aEtleSA9IChwcml2YXRlS2V5UEVNKSAtPlxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBLRVlVVElMLmdldEtleUZyb21QbGFpblByaXZhdGVQS0NTOFBFTShwcml2YXRlS2V5UEVNKVxuICAgICAgJHNjb3BlLnB1YmxpY0tleSA9IG5ldyBLSlVSLmNyeXB0by5FQ0RTQSh7J2N1cnZlJzogJ3NlY3AyNTZrMScsICdwdWInOiAkc2NvcGUucHJpdmF0ZUtleS5wdWJLZXlIZXh9KVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ3ByaXZhdGVLZXlQRU0nLCBwcml2YXRlS2V5UEVNKVxuICAgICAgcHVibGljS2V5SGV4ID0gS0VZVVRJTC5nZXRIZXhGcm9tUEVNKEtFWVVUSUwuZ2V0UEVNKCRzY29wZS5wdWJsaWNLZXkpKVxuICAgICAgcHVibGljS2V5SGFzaCA9IENyeXB0b0pTLmVuYy5CYXNlNjQuc3RyaW5naWZ5KENyeXB0b0pTLlNIQTI1NihwdWJsaWNLZXlIZXgpKVxuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgPVxuICAgICAgICBpZFR5cGU6ICdrZXlJRCdcbiAgICAgICAgaWRWYWx1ZTogcHVibGljS2V5SGFzaFxuICAgICAgJHNjb3BlLmxvZ2luTW9kYWwuY2xvc2UoKSBpZiAkc2NvcGUubG9naW5Nb2RhbFxuXG4gICAgcHJpdmF0ZUtleSA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdwcml2YXRlS2V5UEVNJylcbiAgICBpZiBwcml2YXRlS2V5XG4gICAgICAkc2NvcGUubG9naW5XaXRoS2V5KHByaXZhdGVLZXkpXG4gICAgdG9rZW4gPSAkbG9jYXRpb24uc2VhcmNoKCkudG9rZW5cbiAgICBpZiB0b2tlblxuICAgICAgandzID0gS0pVUi5qd3MuSldTLnBhcnNlKHRva2VuKS5wYXlsb2FkT2JqXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udG9rZW4gPSB0b2tlblxuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgPSBqd3MudXNlclxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ3Rva2VuJywgdG9rZW4pXG4gICAgICBwcmV2aW91c1N0YXRlID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ3N0YXRlJykgfHwgJ2lkZW50aXRpZXMubGlzdCdcbiAgICAgIHByZXZpb3VzU3RhdGVQYXJhbXMgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnc3RhdGVQYXJhbXMnKSB8fCB7fVxuICAgICAgJHN0YXRlLmdvKHByZXZpb3VzU3RhdGUsIHByZXZpb3VzU3RhdGVQYXJhbXMpXG4gICAgZWxzZVxuICAgICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgndG9rZW4nKVxuICAgICAgaWYgdG9rZW5cbiAgICAgICAgandzID0gS0pVUi5qd3MuSldTLnBhcnNlKHRva2VuKS5wYXlsb2FkT2JqXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi50b2tlbiA9IHRva2VuXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyID0gandzLnVzZXJcblxuICAgICRzY29wZS5xdWVyeSA9IHt9XG4gICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICRzY29wZS5wcmV2aW91c1NlYXJjaEtleSA9ICcnXG4gICAgJHNjb3BlLmlkcyA9IHsgbGlzdDogW10gfVxuICAgICRzY29wZS5waG9uZVJlZ2V4ID0gL15cXCs/XFxkKyQvXG5cbiAgICAkc2NvcGUuaXBmcyA9IG5ldyBJcGZzKFxuICAgICAgaW5pdDogdHJ1ZVxuICAgICAgRVhQRVJJTUVOVEFMOiB7XG4gICAgICAgIHB1YnN1YjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHN0YXJ0OiB0cnVlXG4gICAgICByZXBvOiAnaXBmczYtaWRlbnRpZmknXG4gICAgICBjb25maWc6IEJvb3RzdHJhcDogW1xuICAgICAgICAnL2RuczQvYW1zLTEuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MZXIyNjVOUmdTcDJMQTNkUGFleWtpUzFKNkRpZlRDODhmNXVWUUtOQWQnXG4gICAgICAgICcvZG5zNC9zZm8tMS5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xqdTZtN3hUaDNEdW9rdlQzODg2UVJZcXhBemIxa1NoYWFuSmdXMzZ5eCdcbiAgICAgICAgJy9kbnM0L2xvbi0xLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTE1lV3FCN1lHVkxKTjNwTkxRcG1tRWszNXY2d1l0c01HTHpTcjVRQlUzJ1xuICAgICAgICAnL2RuczQvc2ZvLTIuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MblNHY2NGdVpRSnpSYWRIbjk1VzJDclNGbVp1VGREV1A4SFhhSGNhOXonXG4gICAgICAgICcvZG5zNC9zZm8tMy5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xQcHB1QnRRU0d3S0RaVDJNNzNVTHBqdmZkM2FaNmhhNG9GR0wxS3JHTSdcbiAgICAgICAgJy9kbnM0L3NncC0xLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTFNhZlRNQnNQS2FkVEVnYVhjdERRVmNxTjg4Q05MSFhNa1ROd01LUG51J1xuICAgICAgICAnL2RuczQvbnljLTEuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MdWVSNHhCZVViWTlXWjl4R1VVeHVuYktXY3JORlREQWFkUUptb2NuV20nXG4gICAgICAgICcvZG5zNC9ueWMtMi5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xWNEJibTUxak05QzRnRFlaUTlDeTNVNmFYTUpEQWJ6Z3UyZnphRHM2NCdcbiAgICAgIF0pXG5cbiAgICAjIEdldCBwb3NzaWJsZSBsb2dpbiBvcHRpb25zXG4gICAgJGh0dHAuZ2V0KCcvYXBpJywgeyB0aW1lb3V0OiAyMDAwIH0pXG4gICAgLnRoZW4gKHJlcykgLT5cbiAgICAgICRzY29wZS5ub2RlSW5mbyA9IGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5ub2RlSW5mbywgcmVzLmRhdGFcbiAgICAsIChlcnIpIC0+XG4gICAgICAkc2NvcGUubm9kZUluZm8gPSB7IGxvZ2luT3B0aW9uczogW3RydWVdLCBrZXlJRDogbnVsbCB9XG5cbiAgICAkc2NvcGUuaXBmcy5vbiAncmVhZHknLCAtPlxuICAgICAgY29uc29sZS5sb2cgJHNjb3BlLmlwZnNcbiAgICAgICR3aW5kb3cuaXBmcyA9ICRzY29wZS5pcGZzXG4gICAgICAkc2NvcGUuaXBmcy5wdWJzdWIuc3Vic2NyaWJlICdpZGVudGlmaScsIChtc2cpIC0+XG4gICAgICAgIG1zZyA9IHsgandzOiAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIobXNnLmRhdGEpLnRvU3RyaW5nKCkgfVxuICAgICAgICBoYXNoID0gQ3J5cHRvSlMuZW5jLkJhc2U2NC5zdHJpbmdpZnkoQ3J5cHRvSlMuU0hBMjU2KG1zZy5qd3MpKVxuICAgICAgICBjb25zb2xlLmxvZyAnaWRlbnRpZmkgbWVzc2FnZSByZWNlaXZlZCcsIG1zZywgaGFzaFxuICAgICAgICBsb2NhbE1lc3NhZ2VzID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2FsTWVzc2FnZXMnKVxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzKFttc2ddKVxuICAgICAgICBsb2NhbE1lc3NhZ2VzW2hhc2hdwqA9IG1zZ1xuICAgICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnbG9jYWxNZXNzYWdlcycsIGxvY2FsTWVzc2FnZXMpXG4gICAgICAjJHNjb3BlLmluaXRJcGZzSW5kZXhlcygpXG5cbiAgICAkc2NvcGUuaW5pdElwZnNJbmRleGVzID0gLT5cbiAgICAgICR3aW5kb3cuaWRlbnRpZmlMaWIuSW5kZXgubG9hZCgpXG4gICAgICAudGhlbiAocmVzdWx0cykgLT5cbiAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXggPSByZXN1bHRzXG4gICAgICAgIGNvbnNvbGUubG9nICdHb3QgaW5kZXgnLCAkc2NvcGUuaWRlbnRpZmlJbmRleFxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5hcGlSZWFkeSA9IHRydWVcblxuICAgICAgaW5kZXhSb290ID0gJy9pcG5zL1FtYmIxRFJ3ZDc1clprNVRvdFRYSll6RFNKTDZCYU5UMURBUTZWYktjS0xoYnMnXG4gICAgICAkaHR0cC5nZXQgJ2h0dHBzOi8vaWRlbnRpLmZpJyArIGluZGV4Um9vdCArICcvaW5mbydcbiAgICAgIC5jYXRjaCAoZXJyKSAtPlxuICAgICAgICAkaHR0cC5nZXQgJ2h0dHBzOi8vaXBmcy5pbycgKyBpbmRleFJvb3QgKyAnL2luZm8nXG4gICAgICAudGhlbiAocmVzKSAtPlxuICAgICAgICAkc2NvcGUubm9kZUluZm8ucHJvZmlsZSA9ICRzY29wZS5wcm9maWxlRnJvbURhdGEocmVzLmRhdGEsIFsna2V5SUQnLCByZXMuZGF0YS5rZXlJRF0pXG4gICAgICAuY2F0Y2ggKGUpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdpbml0aWFsaXphdGlvbiBmYWlsZWQ6JywgZVxuXG4gICAgJHNjb3BlLmluaXRJcGZzSW5kZXhlcygpXG5cbiAgICAkc2NvcGUuc2V0UGFnZVRpdGxlID0gKHRpdGxlKSAtPlxuICAgICAgJHJvb3RTY29wZS5wYWdlVGl0bGUgPSAnSWRlbnRpZmknXG4gICAgICBpZiAodGl0bGUpXG4gICAgICAgICRyb290U2NvcGUucGFnZVRpdGxlICs9ICcgLSAnICsgdGl0bGVcblxuICAgICRzY29wZS5pcGZzR2V0ID0gKHVyaSwgZ2V0SnNvbikgLT5cbiAgICAgIGpzSXBmc0dldCA9IC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdHZXR0aW5nIGZyb20ganMtaXBmcycsIHVyaVxuICAgICAgICAkc2NvcGUuaXBmcy5maWxlcy5jYXQodXJpKS50aGVuIChzdHJlYW0pIC0+XG4gICAgICAgICAgbmV3IFByb21pc2UgKHJlc29sdmUsIHJlamVjdCkgLT5cbiAgICAgICAgICAgIHN0cmVhbS5vbiAnZGF0YScsIChmaWxlKSAtPlxuICAgICAgICAgICAgICBmaWxlID0gJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyKGZpbGUpLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgZmlsZSA9IEpTT04ucGFyc2UoZmlsZSkgaWYgZ2V0SnNvblxuICAgICAgICAgICAgICByZXNvbHZlKGZpbGUpXG4gICAgICAgICAgICBzdHJlYW0ub24gJ2Vycm9yJywgKGVycm9yKSAtPlxuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG5cbiAgICAgIGlmICRzY29wZS5pcGZzU3RvcmFnZS5hcGlSb290XG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJHNjb3BlLmlwZnNTdG9yYWdlLmFwaVJvb3QgKyAnL2lwZnMvJyArIHVyaSlcbiAgICAgICAgLnRoZW4gKHJlcykgLT4gcmVzLmRhdGFcbiAgICAgICAgLmNhdGNoIC0+IGpzSXBmc0dldCgpXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBqc0lwZnNHZXQoKVxuXG4gICAgJHNjb3BlLm5ld01lc3NhZ2UgPVxuICAgICAgcmF0aW5nOiAxXG4gICAgICBjb21tZW50OiAnJ1xuICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24gPVxuICAgICAgdHlwZTogJydcbiAgICAgIHZhbHVlOiAnJ1xuICAgICMgQ3JlYXRlIG5ldyBNZXNzYWdlXG4gICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UgPSAoZXZlbnQsIHBhcmFtcywgaWQpIC0+XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKSBpZiBldmVudFxuICAgICAgIyBDcmVhdGUgbmV3IE1lc3NhZ2Ugb2JqZWN0XG4gICAgICBtZXNzYWdlID1cbiAgICAgICAgY29udGV4dDogJ2lkZW50aWZpJ1xuXG4gICAgICBpZiBwYXJhbXMudHlwZSA9PSAncmF0aW5nJ1xuICAgICAgICBhbmd1bGFyLmV4dGVuZCBtZXNzYWdlLFxuICAgICAgICAgIG1heFJhdGluZzogM1xuICAgICAgICAgIG1pblJhdGluZzogLTNcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kIG1lc3NhZ2UsIHBhcmFtc1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgICBpZiAkc2NvcGUucHJpdmF0ZUtleVxuICAgICAgICBwdWJsaWNLZXlIZXggPSBLRVlVVElMLmdldEhleEZyb21QRU0oS0VZVVRJTC5nZXRQRU0oJHNjb3BlLnB1YmxpY0tleSkpXG4gICAgICAgIHB1YmxpY0tleUhhc2ggPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnN0cmluZ2lmeShDcnlwdG9KUy5TSEEyNTYocHVibGljS2V5SGV4KSlcbiAgICAgICAgbWVzc2FnZS5hdXRob3IgPSBbWydrZXlJRCcsIHB1YmxpY0tleUhhc2hdXVxuICAgICAgICBtZXNzYWdlLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICBoZWFkZXIgPSBKU09OLnN0cmluZ2lmeSh7IGFsZzogJ0VTMjU2Jywga2lkOiBwdWJsaWNLZXlIZXggfSlcbiAgICAgICAgcGF5bG9hZCA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpXG4gICAgICAgIGp3cyA9IEtKVVIuandzLkpXUy5zaWduKFwiRVMyNTZcIiwgaGVhZGVyLCBwYXlsb2FkLCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICAgaGFzaCA9IENyeXB0b0pTLmVuYy5CYXNlNjQuc3RyaW5naWZ5KENyeXB0b0pTLlNIQTI1Nihqd3MpKVxuICAgICAgICBtZXNzYWdlID0geyBqd3M6IGp3cywgaGFzaDogaGFzaCB9XG4gICAgICAgICRzY29wZS5pcGZzLmZpbGVzLmFkZChuZXcgJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyKGp3cykpLnRoZW4gKGkpIC0+XG4gICAgICAgICAgJHNjb3BlLmlwZnMucHVic3ViLnB1Ymxpc2goJ2lkZW50aWZpJywgbmV3ICRzY29wZS5pcGZzLnR5cGVzLkJ1ZmZlcihqd3MpKVxuICAgICAgZWxzZVxuICAgICAgICBvcHRpb25zID1cbiAgICAgICAgICBoZWFkZXJzOlxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyAkc2NvcGUuYXV0aGVudGljYXRpb24udG9rZW5cblxuICAgICAgJGh0dHAucG9zdCgnL2FwaS9tZXNzYWdlcycsIG1lc3NhZ2UsIG9wdGlvbnMpXG4gICAgICAuY2F0Y2ggLT5cbiAgICAgICAgJGh0dHAucG9zdCgnaHR0cHM6Ly9pZGVudGkuZmkvYXBpL21lc3NhZ2VzJywgbWVzc2FnZSwgb3B0aW9ucylcbiAgICAgIC50aGVuICgocmVzcG9uc2UpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nIHJlc3BvbnNlXG4gICAgICAgICMgQ2xlYXIgZm9ybSBmaWVsZHNcbiAgICAgICAgJHNjb3BlLm5ld01lc3NhZ2UuY29tbWVudCA9ICcnXG4gICAgICAgICRzY29wZS5uZXdNZXNzYWdlLnJhdGluZyA9IDFcbiAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlID0gJydcbiAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi52YWx1ZSA9ICcnXG4gICAgICAgICRzY29wZS4kcm9vdC4kYnJvYWRjYXN0ICdNZXNzYWdlQWRkZWQnLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICBpZDogaWRcbiAgICAgICAgJHNjb3BlLmdldElwZnNJbmRleGVzICRzY29wZS5pcGZzU3RvcmFnZS5hcGlSb290ICsgJy9pcGZzLycgKyByZXNwb25zZS5kYXRhLmlwZnNJbmRleFJvb3QgaWYgcmVzcG9uc2UuZGF0YS5pcGZzSW5kZXhSb290XG4gICAgICAgIHJlc3BvbnNlLmRhdGFcbiAgICAgICksIChlcnJvclJlc3BvbnNlKSAtPlxuICAgICAgICAkc2NvcGUuZXJyb3IgPSBlcnJvclJlc3BvbnNlLmRhdGEgfHwgSlNPTi5zdHJpbmdpZnkoZXJyb3JSZXNwb25zZSlcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclJlc3BvbnNlKVxuXG4gICAgJHNjb3BlLmFkZEF0dHJpYnV0ZSA9IC0+XG4gICAgICAkbG9jYXRpb24ucGF0aCAnIy9pZGVudGl0aWVzL2NyZWF0ZS8nICsgJHNjb3BlLnF1ZXJ5LnRlcm1cblxuICAgICRzY29wZS5sb2dpbiA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPSAtMSAjIGJlY2F1c2UgdGhlIHVzZXIgZG9lc24ndCBoYXZlIGEgdHJ1c3QgaW5kZXggeWV0XG5cbiAgICAkc2NvcGUub3BlbkxvZ2luTW9kYWwgPSAtPlxuICAgICAgJHNjb3BlLmxvZ2luTW9kYWwgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9sb2dpbi5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiAnbGcnXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgICRzY29wZS5sb2dpbk1vZGFsLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgJHNjb3BlLmxvZ2luTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLmdlbmVyYXRlS2V5ID0gLT5cbiAgICAgIGtleXBhaXIgPSBLRVlVVElMLmdlbmVyYXRlS2V5cGFpcignRUMnLCAnc2VjcDI1NmsxJylcbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0ga2V5cGFpci5wcnZLZXlPYmpcbiAgICAgICRzY29wZS5wdWJsaWNLZXkgPSBrZXlwYWlyLnB1YktleU9ialxuICAgICAgJHNjb3BlLnByaXZhdGVLZXlQRU0gPSBLRVlVVElMLmdldFBFTSgkc2NvcGUucHJpdmF0ZUtleSwgJ1BLQ1M4UFJWJylcblxuICAgICRzY29wZS5kb3dubG9hZEtleSA9IC0+XG4gICAgICBoaWRkZW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICBoaWRkZW5FbGVtZW50LmhyZWYgPSAnZGF0YTp0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUkkoJHNjb3BlLnByaXZhdGVLZXlQRU0pXG4gICAgICBoaWRkZW5FbGVtZW50LnRhcmdldCA9ICdfYmxhbmsnXG4gICAgICBoaWRkZW5FbGVtZW50LmRvd25sb2FkID0gJ2lkZW50aWZpX3ByaXZhdGVfa2V5LnR4dCdcbiAgICAgIGhpZGRlbkVsZW1lbnQuY2xpY2soKVxuXG4gICAgJHNjb3BlLmxvZ291dCA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPSAwXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleVBFTSA9ICcnXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24gPSB7fVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5jbGVhckFsbCgpXG4gICAgICAkc3RhdGUuZ28oJ2lkZW50aXRpZXMubGlzdCcpXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IG51bGxcbiAgICAgICRzY29wZS5wdWJsaWNLZXkgPSBudWxsXG5cbiAgICAkc2NvcGUubXNnRmlsdGVyID0gKHZhbHVlLCBpbmRleCwgYXJyYXkpIC0+XG4gICAgICBkYXRhID0gdmFsdWUuZGF0YSBvciB2YWx1ZS5zaWduZWREYXRhXG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUubWF0Y2ggL15yYXRpbmcvXG4gICAgICAgICAgaWYgZGF0YS50eXBlICE9ICdyYXRpbmcnXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKGRhdGEubWF4UmF0aW5nICsgZGF0YS5taW5SYXRpbmcpIC8gMlxuICAgICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpwb3NpdGl2ZScgYW5kIGRhdGEucmF0aW5nIDw9IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOm5lZ2F0aXZlJyBhbmQgZGF0YS5yYXRpbmcgPj0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6bmV1dHJhbCcgYW5kIGRhdGEucmF0aW5nICE9IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmIGRhdGEudHlwZSAhPSAkc2NvcGUuZmlsdGVycy50eXBlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2VcbiAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlID09IDAgYW5kIHR5cGVvZiB2YWx1ZS5hdXRob3JUcnVzdERpc3RhbmNlICE9ICdudW1iZXInXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlID4gMCBhbmQgdmFsdWUuYXV0aG9yVHJ1c3REaXN0YW5jZSA+ICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgcmV0dXJuIHRydWVcblxuICAgICRzY29wZS5yZW1vdmVGb2N1cyA9IChldmVudCkgLT5cbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuYmx1cigpXG5cbiAgICAkc2NvcGUubG9nb0NsaWNrZWQgPSAtPlxuICAgICAgZm9jdXMoJ3NlYXJjaEZvY3VzJylcbiAgICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5saXN0J1xuICAgICAgICBpZiAkc2NvcGUucXVlcnkudGVybSAhPSAnJ1xuICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICAgICAkc2NvcGUuc2VhcmNoKClcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICAgICAkc2NvcGUuaWRzLmxpc3QgPSBbXVxuICAgICAgICAkc2NvcGUuaWRzLmZpbmlzaGVkID0gZmFsc2VcbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLmxpc3QnXG5cbiAgICAkc2NvcGUuc2V0TXNnUmF3RGF0YSA9IChtc2cpIC0+XG4gICAgICBzaG93UmF3RGF0YSA9XG4gICAgICAgIGhhc2g6IG1zZy5oYXNoXG4gICAgICAgIGRhdGE6IG1zZy5kYXRhXG4gICAgICAgIHByaW9yaXR5OiBtc2cucHJpb3JpdHlcbiAgICAgICAgandzOiBtc2cuandzXG4gICAgICBtc2cuc3RyRGF0YSA9IEpTT04uc3RyaW5naWZ5KHNob3dSYXdEYXRhLCB1bmRlZmluZWQsIDIpXG5cbiAgICAkc2NvcGUucHJvZmlsZUZyb21EYXRhID0gKGRhdGEsIGZhbGxiYWNrSWQpIC0+XG4gICAgICBpZiBkYXRhLmF0dHJzIGFuZCBkYXRhLmF0dHJzLmxlbmd0aFxuICAgICAgICByZXR1cm4gbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkoe2F0dHJzOmRhdGEuYXR0cnN9KVxuICAgICAgcmV0dXJuIG5ldyAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5KHthdHRyczpbZmFsbGJhY2tJZF19KVxuXG4gICAgJHNjb3BlLm9wZW5NZXNzYWdlID0gKGV2ZW50LCBtZXNzYWdlLCBzaXplKSAtPlxuICAgICAgdCA9IGV2ZW50LnRhcmdldFxuICAgICAgcmV0dXJuIGlmIGFuZ3VsYXIuZWxlbWVudCh0KS5jbG9zZXN0KCdhJykubGVuZ3RoXG4gICAgICAkc2NvcGUuc2V0TXNnUmF3RGF0YShtZXNzYWdlKVxuICAgICAgJHNjb3BlLm1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgICAjIFRPRE86IGNoZWNrIHNpZ1xuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0KCRzY29wZS5tZXNzYWdlLnNpZ25lcl9rZXlpZCwgJ2tleUlEJykudGhlbiAocHJvZmlsZSkgLT5cbiAgICAgICAgdW5sZXNzIHByb2ZpbGVcbiAgICAgICAgICBwcm9maWxlID0gbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkoe2F0dHJzOltbJ2tleUlEJywgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyX2tleWlkXV19KVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnkgPSBwcm9maWxlXG4gICAgICBtb2RhbEluc3RhbmNlID0gJHVpYk1vZGFsLm9wZW4oXG4gICAgICAgIGFuaW1hdGlvbjogJHNjb3BlLmFuaW1hdGlvbnNFbmFibGVkXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21lc3NhZ2VzL3Nob3cubW9kYWwuaHRtbCdcbiAgICAgICAgc2l6ZTogc2l6ZVxuICAgICAgICBzY29wZTogJHNjb3BlXG4gICAgICApXG4gICAgICBtb2RhbEluc3RhbmNlLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgbW9kYWxJbnN0YW5jZS5jbG9zZSgpXG5cbiAgICAkc2NvcGUuZmlsdGVycyA9ICRzY29wZS5maWx0ZXJzIG9yIGNvbmZpZy5kZWZhdWx0RmlsdGVyc1xuXG4gICAgIyMjXG4gICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0gQXV0aGVudGljYXRpb25cbiAgICBpZiBBdXRoZW50aWNhdGlvbi51c2VyXG4gICAgICBpZiBBdXRoZW50aWNhdGlvbi51c2VyLnByb3ZpZGVyID09ICdwZXJzb25hJ1xuICAgICAgICBBdXRoZW50aWNhdGlvbi51c2VyLmlkVHlwZSA9ICdlbWFpbCdcbiAgICAgIGVsc2VcbiAgICAgICAgQXV0aGVudGljYXRpb24udXNlci5pZFR5cGUgPSAndXJsJ1xuICAgICAgc3dpdGNoIEF1dGhlbnRpY2F0aW9uLnVzZXIucHJvdmlkZXJcbiAgICAgICAgd2hlbiAncGVyc29uYSdcbiAgICAgICAgICBBdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWUgPSBBdXRoZW50aWNhdGlvbi51c2VyLmVtYWlsXG4gICAgICAgIHdoZW4gJ3R3aXR0ZXInXG4gICAgICAgICAgQXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vJyArIEF1dGhlbnRpY2F0aW9uLnVzZXIudXNlcm5hbWVcbiAgICAgICAgZWxzZVxuICAgICAgICAgIEF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZSA9IEF1dGhlbnRpY2F0aW9uLnVzZXIucHJvdmlkZXJEYXRhLmxpbmtcbiAgICAgICAgICBicmVha1xuICAgICMjI1xuXG4gICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2VcbiAgICAjICRzY29wZS5tZW51ID0gTWVudXMuZ2V0TWVudSgndG9wYmFyJylcblxuICAgICRzY29wZS50b2dnbGVDb2xsYXBzaWJsZU1lbnUgPSAtPlxuICAgICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gISRzY29wZS5pc0NvbGxhcHNlZFxuXG4gICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyA9IChtZXNzYWdlcywgbXNnT3B0aW9ucywgdmVyaWZ5U2lnbmF0dXJlKSAtPlxuICAgICAgcHJvY2Vzc01lc3NhZ2UgPSAobXNnKSAtPlxuICAgICAgICBwYXJzZWRKd3MgPSBLSlVSLmp3cy5KV1MucGFyc2UobXNnLmp3cylcbiAgICAgICAgbXNnLmRhdGEgPSBwYXJzZWRKd3MucGF5bG9hZE9ialxuICAgICAgICB1bmxlc3MgbXNnLnNpZ25lcl9rZXlpZFxuICAgICAgICAgIGtleUhhc2ggPSBDcnlwdG9KUy5TSEEyNTYocGFyc2VkSndzLmhlYWRlck9iai5raWQpXG4gICAgICAgICAgbXNnLnNpZ25lcl9rZXlpZCA9IENyeXB0b0pTLmVuYy5CYXNlNjQuc3RyaW5naWZ5KGtleUhhc2gpXG5cbiAgICAgICAgbXNnLmF1dGhvciA9IG1zZy5nZXRBdXRob3IoKSBpZiBtc2cuZ2V0QXV0aG9yXG4gICAgICAgICMgVE9ETzogbWFrZSBzdXJlIG1lc3NhZ2Ugc2lnbmF0dXJlIGlzIGNoZWNrZWRcblxuICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gbXNnLmRhdGEuYXV0aG9yWzBdXG4gICAgICAgIGkgPSB1bmRlZmluZWRcbiAgICAgICAgaSA9IDBcbiAgICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgICAgd2hpbGUgaSA8IG1zZy5kYXRhLmF1dGhvci5sZW5ndGhcbiAgICAgICAgICBpbmRleCA9IGNvbmZpZy51bmlxdWVBdHRyaWJ1dGVUeXBlcy5pbmRleE9mKG1zZy5kYXRhLmF1dGhvcltpXVswXSlcbiAgICAgICAgICBpZiBpbmRleCA+IC0xIGFuZCBpbmRleCA8IHNtYWxsZXN0SW5kZXhcbiAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgbXNnLmxpbmtUb0F1dGhvciA9IG1zZy5kYXRhLmF1dGhvcltpXVxuICAgICAgICAgIGVsc2UgaWYgIW1zZy5hdXRob3JfbmFtZSBhbmQgbXNnLmRhdGEuYXV0aG9yW2ldWzBdIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgICBtc2cuYXV0aG9yX25hbWUgPSBtc2cuZGF0YS5hdXRob3JbaV1bMV1cbiAgICAgICAgICBpKytcbiAgICAgICAgbXNnLmxpbmtUb1JlY2lwaWVudCA9IG1zZy5kYXRhLnJlY2lwaWVudFswXVxuICAgICAgICBpID0gMFxuICAgICAgICBzbWFsbGVzdEluZGV4ID0gMTAwMFxuICAgICAgICB3aGlsZSBpIDwgbXNnLmRhdGEucmVjaXBpZW50Lmxlbmd0aFxuICAgICAgICAgIGluZGV4ID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YobXNnLmRhdGEucmVjaXBpZW50W2ldWzBdKVxuICAgICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgICAgc21hbGxlc3RJbmRleCA9IGluZGV4XG4gICAgICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gbXNnLmRhdGEucmVjaXBpZW50W2ldXG4gICAgICAgICAgZWxzZSBpZiAhbXNnLnJlY2lwaWVudF9uYW1lIGFuZCBtc2cuZGF0YS5yZWNpcGllbnRbaV1bMF0gaW4gWyduYW1lJywgJ25pY2tuYW1lJ11cbiAgICAgICAgICAgIG1zZy5yZWNpcGllbnRfbmFtZSA9IG1zZy5kYXRhLnJlY2lwaWVudFtpXVsxXVxuICAgICAgICAgIGkrK1xuICAgICAgICBzaWduZWREYXRhID0gbXNnLmRhdGFcbiAgICAgICAgYWxwaGEgPSB1bmRlZmluZWRcbiAgICAgICAgbXNnLmljb25TdHlsZSA9ICcnXG4gICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJydcbiAgICAgICAgbXNnLmJnQ29sb3IgPSAnJ1xuICAgICAgICBtc2cuaWNvbkNvdW50ID0gbmV3IEFycmF5KDEpXG4gICAgICAgIHN3aXRjaCBzaWduZWREYXRhLnR5cGVcbiAgICAgICAgICB3aGVuICd2ZXJpZnlfaWRlbnRpdHknLCAndmVyaWZpY2F0aW9uJ1xuICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLW9rIHBvc2l0aXZlJ1xuICAgICAgICAgICAgbXNnLmhhc1N1Y2Nlc3MgPSAnaGFzLXN1Y2Nlc3MnXG4gICAgICAgICAgICBtc2cuaXNWZXJpZmljYXRpb24gPSB0cnVlXG4gICAgICAgICAgd2hlbiAnY29ubmVjdGlvbidcbiAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1vayBwb3NpdGl2ZSdcbiAgICAgICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJ2hhcy1zdWNjZXNzJ1xuICAgICAgICAgIHdoZW4gJ3VudmVyaWZ5X2lkZW50aXR5JywgJ3VudmVyaWZpY2F0aW9uJ1xuICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBuZWdhdGl2ZSdcbiAgICAgICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJ2hhcy1lcnJvcidcbiAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6ICNGRkYwREU7Ym9yZGVyLWNvbG9yOiNGRkUyQzY7J1xuICAgICAgICAgICAgbXNnLmlzVW52ZXJpZmljYXRpb24gPSB0cnVlXG4gICAgICAgICAgd2hlbiAncmF0aW5nJ1xuICAgICAgICAgICAgcmF0aW5nID0gc2lnbmVkRGF0YS5yYXRpbmdcbiAgICAgICAgICAgIG5ldXRyYWxSYXRpbmcgPSAoc2lnbmVkRGF0YS5taW5SYXRpbmcgKyBzaWduZWREYXRhLm1heFJhdGluZykgLyAyXG4gICAgICAgICAgICBtYXhSYXRpbmdEaWZmID0gc2lnbmVkRGF0YS5tYXhSYXRpbmcgLSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICBtaW5SYXRpbmdEaWZmID0gc2lnbmVkRGF0YS5taW5SYXRpbmcgLSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICBpZiByYXRpbmcgPiBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtdXAgcG9zaXRpdmUnXG4gICAgICAgICAgICAgIG1zZy5pY29uQ291bnQgPSBpZiBtYXhSYXRpbmdEaWZmIDwgMiB0aGVuIG1zZy5pY29uQ291bnQgZWxzZSBuZXcgQXJyYXkoTWF0aC5jZWlsKDMgKiByYXRpbmcgLyBtYXhSYXRpbmdEaWZmKSlcbiAgICAgICAgICAgICAgYWxwaGEgPSAocmF0aW5nIC0gbmV1dHJhbFJhdGluZyAtIDAuNSkgLyBtYXhSYXRpbmdEaWZmIC8gMS4yNSArIDAuMlxuICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywyNDAsMjE2LCcgKyBhbHBoYSArICcpOydcbiAgICAgICAgICAgIGVsc2UgaWYgcmF0aW5nIDwgbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLWRvd24gbmVnYXRpdmUnXG4gICAgICAgICAgICAgIG1zZy5pY29uQ291bnQgPSBpZiBtaW5SYXRpbmdEaWZmID4gLTIgdGhlbiBtc2cuaWNvbkNvdW50IGVsc2UgbmV3IEFycmF5KE1hdGguY2VpbCgzICogcmF0aW5nIC8gbWluUmF0aW5nRGlmZikpXG4gICAgICAgICAgICAgIGFscGhhID0gKHJhdGluZyAtIG5ldXRyYWxSYXRpbmcgKyAwLjUpIC8gbWluUmF0aW5nRGlmZiAvIDEuMjUgKyAwLjJcbiAgICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0MiwyMjIsMjIyLCcgKyBhbHBoYSArICcpOydcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMzsnXG4gICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1xdWVzdGlvbi1zaWduIG5ldXRyYWwnXG5cbiAgICAgIGFuZ3VsYXIuZm9yRWFjaCBtZXNzYWdlcywgKG1zZywga2V5KSAtPlxuICAgICAgICBtc2dba10gPSB2IGZvciBrLCB2IG9mIG1zZ09wdGlvbnNcbiAgICAgICAgaWYgbXNnLmlwZnNfaGFzaCBhbmQgbm90IG1zZy5qd3NcbiAgICAgICAgICAkc2NvcGUuaXBmc0dldChtc2cuaXBmc19oYXNoKS50aGVuIChyZXMpIC0+XG4gICAgICAgICAgICBtc2cuandzID0gcmVzXG4gICAgICAgICAgICBwcm9jZXNzTWVzc2FnZShtc2cpXG4gICAgICAgIGVsc2UgcHJvY2Vzc01lc3NhZ2UobXNnKVxuXG4gICAgIyBDb2xsYXBzaW5nIHRoZSBtZW51IGFmdGVyIG5hdmlnYXRpb25cbiAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdWNjZXNzJywgLT5cbiAgICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlXG5cbiAgICBzY3JvbGxUbyA9IChlbCkgLT5cbiAgICAgIGlmICFlbFxuICAgICAgICByZXR1cm5cbiAgICAgIHBvcyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICBpZiBwb3MudG9wXG4gICAgICAgIGlmIHBvcy50b3AgLSA2MCA8ICR3aW5kb3cucGFnZVlPZmZzZXRcbiAgICAgICAgICAkd2luZG93LnNjcm9sbFRvIDAsIHBvcy50b3AgLSA2MFxuICAgICAgICBlbHNlIGlmIHBvcy5ib3R0b20gPiAkd2luZG93LnBhZ2VZT2Zmc2V0ICsgKCR3aW5kb3cuaW5uZXJIZWlnaHQgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodClcbiAgICAgICAgICAkd2luZG93LnNjcm9sbFRvIDAsIHBvcy5ib3R0b20gLSAoJHdpbmRvdy5pbm5lckhlaWdodCBvciBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSArIDE1XG4gICAgICByZXR1cm5cblxuICAgICRzY29wZS5zZWFyY2hSZXF1ZXN0ID0gbnVsbFxuICAgICRzY29wZS5zZWFyY2ggPSAocXVlcnksIGxpbWl0KSAtPlxuICAgICAgJHNjb3BlLmlkcy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgJHNjb3BlLmlkZW50aXRpZXNCeUhhc2ggPSB7fVxuICAgICAgc2VhcmNoS2V5ID0gZW5jb2RlVVJJQ29tcG9uZW50KChxdWVyeSBvciAkc2NvcGUucXVlcnkudGVybSBvciAnJykudG9Mb3dlckNhc2UoKSlcbiAgICAgIGlmIHNlYXJjaEtleSAhPSAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXlcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gW11cbiAgICAgICAgJHNjb3BlLmlkcy5maW5pc2hlZCA9IGZhbHNlXG4gICAgICAgICRzY29wZS5pZGVudGl0aWVzQnlIYXNoID0ge31cbiAgICAgICRzY29wZS5wcmV2aW91c1NlYXJjaEtleSA9IHNlYXJjaEtleVxuICAgICAgbGltaXQgPSBsaW1pdCBvciAyMFxuICAgICAgY3Vyc29yID0gZmFsc2VcbiAgICAgIGlmICRzY29wZS5pZHMubGlzdC5sZW5ndGhcbiAgICAgICAgY3Vyc29yID0gJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMubGlzdC5sZW5ndGggLSAxXS5jdXJzb3JcbiAgICAgIGlmIHNlYXJjaEtleS5sZW5ndGhcbiAgICAgICAgJHNjb3BlLnNlYXJjaFJlcXVlc3QgPSAkc2NvcGUuaWRlbnRpZmlJbmRleC5zZWFyY2goc2VhcmNoS2V5LCB1bmRlZmluZWQsIGxpbWl0LCBjdXJzb3IpXG4gICAgICAgICMgVE9ETzogdXNlIGRpc3RhbmNlIGluZGV4IGluIGlkZW50aWZpTGliP1xuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUuc2VhcmNoUmVxdWVzdCA9ICRzY29wZS5pZGVudGlmaUluZGV4LnNlYXJjaChzZWFyY2hLZXksIHVuZGVmaW5lZCwgbGltaXQsIGN1cnNvcilcbiAgICAgICRzY29wZS5zZWFyY2hSZXF1ZXN0ID0gJHNjb3BlLnNlYXJjaFJlcXVlc3QudGhlbiAoaWRlbnRpdGllcykgLT5cbiAgICAgICAgaWRlbnRpdGllcy5mb3JFYWNoIChpKSAtPlxuICAgICAgICAgIGlmIGkubW9zdFZlcmlmaWVkQXR0cmlidXRlcy5uYW1lXG4gICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gaS5tb3N0VmVyaWZpZWRBdHRyaWJ1dGVzLm5hbWUuYXR0cmlidXRlLnZhbFxuICAgICAgICAgIGVsc2UgaWYgaS5tb3N0VmVyaWZpZWRBdHRyaWJ1dGVzLm5pY2tuYW1lXG4gICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gaS5tb3N0VmVyaWZpZWRBdHRyaWJ1dGVzLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWxcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gaS5kYXRhLmF0dHJzWzBdLnZhbFxuICAgICAgICAgIGlmIGkucHJpbWFyeU5hbWVcbiAgICAgICAgICAgIGlmIGkubW9zdFZlcmlmaWVkQXR0cmlidXRlcy5uaWNrbmFtZSBhbmQgaS5tb3N0VmVyaWZpZWRBdHRyaWJ1dGVzLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWwgIT0gaS5wcmltYXJ5TmFtZVxuICAgICAgICAgICAgICBpLm5pY2tuYW1lID0gaS5tb3N0VmVyaWZpZWRBdHRyaWJ1dGVzLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWxcbiAgICAgICAgICAgICAgaS5uaWNrbmFtZSA9IGkubmlja25hbWUucmVwbGFjZSgnPCcsICcmbHQ7JylcbiAgICAgICAgICBpLnByaW1hcnlOYW1lID0gaS5wcmltYXJ5TmFtZS5yZXBsYWNlKCc8JywgJyZsdDsnKVxuICAgICAgICBzZWFyY2hLZXkgPSBlbmNvZGVVUklDb21wb25lbnQoKHF1ZXJ5IG9yICRzY29wZS5xdWVyeS50ZXJtIG9yICcnKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICBpZiBzZWFyY2hLZXkgIT0gJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5XG4gICAgICAgICAgcmV0dXJuICMgc2VhcmNoIGtleSBjaGFuZ2VkXG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9ICRzY29wZS5pZHMubGlzdCBvciBbXVxuICAgICAgICBpZiBpZGVudGl0aWVzLmxlbmd0aCA8IGxpbWl0XG4gICAgICAgICAgJHNjb3BlLmlkcy5maW5pc2hlZCA9IHRydWVcbiAgICAgICAgaWYgaWRlbnRpdGllcy5sZW5ndGggJiYgJHNjb3BlLmlkcy5saXN0Lmxlbmd0aCAmJlxuICAgICAgICAkc2NvcGUuZ2V0SWRLZXkoaWRlbnRpdGllc1swXS5saW5rVG8pID09ICRzY29wZS5nZXRJZEtleSgkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5saXN0Lmxlbmd0aCAtIDFdLmxpbmtUbylcbiAgICAgICAgICBpZGVudGl0aWVzLnNoaWZ0KCkgIyBQcmV2ZW50IGR1cGxpY2F0ZVxuICAgICAgICAkc2NvcGUuaWRzLmxpc3QgPSAkc2NvcGUuaWRzLmxpc3QuY29uY2F0KGlkZW50aXRpZXMpXG4gICAgICAgIGlmIGlkZW50aXRpZXMubGVuZ3RoID4gMCAmJiAkc2NvcGUuaWRzLmxpc3QubGVuZ3RoID09IGlkZW50aXRpZXMubGVuZ3RoXG4gICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPSAwXG4gICAgICAgICAgJHNjb3BlLmlkcy5saXN0WzBdLmFjdGl2ZSA9IHRydWVcbiAgICAgIHJldHVybiAkc2NvcGUuc2VhcmNoUmVxdWVzdC50aGVuIC0+XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLmlkcy5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0XG5cbiAgICAkc2NvcGUuc2VhcmNoS2V5ZG93biA9IChldmVudCkgLT5cbiAgICAgIHN3aXRjaCAoaWYgZXZlbnQgdGhlbiBldmVudC53aGljaCBlbHNlIC0xKVxuICAgICAgICB3aGVuIDM4XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID4gMFxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5IC0gMV0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXktLVxuICAgICAgICAgIHNjcm9sbFRvIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkpXG4gICAgICAgIHdoZW4gNDBcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPCAoJHNjb3BlLmlkcy5saXN0Lmxlbmd0aCB8fCAwKSAtIDFcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleV0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleSArIDFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5KytcbiAgICAgICAgICBzY3JvbGxUbyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5KVxuICAgICAgICB3aGVuIDEzXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlkID0gJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XVxuICAgICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiBpZC5saW5rVG8ubmFtZSwgdmFsdWU6IGlkLmxpbmtUby52YWwgfVxuICAgICAgICB3aGVuIC0xXG4gICAgICAgICAgY2xlYXJUaW1lb3V0ICRzY29wZS50aW1lclxuICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICAgICAkc2NvcGUuc2VhcmNoKClcbiAgICAgICAgd2hlbiAzMywgMzQsIDM1LCAzNiwgMzcsIDM5XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBlbCA9IGFuZ3VsYXIuZWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAgIGNsZWFyVGltZW91dCAkc2NvcGUudGltZXJcbiAgICAgICAgICB3YWl0ID0gc2V0VGltZW91dCgoLT5cbiAgICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gZWwudmFsKClcbiAgICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgKSwgMzAwKVxuICAgICAgICAgICRzY29wZS50aW1lciA9IHdhaXRcbiAgICAgICAgICBicmVha1xuXG4gICAgJHNjb3BlLmRyb3Bkb3duU2VhcmNoU2VsZWN0ID0gKGl0ZW0pIC0+XG4gICAgICAkc3RhdGUuZ28oJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogaXRlbS5saW5rVG8ubmFtZSwgdmFsdWU6IGl0ZW0ubGlua1RvLnZhbCB9KVxuICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuXVxuIl19

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
            recipientIsSelf: false
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
                thumbsUpObj[msg.hash] = msg;
                $scope.thumbsUp = Object.values(thumbsUpObj);
                return $scope.hasThumbsUp = true;
              } else if (Object.keys(thumbsDownObj).length < 12 && msg.data.rating < neutralRating) {
                thumbsDownObj[msg.hash] = msg;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLHNCQUE3QyxFQUFxRTtJQUNuRSxRQURtRSxFQUVuRSxRQUZtRSxFQUduRSxZQUhtRSxFQUluRSxTQUptRSxFQUtuRSxjQUxtRSxFQU1uRSxXQU5tRSxFQU9uRSxPQVBtRSxFQVFuRSxJQVJtRSxFQVNuRSxVQVRtRSxFQVduRSxRQVhtRSxFQVluRSxxQkFabUUsRUFhbkUsU0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixVQUFqQixFQUE2QixPQUE3QixFQUFzQyxZQUF0QyxFQUFvRCxTQUFwRCxFQUErRCxLQUEvRCxFQUFzRSxFQUF0RSxFQUEwRSxRQUExRSxFQUFvRixNQUFwRixFQUE0RixtQkFBNUY7QUFDRSxVQUFBO01BQUEsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFDbkIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsU0FBQyxLQUFEO2VBQVcsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFBOUI7TUFDckIsTUFBTSxDQUFDLElBQVAsR0FBYztNQUNkLE1BQU0sQ0FBQyxJQUFQLEdBQWM7TUFDZCxNQUFNLENBQUMsUUFBUCxHQUFrQjtNQUNsQixNQUFNLENBQUMsV0FBUCxHQUFxQjtNQUNyQixXQUFBLEdBQWM7TUFDZCxhQUFBLEdBQWdCO01BQ2hCLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO01BQ2xCLE1BQU0sQ0FBQyxVQUFQLEdBQW9CO01BQ3BCLE1BQU0sQ0FBQyxhQUFQLEdBQXVCO01BQ3ZCLElBQTJDLFlBQVksQ0FBQyxNQUF4RDtRQUFBLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBYixHQUFvQixZQUFZLENBQUMsT0FBakM7O01BQ0EsTUFBTSxDQUFDLFlB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QUFpQztvQkFBQyxLQUFBLEVBQU07c0JBQUM7d0JBQUMsSUFBQSxFQUFLLE1BQU0sQ0FBQyxNQUFiO3dCQUFxQixHQUFBLEVBQUksTUFBTSxDQUFDLE9BQWhDO3VCQUFEO3FCQUFQO21CQUFqQztnQkFETixDQUFkLEVBTEY7O3FCQU9BLE1BQU0sQ0FBQyxNQUFQLENBQWMsU0FBQTtnQkFDWixnQkFBQSxDQUFBO3VCQUNBLE1BQU0sQ0FBQyxjQUFQLENBQUE7Y0FGWSxDQUFkO1lBUjJELENBQTdELENBV0EsRUFBQyxLQUFELEVBWEEsQ0FXTyxTQUFDLEdBQUQ7cUJBQ0wsT0FBTyxDQUFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQyxHQUF0QztZQURLLENBWFAsRUFERjs7UUFEd0IsQ0FBMUI7UUFlQSxJQUFHLE1BQU0sQ0FBQyxNQUFQLEtBQWlCLE9BQWpCLElBQTZCLE1BQU0sQ0FBQyxPQUFQLEtBQWtCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBbEU7aUJBQ0UsTUFBTSxDQUFDLFFBQVAsR0FBa0IsRUFEcEI7O01BM0JlO01BOEJqQixJQUFHLE1BQU0sQ0FBQyxFQUFQLENBQVUsaUJBQVYsQ0FBSDtlQUNFLE1BQU0sQ0FBQyxPQUFQLENBQUEsRUFERjs7SUFuVEYsQ0FibUU7R0FBckU7QUFGQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuIyBJZGVudGl0aWVzIGNvbnRyb2xsZXJcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5jb250cm9sbGVyICdJZGVudGl0aWVzQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRzdGF0ZSdcbiAgJyRyb290U2NvcGUnXG4gICckd2luZG93J1xuICAnJHN0YXRlUGFyYW1zJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckcSdcbiAgJyR0aW1lb3V0J1xuICAjICdBdXRoZW50aWNhdGlvbidcbiAgJ2NvbmZpZydcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICgkc2NvcGUsICRzdGF0ZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHN0YXRlUGFyYW1zLCAkbG9jYXRpb24sICRodHRwLCAkcSwgJHRpbWVvdXQsIGNvbmZpZywgbG9jYWxTdG9yYWdlU2VydmljZSkgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuYWN0aXZlVGFiID0gMFxuICAgICRzY29wZS5hY3RpdmF0ZVRhYiA9ICh0YWJJZCkgLT4gJHNjb3BlLmFjdGl2ZVRhYiA9IHRhYklkXG4gICAgJHNjb3BlLmluZm8gPSB7fVxuICAgICRzY29wZS5zZW50ID0gW11cbiAgICAkc2NvcGUucmVjZWl2ZWQgPSBbXVxuICAgICRzY29wZS5jb25uZWN0aW9ucyA9IHt9XG4gICAgdGh1bWJzVXBPYmogPSB7fVxuICAgIHRodW1ic0Rvd25PYmogPSB7fVxuICAgICRzY29wZS50aHVtYnNVcCA9IFtdXG4gICAgJHNjb3BlLnRodW1ic0Rvd24gPSBbXVxuICAgICRzY29wZS52ZXJpZmljYXRpb25zID0gW11cbiAgICAkc2NvcGUucXVlcnkudGVybSA9ICRzdGF0ZVBhcmFtcy5zZWFyY2ggaWYgJHN0YXRlUGFyYW1zLnNlYXJjaFxuICAgICRzY29wZS5uZXdBdHRyaWJ1dGUgPVxuICAgICAgdHlwZTogJydcbiAgICAgIHZhbHVlOiAkc3RhdGVQYXJhbXMudmFsdWVcbiAgICAkc2NvcGUuZmlsdGVycy50eXBlID0gbnVsbFxuICAgICRzY29wZS5jb2xsYXBzZUxldmVsID0ge31cbiAgICAkc2NvcGUuY29sbGFwc2VGaWx0ZXJzID0gJHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyXG4gICAgJHNjb3BlLnNsaWRlciA9XG4gICAgICB2YWx1ZTogMFxuICAgICAgb3B0aW9uczpcbiAgICAgICAgZmxvb3I6IC0zXG4gICAgICAgIGNlaWw6IDNcbiAgICAgICAgaGlkZVBvaW50ZXJMYWJlbHM6IHRydWVcbiAgICAgICAgaGlkZUxpbWl0TGFiZWxzOiB0cnVlXG5cbiAgICBtZXNzYWdlc0FkZGVkID0gZmFsc2VcbiAgICAkc2NvcGUuJG9uICdNZXNzYWdlQWRkZWQnLCAoZXZlbnQsIGFyZ3MpIC0+XG4gICAgICAkc2NvcGUubG9jYWxNZXNzYWdlc1thcmdzLm1lc3NhZ2UuaGFzaF0gPSBhcmdzLm1lc3NhZ2VcbiAgICAgICRzY29wZS5sb2NhbE1lc3NhZ2VzW2FyZ3MubWVzc2FnZS5oYXNoXS5sb2NhbCA9IHRydWVcbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdsb2NhbE1lc3NhZ2VzJywgJHNjb3BlLmxvY2FsTWVzc2FnZXMpXG4gICAgICBtZXNzYWdlc0FkZGVkID0gdHJ1ZVxuICAgICAgcmV0dXJuIHVubGVzcyAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgIGlmIGFyZ3MubWVzc2FnZS5zaWduZWREYXRhLnR5cGUgaW4gWyd2ZXJpZnlfaWRlbnRpdHknLCAndW52ZXJpZnlfaWRlbnRpdHknXSBhbmQgbm90IGFyZ3MuaWQuY29uZmlybWVkXG4gICAgICAgICRzY29wZS5nZXRDb25uZWN0aW9ucygpXG4gICAgICBlbHNlIGlmIGFyZ3MubWVzc2FnZS5zaWduZWREYXRhLnR5cGUgPT0gJ3JhdGluZydcbiAgICAgICAgaWYgbWVzc2FnZXNBZGRlZFxuICAgICAgICAgICRzY29wZS5yZWNlaXZlZC5zaGlmdCgpXG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgW2FyZ3MubWVzc2FnZV1cbiAgICAgICAgJHNjb3BlLnJlY2VpdmVkLnVuc2hpZnQgYXJncy5tZXNzYWdlXG5cbiAgICAkc2NvcGUuYWRkRW50cnkgPSAoZXZlbnQsIGVudHJ5KSAtPlxuICAgICAgcmVjaXBpZW50ID0gW11cbiAgICAgIGlmIGVudHJ5Lm5hbWVcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWyduYW1lJywgZW50cnkubmFtZV1cbiAgICAgIGlmIGVudHJ5LmVtYWlsXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsnZW1haWwnLCBlbnRyeS5lbWFpbF1cbiAgICAgIGlmIGVudHJ5LnVybFxuICAgICAgICByZWNpcGllbnQucHVzaCBbJ3VybCcsIGVudHJ5LnVybF1cbiAgICAgIGlmIGVudHJ5LnBob25lXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsncGhvbmUnLCBlbnRyeS5waG9uZV1cbiAgICAgIHBhcmFtcyA9XG4gICAgICAgIHR5cGU6ICd2ZXJpZnlfaWRlbnRpdHknXG4gICAgICAgIHJlY2lwaWVudDogcmVjaXBpZW50XG4gICAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZShldmVudCwgcGFyYW1zKS50aGVuIChyZXNwb25zZSkgLT5cbiAgICAgICAgJHN0YXRlLmdvICdtZXNzYWdlcy5zaG93JywgeyBpZDogcmVzcG9uc2UuaXBmc19oYXNoIH1cbiAgICAgICwgKGVycm9yKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBcImVycm9yXCIsIGVycm9yXG5cbiAgICAkc2NvcGUuZ2V0Q29ubmVjdGlvbnMgPSAtPlxuICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zID0ge31cbiAgICAgIGNvbm5lY3Rpb25zID0gJHNjb3BlLmlkZW50aXR5LmRhdGEuYXR0cnMgb3IgW11cbiAgICAgIGlmIGNvbm5lY3Rpb25zLmxlbmd0aCA+IDBcbiAgICAgICAgYyA9IGNvbm5lY3Rpb25zWzBdXG4gICAgICAgIG1vc3RDb25maXJtYXRpb25zID0gYy5jb25mXG4gICAgICBlbHNlXG4gICAgICAgIG1vc3RDb25maXJtYXRpb25zID0gMVxuICAgICAgZm9yIGlkIGluIGNvbm5lY3Rpb25zXG4gICAgICAgICRzY29wZS5jb25uZWN0aW9uc1skc2NvcGUuZ2V0SWRLZXkoaWQpXSA9IE9iamVjdC5hc3NpZ24oe30sIGlkKVxuICAgICAgZm9yIGhhc2gsIG1zZyBvZiAkc2NvcGUubG9jYWxNZXNzYWdlc1xuICAgICAgICBtc2cuZGF0YSA9IG1zZy5kYXRhIG9yIG1zZy5zaWduZWREYXRhXG4gICAgICAgIGlmIG1zZy5kYXRhLnR5cGUgaW4gWyd2ZXJpZnlfaWRlbnRpdHknLCAndW52ZXJpZnlfaWRlbnRpdHknXVxuICAgICAgICAgIGhhcyA9IGZhbHNlXG4gICAgICAgICAgZm9yIHIgaW4gbXNnLmRhdGEucmVjaXBpZW50XG4gICAgICAgICAgICBpZiByWzBdID09ICRzY29wZS5pZFR5cGUgYW5kIHJbMV3CoD09ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICAgICAgIGhhcyA9IHRydWVcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICBjb250aW51ZSB1bmxlc3MgaGFzXG4gICAgICAgICAgZm9yIHIgaW4gbXNnLmRhdGEucmVjaXBpZW50XG4gICAgICAgICAgICB1bmxlc3MgclswXSA9PSAkc2NvcGUuaWRUeXBlIGFuZCByWzFdwqA9PSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAgICAgICBpZEtleSA9ICRzY29wZS5nZXRJZEtleShyKVxuICAgICAgICAgICAgICBpZiAkc2NvcGUuY29ubmVjdGlvbnMuaGFzT3duUHJvcGVydHkoaWRLZXkpXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zW2lkS2V5XS5jb25mICs9IDEgaWYgbXNnLmRhdGEudHlwZSA9PSAndmVyaWZ5X2lkZW50aXR5J1xuICAgICAgICAgICAgICAgICRzY29wZS5jb25uZWN0aW9uc1tpZEtleV0ucmVmICs9IDEgaWYgbXNnLmRhdGEudHlwZSA9PSAndW52ZXJpZnlfaWRlbnRpdHknXG4gICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAkc2NvcGUuY29ubmVjdGlvbnNbaWRLZXldID1cbiAgICAgICAgICAgICAgICAgIG5hbWU6IG1zZy5kYXRhLnJlY2lwaWVudFsxXVswXVxuICAgICAgICAgICAgICAgICAgdmFsOiBtc2cuZGF0YS5yZWNpcGllbnRbMV1bMV1cbiAgICAgICAgICAgICAgICAgIGNvbmY6IGlmIG1zZy5kYXRhLnR5cGUgPT0gJ3ZlcmlmeV9pZGVudGl0eScgdGhlbiAxIGVsc2UgMFxuICAgICAgICAgICAgICAgICAgcmVmOiBpZiBtc2cuZGF0YS50eXBlID09ICd1bnZlcmlmeV9pZGVudGl0eScgdGhlbiAxIGVsc2UgMFxuICAgICAgICAgICAgICBicmVha1xuICAgICAgZm9yIGtleSwgY29ubiBvZiAkc2NvcGUuY29ubmVjdGlvbnNcbiAgICAgICAgY29ubi5pc0N1cnJlbnQgPSBjb25uLm5hbWUgPT0gJHNjb3BlLmlkVHlwZSBhbmQgY29ubi52YWwgPT0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgc3dpdGNoIGNvbm4ubmFtZVxuICAgICAgICAgIHdoZW4gJ2VtYWlsJ1xuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZSdcbiAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLXN1Y2Nlc3MnXG4gICAgICAgICAgICBjb25uLmxpbmsgPSAnbWFpbHRvOicgKyBjb25uLnZhbFxuICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAkc2NvcGUuaW5mby5lbWFpbCA9ICRzY29wZS5pbmZvLmVtYWlsIG9yIGNvbm4udmFsXG4gICAgICAgICAgd2hlbiAnYml0Y29pbl9hZGRyZXNzJywgJ2JpdGNvaW4nXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1iaXRjb2luJ1xuICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tcHJpbWFyeSdcbiAgICAgICAgICAgIGNvbm4ubGluayA9ICdodHRwczovL2Jsb2NrY2hhaW4uaW5mby9hZGRyZXNzLycgKyBjb25uLnZhbFxuICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgd2hlbiAnZ3BnX2ZpbmdlcnByaW50JywgJ2dwZ19rZXlpZCdcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWtleSdcbiAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWRlZmF1bHQnXG4gICAgICAgICAgICBjb25uLmxpbmsgPSAnaHR0cHM6Ly9wZ3AubWl0LmVkdS9wa3MvbG9va3VwP29wPWdldCZzZWFyY2g9MHgnICsgY29ubi52YWxcbiAgICAgICAgICB3aGVuICdhY2NvdW50J1xuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtYXQnXG4gICAgICAgICAgd2hlbiAnbmlja25hbWUnXG4gICAgICAgICAgICAkc2NvcGUuaW5mby5uaWNrbmFtZSA9ICRzY29wZS5pbmZvLm5pY2tuYW1lIG9yIGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWZvbnQnXG4gICAgICAgICAgd2hlbiAnbmFtZSdcbiAgICAgICAgICAgICRzY29wZS5pbmZvLm5hbWUgPSAkc2NvcGUuaW5mby5uYW1lIG9yIGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWZvbnQnXG4gICAgICAgICAgd2hlbiAndGVsJywgJ3Bob25lJ1xuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1lYXJwaG9uZSdcbiAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLXN1Y2Nlc3MnXG4gICAgICAgICAgICBjb25uLmxpbmsgPSAndGVsOicgKyBjb25uLnZhbFxuICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgd2hlbiAna2V5SUQnXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1rZXknXG4gICAgICAgICAgd2hlbiAnY292ZXJQaG90bydcbiAgICAgICAgICAgIGlmIGNvbm4udmFsLm1hdGNoIC9eXFwvaXBmc1xcL1sxLTlBLVphLXpdezQwLDYwfSQvXG4gICAgICAgICAgICAgICRzY29wZS5jb3ZlclBob3RvID0gJHNjb3BlLmNvdmVyUGhvdG8gb3IgeyAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoJyArICgkc2NvcGUuaXBmc1N0b3JhZ2UuYXBpUm9vdCBvciAnJykgKyBjb25uLnZhbCArICcpJyB9XG4gICAgICAgICAgd2hlbiAncHJvZmlsZVBob3RvJ1xuICAgICAgICAgICAgaWYgY29ubi52YWwubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICAgICAgJHNjb3BlLnByb2ZpbGVQaG90byA9ICRzY29wZS5wcm9maWxlUGhvdG8gb3IgKCRzY29wZS5pcGZzU3RvcmFnZS5hcGlSb290IG9yICcnKSArIGNvbm4udmFsXG4gICAgICAgICAgd2hlbiAndXJsJ1xuICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgIGlmIGNvbm4udmFsLmluZGV4T2YoJ2ZhY2Vib29rLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWZhY2Vib29rJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1mYWNlYm9vaydcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsLnNwbGl0KCdmYWNlYm9vay5jb20vJylbMV1cbiAgICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ3R3aXR0ZXIuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtdHdpdHRlcidcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tdHdpdHRlcidcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsLnNwbGl0KCd0d2l0dGVyLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgY29ubi52YWwuaW5kZXhPZigncGx1cy5nb29nbGUuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWdvb2dsZS1wbHVzJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ3BsdXMuZ29vZ2xlLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgY29ubi52YWwuaW5kZXhPZignbGlua2VkaW4uY29tLycpID4gLTFcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtbGlua2VkaW4nXG4gICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWxpbmtlZGluJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2xpbmtlZGluLmNvbS8nKVsxXVxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgY29ubi52YWwuaW5kZXhPZignZ2l0aHViLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWdpdGh1YidcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZ2l0aHViJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2dpdGh1Yi5jb20vJylbMV1cbiAgICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tbGluaydcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgaWYgY29ubi52YWwgYW5kIGNvbm4udmFsLm1hdGNoIC9eXFwvaXBmc1xcL1sxLTlBLVphLXpdezQwLDYwfSQvXG4gICAgICAgICAgY29ubi5saW5rID0gKCRzY29wZS5pcGZzU3RvcmFnZS5hcGlSb290IG9yICcnKSArIGNvbm4udmFsXG4gICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsXG4gICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1saW5rJ1xuICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWRlZmF1bHQnXG4gICAgICAgIGlmIGNvbm4uY29uZiArIGNvbm4ucmVmID4gMFxuICAgICAgICAgIHBlcmNlbnRhZ2UgPSBjb25uLmNvbmYgKiAxMDAgLyAoY29ubi5jb25mICsgY29ubi5yZWYpXG4gICAgICAgICAgaWYgcGVyY2VudGFnZSA+PSA4MFxuICAgICAgICAgICAgYWxwaGEgPSBjb25uLmNvbmYgLyBtb3N0Q29uZmlybWF0aW9ucyAqIDAuNyArIDAuM1xuICAgICAgICAgICAgIyBjb25uLnJvd1N0eWxlID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLDI0MCwyMTYsJyArIGFscGhhICsgJyknXG4gICAgICAgICAgZWxzZSBpZiBwZXJjZW50YWdlID49IDYwXG4gICAgICAgICAgICBjb25uLnJvd0NsYXNzID0gJ3dhcm5pbmcnXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgY29ubi5yb3dDbGFzcyA9ICdkYW5nZXInXG4gICAgICAgICRzY29wZS5oYXNRdWlja0NvbnRhY3RzID0gJHNjb3BlLmhhc1F1aWNrQ29udGFjdHMgb3IgY29ubi5xdWlja0NvbnRhY3RcbiAgICAgICRzY29wZS5jb25uZWN0aW9uc0xlbmd0aCA9IE9iamVjdC5rZXlzKCRzY29wZS5jb25uZWN0aW9ucykubGVuZ3RoXG4gICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICgkc2NvcGUuaW5mby5uYW1lIHx8ICRzY29wZS5pbmZvLm5pY2tuYW1lIHx8ICRzY29wZS5pZFZhbHVlKVxuXG4gICAgJHNjb3BlLmdldENvbm5lY3RpbmdNc2dzID0gKGlkMSwgaWQyKSAtPlxuICAgICAgZ2V0VmVyaWZpY2F0aW9ucyA9ICRxIChyZXNvbHZlKSAtPlxuICAgICAgICBpZiAhJHNjb3BlLnZlcmlmaWNhdGlvbnMubGVuZ3RoXG4gICAgICAgICAgaWYgJHNjb3BlLnJlY2VpdmVkSW5kZXhcbiAgICAgICAgICAgICRzY29wZS5yZWNlaXZlZEluZGV4LnNlYXJjaFRleHQoJycsIDEwMDAwLCBmYWxzZSwgdHJ1ZSkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgICByZXMuZm9yRWFjaCAocm93KSAtPlxuICAgICAgICAgICAgICAgIG1zZyA9IHJvdy52YWx1ZVxuICAgICAgICAgICAgICAgIHVubGVzcyBtc2cuc2lnbmVkRGF0YVxuICAgICAgICAgICAgICAgICAgbXNnLnNpZ25lZERhdGEgPSBLSlVSLmp3cy5KV1MucGFyc2UobXNnLmp3cykucGF5bG9hZE9ialxuICAgICAgICAgICAgICAgIGlmIChtc2cuc2lnbmVkRGF0YS50eXBlIGluIFsndmVyaWZ5X2lkZW50aXR5JywgJ3ZlcmlmaWNhdGlvbicsICd1bnZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmaWNhdGlvbiddKVxuICAgICAgICAgICAgICAgICAgbXNnLmdyYXZhdGFyID0gQ3J5cHRvSlMuTUQ1KG1zZy5hdXRob3JFbWFpbCBvciBtc2cuc2lnbmVkRGF0YS5hdXRob3JbMF1bMV0pLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBtc2cuc2lnbmVkRGF0YS5hdXRob3JbMF1cbiAgICAgICAgICAgICAgICAgICRzY29wZS52ZXJpZmljYXRpb25zLnB1c2ggbXNnXG4gICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICBnZXRWZXJpZmljYXRpb25zLnRoZW4gLT5cbiAgICAgICAgbXNncyA9IFtdXG4gICAgICAgICRzY29wZS52ZXJpZmljYXRpb25zLmZvckVhY2ggKG1zZykgLT5cbiAgICAgICAgICBoYXNJZDEgPSBoYXNJZDIgPSBmYWxzZVxuICAgICAgICAgIGZvciBpZCBpbiBtc2cuc2lnbmVkRGF0YS5yZWNpcGllbnRcbiAgICAgICAgICAgIHJldHVybiBtc2dzLnB1c2ggbXNnIGlmIGlkWzBdwqA9PSBpZDIubmFtZSBhbmQgaWRbMV0gPT0gaWQyLnZhbFxuICAgICAgICByZXR1cm4gbXNnc1xuXG4gICAgJHNjb3BlLmNvbm5lY3Rpb25DbGlja2VkID0gKGV2ZW50LCBpZCkgLT5cbiAgICAgIGlmIGlkLmNvbm5lY3RpbmdfbXNnc1xuICAgICAgICBpZC5jb2xsYXBzZSA9ICFpZC5jb2xsYXBzZVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUuZ2V0Q29ubmVjdGluZ01zZ3MoWyRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlXSwgaWQpLnRoZW4gKG1zZ3MpIC0+XG4gICAgICAgICAgaWQuY29ubmVjdGluZ19tc2dzID0gbXNnc1xuICAgICAgICAgIGlkLmNvbGxhcHNlID0gIWlkLmNvbGxhcHNlXG5cbiAgICAkc2NvcGUuZ2V0U2VudE1zZ3MgPSAtPlxuICAgICAgcmV0dXJuIGlmICRzY29wZS5zZW50LmxvYWRpbmcgb3Igbm90ICRzY29wZS5pZGVudGl0eSBvciBub3QgJHNjb3BlLmlkZW50aXR5LmRhdGEuc2VudFxuICAgICAgJHNjb3BlLnNlbnQubG9hZGluZyA9IHRydWVcbiAgICAgIGN1cnNvciA9IGlmICRzY29wZS5zZW50Lmxlbmd0aCB0aGVuICRzY29wZS5zZW50WyRzY29wZS5zZW50Lmxlbmd0aCAtIDFdLmN1cnNvciBlbHNlICcnXG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXRTZW50TXNncygkc2NvcGUuaWRlbnRpdHksICRzY29wZS5maWx0ZXJzLmxpbWl0LCBjdXJzb3IpXG4gICAgICAudGhlbiAoc2VudCkgLT5cbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBzZW50LCB7IHJlY2lwaWVudElzU2VsZjogZmFsc2UgfVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLnNlbnQsIHNlbnQpXG4gICAgICAgICAgJHNjb3BlLnNlbnQubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgaWYgc2VudC5sZW5ndGggPCAkc2NvcGUuZmlsdGVycy5saW1pdCAtIDFcbiAgICAgICAgICAgICRzY29wZS5zZW50LmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgLmNhdGNoIChlcnJvcikgLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ2Vycm9yIGxvYWRpbmcgc2VudCBtZXNzYWdlcycsIGVycm9yXG4gICAgICAgICRzY29wZS5zZW50LmZpbmlzaGVkID0gdHJ1ZVxuXG4gICAgJHNjb3BlLmdldFJlY2VpdmVkTXNncyA9IC0+XG4gICAgICByZXR1cm4gaWYgJHNjb3BlLnJlY2VpdmVkLmxvYWRpbmcgb3Igbm90ICRzY29wZS5pZGVudGl0eSBvciBub3QgJHNjb3BlLmlkZW50aXR5LmRhdGEucmVjZWl2ZWRcbiAgICAgICRzY29wZS5yZWNlaXZlZC5sb2FkaW5nID0gdHJ1ZVxuICAgICAgY3Vyc29yID0gaWYgJHNjb3BlLnJlY2VpdmVkLmxlbmd0aCB0aGVuICRzY29wZS5yZWNlaXZlZFskc2NvcGUucmVjZWl2ZWQubGVuZ3RoIC0gMV0uY3Vyc29yIGVsc2UgJydcbiAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmdldFJlY2VpdmVkTXNncygkc2NvcGUuaWRlbnRpdHksICRzY29wZS5maWx0ZXJzLmxpbWl0LCBjdXJzb3IpXG4gICAgICAudGhlbiAocmVjZWl2ZWQpIC0+XG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgcmVjZWl2ZWQsIHsgcmVjaXBpZW50SXNTZWxmOiB0cnVlIH1cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KCRzY29wZS5yZWNlaXZlZCwgcmVjZWl2ZWQpXG4gICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgIGlmIHJlY2VpdmVkLmxlbmd0aCA8ICRzY29wZS5maWx0ZXJzLmxpbWl0IC0gMVxuICAgICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICAgIHJlY2VpdmVkLmZvckVhY2ggKG1zZykgLT5cbiAgICAgICAgICAgIG5ldXRyYWxSYXRpbmcgPSAobXNnLmRhdGEubWF4UmF0aW5nICsgbXNnLmRhdGEubWluUmF0aW5nKSAvIDJcbiAgICAgICAgICAgIGlmIE9iamVjdC5rZXlzKHRodW1ic1VwT2JqKS5sZW5ndGggPCAxMiBhbmQgbXNnLmRhdGEucmF0aW5nID4gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICB0aHVtYnNVcE9ialttc2cuaGFzaF0gPSBtc2dcbiAgICAgICAgICAgICAgJHNjb3BlLnRodW1ic1VwID0gT2JqZWN0LnZhbHVlcyh0aHVtYnNVcE9iailcbiAgICAgICAgICAgICAgJHNjb3BlLmhhc1RodW1ic1VwID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiBPYmplY3Qua2V5cyh0aHVtYnNEb3duT2JqKS5sZW5ndGggPCAxMiBhbmQgbXNnLmRhdGEucmF0aW5nIDwgbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICB0aHVtYnNEb3duT2JqW21zZy5oYXNoXSA9IG1zZ1xuICAgICAgICAgICAgICAkc2NvcGUudGh1bWJzRG93biA9IE9iamVjdC52YWx1ZXModGh1bWJzRG93bk9iailcbiAgICAgICAgICAgICAgJHNjb3BlLmhhc1RodW1ic0Rvd24gPSB0cnVlXG4gICAgICAuY2F0Y2ggKGVycm9yKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnZXJyb3IgbG9hZGluZyByZWNlaXZlZCBtZXNzYWdlcycsIGVycm9yXG4gICAgICAgICRzY29wZS5yZWNlaXZlZC5maW5pc2hlZCA9IHRydWVcblxuICAgIGFkZExvY2FsTWVzc2FnZXMgPSAtPlxuICAgICAgbXNncyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhbE1lc3NhZ2VzJykgb3Ige31cbiAgICAgIGNvbm5lY3Rpb25zVG9BZGQgPSB7fVxuICAgICAgZm9yIGhhc2gsIG1zZyBvZiBtc2dzXG4gICAgICAgIG1zZy5kYXRhID0gbXNnLmRhdGEgb3IgbXNnLnNpZ25lZERhdGFcbiAgICAgICAgaWYgbXNnLmRhdGEucmVjaXBpZW50WzBdWzBdID09ICRzY29wZS5pZFR5cGUgYW5kIG1zZy5kYXRhLnJlY2lwaWVudFswXVsxXSA9PSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAgICRzY29wZS5yZWNlaXZlZC51bnNoaWZ0KG1zZylcbiAgICAgICAgaWYgbXNnLmRhdGEuYXV0aG9yWzBdWzBdID09ICRzY29wZS5pZFR5cGUgYW5kIG1zZy5kYXRhLmF1dGhvclswXVsxXSA9PSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAgICRzY29wZS5zZW50LnVuc2hpZnQobXNnKVxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5maWx0ZXJzLCBmaWx0ZXJzXG4gICAgICAkc2NvcGUuc2VudCA9IFtdXG4gICAgICAkc2NvcGUucmVjZWl2ZWQgPSBbXVxuICAgICAgYWRkTG9jYWxNZXNzYWdlcygpXG4gICAgICAkdGltZW91dCAtPiAkcm9vdFNjb3BlLiRicm9hZGNhc3QgJ21zZ1Njcm9sbENoZWNrJ1xuXG4gICAgJHNjb3BlLmZpbmRPbmUgPSAtPlxuICAgICAgJHNjb3BlLmlkVHlwZSA9ICRzdGF0ZVBhcmFtcy50eXBlXG4gICAgICAkc2NvcGUuaWRWYWx1ZSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuICAgICAgJHNjb3BlLmlzQ3VycmVudFVzZXIgPSAkc2NvcGUuYXV0aGVudGljYXRpb24gYW5kXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyIGFuZFxuICAgICAgICAkc2NvcGUuaWRUeXBlID09ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVHlwZSBhbmRcbiAgICAgICAgJHNjb3BlLmlkVmFsdWUgPT0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZVxuICAgICAgJHNjb3BlLmlzVW5pcXVlVHlwZSA9IGNvbmZpZy51bmlxdWVBdHRyaWJ1dGVUeXBlcy5pbmRleE9mKCRzY29wZS5pZFR5cGUpID4gLTFcbiAgICAgIGlmICEkc2NvcGUuaXNVbmlxdWVUeXBlXG4gICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5saXN0JywgeyBzZWFyY2g6ICRzY29wZS5pZFZhbHVlIH1cbiAgICAgICAgJHNjb3BlLnRhYnNbMl0uYWN0aXZlID0gdHJ1ZVxuICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgJHNjb3BlLiR3YXRjaCAnYXBpUmVhZHknLCAoaXNSZWFkeSkgLT5cbiAgICAgICAgaWYgaXNSZWFkeVxuICAgICAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmdldCgkc2NvcGUuaWRWYWx1ZSwgJHNjb3BlLmlkVHlwZSkudGhlbiAocHJvZmlsZSkgLT5cbiAgICAgICAgICAgIGlmIHByb2ZpbGVcbiAgICAgICAgICAgICAgJHNjb3BlLmlkZW50aXR5ID0gcHJvZmlsZVxuICAgICAgICAgICAgICAkc2NvcGUuZ2V0U2VudE1zZ3MoMClcbiAgICAgICAgICAgICAgJHNjb3BlLmdldFJlY2VpdmVkTXNncygwKVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgICAgICAgJHNjb3BlLmlkZW50aXR5ID0gbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkoe2F0dHJzOlt7bmFtZTokc2NvcGUuaWRUeXBlLCB2YWw6JHNjb3BlLmlkVmFsdWV9XX0pXG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgICAgIGFkZExvY2FsTWVzc2FnZXMoKVxuICAgICAgICAgICAgICAkc2NvcGUuZ2V0Q29ubmVjdGlvbnMoKVxuICAgICAgICAgIC5jYXRjaCAoZXJyKSAtPlxuICAgICAgICAgICAgY29uc29sZS5sb2cgJ2Vycm9yIGZldGNoaW5nIHByb2ZpbGUnLCBlcnJcbiAgICAgIGlmICRzY29wZS5pZFR5cGUgPT0gJ2tleUlEJyBhbmQgJHNjb3BlLmlkVmFsdWUgPT0gJHNjb3BlLm5vZGVJbmZvLmtleUlEXG4gICAgICAgICRzY29wZS5kaXN0YW5jZSA9IDBcblxuICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgJHNjb3BlLmZpbmRPbmUoKVxuXVxuIl19

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
$templateCache.put('app/identities/show.html','<section class=cover-container><div class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 0 }" ng-click=activateTab(0)><span class=hidden-xs>Received </span>({{0+identity.receivedPositive+identity.receivedNeutral+identity.receivedNegative || received.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Sent </span>({{0+identity.sentPositive+identity.sentNeutral+identity.sentNegative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Identity </span>(<span ng-bind="connectionsLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType><div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon identity=identity border=4 show-distance=0 width=230></identicon><!-- <a ng-href="" class="circle {{profileImageCircleClass}}">\n                    <span class="arc"></span>\n                    <img ng-src="{{profilePhotoUrl}}" width="230" height="230" class="profile-image mar-right5">\n                  </a> --></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs visible-sm" ng-if=!(identity.mostVerifiedAttributes.name||identity.mostVerifiedAttributes.nickname)><span ng-bind=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a> </small></span><span ng-bind=identity.mostVerifiedAttributes.name.attribute.val||identity.mostVerifiedAttributes.nickname.attribute.val></span> <span ng-hide="!identity.mostVerifiedAttributes.nickname || !identity.mostVerifiedAttributes.name || identity.mostVerifiedAttributes.nickname.attribute.val === identity.mostVerifiedAttributes.name.attribute.val">(<span class=text-muted ng-bind=identity.mostVerifiedAttributes.nickname.attribute.val></span>) </span><span ng-if="identity.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="identity.trustDistance < 1000" ng-bind="identity.trustDistance | ordinal" class="label label-default pull-right"></span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><p><b>Received: <span ng-if="identity.receivedPositive || identity.receivedNegative"><span ng-bind="identity.receivedPositive / (identity.receivedPositive+identity.receivedNeutral+identity.receivedNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.receivedPositive || identity.receivedNegative)">&mdash; </span></b><span ng-if="identity.sentPositive || identity.sentNegative"><br>Sent: <span ng-if="identity.sentPositive || identity.sentNegative"><span ng-bind="identity.sentPositive / (identity.sentPositive+identity.sentNeutral+identity.sentNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.sentPositive || identity.sentNegative )">&mdash;</span></span></p><!--\n                <p class="received-stats">\n                  <div><strong>Received</strong></div>\n                  <div>\n                    <strong>\n                      <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.receivedPositive">-</span></span>\n                      <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.receivedNeutral">-</span></span>\n                      <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.receivedNegative">-</span></span>\n                    </strong>\n                  </div>\n                </p>\n                <p>\n                  <div>Sent</div>\n                  <div>\n                    <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.sentPositive">-</span></span>\n                    <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.sentNeutral">-</span></span>\n                    <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.sentNegative">-</span></span>\n                  </div>\n                </p> --><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="id in connections" ng-if=id.quickContact><a ng-href={{id.link}}><span ng-class=id.iconStyle></span><span ng-bind="id.linkName || id.val"></span></a></li><li ng-if=stats.first_seen><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && hasThumbsUp" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon identity=msg.author class=no-glow border=3 width=60></identicon></a></div><div ng-if="isUniqueType && hasThumbsDown" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon identity=msg.author class=no-glow border=3 width=60></identicon></a></div></div></div></div></div></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><uib-tabset active=activeTab><uib-tab ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+identity.receivedPositive+identity.receivedNeutral+identity.receivedNegative}})</span> <span class=visible-xs>Recv ({{0+identity.receivedPositive+identity.receivedNeutral+identity.receivedNegative}})</span></uib-tab-heading><div ng-show=authentication.user class="panel panel-default panel-success"><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment, recipient: [[idType, idValue]] })"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="Write feedback"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button type=submit class="pull-right ladda-button btn btn-primary" data-style=zoom-out><span class=ladda-label><span class="fa fa-edit"></span> Publish</span><span class=ladda-spinner></span></button></div></div></form></div></div><div infinite-scroll=getReceivedMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !identity || received.loading || received.finished ||\xA0activeTab != 0"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.receivedPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.receivedNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.receivedNegative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=info ng-repeat="msg in received | filter:msgFilter | orderBy:\'-data.timestamp\' as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="apiReady && !isCurrentUser && !received.loading && receivedFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if="apiReady && isCurrentUser && !received.loading && received.length == 0" class="alert alert-warning text-center"><i class="fa fa-info pull-right"></i><p>You have not received any trust ratings yet.</p><p>You need trust ratings to have your messages saved and displayed by others.</p><p>You can also ask someone to verify that {{idType}}:{{idValue}} belongs to your already trusted identity.</p></div><div ng-if=received.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=isUniqueType><uib-tab-heading>Sent ({{0+identity.sentPositive+identity.sentNeutral+identity.sentNegative}})</uib-tab-heading><div infinite-scroll=getSentMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !identity || sent.loading || sent.finished ||\xA0activeTab != 1"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span>Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.sentPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.sentNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.sentNegative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=info ng-repeat="msg in sent | filter:msgFilter | orderBy:\'-data.timestamp\' as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="!sent.loading && sentFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if=sent.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=true><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-show="connections.$resolved && connectionsLength > 0" ng-bind="connectionsLength - 1"></span><span ng-hide=connections.$resolved></span>)</uib-tab-heading><div id=connections><!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="id in connections" style={{id.rowStyle}} ng-class=id.rowClass ng-click="!id.isCurrent && connectionClicked($event, id)" class=id-row><td><div class="visible-xs mar-bot5"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><div><a style=min-width:45px class="pull-left btn btn-lg btn-social-icon mar-right15" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span> <span ng-if=id.iconStyle&&!id.link class="pull-left btn btn-lg btn-social-icon" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span></span></a><div class="hidden-xs pull-left"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><!--\n                              <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n                            --><div class=pull-right ng-if=!id.isCurrent><button autocomplete=off name=confirm class="ladda-button btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{id.conf}}</button> <button autocomplete=off name=unverify class="ladda-button btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{id.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!id.isCurrent class="active connectingmsgs"><td class="connectingmsgs ladda-button" data-style=zoom-in data-spinner-color=#000><div uib-collapse=!id.collapse><div ng-repeat="msg in id.connecting_msgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.data.type === \'verify_identity\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.data.type === \'unverify_identity\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" class=id-link><identicon identity=msg class=mar-right5 border=3 width=30 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span ng-bind=msg.author_name||msg.data.author[0][1]></span> </a></strong>- <span ng-bind="msg.data.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder=value ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder=type ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [newVerification.type, newVerification.value]] }, { conf: 0, ref: 0, name: newVerification.type, val: newVerification.value })" class="ladda-button btn btn-default" data-style=zoom-out ng-disabled=!authentication.user><span class=ladda-label><span class="glyphicon glyphicon-plus"></span> Add</span><span class=ladda-spinner></span></button></td></tr></tbody></table></div><div ng-if=!connections.$resolved style=position:relative;padding:20px us-spinner></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/main/about.html','<div class=container><div class=col-md-8><h3>About Identifi</h3><p class=lead>Identifi is an address book application that stores its data in a distributed fashion on the BitTorrent-like <a href=https://ipfs.io>IPFS</a> network. The stored information is not owned or centrally administered by anyone.</p><p>In addition to keeping your contact details such as phone number or bitcoin address up-to-date, you can give other users <b>trust ratings and feedback</b>. You can filter all shown information by your <b>web of trust</b>, for example by displaying only the information stored by your friends and the people they trust.</p><p>Identifi is free and open source software. The project is in alpha development stage.</p><ul><li><a href=http://identifi.org>Project page</a></li><li><a href=https://github.com/identifi>Source code</a></li></ul><h4>Available at</h4><ul><li><a href=https://identi.fi>https://identi.fi</a></li><li><a href=https://identifi.github.io/ >https://identifi.github.io/</a></li><li><a href=https://ipfs.io/ipns/identi.fi/ >https://ipfs.io/ipns/identi.fi/</a></li><li><a href=https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/ >https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/</a></li><li><a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome extension</a></li><!-- TODO: add dynamically updated /ipfs url --></ul><p>Also available as a <a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome plugin</a>.</p><h3>Privacy policy</h3><p>The Identifi network stores user-submitted identifiers which can be of arbitrary type, for example <i>name</i>, <i>email address</i> or <i>phone number</i>. All stored information is made public and broadcast to the <a href=https://ipfs.io>IPFS</a> network.</p></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><identicon identity=match.label border=3 width=46 class=mar-right10></identicon><span ng-bind-html="(match.label.profile.name || match.label.profile.nickname) | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><textarea rows=6 class=form-control placeholder="Enter private key" ng-model=privateKeyPEM></textarea><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--> <button class="btn btn-primary" ng-click=generateKey()>Generate new key</button> <button class="btn btn-default pull-right" ng-disabled=!privateKeyPEM ng-click=downloadKey()><i class="fa fa-download"></i> Download key</button> <button class="btn btn-primary" ng-click="loginWithKey(privateKeyPEM, publicKeyPEM)">Log in</button></div></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="alert alert-info">Viewing as: <strong ng-if=nodeInfo.profile><a ui-sref="identities.show({ type: \'keyID\', value: nodeInfo.keyID })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon identity=nodeInfo.profile border=3 width=35></identicon></span><span ng-bind=nodeInfo.profile.mostVerifiedAttributes.name.attribute.val></span></a></strong><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({max_distance: -1})" ng-class="{active: filters.max_distance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 1})" ng-class="{active: filters.max_distance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 2})" ng-class="{active: filters.max_distance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 3})" ng-class="{active: filters.max_distance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 0})" ng-class="{active: filters.max_distance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em;"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class=container><section><div id=messages class=row><div class=col-md-4><div ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div infinite-scroll=find() infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || msgs.loading || msgs.finished" infinite-scroll-listen-for-event=msgScrollCheck><message ng-repeat="msg in msgs.list | filter:msgFilter" msg-data=msg ng-click="openMessage($event, msg, \'lg\')"></message></div><div us-spinner ng-if=!messages.$resolved style=position:relative;padding:20px></div><div class="alert alert-info text-center" ng-if="!msgs.loading && !msgs.list.length">No messages to show</div></div></div></section></div>');
$templateCache.put('app/messages/show.html','<section ng-init=findOne()><div class="col-md-8 col-md-offset-2 msg-col"><message msg-data=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by: <a ng-if=false ng-bind=message.signerName||message.signer_keyid ui-sref="identities.show({type: \'keyID\', value: message.signer_keyid })"></a> <strong ng-if=message.verifiedBy><a ui-sref="identities.show({ type: \'keyID\', value: message.signer_keyid })" class=id-link><identicon identity=message.verifiedBy class=mar-right5 border=3 width=35></identicon><span ng-bind=message.verifiedBy.mostVerifiedAttributes.name.attribute.val></span> <small>{{message.signer_keyid}}</small></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-controller=MessagesController ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':$ctrl.msgData.isVerification}" style={{$ctrl.msgData.bgColor}} ng-if=$ctrl.msgData.data><div class=message-panel ng-class="{ \'panel-body\': !$ctrl.msgData.isVerification, \'panel-heading\': $ctrl.msgData.isVerification || $ctrl.msgData.isUnverification }"><p><span class="mar-left5 pull-right" ng-class=$ctrl.msgData.iconStyle ng-repeat="n in $ctrl.msgData.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=$ctrl.msgData.local></span> <strong><a ui-sref="identities.show({ type: $ctrl.msgData.linkToAuthor[0], value: $ctrl.msgData.linkToAuthor[1] })" class=id-link><identicon identity=$ctrl.msgData.author class=mar-right5 border=3 width=35 positive-score=$ctrl.msgData.author_pos negative-score=$ctrl.msgData.author_neg></identicon><span ng-bind="($ctrl.msgData.authorIsSelf && ($ctrl.pageInfo.name || $ctrl.pageInfo.nickname))||$ctrl.msgData.author_name||$ctrl.msgData.linkToAuthor[1]"></span> </a></strong><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: $ctrl.msgData.linkToRecipient[0], value: $ctrl.msgData.linkToRecipient[1] })" ng-bind="($ctrl.msgData.recipientIsSelf && ($ctrl.pageInfo.name || $ctrl.pageInfo.nickname))||$ctrl.msgData.recipient_name||$ctrl.msgData.linkToRecipient[1]" class=id-link></a> - <a ui-sref="messages.show({ id: ($ctrl.msgData.ipfs_hash || $ctrl.msgData.hash) })" ng-bind="$ctrl.msgData.data.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block;></a></p><p ng-if="$ctrl.msgData.isVerification || $ctrl.msgData.isUnverification"><small ng-repeat="recipient in $ctrl.msgData.data.recipient">{{recipient[0]}}: <span ng-if="recipient[0] == \'email\' || recipient[0] == \'url\'" ng-bind-html="recipient[1] | linky"></span> <span ng-if="!(recipient[0] == \'email\' || recipient[0] == \'url\')" ng-bind=recipient[1]></span> <i class="fa fa-link" ng-if="!$last && $ctrl.msgData.isVerification"></i> <i class="fa fa-chain-broken" ng-if="!$last && $ctrl.msgData.isUnverification"></i></small></p><p ng-bind-html=$ctrl.msgData.data.comment|linky></p></div></div>');}]);