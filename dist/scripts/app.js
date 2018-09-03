(function() {
  angular.module('identifiAngular', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'angular-parallax', 'infinite-scroll', 'LocalStorageModule', 'rzModule', 'angular-clipboard', 'monospaced.qrcode', 'ngFileUpload']);

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlcyI6WyJpbmRleC5tb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixFQUNFLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsU0FBM0IsRUFBc0MsWUFBdEMsRUFBb0QsWUFBcEQsRUFDQSxRQURBLEVBQ1UsWUFEVixFQUN3QixXQUR4QixFQUNxQyxjQURyQyxFQUNxRCxrQkFEckQsRUFFQSxpQkFGQSxFQUVtQixvQkFGbkIsRUFFeUMsVUFGekMsRUFFcUQsbUJBRnJELEVBR0EsbUJBSEEsRUFHcUIsY0FIckIsQ0FERjs7RUFNQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsUUFBekMsRUFBbUQ7SUFBRSxTQUFBO2FBQ25ELFNBQUMsS0FBRDtlQUNFLGtCQUFBLENBQW1CLGtCQUFBLENBQW1CLEtBQW5CLENBQW5CO01BREY7SUFEbUQsQ0FBRjtHQUFuRDs7RUFJQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsb0JBQXpDLEVBQStEO0lBQUUsU0FBQTthQUMvRCxTQUFDLEtBQUQ7ZUFDRSxrQkFBQSxDQUFtQixLQUFuQjtNQURGO0lBRCtELENBQUY7R0FBL0Q7O0VBS0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLE1BQWxDLENBQXlDLFdBQXpDLEVBQXNELFNBQUMsSUFBRDtXQUNwRCxTQUFDLElBQUQsRUFBTyxNQUFQO01BQ0UsSUFBRyxPQUFPLElBQVAsS0FBZSxRQUFmLElBQTRCLE1BQS9CO1FBQ0UsSUFBQSxHQUFPLElBQUksQ0FBQyxPQUFMLENBQWEsSUFBSSxNQUFKLENBQVcsR0FBQSxHQUFNLE1BQU4sR0FBZSxHQUExQixFQUErQixJQUEvQixDQUFiLEVBQW1ELFdBQW5EO0FBQ1AsZUFBTyxJQUFJLENBQUMsV0FBTCxDQUFpQixJQUFJLENBQUMsUUFBTCxDQUFBLENBQWpCLEVBRlQ7O0FBR0EsYUFBTztJQUpUO0VBRG9ELENBQXREOztFQU9BLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxTQUF6QyxFQUFvRCxTQUFBO1dBQ2xELFNBQUMsS0FBRDtBQUNFLFVBQUE7TUFBQSxDQUFBLEdBQUksQ0FDRixJQURFLEVBRUYsSUFGRSxFQUdGLElBSEUsRUFJRixJQUpFO01BTUosQ0FBQSxHQUFJLEtBQUEsR0FBUTthQUNaLEtBQUEsR0FBUSxDQUFDLENBQUUsQ0FBQSxDQUFDLENBQUEsR0FBSSxFQUFMLENBQUEsR0FBVyxFQUFYLENBQUYsSUFBb0IsQ0FBRSxDQUFBLENBQUEsQ0FBdEIsSUFBNEIsQ0FBRSxDQUFBLENBQUEsQ0FBL0I7SUFSVjtFQURrRCxDQUFwRDtBQXRCQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInLFxuICBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLFxuICAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICdhbmd1bGFyLXBhcmFsbGF4JyxcbiAgJ2luZmluaXRlLXNjcm9sbCcsICdMb2NhbFN0b3JhZ2VNb2R1bGUnLCAncnpNb2R1bGUnLCAnYW5ndWxhci1jbGlwYm9hcmQnLFxuICAnbW9ub3NwYWNlZC5xcmNvZGUnLCAnbmdGaWxlVXBsb2FkJ11cblxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZpbHRlciAnZXNjYXBlJywgWyAtPlxuICAoaW5wdXQpIC0+XG4gICAgZW5jb2RlVVJJQ29tcG9uZW50IGVuY29kZVVSSUNvbXBvbmVudChpbnB1dClcbiBdXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuZmlsdGVyICdlbmNvZGVVUklDb21wb25lbnQnLCBbIC0+XG4gIChpbnB1dCkgLT5cbiAgICBlbmNvZGVVUklDb21wb25lbnQgaW5wdXRcbiBdXG5cbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5maWx0ZXIgJ2hpZ2hsaWdodCcsICgkc2NlKSAtPlxuICAodGV4dCwgcGhyYXNlKSAtPlxuICAgIGlmIHR5cGVvZiB0ZXh0ID09ICdzdHJpbmcnIGFuZCBwaHJhc2VcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cCgnKCcgKyBwaHJhc2UgKyAnKScsICdnaScpLCAnPGI+JDE8L2I+JylcbiAgICAgIHJldHVybiAkc2NlLnRydXN0QXNIdG1sIHRleHQudG9TdHJpbmcoKVxuICAgIHJldHVybiB0ZXh0XG5cbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5maWx0ZXIgJ29yZGluYWwnLCAtPlxuICAoaW5wdXQpIC0+XG4gICAgcyA9IFtcbiAgICAgICd0aCdcbiAgICAgICdzdCdcbiAgICAgICduZCdcbiAgICAgICdyZCdcbiAgICBdXG4gICAgdiA9IGlucHV0ICUgMTAwXG4gICAgaW5wdXQgKyAoc1sodiAtIDIwKSAlIDEwXSBvciBzW3ZdIG9yIHNbMF0pXG4iXX0=

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
        msgs = {};
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
            m.ipfs_hash = pair.value.ipfs_hash;
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
        console.log('setFilters');
        angular.extend($scope.filters, filters);
        $scope.resetMsgs();
        return $timeout(function() {
          return $rootScope.$broadcast('msgScrollCheck');
        });
      };
      $scope.findOne = function() {
        var hash, processResponse;
        if ($stateParams.id) {
          hash = $stateParams.id;
          processResponse = function() {
            $scope.processMessages([$scope.message], {}, true);
            $scope.setPageTitle('Message ' + hash);
            $scope.setMsgRawData($scope.message);
            $scope.message.signerKeyHash = $scope.message.getSignerKeyID();
            return $scope.identifiIndex.get($scope.message.signerKeyHash, 'keyID').then(function(profile) {
              if (!profile) {
                profile = new $window.identifiLib.Identity({
                  attrs: [
                    {
                      name: 'keyID',
                      val: $scope.message.signerKeyHash
                    }
                  ]
                });
              }
              return $scope.$apply(function() {
                return $scope.message.verifiedBy = profile;
              });
            });
          };
          return $scope.$watch('apiReady', function(isReady) {
            if (isReady) {
              if (hash.match(/^Qm[1-9A-Za-z]{40,50}$/)) {
                return $scope.ipfsGet(hash).then(function(res) {
                  $scope.message = $window.identifiLib.Message.fromJws(res);
                  $scope.message.ipfs_hash = hash;
                  return processResponse();
                })["catch"](function(e) {
                  return console.log(e);
                });
              }
            }
          });
        }
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtBQUFBLE1BQUE7O0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLG9CQUE3QyxFQUFtRTtJQUNqRSxRQURpRSxFQUVqRSxZQUZpRSxFQUdqRSxTQUhpRSxFQUlqRSxjQUppRSxFQUtqRSxXQUxpRSxFQU1qRSxPQU5pRSxFQVFqRSxVQVJpRSxFQVNqRSxRQVRpRSxFQVVqRSxVQVZpRSxFQVdqRSxxQkFYaUUsRUFZakUsU0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixPQUFyQixFQUE4QixZQUE5QixFQUE0QyxTQUE1QyxFQUF1RCxLQUF2RCxFQUE4RCxRQUE5RCxFQUF3RSxNQUF4RSxFQUFnRixRQUFoRixFQUEwRixtQkFBMUY7TUFDRSxNQUFNLENBQUMsTUFBUCxHQUFnQixZQUFZLENBQUM7TUFDN0IsTUFBTSxDQUFDLE9BQVAsR0FBaUIsWUFBWSxDQUFDO01BRTlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBZixHQUFzQjtNQUV0QixNQUFNLENBQUMsU0FBUCxHQUFtQixTQUFBO0FBQ2pCLFlBQUE7UUFBQSxJQUFBLEdBQU87ZUFDUCxNQUFNLENBQUMsSUFBUCxHQUNFO1VBQUEsT0FBQSxFQUFTLEtBQVQ7VUFDQSxRQUFBLEVBQVUsS0FEVjtVQUVBLElBQUE7O0FBQU87aUJBQUEsWUFBQTs7OzJCQUFBO0FBQUE7O2NBRlA7O01BSGU7TUFNbkIsTUFBTSxDQUFDLFNBQVAsQ0FBQTtNQUVBLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFNBQUMsTUFBRDtlQUNqQixJQUFJLEtBQUosQ0FBVSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQsRUFBWSxJQUFJLENBQUMsR0FBTCxDQUFTLE1BQVQsQ0FBWixDQUFWO01BRGlCO01BR25CLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFNBQUMsTUFBRDtBQUNqQixZQUFBO1FBQUEsU0FBQSxHQUFZO1FBQ1osSUFBRyxNQUFBLEdBQVMsQ0FBWjtVQUNFLFNBQUEsR0FBWSxXQURkO1NBQUEsTUFFSyxJQUFHLE1BQUEsR0FBUyxDQUFaO1VBQ0gsU0FBQSxHQUFZLFdBRFQ7O2VBRUw7TUFOaUI7TUFRbkIsTUFBTSxDQUFDLFNBQVAsR0FBbUIsU0FBQyxNQUFEO0FBQ2pCLFlBQUE7UUFBQSxTQUFBLEdBQVk7UUFDWixJQUFHLE1BQUEsR0FBUyxDQUFaO1VBQ0UsU0FBQSxHQUFZLHNCQURkO1NBQUEsTUFFSyxJQUFHLE1BQUEsR0FBUyxDQUFaO1VBQ0gsU0FBQSxHQUFZLHdCQURUOztlQUVMO01BTmlCO01BUW5CLE1BQU0sQ0FBQyxlQUFQLEdBQXlCLE9BQU8sQ0FBQyxVQUFSLEdBQXFCO01BRTlDLE1BQU0sQ0FBQyxJQUFQLEdBQWMsU0FBQTtBQUNaLFlBQUE7UUFBQSxJQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBdEI7QUFBQSxpQkFBQTs7UUFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQVosR0FBc0I7UUFFdEIsU0FBQSxHQUFZO1FBQ1osSUFBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFwQjtVQUNFLFNBQUEsR0FBWSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUssQ0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFqQixHQUEwQixDQUExQixDQUE0QixDQUFDLFVBRDVEOztlQUVBLE1BQU0sQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsVUFBekMsQ0FBb0QsRUFBcEQsRUFBd0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUF2RSxFQUE4RSxTQUE5RSxFQUF5RixJQUF6RixDQUNBLENBQUMsSUFERCxDQUNNLFNBQUMsR0FBRDtBQUNKLGNBQUE7VUFBQSxRQUFBLEdBQVc7QUFDWCxlQUFBLHFDQUFBOztZQUNFLENBQUEsR0FBSSxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUE1QixDQUFvQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQS9DO1lBQ0osQ0FBQyxDQUFDLFNBQUYsR0FBYyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxTQUFGLEdBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN6QixDQUFDLENBQUMsU0FBRixHQUFjLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDekIsQ0FBQyxDQUFDLG1CQUFGLEdBQXdCLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDbkMsQ0FBQyxDQUFDLFVBQUYsR0FBZSxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxTQUFGLEdBQWMsSUFBSSxDQUFDO1lBQ25CLENBQUMsQ0FBQyxjQUFGLFVBQW1CLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBYixLQUFzQixjQUF0QixJQUFBLEdBQUEsS0FBc0M7WUFDekQsQ0FBQyxDQUFDLGdCQUFGLFdBQXFCLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBYixLQUFzQixnQkFBdEIsSUFBQSxJQUFBLEtBQXdDO1lBQzdELFFBQVEsQ0FBQyxJQUFULENBQWMsQ0FBZDtBQVZGO1VBV0EsTUFBTSxDQUFDLGVBQVAsQ0FBdUIsUUFBdkI7VUFDQSxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFyQixDQUEyQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQXZDLEVBQTZDLFFBQTdDO1VBQ0EsSUFBRyxHQUFHLENBQUMsTUFBSixHQUFhLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBZixHQUF1QixDQUF2QztZQUNFLE1BQU0sQ0FBQyxNQUFQLENBQWMsU0FBQTtxQkFBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVosR0FBdUI7WUFBMUIsQ0FBZCxFQURGOztpQkFFQSxNQUFNLENBQUMsTUFBUCxDQUFjLFNBQUE7bUJBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFaLEdBQXNCO1VBQXpCLENBQWQ7UUFqQkksQ0FETjtNQVBZO01BMkJkLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLFNBQUMsT0FBRDtRQUNsQixPQUFPLENBQUMsR0FBUixDQUFZLFlBQVo7UUFDQSxPQUFPLENBQUMsTUFBUixDQUFlLE1BQU0sQ0FBQyxPQUF0QixFQUErQixPQUEvQjtRQUNBLE1BQU0sQ0FBQyxTQUFQLENBQUE7ZUFDQSxRQUFBLENBQVMsU0FBQTtpQkFBRyxVQUFVLENBQUMsVUFBWCxDQUFzQixnQkFBdEI7UUFBSCxDQUFUO01BSmtCO01BT3BCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLFNBQUE7QUFDZixZQUFBO1FBQUEsSUFBRyxZQUFZLENBQUMsRUFBaEI7VUFDRSxJQUFBLEdBQU8sWUFBWSxDQUFDO1VBQ3BCLGVBQUEsR0FBa0IsU0FBQTtZQUNoQixNQUFNLENBQUMsZUFBUCxDQUF1QixDQUFDLE1BQU0sQ0FBQyxPQUFSLENBQXZCLEVBQXlDLEVBQXpDLEVBQTZDLElBQTdDO1lBQ0EsTUFBTSxDQUFDLFlBQVAsQ0FBb0IsVUFBQSxHQUFhLElBQWpDO1lBQ0EsTUFBTSxDQUFDLGFBQVAsQ0FBcUIsTUFBTSxDQUFDLE9BQTVCO1lBQ0EsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFmLEdBQStCLE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBZixDQUFBO21CQUMvQixNQUFNLENBQUMsYUFBYSxDQUFDLEdBQXJCLENBQXlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBeEMsRUFBdUQsT0FBdkQsQ0FBK0QsQ0FBQyxJQUFoRSxDQUFxRSxTQUFDLE9BQUQ7Y0FDbkUsSUFBQSxDQUFPLE9BQVA7Z0JBQ0UsT0FBQSxHQUFVLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxRQUF4QixDQUFpQztrQkFBQyxLQUFBLEVBQU07b0JBQUM7c0JBQUMsSUFBQSxFQUFNLE9BQVA7c0JBQWdCLEdBQUEsRUFBSyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQXBDO3FCQUFEO21CQUFQO2lCQUFqQyxFQURaOztxQkFFQSxNQUFNLENBQUMsTUFBUCxDQUFjLFNBQUE7dUJBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFmLEdBQTRCO2NBQS9CLENBQWQ7WUFIbUUsQ0FBckU7VUFMZ0I7aUJBVWxCLE1BQU0sQ0FBQyxNQUFQLENBQWMsVUFBZCxFQUEwQixTQUFDLE9BQUQ7WUFDeEIsSUFBRyxPQUFIO2NBQ0UsSUFBRyxJQUFJLENBQUMsS0FBTCxDQUFXLHdCQUFYLENBQUg7dUJBQ0UsTUFBTSxDQUFDLE9BQVAsQ0FBZSxJQUFmLENBQW9CLENBQUMsSUFBckIsQ0FBMEIsU0FBQyxHQUFEO2tCQUN4QixNQUFNLENBQUMsT0FBUCxHQUFpQixPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUE1QixDQUFvQyxHQUFwQztrQkFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFmLEdBQTJCO3lCQUMzQixlQUFBLENBQUE7Z0JBSHdCLENBQTFCLENBSUEsRUFBQyxLQUFELEVBSkEsQ0FJTyxTQUFDLENBQUQ7eUJBQ0wsT0FBTyxDQUFDLEdBQVIsQ0FBWSxDQUFaO2dCQURLLENBSlAsRUFERjtlQURGOztVQUR3QixDQUExQixFQVpGOztNQURlO0lBckVuQixDQVppRTtHQUFuRTtBQUZBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4jIE1lc3NhZ2VzIGNvbnRyb2xsZXJcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5jb250cm9sbGVyICdNZXNzYWdlc0NvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJHdpbmRvdydcbiAgJyRzdGF0ZVBhcmFtcydcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAjICdBdXRoZW50aWNhdGlvbidcbiAgJ01lc3NhZ2VzJ1xuICAnY29uZmlnJ1xuICAnJHRpbWVvdXQnXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHAsIE1lc3NhZ2VzLCBjb25maWcsICR0aW1lb3V0LCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSAtPiAjLCBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5pZFR5cGUgPSAkc3RhdGVQYXJhbXMudHlwZVxuICAgICRzY29wZS5pZFZhbHVlID0gJHN0YXRlUGFyYW1zLnZhbHVlXG5cbiAgICAkc2NvcGUuZmlsdGVycy50eXBlID0gJ3JhdGluZydcblxuICAgICRzY29wZS5yZXNldE1zZ3MgPSAtPlxuICAgICAgbXNncyA9IHt9XG4gICAgICAkc2NvcGUubXNncyA9XG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgICAgIGZpbmlzaGVkOiBmYWxzZVxuICAgICAgICBsaXN0OiAodmFsdWUgZm9yIG93biBwcm9wLCB2YWx1ZSBvZiBtc2dzKVxuICAgICRzY29wZS5yZXNldE1zZ3MoKVxuXG4gICAgJHNjb3BlLmljb25Db3VudCA9IChyYXRpbmcpIC0+XG4gICAgICBuZXcgQXJyYXkoTWF0aC5tYXgoMSwgTWF0aC5hYnMocmF0aW5nKSkpXG5cbiAgICAkc2NvcGUuaWNvblN0eWxlID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICduZXV0cmFsJ1xuICAgICAgaWYgcmF0aW5nID4gMFxuICAgICAgICBpY29uU3R5bGUgPSAncG9zaXRpdmUnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ25lZ2F0aXZlJ1xuICAgICAgaWNvblN0eWxlXG5cbiAgICAkc2NvcGUuaWNvbkNsYXNzID0gKHJhdGluZykgLT5cbiAgICAgIGljb25TdHlsZSA9ICdnbHlwaGljb24tcXVlc3Rpb24tc2lnbidcbiAgICAgIGlmIHJhdGluZyA+IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtdXAnXG4gICAgICBlbHNlIGlmIHJhdGluZyA8IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi10aHVtYnMtZG93bidcbiAgICAgIGljb25TdHlsZVxuXG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuXG4gICAgJHNjb3BlLmZpbmQgPSAtPlxuICAgICAgcmV0dXJuIGlmICRzY29wZS5tc2dzLmxvYWRpbmdcbiAgICAgICRzY29wZS5tc2dzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAjIEdldCBsYXRlc3QgbWVzc2FnZXMgZnJvbSBpcGZzIGluZGV4XG4gICAgICBzZWFyY2hLZXkgPSAnJ1xuICAgICAgaWYgJHNjb3BlLm1zZ3MubGlzdC5sZW5ndGhcbiAgICAgICAgc2VhcmNoS2V5ID0gJHNjb3BlLm1zZ3MubGlzdFskc2NvcGUubXNncy5saXN0Lmxlbmd0aCAtIDFdLnNlYXJjaEtleVxuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXgubWVzc2FnZXNCeVRpbWVzdGFtcC5zZWFyY2hUZXh0KCcnLCAkc2NvcGUuZmlsdGVycy5saW1pdCwgc2VhcmNoS2V5LCB0cnVlKSAjIFRPRE86IGltcGxlbWVudCBpbiBpZGVudGlmaS1saWJcbiAgICAgIC50aGVuIChyZXMpIC0+XG4gICAgICAgIG1lc3NhZ2VzID0gW11cbiAgICAgICAgZm9yIHBhaXIgaW4gcmVzXG4gICAgICAgICAgbSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5mcm9tSndzKHBhaXIudmFsdWUuandzKVxuICAgICAgICAgIG0uaXBmc19oYXNoID0gcGFpci52YWx1ZS5pcGZzX2hhc2hcbiAgICAgICAgICBtLmF1dGhvclBvcyA9IHBhaXIudmFsdWUuYXV0aG9yX3Bvc1xuICAgICAgICAgIG0uYXV0aG9yTmVnID0gcGFpci52YWx1ZS5hdXRob3JfbmVnXG4gICAgICAgICAgbS5hdXRob3JUcnVzdERpc3RhbmNlID0gcGFpci52YWx1ZS5kaXN0YW5jZVxuICAgICAgICAgIG0uYXV0aG9yTmFtZSA9IHBhaXIudmFsdWUuYXV0aG9yX25hbWVcbiAgICAgICAgICBtLnNlYXJjaEtleSA9IHBhaXIua2V5XG4gICAgICAgICAgbS5pc1ZlcmlmaWNhdGlvbiA9IG0uc2lnbmVkRGF0YS50eXBlIGluIFsndmVyaWZpY2F0aW9uJywgJ3ZlcmlmeV9pZGVudGl0eSddXG4gICAgICAgICAgbS5pc1VudmVyaWZpY2F0aW9uID0gbS5zaWduZWREYXRhLnR5cGUgaW4gWyd1bnZlcmlmaWNhdGlvbicsICd1bnZlcmlmeV9pZGVudGl0eSddXG4gICAgICAgICAgbWVzc2FnZXMucHVzaChtKVxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIG1lc3NhZ2VzXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KCRzY29wZS5tc2dzLmxpc3QsIG1lc3NhZ2VzKVxuICAgICAgICBpZiByZXMubGVuZ3RoIDwgJHNjb3BlLmZpbHRlcnMubGltaXQgLSAxICMgYnVnXG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubXNncy5maW5pc2hlZCA9IHRydWVcbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubXNncy5sb2FkaW5nID0gZmFsc2VcblxuICAgICRzY29wZS5zZXRGaWx0ZXJzID0gKGZpbHRlcnMpIC0+XG4gICAgICBjb25zb2xlLmxvZyAnc2V0RmlsdGVycydcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5maWx0ZXJzLCBmaWx0ZXJzXG4gICAgICAkc2NvcGUucmVzZXRNc2dzKClcbiAgICAgICR0aW1lb3V0IC0+ICRyb290U2NvcGUuJGJyb2FkY2FzdCAnbXNnU2Nyb2xsQ2hlY2snXG5cbiAgICAjIEZpbmQgZXhpc3RpbmcgTWVzc2FnZVxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgIGlmICRzdGF0ZVBhcmFtcy5pZFxuICAgICAgICBoYXNoID0gJHN0YXRlUGFyYW1zLmlkXG4gICAgICAgIHByb2Nlc3NSZXNwb25zZSA9IC0+XG4gICAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyhbJHNjb3BlLm1lc3NhZ2VdLCB7fSwgdHJ1ZSlcbiAgICAgICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICdNZXNzYWdlICcgKyBoYXNoXG4gICAgICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEoJHNjb3BlLm1lc3NhZ2UpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SGFzaCA9ICRzY29wZS5tZXNzYWdlLmdldFNpZ25lcktleUlEKClcbiAgICAgICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXQoJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SGFzaCwgJ2tleUlEJykudGhlbiAocHJvZmlsZSkgLT5cbiAgICAgICAgICAgIHVubGVzcyBwcm9maWxlXG4gICAgICAgICAgICAgIHByb2ZpbGUgPSBuZXcgJHdpbmRvdy5pZGVudGlmaUxpYi5JZGVudGl0eSh7YXR0cnM6W3tuYW1lOiAna2V5SUQnLCB2YWw6ICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUhhc2h9XX0pXG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tZXNzYWdlLnZlcmlmaWVkQnkgPSBwcm9maWxlXG5cbiAgICAgICAgJHNjb3BlLiR3YXRjaCAnYXBpUmVhZHknLCAoaXNSZWFkeSkgLT5cbiAgICAgICAgICBpZiBpc1JlYWR5XG4gICAgICAgICAgICBpZiBoYXNoLm1hdGNoIC9eUW1bMS05QS1aYS16XXs0MCw1MH0kLyAjIGxvb2tzIGxpa2UgYW4gaXBmcyBhZGRyZXNzXG4gICAgICAgICAgICAgICRzY29wZS5pcGZzR2V0KGhhc2gpLnRoZW4gKHJlcykgLT5cbiAgICAgICAgICAgICAgICAkc2NvcGUubWVzc2FnZSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5mcm9tSndzKHJlcylcbiAgICAgICAgICAgICAgICAkc2NvcGUubWVzc2FnZS5pcGZzX2hhc2ggPSBoYXNoXG4gICAgICAgICAgICAgICAgcHJvY2Vzc1Jlc3BvbnNlKClcbiAgICAgICAgICAgICAgLmNhdGNoIChlKSAtPlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nIGVcblxuICAgIHJldHVyblxuXVxuIl19

(function() {
  'use strict';
  angular.module('identifiAngular').controller('MainController', [
    '$scope', '$rootScope', '$location', '$http', '$state', 'config', 'localStorageService', '$uibModal', '$window', '$q', 'focus', function($scope, $rootScope, $location, $http, $state, config, localStorageService, $uibModal, $window, $q, focus) {
      var privateKey, scrollTo, setIndex;
      $scope.gun = new Gun(['http://localhost:8765/gun', 'https://identifi.herokuapp.com/gun']);
      $scope.authentication = {};
      $scope.ipfsRoot = 'https://identi.fi';
      $scope.getIdKey = function(id) {
        if (Array.isArray(id)) {
          return encodeURIComponent(id[0]) + ':' + encodeURIComponent(id[1]);
        } else {
          return encodeURIComponent(id.name) + ':' + encodeURIComponent(id.val);
        }
      };
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
      $scope.loginWithKey = function(privateKeySerialized) {
        $scope.privateKey = $window.identifiLib.Key.fromJwk(privateKeySerialized);
        localStorageService.set('identifiKey', privateKeySerialized);
        $scope.authentication.user = {
          idType: 'keyID',
          idValue: $scope.privateKey.keyID
        };
        if ($scope.loginModal) {
          $scope.loginModal.close();
        }
        return $scope.$watch('apiReady', function(isReady) {
          if (isReady) {
            return $scope.identifiIndex.get($scope.privateKey.keyID, 'keyID').then(function(identity) {
              if (identity) {
                return $scope.authentication.identity = identity;
              } else {
                return $scope.authentication.identity = $window.identifiLib.Identity.create($scope.gun.get('identifi').get('identities'), {
                  attrs: [
                    {
                      name: 'keyID',
                      val: $scope.privateKey.keyID
                    }
                  ]
                });
              }
            });
          }
        });
      };
      privateKey = localStorageService.get('identifiKey');
      if (privateKey) {
        $scope.loginWithKey(privateKey);
      }
      $scope.ipfs.on('ready', function() {
        $scope.ipfsReady = true;
        return $window.ipfs = $scope.ipfs;
      });
      setIndex = function(results) {
        $scope.identifiIndex = results;
        console.log('Got index', $scope.identifiIndex);
        return $scope.identifiIndex.getViewpoint().then(function(vp) {
          $scope.viewpoint = vp;
          $scope.viewpoint.gun.get('linkTo').open(function(linkTo) {
            return $scope.viewpoint.linkTo = linkTo;
          });
          $scope.viewpoint.gun.get('attrs').open(function(attrs) {
            $scope.viewpoint.attrs = attrs;
            return $scope.viewpoint.mostVerifiedAttributes = $window.identifiLib.Identity.getMostVerifiedAttributes(attrs);
          });
          $scope.apiReady = true;
          if ($state.is('identities.list')) {
            return $scope.search();
          }
        });
      };
      setIndex(new $window.identifiLib.Index($scope.gun.get('identifi')));
      $scope.setPageTitle = function(title) {
        $rootScope.pageTitle = 'Identifi';
        if (title) {
          return $rootScope.pageTitle += ' - ' + title;
        }
      };
      $scope.ipfsGet = function(uri, getJson) {
        return new Promise(function(resolve) {
          var go;
          go = function() {
            return $scope.ipfs.files.cat(uri).then(function(file) {
              file = $scope.ipfs.types.Buffer(file);
              if (getJson) {
                file = JSON.parse(file.toString());
              }
              return resolve(file);
            });
          };
          if ($scope.ipfsReady) {
            return go();
          } else {
            return $scope.ipfs.on('ready', function() {
              return go();
            });
          }
        });
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
        var message, options;
        if (event) {
          event.stopPropagation();
        }
        message = null;
        if (params.type === 'rating') {
          params.maxRating |= 3;
          params.minRating |= -3;
          message = $window.identifiLib.Message.createRating(params, $scope.privateKey);
          console.log(message);
        } else {
          message = $window.identifiLib.Message.createVerification(params, $scope.privateKey);
        }
        options = {};
        return $scope.identifiIndex.addMessage(message)["catch"](function(e) {
          console.error(e);
          return $scope.error = e;
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
      $scope.openUploadModal = function(callback, modalButtonText) {
        $scope.uploadModalCallback = callback;
        $scope.modalButtonText = modalButtonText || 'Upload';
        $scope.uploadModal = $uibModal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'app/identities/upload.modal.html',
          size: 'lg',
          scope: $scope
        });
        $scope.uploadModal.rendered.then(function() {
          return document.activeElement.blur();
        });
        return $scope.$on('$stateChangeStart', function() {
          return $scope.uploadModal.close();
        });
      };
      $scope.uploadFile = function(blob) {
        return new Promise(function(resolve, reject) {
          var fileReader;
          console.log('uploading', blob);
          fileReader = new FileReader();
          fileReader.onload = function(event) {
            var buffer;
            buffer = $scope.ipfs.types.Buffer.from(event.target.result);
            console.log('buffer', buffer);
            return $scope.ipfs.files.add(buffer, function(err, files) {
              if (err) {
                return reject('adding to ipfs failed', err);
              } else {
                resolve(files);
                return console.log('done:', err, files);
              }
            });
          };
          return fileReader.readAsArrayBuffer(blob);
        });
      };
      $scope.generateKey = function() {
        $scope.privateKey = $window.identifiLib.Key.generate();
        console.log($scope.privateKey);
        return $scope.privateKeySerialized = $window.identifiLib.Key.toJwk($scope.privateKey);
      };
      $scope.downloadKey = function() {
        var hiddenElement;
        hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI($scope.privateKeySerialized);
        hiddenElement.target = '_blank';
        hiddenElement.download = 'identifi_private_key.txt';
        return hiddenElement.click();
      };
      $scope.logout = function() {
        $scope.filters.max_distance = 0;
        $scope.privateKeySerialized = '';
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
      $scope.addEntryClicked = function() {
        $state.go('identities.create');
        return focus('idNameFocus');
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
          return $window.identifiLib.Identity.create($scope.gun.get('identifi').get('identities'), {
            attrs: data.attrs
          });
        }
        return $window.identifiLib.Identity.create($scope.gun.get('identifi').get('identities'), {
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
        $scope.message.signerKeyHash = $scope.message.getSignerKeyID();
        $scope.identifiIndex.get($scope.message.signerKeyHash, 'keyID').then(function(profile) {
          if (!profile) {
            profile = $window.identifiLib.Identity.create($scope.gun.get('identifi').get('identities'), {
              attrs: [
                {
                  name: 'keyID',
                  val: $scope.message.signerKeyHash
                }
              ]
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
      $scope.isCollapsed = false;
      $scope.toggleCollapsibleMenu = function() {
        return $scope.isCollapsed = !$scope.isCollapsed;
      };
      $scope.processMessages = function(messages, msgOptions, verifySignature) {
        var processMessage;
        processMessage = function(msg) {
          var p;
          msg.data = msg.signedData;
          if (msg.getAuthor && !(msgOptions && msgOptions.authorIsSelf)) {
            p = msg.getAuthor($scope.identifiIndex);
          } else {
            p = Promise.resolve();
          }
          return p.then(function(author) {
            return $scope.$apply(function() {
              var alpha, i, index, maxRatingDiff, minRatingDiff, neutralRating, rating, ref, ref1, signedData, smallestIndex;
              msg.author = author;
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
            });
          });
        };
        return angular.forEach(messages, function(msg, key) {
          var k, v;
          for (k in msgOptions) {
            v = msgOptions[k];
            msg[k] = v;
          }
          return processMessage(msg);
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
        return i.gun.get('attrs').open(function(attrs) {
          return $scope.$apply(function() {
            var mva;
            mva = $window.identifiLib.Identity.getMostVerifiedAttributes(attrs);
            if (mva.name) {
              i.primaryName = mva.name.attribute.val;
            } else if (mva.nickname) {
              i.primaryName = mva.nickname.attribute.val;
            } else {
              i.primaryName = Object.values(attrs)[0].val;
            }
            if (i.primaryName) {
              if (mva.nickname && mva.nickname.attribute.val !== i.primaryName) {
                i.nickname = mva.nickname.attribute.val;
                if (htmlSafe) {
                  i.nickname = i.nickname.replace('<', '&lt;');
                }
              }
              if (htmlSafe) {
                return i.primaryName = i.primaryName.replace('<', '&lt;');
              }
            }
          });
        });
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
        limit = limit || 30;
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
            i.gun.on(function(data) {
              i.data = data;
              return i.gun.get('linkTo').once(function(linkTo) {
                return $scope.$apply(function() {
                  return i.linkTo = linkTo;
                });
              });
            });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLGdCQUE3QyxFQUErRDtJQUM3RCxRQUQ2RCxFQUU3RCxZQUY2RCxFQUc3RCxXQUg2RCxFQUk3RCxPQUo2RCxFQUs3RCxRQUw2RCxFQU03RCxRQU42RCxFQU83RCxxQkFQNkQsRUFRN0QsV0FSNkQsRUFTN0QsU0FUNkQsRUFVN0QsSUFWNkQsRUFXN0QsT0FYNkQsRUFnQjdELFNBQUMsTUFBRCxFQUFTLFVBQVQsRUFBcUIsU0FBckIsRUFBZ0MsS0FBaEMsRUFBdUMsTUFBdkMsRUFBK0MsTUFBL0MsRUFDQSxtQkFEQSxFQUNxQixTQURyQixFQUNnQyxPQURoQyxFQUN5QyxFQUR6QyxFQUM2QyxLQUQ3QztBQUVFLFVBQUE7TUFBQSxNQUFNLENBQUMsR0FBUCxHQUFhLElBQUksR0FBSixDQUFRLENBQUMsMkJBQUQsRUFBOEIsb0NBQTlCLENBQVI7TUFHYixNQUFNLENBQUMsY0FBUCxHQUF3QjtNQUV4QixNQUFNLENBQUMsUUFBUCxHQUFrQjtNQUVsQixNQUFNLENBQUMsUUFBUCxHQUFrQixTQUFDLEVBQUQ7UUFDaEIsSUFBRyxLQUFLLENBQUMsT0FBTixDQUFjLEVBQWQsQ0FBSDtBQUNFLGlCQUFPLGtCQUFBLENBQW1CLEVBQUcsQ0FBQSxDQUFBLENBQXRCLENBQUEsR0FBNEIsR0FBNUIsR0FBa0Msa0JBQUEsQ0FBbUIsRUFBRyxDQUFBLENBQUEsQ0FBdEIsRUFEM0M7U0FBQSxNQUFBO0FBR0UsaUJBQU8sa0JBQUEsQ0FBbUIsRUFBRSxDQUFDLElBQXRCLENBQUEsR0FBOEIsR0FBOUIsR0FBb0Msa0JBQUEsQ0FBbUIsRUFBRSxDQUFDLEdBQXRCLEVBSDdDOztNQURnQjtNQU1sQixNQUFNLENBQUMs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QUMsSUFBcEI7VUFBMEIsS0FBQSxFQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBN0M7U0FBN0I7ZUFDQSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQWIsR0FBb0I7TUFGUTtJQTNkaEMsQ0FoQjZEO0dBQS9EO0FBREEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5jb250cm9sbGVyICdNYWluQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRyb290U2NvcGUnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRzdGF0ZSdcbiAgJ2NvbmZpZycsXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAnJHVpYk1vZGFsJ1xuICAnJHdpbmRvdydcbiAgJyRxJ1xuICAnZm9jdXMnXG5cbiAgIydBdXRoZW50aWNhdGlvbidcbiAgIydNZW51cydcbiAgIydQZXJzb25hJ1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRodHRwLCAkc3RhdGUsIGNvbmZpZyxcbiAgbG9jYWxTdG9yYWdlU2VydmljZSwgJHVpYk1vZGFsLCAkd2luZG93LCAkcSwgZm9jdXMpIC0+ICMgQXV0aGVudGljYXRpb24sIE1lbnVzLCBQZXJzb25hXG4gICAgJHNjb3BlLmd1biA9IG5ldyBHdW4oWydodHRwOi8vbG9jYWxob3N0Ojg3NjUvZ3VuJywgJ2h0dHBzOi8vaWRlbnRpZmkuaGVyb2t1YXBwLmNvbS9ndW4nXSlcblxuICAgICMgc2V0IGF1dGhlbnRpY2F0aW9uXG4gICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge30gIyBBdXRoZW50aWNhdGlvblxuXG4gICAgJHNjb3BlLmlwZnNSb290ID0gJ2h0dHBzOi8vaWRlbnRpLmZpJyAjIHVzZWQgZm9yIHByb2ZpbGUgLyBjb3ZlciBwaG90b3NcblxuICAgICRzY29wZS5nZXRJZEtleSA9IChpZCkgLT5cbiAgICAgIGlmIEFycmF5LmlzQXJyYXkoaWQpXG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaWRbMF0pICsgJzonICsgZW5jb2RlVVJJQ29tcG9uZW50KGlkWzFdKVxuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGlkLm5hbWUpICsgJzonICsgZW5jb2RlVVJJQ29tcG9uZW50KGlkLnZhbClcblxuICAgICRzY29wZS5xdWVyeSA9IHt9XG4gICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICRzY29wZS5wcmV2aW91c1NlYXJjaEtleSA9ICcnXG4gICAgJHNjb3BlLmlkcyA9IHsgbGlzdDogW10gfVxuICAgICRzY29wZS5waG9uZVJlZ2V4ID0gL15cXCs/XFxkKyQvXG5cbiAgICAkc2NvcGUuaXBmcyA9IG5ldyBJcGZzKFxuICAgICAgaW5pdDogdHJ1ZVxuICAgICAgRVhQRVJJTUVOVEFMOiB7XG4gICAgICAgIHB1YnN1YjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHN0YXJ0OiB0cnVlXG4gICAgICByZXBvOiAnaXBmczYtaWRlbnRpZmknXG4gICAgICBjb25maWc6IEJvb3RzdHJhcDogW1xuICAgICAgICAnL2RuczQvYW1zLTEuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MZXIyNjVOUmdTcDJMQTNkUGFleWtpUzFKNkRpZlRDODhmNXVWUUtOQWQnXG4gICAgICAgICcvZG5zNC9zZm8tMS5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xqdTZtN3hUaDNEdW9rdlQzODg2UVJZcXhBemIxa1NoYWFuSmdXMzZ5eCdcbiAgICAgICAgJy9kbnM0L2xvbi0xLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTE1lV3FCN1lHVkxKTjNwTkxRcG1tRWszNXY2d1l0c01HTHpTcjVRQlUzJ1xuICAgICAgICAnL2RuczQvc2ZvLTIuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MblNHY2NGdVpRSnpSYWRIbjk1VzJDclNGbVp1VGREV1A4SFhhSGNhOXonXG4gICAgICAgICcvZG5zNC9zZm8tMy5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xQcHB1QnRRU0d3S0RaVDJNNzNVTHBqdmZkM2FaNmhhNG9GR0wxS3JHTSdcbiAgICAgICAgJy9kbnM0L3NncC0xLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTFNhZlRNQnNQS2FkVEVnYVhjdERRVmNxTjg4Q05MSFhNa1ROd01LUG51J1xuICAgICAgICAnL2RuczQvbnljLTEuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MdWVSNHhCZVViWTlXWjl4R1VVeHVuYktXY3JORlREQWFkUUptb2NuV20nXG4gICAgICAgICcvZG5zNC9ueWMtMi5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xWNEJibTUxak05QzRnRFlaUTlDeTNVNmFYTUpEQWJ6Z3UyZnphRHM2NCdcbiAgICAgIF0pXG5cbiAgICAkc2NvcGUubG9naW5XaXRoS2V5ID0gKHByaXZhdGVLZXlTZXJpYWxpemVkKSAtPlxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSAkd2luZG93LmlkZW50aWZpTGliLktleS5mcm9tSndrKHByaXZhdGVLZXlTZXJpYWxpemVkKVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2lkZW50aWZpS2V5JywgcHJpdmF0ZUtleVNlcmlhbGl6ZWQpXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlciA9XG4gICAgICAgIGlkVHlwZTogJ2tleUlEJ1xuICAgICAgICBpZFZhbHVlOiAkc2NvcGUucHJpdmF0ZUtleS5rZXlJRFxuICAgICAgJHNjb3BlLmxvZ2luTW9kYWwuY2xvc2UoKSBpZiAkc2NvcGUubG9naW5Nb2RhbFxuICAgICAgJHNjb3BlLiR3YXRjaCAnYXBpUmVhZHknLCAoaXNSZWFkeSkgLT5cbiAgICAgICAgaWYgaXNSZWFkeVxuICAgICAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmdldCgkc2NvcGUucHJpdmF0ZUtleS5rZXlJRCwgJ2tleUlEJykudGhlbiAoaWRlbnRpdHkpIC0+XG4gICAgICAgICAgICBpZiBpZGVudGl0eVxuICAgICAgICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkgPSBpZGVudGl0eVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkgPSAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5LmNyZWF0ZShcbiAgICAgICAgICAgICAgICAkc2NvcGUuZ3VuLmdldCgnaWRlbnRpZmknKS5nZXQoJ2lkZW50aXRpZXMnKSxcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiBbe25hbWU6ICdrZXlJRCcsIHZhbDogJHNjb3BlLnByaXZhdGVLZXkua2V5SUR9XSB9XG4gICAgICAgICAgICAgIClcblxuICAgIHByaXZhdGVLZXkgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnaWRlbnRpZmlLZXknKVxuICAgIGlmIHByaXZhdGVLZXlcbiAgICAgICRzY29wZS5sb2dpbldpdGhLZXkocHJpdmF0ZUtleSlcblxuICAgICRzY29wZS5pcGZzLm9uICdyZWFkeScsIC0+XG4gICAgICAkc2NvcGUuaXBmc1JlYWR5ID0gdHJ1ZVxuICAgICAgJHdpbmRvdy5pcGZzID0gJHNjb3BlLmlwZnNcblxuICAgIHNldEluZGV4ID0gKHJlc3VsdHMpIC0+XG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleCA9IHJlc3VsdHNcbiAgICAgIGNvbnNvbGUubG9nICdHb3QgaW5kZXgnLCAkc2NvcGUuaWRlbnRpZmlJbmRleFxuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0Vmlld3BvaW50KCkudGhlbiAodnApIC0+XG4gICAgICAgICRzY29wZS52aWV3cG9pbnQgPSB2cFxuICAgICAgICAkc2NvcGUudmlld3BvaW50Lmd1bi5nZXQoJ2xpbmtUbycpLm9wZW4gKGxpbmtUbykgLT5cbiAgICAgICAgICAkc2NvcGUudmlld3BvaW50LmxpbmtUbyA9IGxpbmtUb1xuICAgICAgICAkc2NvcGUudmlld3BvaW50Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoYXR0cnMpIC0+XG4gICAgICAgICAgJHNjb3BlLnZpZXdwb2ludC5hdHRycyA9IGF0dHJzXG4gICAgICAgICAgJHNjb3BlLnZpZXdwb2ludC5tb3N0VmVyaWZpZWRBdHRyaWJ1dGVzID0gJHdpbmRvdy5pZGVudGlmaUxpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKGF0dHJzKVxuICAgICAgICAkc2NvcGUuYXBpUmVhZHkgPSB0cnVlXG4gICAgICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5saXN0J1xuICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuXG4gICAgIyAkd2luZG93LmlkZW50aWZpTGliLkluZGV4LmNyZWF0ZSgkc2NvcGUuZ3VuLmdldCgnaWRlbnRpZmknKSkudGhlbihzZXRJbmRleClcbiAgICBzZXRJbmRleCBuZXcgJHdpbmRvdy5pZGVudGlmaUxpYi5JbmRleCgkc2NvcGUuZ3VuLmdldCgnaWRlbnRpZmknKSlcblxuICAgICRzY29wZS5zZXRQYWdlVGl0bGUgPSAodGl0bGUpIC0+XG4gICAgICAkcm9vdFNjb3BlLnBhZ2VUaXRsZSA9ICdJZGVudGlmaSdcbiAgICAgIGlmICh0aXRsZSlcbiAgICAgICAgJHJvb3RTY29wZS5wYWdlVGl0bGUgKz0gJyAtICcgKyB0aXRsZVxuXG4gICAgJHNjb3BlLmlwZnNHZXQgPSAodXJpLCBnZXRKc29uKSAtPlxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChyZXNvbHZlKSAtPlxuICAgICAgICBnbyA9IC0+XG4gICAgICAgICAgJHNjb3BlLmlwZnMuZmlsZXMuY2F0KHVyaSkudGhlbiAoZmlsZSkgLT5cbiAgICAgICAgICAgIGZpbGUgPSAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIoZmlsZSlcbiAgICAgICAgICAgIGlmIGdldEpzb25cbiAgICAgICAgICAgICAgZmlsZSA9IEpTT04ucGFyc2UoZmlsZS50b1N0cmluZygpKVxuICAgICAgICAgICAgcmVzb2x2ZSBmaWxlXG5cbiAgICAgICAgaWYgJHNjb3BlLmlwZnNSZWFkeVxuICAgICAgICAgIGdvKClcbiAgICAgICAgZWxzZVxuICAgICAgICAgICRzY29wZS5pcGZzLm9uICdyZWFkeScsIC0+XG4gICAgICAgICAgICBnbygpXG5cbiAgICAkc2NvcGUubmV3TWVzc2FnZSA9XG4gICAgICByYXRpbmc6IDFcbiAgICAgIGNvbW1lbnQ6ICcnXG4gICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbiA9XG4gICAgICB0eXBlOiAnJ1xuICAgICAgdmFsdWU6ICcnXG4gICAgIyBDcmVhdGUgbmV3IE1lc3NhZ2VcbiAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZSA9IChldmVudCwgcGFyYW1zLCBpZCkgLT5cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpIGlmIGV2ZW50XG4gICAgICAjIENyZWF0ZSBuZXcgTWVzc2FnZSBvYmplY3RcbiAgICAgIG1lc3NhZ2UgPSBudWxsXG4gICAgICBpZiBwYXJhbXMudHlwZSA9PSAncmF0aW5nJ1xuICAgICAgICBwYXJhbXMubWF4UmF0aW5nIHw9IDNcbiAgICAgICAgcGFyYW1zLm1pblJhdGluZyB8PSAtM1xuICAgICAgICBtZXNzYWdlID0gJHdpbmRvdy5pZGVudGlmaUxpYi5NZXNzYWdlLmNyZWF0ZVJhdGluZyhwYXJhbXMsICRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgICBjb25zb2xlLmxvZyBtZXNzYWdlXG4gICAgICBlbHNlXG4gICAgICAgIG1lc3NhZ2UgPSAkd2luZG93LmlkZW50aWZpTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKHBhcmFtcywgJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICBvcHRpb25zID0ge31cblxuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguYWRkTWVzc2FnZShtZXNzYWdlKSAjIHB1Ymxpc2hNZXNzYWdlXG4gICAgICAuY2F0Y2ggKGUpIC0+XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgJHNjb3BlLmVycm9yID0gZVxuXG4gICAgJHNjb3BlLmFkZEF0dHJpYnV0ZSA9IC0+XG4gICAgICAkbG9jYXRpb24ucGF0aCAnIy9pZGVudGl0aWVzL2NyZWF0ZS8nICsgJHNjb3BlLnF1ZXJ5LnRlcm1cblxuICAgICRzY29wZS5sb2dpbiA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPSAtMSAjIGJlY2F1c2UgdGhlIHVzZXIgZG9lc24ndCBoYXZlIGEgdHJ1c3QgaW5kZXggeWV0XG5cbiAgICAkc2NvcGUub3BlbkxvZ2luTW9kYWwgPSAtPlxuICAgICAgJHNjb3BlLmxvZ2luTW9kYWwgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9sb2dpbi5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiAnbGcnXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgICRzY29wZS5sb2dpbk1vZGFsLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgJHNjb3BlLmxvZ2luTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLm9wZW5VcGxvYWRNb2RhbCA9IChjYWxsYmFjaywgbW9kYWxCdXR0b25UZXh0KSAtPlxuICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsQ2FsbGJhY2sgPSBjYWxsYmFja1xuICAgICAgJHNjb3BlLm1vZGFsQnV0dG9uVGV4dCA9IG1vZGFsQnV0dG9uVGV4dCBvciAnVXBsb2FkJ1xuICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsID0gJHVpYk1vZGFsLm9wZW4oXG4gICAgICAgIGFuaW1hdGlvbjogJHNjb3BlLmFuaW1hdGlvbnNFbmFibGVkXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvdXBsb2FkLm1vZGFsLmh0bWwnXG4gICAgICAgIHNpemU6ICdsZydcbiAgICAgICAgc2NvcGU6ICRzY29wZVxuICAgICAgKVxuICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS51cGxvYWRGaWxlID0gKGJsb2IpIC0+XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUsIHJlamVjdCkgLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ3VwbG9hZGluZycsIGJsb2JcbiAgICAgICAgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZXZlbnQpIC0+XG4gICAgICAgICAgYnVmZmVyID0gJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyLmZyb20oZXZlbnQudGFyZ2V0LnJlc3VsdClcbiAgICAgICAgICBjb25zb2xlLmxvZyAnYnVmZmVyJywgYnVmZmVyXG4gICAgICAgICAgJHNjb3BlLmlwZnMuZmlsZXMuYWRkIGJ1ZmZlciwgKGVyciwgZmlsZXMpIC0+XG4gICAgICAgICAgICBpZiBlcnJcbiAgICAgICAgICAgICAgcmVqZWN0KCdhZGRpbmcgdG8gaXBmcyBmYWlsZWQnLCBlcnIpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHJlc29sdmUoZmlsZXMpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nICdkb25lOicsIGVyciwgZmlsZXNcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuXG4gICAgJHNjb3BlLmdlbmVyYXRlS2V5ID0gLT5cbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0gJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkuZ2VuZXJhdGUoKVxuICAgICAgY29uc29sZS5sb2cgJHNjb3BlLnByaXZhdGVLZXlcbiAgICAgICRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZCA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuS2V5LnRvSndrKCRzY29wZS5wcml2YXRlS2V5KVxuXG4gICAgJHNjb3BlLmRvd25sb2FkS2V5ID0gLT5cbiAgICAgIGhpZGRlbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIGhpZGRlbkVsZW1lbnQuaHJlZiA9ICdkYXRhOnRleHQvY3N2O2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSSgkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQpXG4gICAgICBoaWRkZW5FbGVtZW50LnRhcmdldCA9ICdfYmxhbmsnXG4gICAgICBoaWRkZW5FbGVtZW50LmRvd25sb2FkID0gJ2lkZW50aWZpX3ByaXZhdGVfa2V5LnR4dCdcbiAgICAgIGhpZGRlbkVsZW1lbnQuY2xpY2soKVxuXG4gICAgJHNjb3BlLmxvZ291dCA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPSAwXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQgPSAnJ1xuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge31cbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXJBbGwoKVxuICAgICAgJHN0YXRlLmdvKCdpZGVudGl0aWVzLmxpc3QnKVxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBudWxsXG4gICAgICAkc2NvcGUucHVibGljS2V5ID0gbnVsbFxuXG4gICAgJHNjb3BlLm1zZ0ZpbHRlciA9ICh2YWx1ZSwgaW5kZXgsIGFycmF5KSAtPlxuICAgICAgZGF0YSA9IHZhbHVlLmRhdGEgb3IgdmFsdWUuc2lnbmVkRGF0YVxuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlLm1hdGNoIC9ecmF0aW5nL1xuICAgICAgICAgIGlmIGRhdGEudHlwZSAhPSAncmF0aW5nJ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChkYXRhLm1heFJhdGluZyArIGRhdGEubWluUmF0aW5nKSAvIDJcbiAgICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6cG9zaXRpdmUnIGFuZCBkYXRhLnJhdGluZyA8PSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpuZWdhdGl2ZScgYW5kIGRhdGEucmF0aW5nID49IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOm5ldXRyYWwnIGFuZCBkYXRhLnJhdGluZyAhPSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSBpZiBkYXRhLnR5cGUgIT0gJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZSA9PSAwIGFuZCB0eXBlb2YgdmFsdWUuYXV0aG9yVHJ1c3REaXN0YW5jZSAhPSAnbnVtYmVyJ1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZSA+IDAgYW5kIHZhbHVlLmF1dGhvclRydXN0RGlzdGFuY2UgPiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2VcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiB0cnVlXG5cbiAgICAkc2NvcGUucmVtb3ZlRm9jdXMgPSAoZXZlbnQpIC0+XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmJsdXIoKVxuXG4gICAgJHNjb3BlLmFkZEVudHJ5Q2xpY2tlZCA9IC0+XG4gICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuY3JlYXRlJ1xuICAgICAgZm9jdXMoJ2lkTmFtZUZvY3VzJylcblxuICAgICRzY29wZS5sb2dvQ2xpY2tlZCA9IC0+XG4gICAgICBmb2N1cygnc2VhcmNoRm9jdXMnKVxuICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLmxpc3QnXG4gICAgICAgIGlmICRzY29wZS5xdWVyeS50ZXJtICE9ICcnXG4gICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAgICRzY29wZS5pZHMuZmluaXNoZWQgPSBmYWxzZVxuICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMubGlzdCdcblxuICAgICRzY29wZS5zZXRNc2dSYXdEYXRhID0gKG1zZykgLT5cbiAgICAgIHNob3dSYXdEYXRhID1cbiAgICAgICAgaGFzaDogbXNnLmhhc2hcbiAgICAgICAgZGF0YTogbXNnLmRhdGFcbiAgICAgICAgcHJpb3JpdHk6IG1zZy5wcmlvcml0eVxuICAgICAgICBqd3M6IG1zZy5qd3NcbiAgICAgIG1zZy5zdHJEYXRhID0gSlNPTi5zdHJpbmdpZnkoc2hvd1Jhd0RhdGEsIHVuZGVmaW5lZCwgMilcblxuICAgICRzY29wZS5wcm9maWxlRnJvbURhdGEgPSAoZGF0YSwgZmFsbGJhY2tJZCkgLT5cbiAgICAgIGlmIGRhdGEuYXR0cnMgYW5kIGRhdGEuYXR0cnMubGVuZ3RoXG4gICAgICAgIHJldHVybiAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5LmNyZWF0ZSgkc2NvcGUuZ3VuLmdldCgnaWRlbnRpZmknKS5nZXQoJ2lkZW50aXRpZXMnKSwge2F0dHJzOmRhdGEuYXR0cnN9KVxuICAgICAgcmV0dXJuICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkuY3JlYXRlKCRzY29wZS5ndW4uZ2V0KCdpZGVudGlmaScpLmdldCgnaWRlbnRpdGllcycpLCB7YXR0cnM6W2ZhbGxiYWNrSWRdfSlcblxuICAgICRzY29wZS5vcGVuTWVzc2FnZSA9IChldmVudCwgbWVzc2FnZSwgc2l6ZSkgLT5cbiAgICAgIHQgPSBldmVudC50YXJnZXRcbiAgICAgIHJldHVybiBpZiBhbmd1bGFyLmVsZW1lbnQodCkuY2xvc2VzdCgnYScpLmxlbmd0aFxuICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEobWVzc2FnZSlcbiAgICAgICRzY29wZS5tZXNzYWdlID0gbWVzc2FnZVxuICAgICAgIyBUT0RPOiBjaGVjayBzaWdcbiAgICAgICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUhhc2ggPSAkc2NvcGUubWVzc2FnZS5nZXRTaWduZXJLZXlJRCgpXG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXQoJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SGFzaCwgJ2tleUlEJykudGhlbiAocHJvZmlsZSkgLT5cbiAgICAgICAgdW5sZXNzIHByb2ZpbGVcbiAgICAgICAgICBwcm9maWxlID0gJHdpbmRvdy5pZGVudGlmaUxpYi5JZGVudGl0eS5jcmVhdGUoXG4gICAgICAgICAgICAkc2NvcGUuZ3VuLmdldCgnaWRlbnRpZmknKS5nZXQoJ2lkZW50aXRpZXMnKSxcbiAgICAgICAgICAgIHthdHRyczpbe25hbWU6ICdrZXlJRCcsIHZhbDogJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SGFzaH1dfVxuICAgICAgICAgIClcbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5ID0gcHJvZmlsZVxuICAgICAgbW9kYWxJbnN0YW5jZSA9ICR1aWJNb2RhbC5vcGVuKFxuICAgICAgICBhbmltYXRpb246ICRzY29wZS5hbmltYXRpb25zRW5hYmxlZFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9zaG93Lm1vZGFsLmh0bWwnXG4gICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgc2NvcGU6ICRzY29wZVxuICAgICAgKVxuICAgICAgbW9kYWxJbnN0YW5jZS5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdGFydCcsIC0+XG4gICAgICAgIG1vZGFsSW5zdGFuY2UuY2xvc2UoKVxuXG4gICAgJHNjb3BlLmZpbHRlcnMgPSAkc2NvcGUuZmlsdGVycyBvciBjb25maWcuZGVmYXVsdEZpbHRlcnNcblxuICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlXG4gICAgIyAkc2NvcGUubWVudSA9IE1lbnVzLmdldE1lbnUoJ3RvcGJhcicpXG5cbiAgICAkc2NvcGUudG9nZ2xlQ29sbGFwc2libGVNZW51ID0gLT5cbiAgICAgICRzY29wZS5pc0NvbGxhcHNlZCA9ICEkc2NvcGUuaXNDb2xsYXBzZWRcblxuICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgPSAobWVzc2FnZXMsIG1zZ09wdGlvbnMsIHZlcmlmeVNpZ25hdHVyZSkgLT5cbiAgICAgIHByb2Nlc3NNZXNzYWdlID0gKG1zZykgLT5cbiAgICAgICAgbXNnLmRhdGEgPSBtc2cuc2lnbmVkRGF0YVxuICAgICAgICBpZiAobXNnLmdldEF1dGhvciBhbmQgbm90IChtc2dPcHRpb25zIGFuZCBtc2dPcHRpb25zLmF1dGhvcklzU2VsZikpXG4gICAgICAgICAgcCA9IG1zZy5nZXRBdXRob3IoJHNjb3BlLmlkZW50aWZpSW5kZXgpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBwID0gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgcC50aGVuIChhdXRob3IpIC0+XG4gICAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgbXNnLmF1dGhvciA9IGF1dGhvclxuICAgICAgICAgICAgIyBUT0RPOiBtYWtlIHN1cmUgbWVzc2FnZSBzaWduYXR1cmUgaXMgY2hlY2tlZFxuXG4gICAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gbXNnLmRhdGEuYXV0aG9yWzBdXG4gICAgICAgICAgICBpID0gdW5kZWZpbmVkXG4gICAgICAgICAgICBpID0gMFxuICAgICAgICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgICAgICAgIHdoaWxlIGkgPCBtc2cuZGF0YS5hdXRob3IubGVuZ3RoXG4gICAgICAgICAgICAgIGluZGV4ID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YobXNnLmRhdGEuYXV0aG9yW2ldWzBdKVxuICAgICAgICAgICAgICBpZiBpbmRleCA+IC0xIGFuZCBpbmRleCA8IHNtYWxsZXN0SW5kZXhcbiAgICAgICAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gbXNnLmRhdGEuYXV0aG9yW2ldXG4gICAgICAgICAgICAgIGVsc2UgaWYgIW1zZy5hdXRob3JfbmFtZSBhbmQgbXNnLmRhdGEuYXV0aG9yW2ldWzBdIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgICAgICAgbXNnLmF1dGhvcl9uYW1lID0gbXNnLmRhdGEuYXV0aG9yW2ldWzFdXG4gICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgbXNnLmxpbmtUb1JlY2lwaWVudCA9IG1zZy5kYXRhLnJlY2lwaWVudFswXVxuICAgICAgICAgICAgaSA9IDBcbiAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSAxMDAwXG4gICAgICAgICAgICB3aGlsZSBpIDwgbXNnLmRhdGEucmVjaXBpZW50Lmxlbmd0aFxuICAgICAgICAgICAgICBpbmRleCA9IGNvbmZpZy51bmlxdWVBdHRyaWJ1dGVUeXBlcy5pbmRleE9mKG1zZy5kYXRhLnJlY2lwaWVudFtpXVswXSlcbiAgICAgICAgICAgICAgaWYgaW5kZXggPiAtMSBhbmQgaW5kZXggPCBzbWFsbGVzdEluZGV4XG4gICAgICAgICAgICAgICAgc21hbGxlc3RJbmRleCA9IGluZGV4XG4gICAgICAgICAgICAgICAgbXNnLmxpbmtUb1JlY2lwaWVudCA9IG1zZy5kYXRhLnJlY2lwaWVudFtpXVxuICAgICAgICAgICAgICBlbHNlIGlmICFtc2cucmVjaXBpZW50X25hbWUgYW5kIG1zZy5kYXRhLnJlY2lwaWVudFtpXVswXSBpbiBbJ25hbWUnLCAnbmlja25hbWUnXVxuICAgICAgICAgICAgICAgIG1zZy5yZWNpcGllbnRfbmFtZSA9IG1zZy5kYXRhLnJlY2lwaWVudFtpXVsxXVxuICAgICAgICAgICAgICBpKytcbiAgICAgICAgICAgIHNpZ25lZERhdGEgPSBtc2cuZGF0YVxuICAgICAgICAgICAgYWxwaGEgPSB1bmRlZmluZWRcbiAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnJ1xuICAgICAgICAgICAgbXNnLmhhc1N1Y2Nlc3MgPSAnJ1xuICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnJ1xuICAgICAgICAgICAgbXNnLmljb25Db3VudCA9IG5ldyBBcnJheSgxKVxuICAgICAgICAgICAgc3dpdGNoIHNpZ25lZERhdGEudHlwZVxuICAgICAgICAgICAgICB3aGVuICd2ZXJpZnlfaWRlbnRpdHknLCAndmVyaWZpY2F0aW9uJ1xuICAgICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1vayBwb3NpdGl2ZSdcbiAgICAgICAgICAgICAgICBtc2cuaGFzU3VjY2VzcyA9ICdoYXMtc3VjY2VzcydcbiAgICAgICAgICAgICAgICBtc2cuaXNWZXJpZmljYXRpb24gPSB0cnVlXG4gICAgICAgICAgICAgIHdoZW4gJ2Nvbm5lY3Rpb24nXG4gICAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLW9rIHBvc2l0aXZlJ1xuICAgICAgICAgICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJ2hhcy1zdWNjZXNzJ1xuICAgICAgICAgICAgICB3aGVuICd1bnZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmaWNhdGlvbidcbiAgICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlIG5lZ2F0aXZlJ1xuICAgICAgICAgICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJ2hhcy1lcnJvcidcbiAgICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGMERFO2JvcmRlci1jb2xvcjojRkZFMkM2OydcbiAgICAgICAgICAgICAgICBtc2cuaXNVbnZlcmlmaWNhdGlvbiA9IHRydWVcbiAgICAgICAgICAgICAgd2hlbiAncmF0aW5nJ1xuICAgICAgICAgICAgICAgIHJhdGluZyA9IHNpZ25lZERhdGEucmF0aW5nXG4gICAgICAgICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChzaWduZWREYXRhLm1pblJhdGluZyArIHNpZ25lZERhdGEubWF4UmF0aW5nKSAvIDJcbiAgICAgICAgICAgICAgICBtYXhSYXRpbmdEaWZmID0gc2lnbmVkRGF0YS5tYXhSYXRpbmcgLSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgICAgbWluUmF0aW5nRGlmZiA9IHNpZ25lZERhdGEubWluUmF0aW5nIC0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICAgIGlmIHJhdGluZyA+IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtdXAgcG9zaXRpdmUnXG4gICAgICAgICAgICAgICAgICBtc2cuaWNvbkNvdW50ID0gaWYgbWF4UmF0aW5nRGlmZiA8IDIgdGhlbiBtc2cuaWNvbkNvdW50IGVsc2UgbmV3IEFycmF5KE1hdGguY2VpbCgzICogcmF0aW5nIC8gbWF4UmF0aW5nRGlmZikpXG4gICAgICAgICAgICAgICAgICBhbHBoYSA9IChyYXRpbmcgLSBuZXV0cmFsUmF0aW5nIC0gMC41KSAvIG1heFJhdGluZ0RpZmYgLyAxLjI1ICsgMC4yXG4gICAgICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywyNDAsMjE2LCcgKyBhbHBoYSArICcpOydcbiAgICAgICAgICAgICAgICBlbHNlIGlmIHJhdGluZyA8IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi10aHVtYnMtZG93biBuZWdhdGl2ZSdcbiAgICAgICAgICAgICAgICAgIG1zZy5pY29uQ291bnQgPSBpZiBtaW5SYXRpbmdEaWZmID4gLTIgdGhlbiBtc2cuaWNvbkNvdW50IGVsc2UgbmV3IEFycmF5KE1hdGguY2VpbCgzICogcmF0aW5nIC8gbWluUmF0aW5nRGlmZikpXG4gICAgICAgICAgICAgICAgICBhbHBoYSA9IChyYXRpbmcgLSBuZXV0cmFsUmF0aW5nICsgMC41KSAvIG1pblJhdGluZ0RpZmYgLyAxLjI1ICsgMC4yXG4gICAgICAgICAgICAgICAgICBtc2cuYmdDb2xvciA9ICdiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQyLDIyMiwyMjIsJyArIGFscGhhICsgJyk7J1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7J1xuICAgICAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ24gbmV1dHJhbCdcblxuICAgICAgYW5ndWxhci5mb3JFYWNoIG1lc3NhZ2VzLCAobXNnLCBrZXkpIC0+XG4gICAgICAgIG1zZ1trXSA9IHYgZm9yIGssIHYgb2YgbXNnT3B0aW9uc1xuICAgICAgICBwcm9jZXNzTWVzc2FnZShtc2cpXG5cbiAgICAjIENvbGxhcHNpbmcgdGhlIG1lbnUgYWZ0ZXIgbmF2aWdhdGlvblxuICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCAtPlxuICAgICAgJHNjb3BlLmlzQ29sbGFwc2VkID0gZmFsc2VcblxuICAgIHNjcm9sbFRvID0gKGVsKSAtPlxuICAgICAgaWYgIWVsXG4gICAgICAgIHJldHVyblxuICAgICAgcG9zID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGlmIHBvcy50b3BcbiAgICAgICAgaWYgcG9zLnRvcCAtIDYwIDwgJHdpbmRvdy5wYWdlWU9mZnNldFxuICAgICAgICAgICR3aW5kb3cuc2Nyb2xsVG8gMCwgcG9zLnRvcCAtIDYwXG4gICAgICAgIGVsc2UgaWYgcG9zLmJvdHRvbSA+ICR3aW5kb3cucGFnZVlPZmZzZXQgKyAoJHdpbmRvdy5pbm5lckhlaWdodCBvciBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KVxuICAgICAgICAgICR3aW5kb3cuc2Nyb2xsVG8gMCwgcG9zLmJvdHRvbSAtICgkd2luZG93LmlubmVySGVpZ2h0IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICsgMTVcbiAgICAgIHJldHVyblxuXG4gICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMgPSAoaSwgaHRtbFNhZmUpIC0+XG4gICAgICBpLmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoYXR0cnMpIC0+XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICBtdmEgPSAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5LmdldE1vc3RWZXJpZmllZEF0dHJpYnV0ZXMoYXR0cnMpXG4gICAgICAgICAgaWYgbXZhLm5hbWVcbiAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBtdmEubmFtZS5hdHRyaWJ1dGUudmFsXG4gICAgICAgICAgZWxzZSBpZiBtdmEubmlja25hbWVcbiAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBtdmEubmlja25hbWUuYXR0cmlidXRlLnZhbFxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBPYmplY3QudmFsdWVzKGF0dHJzKVswXS52YWxcbiAgICAgICAgICBpZiBpLnByaW1hcnlOYW1lXG4gICAgICAgICAgICBpZiBtdmEubmlja25hbWUgYW5kIG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsICE9IGkucHJpbWFyeU5hbWVcbiAgICAgICAgICAgICAgaS5uaWNrbmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsXG4gICAgICAgICAgICAgIGkubmlja25hbWUgPSBpLm5pY2tuYW1lLnJlcGxhY2UoJzwnLCAnJmx0OycpIGlmIGh0bWxTYWZlXG4gICAgICAgICAgICBpLnByaW1hcnlOYW1lID0gaS5wcmltYXJ5TmFtZS5yZXBsYWNlKCc8JywgJyZsdDsnKSBpZiBodG1sU2FmZVxuXG4gICAgJHNjb3BlLnNlYXJjaFJlcXVlc3QgPSBudWxsXG4gICAgJHNjb3BlLnNlYXJjaCA9IChxdWVyeSwgbGltaXQpIC0+XG4gICAgICAkc2NvcGUuaWRzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAkc2NvcGUuaWRlbnRpdGllc0J5SGFzaCA9IHt9XG4gICAgICBzZWFyY2hLZXkgPSBlbmNvZGVVUklDb21wb25lbnQoKHF1ZXJ5IG9yICRzY29wZS5xdWVyeS50ZXJtIG9yICcnKS50b0xvd2VyQ2FzZSgpKVxuICAgICAgJHNjb3BlLnNlYXJjaEtleSA9IHNlYXJjaEtleVxuICAgICAgaWYgc2VhcmNoS2V5ICE9ICRzY29wZS5wcmV2aW91c1NlYXJjaEtleVxuICAgICAgICAkc2NvcGUuaWRzLmxpc3QgPSBbXVxuICAgICAgICAkc2NvcGUuaWRzLmZpbmlzaGVkID0gZmFsc2VcbiAgICAgICAgJHNjb3BlLmlkZW50aXRpZXNCeUhhc2ggPSB7fVxuICAgICAgJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5ID0gc2VhcmNoS2V5XG4gICAgICBsaW1pdCA9IGxpbWl0IG9yIDMwXG4gICAgICBjdXJzb3IgPSBmYWxzZVxuICAgICAgaWYgJHNjb3BlLmlkcy5saXN0Lmxlbmd0aFxuICAgICAgICBjdXJzb3IgPSAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5saXN0Lmxlbmd0aCAtIDFdLmN1cnNvclxuICAgICAgaWYgc2VhcmNoS2V5Lmxlbmd0aFxuICAgICAgICAkc2NvcGUuc2VhcmNoUmVxdWVzdCA9ICRzY29wZS5pZGVudGlmaUluZGV4LnNlYXJjaChzZWFyY2hLZXksIHVuZGVmaW5lZCwgbGltaXQsIGN1cnNvcilcbiAgICAgICAgLnRoZW4gKGlkZW50aXRpZXMpIC0+IHtpZGVudGl0aWVzLCBzZWFyY2hLZXl9XG4gICAgICAgICMgVE9ETzogdXNlIGRpc3RhbmNlIGluZGV4IGluIGlkZW50aWZpTGliP1xuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUuc2VhcmNoUmVxdWVzdCA9ICRzY29wZS5pZGVudGlmaUluZGV4LnNlYXJjaChzZWFyY2hLZXksIHVuZGVmaW5lZCwgbGltaXQsIGN1cnNvcilcbiAgICAgICAgLnRoZW4gKGlkZW50aXRpZXMpIC0+IHtpZGVudGl0aWVzLCBzZWFyY2hLZXl9XG4gICAgICAkc2NvcGUuc2VhcmNoUmVxdWVzdCA9ICRzY29wZS5zZWFyY2hSZXF1ZXN0LnRoZW4gKHJlcykgLT5cbiAgICAgICAgcmV0dXJuIGlmIHJlcy5zZWFyY2hLZXkgIT0gJHNjb3BlLnNlYXJjaEtleVxuICAgICAgICBpZGVudGl0aWVzID0gcmVzLmlkZW50aXRpZXNcbiAgICAgICAgaWRlbnRpdGllcy5mb3JFYWNoIChpKSAtPlxuICAgICAgICAgIGkuZ3VuLm9uIChkYXRhKSAtPlxuICAgICAgICAgICAgaS5kYXRhID0gZGF0YVxuICAgICAgICAgICAgaS5ndW4uZ2V0KCdsaW5rVG8nKS5vbmNlIChsaW5rVG8pIC0+XG4gICAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgICAgICBpLmxpbmtUbyA9IGxpbmtUb1xuICAgICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKGksIHRydWUpXG4gICAgICAgIHNlYXJjaEtleSA9IGVuY29kZVVSSUNvbXBvbmVudCgocXVlcnkgb3IgJHNjb3BlLnF1ZXJ5LnRlcm0gb3IgJycpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIGlmIHNlYXJjaEtleSAhPSAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXlcbiAgICAgICAgICByZXR1cm4gIyBzZWFyY2gga2V5IGNoYW5nZWRcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gJHNjb3BlLmlkcy5saXN0IG9yIFtdXG4gICAgICAgIGlmIGlkZW50aXRpZXMubGVuZ3RoIDwgbGltaXRcbiAgICAgICAgICAkc2NvcGUuaWRzLmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICBpZiBpZGVudGl0aWVzLmxlbmd0aCAmJiAkc2NvcGUuaWRzLmxpc3QubGVuZ3RoICYmXG4gICAgICAgICRzY29wZS5nZXRJZEtleShpZGVudGl0aWVzWzBdLmxpbmtUbykgPT0gJHNjb3BlLmdldElkS2V5KCRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmxpc3QubGVuZ3RoIC0gMV0ubGlua1RvKVxuICAgICAgICAgIGlkZW50aXRpZXMuc2hpZnQoKSAjIFByZXZlbnQgZHVwbGljYXRlXG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9ICRzY29wZS5pZHMubGlzdC5jb25jYXQoaWRlbnRpdGllcylcbiAgICAgICAgaWYgaWRlbnRpdGllcy5sZW5ndGggPiAwICYmICRzY29wZS5pZHMubGlzdC5sZW5ndGggPT0gaWRlbnRpdGllcy5sZW5ndGhcbiAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleSA9IDBcbiAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbMF0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5pZHMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICRzY29wZS5pZHMubGlzdFxuICAgICAgcmV0dXJuICRzY29wZS5zZWFyY2hSZXF1ZXN0XG5cbiAgICAkc2NvcGUuc2VhcmNoS2V5ZG93biA9IChldmVudCkgLT5cbiAgICAgIHN3aXRjaCAoaWYgZXZlbnQgdGhlbiBldmVudC53aGljaCBlbHNlIC0xKVxuICAgICAgICB3aGVuIDM4XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID4gMFxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5IC0gMV0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXktLVxuICAgICAgICAgIHNjcm9sbFRvIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkpXG4gICAgICAgIHdoZW4gNDBcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPCAoJHNjb3BlLmlkcy5saXN0Lmxlbmd0aCB8fCAwKSAtIDFcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleV0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleSArIDFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5KytcbiAgICAgICAgICBzY3JvbGxUbyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5KVxuICAgICAgICB3aGVuIDEzXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlkID0gJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XVxuICAgICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiBpZC5saW5rVG8ubmFtZSwgdmFsdWU6IGlkLmxpbmtUby52YWwgfVxuICAgICAgICB3aGVuIC0xXG4gICAgICAgICAgY2xlYXJUaW1lb3V0ICRzY29wZS50aW1lclxuICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICAgICAkc2NvcGUuc2VhcmNoKClcbiAgICAgICAgd2hlbiAzMywgMzQsIDM1LCAzNiwgMzcsIDM5XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBlbCA9IGFuZ3VsYXIuZWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAgIGNsZWFyVGltZW91dCAkc2NvcGUudGltZXJcbiAgICAgICAgICB3YWl0ID0gc2V0VGltZW91dCgoLT5cbiAgICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gZWwudmFsKClcbiAgICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgKSwgMzAwKVxuICAgICAgICAgICRzY29wZS50aW1lciA9IHdhaXRcbiAgICAgICAgICBicmVha1xuXG4gICAgJHNjb3BlLmRyb3Bkb3duU2VhcmNoU2VsZWN0ID0gKGl0ZW0pIC0+XG4gICAgICAkc3RhdGUuZ28oJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogaXRlbS5saW5rVG8ubmFtZSwgdmFsdWU6IGl0ZW0ubGlua1RvLnZhbCB9KVxuICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuXVxuIl19

(function() {
  'use strict';
  angular.module('identifiAngular').controller('IdentitiesController', [
    '$scope', '$state', '$rootScope', '$window', '$stateParams', '$location', '$http', '$q', '$timeout', 'clipboard', 'config', 'localStorageService', function($scope, $state, $rootScope, $window, $stateParams, $location, $http, $q, $timeout, clipboard, config, localStorageService) {
      var thumbsDownObj, thumbsUpObj;
      $scope.activeTab = 0;
      $scope.activateTab = function(tabId) {
        return $scope.activeTab = tabId;
      };
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
      $scope.newVerification = {
        type: '',
        value: ''
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
      $scope.$on('MessageAdded', function(event, args) {
        return $state.reload();
      });
      $scope.copyIdLink = function() {
        return clipboard.copyText($scope.idUrl);
      };
      $scope.addEntry = function(event, entry) {
        var linkTo, params, recipient;
        recipient = [];
        linkTo = null;
        if (entry.name) {
          recipient.push(['name', entry.name]);
        }
        if (entry.email) {
          recipient.push(['email', entry.email]);
          linkTo = {
            type: 'email',
            value: entry.email
          };
        }
        if (entry.url) {
          recipient.push(['url', entry.url]);
          if (!linkTo) {
            linkTo = {
              type: 'url',
              value: entry.url
            };
          }
        }
        if (entry.phone) {
          recipient.push(['phone', entry.phone]);
          if (!linkTo) {
            linkTo = {
              type: 'phone',
              value: entry.phone
            };
          }
        }
        params = {
          type: 'verify_identity',
          recipient: recipient
        };
        return $scope.createMessage(event, params).then(function(response) {
          return $state.go('identities.show', linkTo);
        }, function(error) {
          return console.log("error", error);
        });
      };
      $scope.guessAttributeType = function() {
        if ($scope.newVerification.value.length) {
          $scope.newVerification.type = $window.identifiLib.Attribute.guessTypeOf($scope.newVerification.value);
          if (!$scope.newVerification.type) {
            if (!$scope.newVerification.value.match(/\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:/)) {
              return $scope.newVerification.type = 'name';
            }
          }
        } else {
          return $scope.newVerification.type = '';
        }
      };
      $scope.getConnections = function() {
        $scope.connections = {};
        return $scope.identity.gun.get('attrs').open(function(attrs) {
          var alpha, c, conn, connections, id, key, mostConfirmations, percentage, ref;
          console.log(attrs);
          connections = attrs || [];
          if (connections.length > 0) {
            c = connections[0];
            mostConfirmations = c.conf;
          } else {
            mostConfirmations = 1;
          }
          for (key in connections) {
            id = connections[key];
            $scope.connections[$scope.getIdKey(id)] = Object.assign({}, id);
          }
          ref = $scope.connections;
          for (key in ref) {
            conn = ref[key];
            conn.isCurrent = conn.name === $scope.idType && conn.val === $scope.idValue;
            switch (conn.name) {
              case 'email':
                conn.iconStyle = 'glyphicon glyphicon-envelope';
                conn.btnStyle = 'btn-success';
                conn.link = 'mailto:' + conn.val;
                conn.quickContact = true;
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
                conn.iconStyle = 'glyphicon glyphicon-font';
                break;
              case 'name':
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
                  $scope.ipfsGet(conn.val).then(function(coverPhoto) {
                    return $scope.coverPhoto = $scope.coverPhoto || {
                      'background-image': 'url(data:image;base64,' + coverPhoto.toString('base64') + ')'
                    };
                  });
                }
                break;
              case 'profilePhoto':
                if (conn.val.match(/^\/ipfs\/[1-9A-Za-z]{40,60}$/)) {
                  $scope.profilePhoto = $scope.profilePhoto || ($scope.ipfsRoot || '') + conn.val;
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
              conn.link = ($scope.ipfsRoot || '') + conn.val;
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
          return $scope.connectionsLength = Object.keys($scope.connections).length;
        });
      };
      $scope.getConnectingMsgs = function(id1, id2) {
        var getVerifications;
        getVerifications = $q(function(resolve) {
          if (!$scope.verifications.length) {
            if ($scope.receivedIndex) {
              return $scope.receivedIndex.searchText('', 10000, false, true).then(function(res) {
                res.forEach(function(row) {
                  var msg, ref;
                  msg = $window.identifiLib.Message.fromJws(row.value.jws);
                  if (((ref = msg.signedData.type) === 'verify_identity' || ref === 'verification' || ref === 'unverify_identity' || ref === 'unverification')) {
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
        if ($scope.sent.loading || !$scope.identity) {
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
        if ($scope.received.loading || !$scope.identity) {
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
                thumbsUpObj[JSON.stringify(msg.signedData.author)] = msg;
                $scope.thumbsUp = Object.values(thumbsUpObj);
                return $scope.hasThumbsUp = true;
              } else if (Object.keys(thumbsDownObj).length < 12 && msg.data.rating < neutralRating) {
                thumbsDownObj[JSON.stringify(msg.signedData.author)] = msg;
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
      $scope.setFilters = function(filters) {
        angular.extend($scope.filters, filters);
        $scope.sent = [];
        $scope.received = [];
        return $timeout(function() {
          return $rootScope.$broadcast('msgScrollCheck');
        });
      };
      $scope.uploadProfilePhoto = function(blob, identity) {
        return $scope.uploadFile(blob).then(function(files) {
          var recipient, v;
          console.log(files, $scope.identity);
          recipient = [[$scope.idType, $scope.idValue], ['profilePhoto', '/ipfs/' + files[0].path]];
          v = $window.identifiLib.Message.createVerification({
            recipient: recipient
          }, $scope.privateKey);
          $scope.identifiIndex.addMessage(v);
          return $scope.uploadModal.close();
        });
      };
      $scope.uploadCoverPhoto = function(blob, identity) {
        return $scope.uploadFile(blob).then(function(files) {
          var recipient, v;
          console.log(files, $scope.identity);
          recipient = [[$scope.idType, $scope.idValue], ['coverPhoto', '/ipfs/' + files[0].path]];
          v = $window.identifiLib.Message.createVerification({
            recipient: recipient
          }, $scope.privateKey);
          $scope.identifiIndex.addMessage(v);
          return $scope.uploadModal.close();
        });
      };
      $scope.openProfilePhotoUploadModal = function() {
        return $scope.openUploadModal($scope.uploadProfilePhoto, 'Upload profile photo');
      };
      $scope.openCoverPhotoUploadModal = function() {
        return $scope.openUploadModal($scope.uploadCoverPhoto, 'Upload cover photo');
      };
      $scope.findOne = function() {
        $scope.idType = $stateParams.type;
        $scope.idValue = $stateParams.value;
        if ($window.location.hostname.indexOf('.') > -1) {
          $scope.idUrl = $state.href('identities.show', {
            type: $scope.idType,
            value: $scope.idValue
          }, {
            absolute: true
          });
        } else {
          $scope.idUrl = 'https://identi.fi/' + $state.href('identities.show', {
            type: $scope.idType,
            value: $scope.idValue
          });
        }
        $scope.isCurrentUser = $scope.authentication && $scope.authentication.user && $scope.idType === $scope.authentication.user.idType && $scope.idValue === $scope.authentication.user.idValue;
        $scope.isUniqueType = config.uniqueAttributeTypes.indexOf($scope.idType) > -1;
        if (!$scope.isUniqueType) {
          $state.go('identities.list', {
            search: $scope.idValue
          });
          if ($scope.tabs) {
            $scope.tabs[2].active = true;
          }
        }
        $scope.setPageTitle($scope.idValue);
        return $scope.$watch('apiReady', function(isReady) {
          if (isReady) {
            return $scope.identifiIndex.get($scope.idValue, $scope.idType).then(function(profile) {
              if (profile) {
                $scope.identity = profile;
                $scope.setPageTitle($scope.identity.primaryName);
                if (profile.gun) {
                  profile.gun.on(function(data) {
                    return profile.data = data;
                  });
                  profile.gun.get('attrs').on(function() {
                    $scope.setIdentityNames($scope.identity);
                    return $scope.$apply(function() {
                      return $scope.getConnections();
                    });
                  });
                  profile.gun.get('sent').on(function() {
                    return $scope.getSentMsgs(0);
                  });
                  return profile.gun.get('received').on(function() {
                    return $scope.getReceivedMsgs(0);
                  });
                }
              } else {
                return $scope.$apply(function() {
                  return $scope.identity = $window.identifiLib.Identity.create($scope.gun.get('identifi').get('identities'), {
                    attrs: [
                      {
                        name: $scope.idType,
                        val: $scope.idValue
                      }
                    ]
                  });
                });
              }
            })["catch"](function(err) {
              return console.log('error fetching profile', err);
            });
          }
        });
      };
      if ($state.is('identities.show')) {
        return $scope.findOne();
      }
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLHNCQUE3QyxFQUFxRTtJQUNuRSxRQURtRSxFQUVuRSxRQUZtRSxFQUduRSxZQUhtRSxFQUluRSxTQUptRSxFQUtuRSxjQUxtRSxFQU1uRSxXQU5tRSxFQU9uRSxPQVBtRSxFQVFuRSxJQVJtRSxFQVNuRSxVQVRtRSxFQVVuRSxXQVZtRSxFQVluRSxRQVptRSxFQWFuRSxxQkFibUUsRUFjbkUsU0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixVQUFqQixFQUE2QixPQUE3QixFQUFzQyxZQUF0QyxFQUFvRCxTQUFwRCxFQUErRCxLQUEvRCxFQUFzRSxFQUF0RSxFQUEwRSxRQUExRSxFQUFvRixTQUFwRixFQUErRixNQUEvRixFQUF1RyxtQkFBdkc7QUFDRSxVQUFBO01BQUEsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFDbkIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsU0FBQyxLQUFEO2VBQVcsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFBOUI7TUFDckIsTUFBTSxDQUFDLElBQVAsR0FBYztNQUNkLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO01BQ2xCLE1BQU0sQ0FBQyxXQUFQLEdBQXFCO01BQ3JCLFdBQUEsR0FBYztNQUNkLGFBQUEsR0FBZ0I7TUFDaEIsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsTUFBTSxDQUFDLFVBQVAsR0FBb0I7TUFDcEIsTUFBTSxDQUFDLGFBQVAsR0FBdUI7TUFDdkIsSUFBMkMsWUFBWSxDQUFDLE1BQXhEO1FBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLEdBQW9CLFlBQVksQ0FBQyxPQUFqQzs7TUFDQSxNQUFNLENBQUMsZUFB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K0IsWUFBL0IsQ0FEZ0IsRUFFaEI7b0JBQUMsS0FBQSxFQUFNO3NCQUFDO3dCQUFDLElBQUEsRUFBSyxNQUFNLENBQUMsTUFBYjt3QkFBcUIsR0FBQSxFQUFJLE1BQU0sQ0FBQyxPQUFoQzt1QkFBRDtxQkFBUDttQkFGZ0I7Z0JBRE4sQ0FBZCxFQWZGOztZQUQyRCxDQUE3RCxDQXFCQSxFQUFDLEtBQUQsRUFyQkEsQ0FxQk8sU0FBQyxHQUFEO3FCQUNMLE9BQU8sQ0FBQyxHQUFSLENBQVksd0JBQVosRUFBc0MsR0FBdEM7WUFESyxDQXJCUCxFQURGOztRQUR3QixDQUExQjtNQWhCZTtNQTBDakIsSUFBRyxNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWLENBQUg7ZUFDRSxNQUFNLENBQUMsT0FBUCxDQUFBLEVBREY7O0lBcFRGLENBZG1FO0dBQXJFO0FBRkEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbiMgSWRlbnRpdGllcyBjb250cm9sbGVyXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuY29udHJvbGxlciAnSWRlbnRpdGllc0NvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckc3RhdGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJHdpbmRvdydcbiAgJyRzdGF0ZVBhcmFtcydcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAnJHEnXG4gICckdGltZW91dCdcbiAgJ2NsaXBib2FyZCdcbiAgIyAnQXV0aGVudGljYXRpb24nXG4gICdjb25maWcnXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAoJHNjb3BlLCAkc3RhdGUsICRyb290U2NvcGUsICR3aW5kb3csICRzdGF0ZVBhcmFtcywgJGxvY2F0aW9uLCAkaHR0cCwgJHEsICR0aW1lb3V0LCBjbGlwYm9hcmQsIGNvbmZpZywgbG9jYWxTdG9yYWdlU2VydmljZSkgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuYWN0aXZlVGFiID0gMFxuICAgICRzY29wZS5hY3RpdmF0ZVRhYiA9ICh0YWJJZCkgLT4gJHNjb3BlLmFjdGl2ZVRhYiA9IHRhYklkXG4gICAgJHNjb3BlLnNlbnQgPSBbXVxuICAgICRzY29wZS5yZWNlaXZlZCA9IFtdXG4gICAgJHNjb3BlLmNvbm5lY3Rpb25zID0ge31cbiAgICB0aHVtYnNVcE9iaiA9IHt9XG4gICAgdGh1bWJzRG93bk9iaiA9IHt9XG4gICAgJHNjb3BlLnRodW1ic1VwID0gW11cbiAgICAkc2NvcGUudGh1bWJzRG93biA9IFtdXG4gICAgJHNjb3BlLnZlcmlmaWNhdGlvbnMgPSBbXVxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJHN0YXRlUGFyYW1zLnNlYXJjaCBpZiAkc3RhdGVQYXJhbXMuc2VhcmNoXG4gICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbiA9XG4gICAgICB0eXBlOiAnJ1xuICAgICAgdmFsdWU6ICcnXG4gICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9IG51bGxcbiAgICAkc2NvcGUuY29sbGFwc2VMZXZlbCA9IHt9XG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuICAgICRzY29wZS5zbGlkZXIgPVxuICAgICAgdmFsdWU6IDBcbiAgICAgIG9wdGlvbnM6XG4gICAgICAgIGZsb29yOiAtM1xuICAgICAgICBjZWlsOiAzXG4gICAgICAgIGhpZGVQb2ludGVyTGFiZWxzOiB0cnVlXG4gICAgICAgIGhpZGVMaW1pdExhYmVsczogdHJ1ZVxuXG4gICAgJHNjb3BlLiRvbiAnTWVzc2FnZUFkZGVkJywgKGV2ZW50LCBhcmdzKSAtPlxuICAgICAgJHN0YXRlLnJlbG9hZCgpXG5cbiAgICAkc2NvcGUuY29weUlkTGluayA9IC0+XG4gICAgICBjbGlwYm9hcmQuY29weVRleHQgJHNjb3BlLmlkVXJsXG5cbiAgICAkc2NvcGUuYWRkRW50cnkgPSAoZXZlbnQsIGVudHJ5KSAtPlxuICAgICAgcmVjaXBpZW50ID0gW11cbiAgICAgIGxpbmtUbyA9IG51bGxcbiAgICAgIGlmIGVudHJ5Lm5hbWVcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWyduYW1lJywgZW50cnkubmFtZV1cbiAgICAgIGlmIGVudHJ5LmVtYWlsXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsnZW1haWwnLCBlbnRyeS5lbWFpbF1cbiAgICAgICAgbGlua1RvID0geyB0eXBlOiAnZW1haWwnLCB2YWx1ZTogZW50cnkuZW1haWwgfVxuICAgICAgaWYgZW50cnkudXJsXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsndXJsJywgZW50cnkudXJsXVxuICAgICAgICBsaW5rVG8gPSB7IHR5cGU6ICd1cmwnLCB2YWx1ZTogZW50cnkudXJsIH0gdW5sZXNzIGxpbmtUb1xuICAgICAgaWYgZW50cnkucGhvbmVcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWydwaG9uZScsIGVudHJ5LnBob25lXVxuICAgICAgICBsaW5rVG8gPSB7IHR5cGU6ICdwaG9uZScsIHZhbHVlOiBlbnRyeS5waG9uZSB9IHVubGVzcyBsaW5rVG9cbiAgICAgIHBhcmFtcyA9XG4gICAgICAgIHR5cGU6ICd2ZXJpZnlfaWRlbnRpdHknXG4gICAgICAgIHJlY2lwaWVudDogcmVjaXBpZW50XG4gICAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZShldmVudCwgcGFyYW1zKS50aGVuIChyZXNwb25zZSkgLT5cbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCBsaW5rVG9cbiAgICAgICwgKGVycm9yKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBcImVycm9yXCIsIGVycm9yXG5cbiAgICAkc2NvcGUuZ3Vlc3NBdHRyaWJ1dGVUeXBlID0gLT5cbiAgICAgIGlmICRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUubGVuZ3RoXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuQXR0cmlidXRlLmd1ZXNzVHlwZU9mKCRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUpXG4gICAgICAgIHVubGVzcyAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGVcbiAgICAgICAgICB1bmxlc3MgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi52YWx1ZS5tYXRjaCAvXFxgfFxcfnxcXCF8XFxAfFxcI3xcXCR8XFwlfFxcXnxcXCZ8XFwqfFxcKHxcXCl8XFwrfFxcPXxcXFt8XFx7fFxcXXxcXH18XFx8fFxcXFx8XFwnfFxcPHxcXCx8XFwufFxcPnxcXD98XFwvfFxcXCJcInxcXDt8XFw6L1xuICAgICAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlID0gJ25hbWUnXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICcnXG5cbiAgICAkc2NvcGUuZ2V0Q29ubmVjdGlvbnMgPSAtPlxuICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zID0ge31cbiAgICAgICRzY29wZS5pZGVudGl0eS5ndW4uZ2V0KCdhdHRycycpLm9wZW4gKGF0dHJzKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBhdHRyc1xuICAgICAgICBjb25uZWN0aW9ucyA9IGF0dHJzIG9yIFtdXG4gICAgICAgIGlmIGNvbm5lY3Rpb25zLmxlbmd0aCA+IDBcbiAgICAgICAgICBjID0gY29ubmVjdGlvbnNbMF1cbiAgICAgICAgICBtb3N0Q29uZmlybWF0aW9ucyA9IGMuY29uZlxuICAgICAgICBlbHNlXG4gICAgICAgICAgbW9zdENvbmZpcm1hdGlvbnMgPSAxXG4gICAgICAgIGZvciBrZXksIGlkIG9mIGNvbm5lY3Rpb25zXG4gICAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zWyRzY29wZS5nZXRJZEtleShpZCldID0gT2JqZWN0LmFzc2lnbih7fSwgaWQpXG4gICAgICAgIGZvciBrZXksIGNvbm4gb2YgJHNjb3BlLmNvbm5lY3Rpb25zXG4gICAgICAgICAgY29ubi5pc0N1cnJlbnQgPSBjb25uLm5hbWUgPT0gJHNjb3BlLmlkVHlwZSBhbmQgY29ubi52YWwgPT0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgICBzd2l0Y2ggY29ubi5uYW1lXG4gICAgICAgICAgICB3aGVuICdlbWFpbCdcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZSdcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tc3VjY2VzcydcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gJ21haWx0bzonICsgY29ubi52YWxcbiAgICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICB3aGVuICdiaXRjb2luX2FkZHJlc3MnLCAnYml0Y29pbidcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtYml0Y29pbidcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tcHJpbWFyeSdcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gJ2h0dHBzOi8vYmxvY2tjaGFpbi5pbmZvL2FkZHJlc3MvJyArIGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAnZ3BnX2ZpbmdlcnByaW50JywgJ2dwZ19rZXlpZCdcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEta2V5J1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSAnaHR0cHM6Ly9wZ3AubWl0LmVkdS9wa3MvbG9va3VwP29wPWdldCZzZWFyY2g9MHgnICsgY29ubi52YWxcbiAgICAgICAgICAgIHdoZW4gJ2FjY291bnQnXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWF0J1xuICAgICAgICAgICAgd2hlbiAnbmlja25hbWUnXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZm9udCdcbiAgICAgICAgICAgIHdoZW4gJ25hbWUnXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZm9udCdcbiAgICAgICAgICAgIHdoZW4gJ3RlbCcsICdwaG9uZSdcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1lYXJwaG9uZSdcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tc3VjY2VzcydcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gJ3RlbDonICsgY29ubi52YWxcbiAgICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICB3aGVuICdrZXlJRCdcbiAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEta2V5J1xuICAgICAgICAgICAgd2hlbiAnY292ZXJQaG90bydcbiAgICAgICAgICAgICAgaWYgY29ubi52YWwubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICAgICAgICAkc2NvcGUuaXBmc0dldChjb25uLnZhbCkudGhlbiAoY292ZXJQaG90bykgLT5cbiAgICAgICAgICAgICAgICAgICRzY29wZS5jb3ZlclBob3RvID0gJHNjb3BlLmNvdmVyUGhvdG8gb3IgeyAnYmFja2dyb3VuZC1pbWFnZSc6ICd1cmwoZGF0YTppbWFnZTtiYXNlNjQsJyArIGNvdmVyUGhvdG8udG9TdHJpbmcoJ2Jhc2U2NCcpICsgJyknIH1cbiAgICAgICAgICAgIHdoZW4gJ3Byb2ZpbGVQaG90bydcbiAgICAgICAgICAgICAgaWYgY29ubi52YWwubWF0Y2ggL15cXC9pcGZzXFwvWzEtOUEtWmEtel17NDAsNjB9JC9cbiAgICAgICAgICAgICAgICAkc2NvcGUucHJvZmlsZVBob3RvID0gJHNjb3BlLnByb2ZpbGVQaG90byBvciAoJHNjb3BlLmlwZnNSb290IG9yICcnKSArIGNvbm4udmFsXG4gICAgICAgICAgICB3aGVuICd1cmwnXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgIGlmIGNvbm4udmFsLmluZGV4T2YoJ2ZhY2Vib29rLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtZmFjZWJvb2snXG4gICAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZmFjZWJvb2snXG4gICAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2ZhY2Vib29rLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ3R3aXR0ZXIuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS10d2l0dGVyJ1xuICAgICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLXR3aXR0ZXInXG4gICAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ3R3aXR0ZXIuY29tLycpWzFdXG4gICAgICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAgIGVsc2UgaWYgY29ubi52YWwuaW5kZXhPZigncGx1cy5nb29nbGUuY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1nb29nbGUtcGx1cydcbiAgICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1nb29nbGUtcGx1cydcbiAgICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbC5zcGxpdCgncGx1cy5nb29nbGUuY29tLycpWzFdXG4gICAgICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAgIGVsc2UgaWYgY29ubi52YWwuaW5kZXhPZignbGlua2VkaW4uY29tLycpID4gLTFcbiAgICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1saW5rZWRpbidcbiAgICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1saW5rZWRpbidcbiAgICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbC5zcGxpdCgnbGlua2VkaW4uY29tLycpWzFdXG4gICAgICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICAgIGVsc2UgaWYgY29ubi52YWwuaW5kZXhPZignZ2l0aHViLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtZ2l0aHViJ1xuICAgICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWdpdGh1YidcbiAgICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbC5zcGxpdCgnZ2l0aHViLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1saW5rJ1xuICAgICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWRlZmF1bHQnXG4gICAgICAgICAgaWYgY29ubi52YWwgYW5kIGNvbm4udmFsLm1hdGNoIC9eXFwvaXBmc1xcL1sxLTlBLVphLXpdezQwLDYwfSQvXG4gICAgICAgICAgICBjb25uLmxpbmsgPSAoJHNjb3BlLmlwZnNSb290IG9yICcnKSArIGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWxcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tbGluaydcbiAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWRlZmF1bHQnXG4gICAgICAgICAgaWYgY29ubi5jb25mICsgY29ubi5yZWYgPiAwXG4gICAgICAgICAgICBwZXJjZW50YWdlID0gY29ubi5jb25mICogMTAwIC8gKGNvbm4uY29uZiArIGNvbm4ucmVmKVxuICAgICAgICAgICAgaWYgcGVyY2VudGFnZSA+PSA4MFxuICAgICAgICAgICAgICBhbHBoYSA9IGNvbm4uY29uZiAvIG1vc3RDb25maXJtYXRpb25zICogMC43ICsgMC4zXG4gICAgICAgICAgICAgICMgY29ubi5yb3dTdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywyNDAsMjE2LCcgKyBhbHBoYSArICcpJ1xuICAgICAgICAgICAgZWxzZSBpZiBwZXJjZW50YWdlID49IDYwXG4gICAgICAgICAgICAgIGNvbm4ucm93Q2xhc3MgPSAnd2FybmluZydcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgY29ubi5yb3dDbGFzcyA9ICdkYW5nZXInXG4gICAgICAgICAgJHNjb3BlLmhhc1F1aWNrQ29udGFjdHMgPSAkc2NvcGUuaGFzUXVpY2tDb250YWN0cyBvciBjb25uLnF1aWNrQ29udGFjdFxuICAgICAgICAkc2NvcGUuY29ubmVjdGlvbnNMZW5ndGggPSBPYmplY3Qua2V5cygkc2NvcGUuY29ubmVjdGlvbnMpLmxlbmd0aFxuXG5cbiAgICAkc2NvcGUuZ2V0Q29ubmVjdGluZ01zZ3MgPSAoaWQxLCBpZDIpIC0+XG4gICAgICBnZXRWZXJpZmljYXRpb25zID0gJHEgKHJlc29sdmUpIC0+XG4gICAgICAgIGlmICEkc2NvcGUudmVyaWZpY2F0aW9ucy5sZW5ndGhcbiAgICAgICAgICBpZiAkc2NvcGUucmVjZWl2ZWRJbmRleFxuICAgICAgICAgICAgJHNjb3BlLnJlY2VpdmVkSW5kZXguc2VhcmNoVGV4dCgnJywgMTAwMDAsIGZhbHNlLCB0cnVlKS50aGVuIChyZXMpIC0+XG4gICAgICAgICAgICAgIHJlcy5mb3JFYWNoIChyb3cpIC0+XG4gICAgICAgICAgICAgICAgbXNnID0gJHdpbmRvdy5pZGVudGlmaUxpYi5NZXNzYWdlLmZyb21Kd3Mocm93LnZhbHVlLmp3cylcbiAgICAgICAgICAgICAgICBpZiAobXNnLnNpZ25lZERhdGEudHlwZSBpbiBbJ3ZlcmlmeV9pZGVudGl0eScsICd2ZXJpZmljYXRpb24nLCAndW52ZXJpZnlfaWRlbnRpdHknLCAndW52ZXJpZmljYXRpb24nXSlcbiAgICAgICAgICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBtc2cuc2lnbmVkRGF0YS5hdXRob3JbMF1cbiAgICAgICAgICAgICAgICAgICRzY29wZS52ZXJpZmljYXRpb25zLnB1c2ggbXNnXG4gICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICBnZXRWZXJpZmljYXRpb25zLnRoZW4gLT5cbiAgICAgICAgbXNncyA9IFtdXG4gICAgICAgICRzY29wZS52ZXJpZmljYXRpb25zLmZvckVhY2ggKG1zZykgLT5cbiAgICAgICAgICBoYXNJZDEgPSBoYXNJZDIgPSBmYWxzZVxuICAgICAgICAgIGZvciBpZCBpbiBtc2cuc2lnbmVkRGF0YS5yZWNpcGllbnRcbiAgICAgICAgICAgIHJldHVybiBtc2dzLnB1c2ggbXNnIGlmIGlkWzBdwqA9PSBpZDIubmFtZSBhbmQgaWRbMV0gPT0gaWQyLnZhbFxuICAgICAgICByZXR1cm4gbXNnc1xuXG4gICAgJHNjb3BlLmNvbm5lY3Rpb25DbGlja2VkID0gKGV2ZW50LCBpZCkgLT5cbiAgICAgIGlmIGlkLmNvbm5lY3RpbmdfbXNnc1xuICAgICAgICBpZC5jb2xsYXBzZSA9ICFpZC5jb2xsYXBzZVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUuZ2V0Q29ubmVjdGluZ01zZ3MoWyRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlXSwgaWQpLnRoZW4gKG1zZ3MpIC0+XG4gICAgICAgICAgaWQuY29ubmVjdGluZ19tc2dzID0gbXNnc1xuICAgICAgICAgIGlkLmNvbGxhcHNlID0gIWlkLmNvbGxhcHNlXG5cbiAgICAkc2NvcGUuZ2V0U2VudE1zZ3MgPSAtPlxuICAgICAgcmV0dXJuIGlmICRzY29wZS5zZW50LmxvYWRpbmcgb3Igbm90ICRzY29wZS5pZGVudGl0eVxuICAgICAgJHNjb3BlLnNlbnQubG9hZGluZyA9IHRydWVcbiAgICAgIGN1cnNvciA9IGlmICRzY29wZS5zZW50Lmxlbmd0aCB0aGVuICRzY29wZS5zZW50WyRzY29wZS5zZW50Lmxlbmd0aCAtIDFdLmN1cnNvciBlbHNlICcnXG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXRTZW50TXNncygkc2NvcGUuaWRlbnRpdHksICRzY29wZS5maWx0ZXJzLmxpbWl0LCBjdXJzb3IpXG4gICAgICAudGhlbiAoc2VudCkgLT5cbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBzZW50LCB7IGF1dGhvcklzU2VsZjogdHJ1ZSB9XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSgkc2NvcGUuc2VudCwgc2VudClcbiAgICAgICAgICAkc2NvcGUuc2VudC5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICBpZiBzZW50Lmxlbmd0aCA8ICRzY29wZS5maWx0ZXJzLmxpbWl0IC0gMVxuICAgICAgICAgICAgJHNjb3BlLnNlbnQuZmluaXNoZWQgPSB0cnVlXG4gICAgICAuY2F0Y2ggKGVycm9yKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnZXJyb3IgbG9hZGluZyBzZW50IG1lc3NhZ2VzJywgZXJyb3JcbiAgICAgICAgJHNjb3BlLnNlbnQuZmluaXNoZWQgPSB0cnVlXG5cbiAgICAkc2NvcGUuZ2V0UmVjZWl2ZWRNc2dzID0gLT5cbiAgICAgIHJldHVybiBpZiAkc2NvcGUucmVjZWl2ZWQubG9hZGluZyBvciBub3QgJHNjb3BlLmlkZW50aXR5XG4gICAgICAkc2NvcGUucmVjZWl2ZWQubG9hZGluZyA9IHRydWVcbiAgICAgIGN1cnNvciA9IGlmICRzY29wZS5yZWNlaXZlZC5sZW5ndGggdGhlbiAkc2NvcGUucmVjZWl2ZWRbJHNjb3BlLnJlY2VpdmVkLmxlbmd0aCAtIDFdLmN1cnNvciBlbHNlICcnXG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXRSZWNlaXZlZE1zZ3MoJHNjb3BlLmlkZW50aXR5LCAkc2NvcGUuZmlsdGVycy5saW1pdCwgY3Vyc29yKVxuICAgICAgLnRoZW4gKHJlY2VpdmVkKSAtPlxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzIHJlY2VpdmVkLCB7IHJlY2lwaWVudElzU2VsZjogdHJ1ZSB9XG4gICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSgkc2NvcGUucmVjZWl2ZWQsIHJlY2VpdmVkKVxuICAgICAgICAgICRzY29wZS5yZWNlaXZlZC5sb2FkaW5nID0gZmFsc2VcbiAgICAgICAgICBpZiByZWNlaXZlZC5sZW5ndGggPCAkc2NvcGUuZmlsdGVycy5saW1pdCAtIDFcbiAgICAgICAgICAgICRzY29wZS5yZWNlaXZlZC5maW5pc2hlZCA9IHRydWVcbiAgICAgICAgICByZWNlaXZlZC5mb3JFYWNoIChtc2cpIC0+XG4gICAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKG1zZy5kYXRhLm1heFJhdGluZyArIG1zZy5kYXRhLm1pblJhdGluZykgLyAyXG4gICAgICAgICAgICBpZiBPYmplY3Qua2V5cyh0aHVtYnNVcE9iaikubGVuZ3RoIDwgMTIgYW5kIG1zZy5kYXRhLnJhdGluZyA+IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgdGh1bWJzVXBPYmpbSlNPTi5zdHJpbmdpZnkobXNnLnNpZ25lZERhdGEuYXV0aG9yKV0gPSBtc2dcbiAgICAgICAgICAgICAgJHNjb3BlLnRodW1ic1VwID0gT2JqZWN0LnZhbHVlcyh0aHVtYnNVcE9iailcbiAgICAgICAgICAgICAgJHNjb3BlLmhhc1RodW1ic1VwID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiBPYmplY3Qua2V5cyh0aHVtYnNEb3duT2JqKS5sZW5ndGggPCAxMiBhbmQgbXNnLmRhdGEucmF0aW5nIDwgbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICB0aHVtYnNEb3duT2JqW0pTT04uc3RyaW5naWZ5KG1zZy5zaWduZWREYXRhLmF1dGhvcildID0gbXNnXG4gICAgICAgICAgICAgICRzY29wZS50aHVtYnNEb3duID0gT2JqZWN0LnZhbHVlcyh0aHVtYnNEb3duT2JqKVxuICAgICAgICAgICAgICAkc2NvcGUuaGFzVGh1bWJzRG93biA9IHRydWVcbiAgICAgIC5jYXRjaCAoZXJyb3IpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdlcnJvciBsb2FkaW5nIHJlY2VpdmVkIG1lc3NhZ2VzJywgZXJyb3JcbiAgICAgICAgJHNjb3BlLnJlY2VpdmVkLmZpbmlzaGVkID0gdHJ1ZVxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5maWx0ZXJzLCBmaWx0ZXJzXG4gICAgICAkc2NvcGUuc2VudCA9IFtdXG4gICAgICAkc2NvcGUucmVjZWl2ZWQgPSBbXVxuICAgICAgJHRpbWVvdXQgLT4gJHJvb3RTY29wZS4kYnJvYWRjYXN0ICdtc2dTY3JvbGxDaGVjaydcblxuICAgICRzY29wZS51cGxvYWRQcm9maWxlUGhvdG8gPSAoYmxvYiwgaWRlbnRpdHkpIC0+XG4gICAgICAkc2NvcGUudXBsb2FkRmlsZShibG9iKS50aGVuIChmaWxlcykgLT5cbiAgICAgICAgY29uc29sZS5sb2cgZmlsZXMsICRzY29wZS5pZGVudGl0eVxuICAgICAgICByZWNpcGllbnQgPSBbWyRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlXSwgWydwcm9maWxlUGhvdG8nLCAnL2lwZnMvJyArIGZpbGVzWzBdLnBhdGhdXVxuICAgICAgICB2ID0gJHdpbmRvdy5pZGVudGlmaUxpYi5NZXNzYWdlLmNyZWF0ZVZlcmlmaWNhdGlvbih7cmVjaXBpZW50fSwgJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmFkZE1lc3NhZ2UodilcbiAgICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS51cGxvYWRDb3ZlclBob3RvID0gKGJsb2IsIGlkZW50aXR5KSAtPlxuICAgICAgJHNjb3BlLnVwbG9hZEZpbGUoYmxvYikudGhlbiAoZmlsZXMpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nIGZpbGVzLCAkc2NvcGUuaWRlbnRpdHlcbiAgICAgICAgcmVjaXBpZW50ID0gW1skc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZV0sIFsnY292ZXJQaG90bycsICcvaXBmcy8nICsgZmlsZXNbMF0ucGF0aF1dXG4gICAgICAgIHYgPSAkd2luZG93LmlkZW50aWZpTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKHtyZWNpcGllbnR9LCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguYWRkTWVzc2FnZSh2KVxuICAgICAgICAkc2NvcGUudXBsb2FkTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLm9wZW5Qcm9maWxlUGhvdG9VcGxvYWRNb2RhbCA9IC0+XG4gICAgICAkc2NvcGUub3BlblVwbG9hZE1vZGFsKCRzY29wZS51cGxvYWRQcm9maWxlUGhvdG8sICdVcGxvYWQgcHJvZmlsZSBwaG90bycpXG5cbiAgICAkc2NvcGUub3BlbkNvdmVyUGhvdG9VcGxvYWRNb2RhbCA9IC0+XG4gICAgICAkc2NvcGUub3BlblVwbG9hZE1vZGFsKCRzY29wZS51cGxvYWRDb3ZlclBob3RvLCAnVXBsb2FkIGNvdmVyIHBob3RvJylcblxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgICRzY29wZS5pZFR5cGUgPSAkc3RhdGVQYXJhbXMudHlwZVxuICAgICAgJHNjb3BlLmlkVmFsdWUgPSAkc3RhdGVQYXJhbXMudmFsdWVcbiAgICAgIGlmICR3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZignLicpID4gLTEgIyBkaWZmZXJlbnRpYXRlIGJldHdlZW4gbG9jYWxob3N0IC8gY2hyb21lIHBsdWdpbiB1cmkgYW5kIEROUyBuYW1lXG4gICAgICAgICRzY29wZS5pZFVybCA9ICRzdGF0ZS5ocmVmKCdpZGVudGl0aWVzLnNob3cnLCB7dHlwZTogJHNjb3BlLmlkVHlwZSwgdmFsdWU6ICRzY29wZS5pZFZhbHVlfSwge2Fic29sdXRlOiB0cnVlfSlcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLmlkVXJsID0gJ2h0dHBzOi8vaWRlbnRpLmZpLycgKyAkc3RhdGUuaHJlZignaWRlbnRpdGllcy5zaG93Jywge3R5cGU6ICRzY29wZS5pZFR5cGUsIHZhbHVlOiAkc2NvcGUuaWRWYWx1ZX0pXG4gICAgICAkc2NvcGUuaXNDdXJyZW50VXNlciA9ICRzY29wZS5hdXRoZW50aWNhdGlvbiBhbmRcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgYW5kXG4gICAgICAgICRzY29wZS5pZFR5cGUgPT0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRUeXBlIGFuZFxuICAgICAgICAkc2NvcGUuaWRWYWx1ZSA9PSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlXG4gICAgICAkc2NvcGUuaXNVbmlxdWVUeXBlID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YoJHNjb3BlLmlkVHlwZSkgPiAtMVxuICAgICAgaWYgISRzY29wZS5pc1VuaXF1ZVR5cGVcbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLmxpc3QnLCB7IHNlYXJjaDogJHNjb3BlLmlkVmFsdWUgfVxuICAgICAgICAkc2NvcGUudGFic1syXS5hY3RpdmUgPSB0cnVlIGlmICRzY29wZS50YWJzXG4gICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICRzY29wZS5pZFZhbHVlXG4gICAgICAkc2NvcGUuJHdhdGNoICdhcGlSZWFkeScsIChpc1JlYWR5KSAtPlxuICAgICAgICBpZiBpc1JlYWR5XG4gICAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0KCRzY29wZS5pZFZhbHVlLCAkc2NvcGUuaWRUeXBlKS50aGVuIChwcm9maWxlKSAtPlxuICAgICAgICAgICAgaWYgcHJvZmlsZVxuICAgICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkgPSBwcm9maWxlXG4gICAgICAgICAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUoJHNjb3BlLmlkZW50aXR5LnByaW1hcnlOYW1lKVxuICAgICAgICAgICAgICBpZiBwcm9maWxlLmd1blxuICAgICAgICAgICAgICAgIHByb2ZpbGUuZ3VuLm9uIChkYXRhKSAtPlxuICAgICAgICAgICAgICAgICAgcHJvZmlsZS5kYXRhID0gZGF0YVxuICAgICAgICAgICAgICAgIHByb2ZpbGUuZ3VuLmdldCgnYXR0cnMnKS5vbiAtPlxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMoJHNjb3BlLmlkZW50aXR5KVxuICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ2V0Q29ubmVjdGlvbnMoKVxuICAgICAgICAgICAgICAgIHByb2ZpbGUuZ3VuLmdldCgnc2VudCcpLm9uIC0+XG4gICAgICAgICAgICAgICAgICAkc2NvcGUuZ2V0U2VudE1zZ3MoMClcbiAgICAgICAgICAgICAgICBwcm9maWxlLmd1bi5nZXQoJ3JlY2VpdmVkJykub24gLT5cbiAgICAgICAgICAgICAgICAgICRzY29wZS5nZXRSZWNlaXZlZE1zZ3MoMClcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgICAgICRzY29wZS5pZGVudGl0eSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkuY3JlYXRlKFxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmd1bi5nZXQoJ2lkZW50aWZpJykuZ2V0KCdpZGVudGl0aWVzJyksXG4gICAgICAgICAgICAgICAgICB7YXR0cnM6W3tuYW1lOiRzY29wZS5pZFR5cGUsIHZhbDokc2NvcGUuaWRWYWx1ZX1dfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAuY2F0Y2ggKGVycikgLT5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nICdlcnJvciBmZXRjaGluZyBwcm9maWxlJywgZXJyXG5cbiAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICRzY29wZS5maW5kT25lKClcbl1cbiJdfQ==

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
  angular.module('identifiAngular').constant('config', {
    defaultFilters: {
      type: null,
      limit: 50,
      max_distance: 0
    },
    uniqueAttributeTypes: ['email', 'url', 'keyID', 'tel', 'phone', 'account', 'bitcoin', 'gpg_keyid', 'gpg_fingerprint']
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uc3RhbnRzLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25zdGFudHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsUUFESCxDQUNZLFFBRFosRUFFSTtJQUFBLGNBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxJQUFOO01BQ0EsS0FBQSxFQUFPLEVBRFA7TUFFQSxZQUFBLEVBQWMsQ0FGZDtLQURGO0lBSUEsb0JBQUEsRUFBc0IsQ0FDcEIsT0FEb0IsRUFFcEIsS0FGb0IsRUFHcEIsT0FIb0IsRUFJcEIsS0FKb0IsRUFLcEIsT0FMb0IsRUFNcEIsU0FOb0IsRUFPcEIsU0FQb0IsRUFRcEIsV0FSb0IsRUFTcEIsaUJBVG9CLENBSnRCO0dBRko7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKVxuICAuY29uc3RhbnQgJ2NvbmZpZycsXG4gICAgZGVmYXVsdEZpbHRlcnM6XG4gICAgICB0eXBlOiBudWxsXG4gICAgICBsaW1pdDogNTBcbiAgICAgIG1heF9kaXN0YW5jZTogMFxuICAgIHVuaXF1ZUF0dHJpYnV0ZVR5cGVzOiBbXG4gICAgICAnZW1haWwnLFxuICAgICAgJ3VybCcsXG4gICAgICAna2V5SUQnLFxuICAgICAgJ3RlbCcsXG4gICAgICAncGhvbmUnLFxuICAgICAgJ2FjY291bnQnLFxuICAgICAgJ2JpdGNvaW4nLFxuICAgICAgJ2dwZ19rZXlpZCcsXG4gICAgICAnZ3BnX2ZpbmdlcnByaW50J1xuICAgIF1cbiJdfQ==

(function() {
  angular.module('identifiAngular').config(function($logProvider) {
    'ngInject';
    return $logProvider.debugEnabled(true);
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uZmlnLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsTUFESCxDQUNVLFNBQUMsWUFBRDtJQUNOO1dBRUEsWUFBWSxDQUFDLFlBQWIsQ0FBMEIsSUFBMUI7RUFITSxDQURWO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuICAuY29uZmlnICgkbG9nUHJvdmlkZXIpIC0+XG4gICAgJ25nSW5qZWN0J1xuICAgICMgRW5hYmxlIGxvZ1xuICAgICRsb2dQcm92aWRlci5kZWJ1Z0VuYWJsZWQgdHJ1ZVxuICAgICMgU2V0IG9wdGlvbnMgdGhpcmQtcGFydHkgbGliXG4iXX0=

angular.module('identifiAngular').run(['$templateCache', function($templateCache) {$templateCache.put('app/identities/create.html','<div ng-init="newEntry = {}" class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><h3>Add public entry</h3><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide=authentication.user><div class=panel-heading>Please log in to add entries.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label> <input type=text required autofocus id=idName focus-on=idNameFocus name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label> <input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idPhone.$invalid }"><label for=idPhone>Phone number</label> <input type=text name=idPhone id=idPhone ng-pattern=phoneRegex ng-model=newEntry.phone class=form-control><p class=help-block>International format, no special characters other than leading +</p></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label> <input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="!(authentication.user && (newEntry.email || newEntry.url || newEntry.phone) && !(addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid))">Add public entry</button><p class=help-block>More details can be added afterwards.</p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top25-xs></div><div ng-if="!query.term && !authentication.user" class=jumbotron><div class=align-center><h1>Global address book</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-book fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-book"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Find out who said what about a person or an organization.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Show content from trusted and real identities only.</p></div></div></div></div><table id=search-results class="table table-hover" infinite-scroll=search(query.term) infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || ids.loading || ids.finished"><tbody><tr ng-if="!query.term || (!ids.loading && !ids.list.length)" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ng-click=addEntryClicked()>Add entry</a></td></tr><tr ng-repeat="result in ids.list" id=result{{$index}} ng-hide=!result.linkTo ui-sref="identities.show({ type: result.linkTo.name, value: result.linkTo.val })" class=search-result-row ng-class="{active: result.active}"><td class=gravatar-col><identicon identity=result border=3 width=50 positive-score=result.pos negative-score=result.neg></identicon></td><td><span ng-if="result.data.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.data.trustDistance > 0" ng-bind="result.data.trustDistance | ordinal" class="label label-default pull-right"></span> <a ng-bind-html=result.primaryName|highlight:query.term ui-sref="identities.show({ type: result.linkTo.name, value: result.linkTo.val })"></a> <small ng-if=!(result.mostVerifiedAttributes.name||result.mostVerifiedAttributes.nickname) class=list-group-item-text><span ng-bind-html=result.data.attrs[0].name|highlight:query.term></span></small><br><small><span ng-if=result.nickname ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.profile.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.profile.email|highlight:query.term></span> </span><span ng-if=result.profile.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.profile.facebook|highlight:query.term></span> </span><span ng-if=result.profile.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.profile.twitter|highlight:query.term></span> </span><span ng-if=result.profile.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.profile.googlePlus|highlight:query.term></span> </span><span ng-if=result.mostVerifiedAttributes.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.mostVerifiedAttributes.bitcoin.attribute.val|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if="apiReady && !ids.loading && !ids.list.length">No results</div></section></div>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div ng-click=openCoverPhotoUploadModal() class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 0 }" ng-click=activateTab(0)><span class=hidden-xs>Received </span>({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative || received.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Sent </span>({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Identity </span>(<span ng-bind="connectionsLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType><div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><a href="" ng-click=openProfilePhotoUploadModal()><identicon identity=identity border=4 show-distance=0 width=230></identicon></a><!-- <a ng-href="" class="circle {{profileImageCircleClass}}">\n                    <span class="arc"></span>\n                    <img ng-src="{{profilePhotoUrl}}" width="230" height="230" class="profile-image mar-right5">\n                  </a> --></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs visible-sm" ng-if=!(identity.mostVerifiedAttributes.name||identity.mostVerifiedAttributes.nickname)><span ng-bind=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a> </small></span><span ng-bind=identity.primaryName></span> <span ng-hide="!identity.nickname || identity.nickname == identity.primaryName">(<span class=text-muted ng-bind=identity.nickname></span>) </span><span ng-if="identity.data.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="identity.data.trustDistance > 0 && identity.data.trustDistance < 1000" ng-bind="identity.data.trustDistance | ordinal" class="label label-default pull-right"></span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><p><b>Received: <span ng-if="identity.data.receivedPositive || identity.data.receivedNegative"><span ng-bind="identity.data.receivedPositive / (identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.receivedPositive || identity.data.receivedNegative)">&mdash;</span></b><br>Sent: <span ng-if="identity.data.sentPositive || identity.data.sentNegative"><span ng-bind="identity.data.sentPositive / (identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.sentPositive || identity.data.sentNegative)">&mdash;</span></p><!--\n                <p class="received-stats">\n                  <div><strong>Received</strong></div>\n                  <div>\n                    <strong>\n                      <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.receivedPositive">-</span></span>\n                      <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.receivedNeutral">-</span></span>\n                      <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.receivedNegative">-</span></span>\n                    </strong>\n                  </div>\n                </p>\n                <p>\n                  <div>Sent</div>\n                  <div>\n                    <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.sentPositive">-</span></span>\n                    <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.sentNeutral">-</span></span>\n                    <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.sentNegative">-</span></span>\n                  </div>\n                </p> --><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="id in connections" ng-if=id.quickContact><a ng-href={{id.link}}><span ng-class=id.iconStyle></span><span ng-bind="id.linkName || id.val"></span></a></li><li ng-if=stats.first_seen><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && hasThumbsUp" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon identity=msg.author class=no-glow border=3 width=60></identicon></a></div><div ng-if="isUniqueType && hasThumbsDown" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon identity=msg.author class=no-glow border=3 width=60></identicon></a></div></div></div></div></div></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><uib-tabset active=activeTab><uib-tab ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span> <span class=visible-xs>Recv ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span></uib-tab-heading><div ng-show=authentication.user class="panel panel-default panel-success"><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment, recipient: [[idType, idValue]] })"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="Write feedback"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button type=submit class="pull-right ladda-button btn btn-primary" data-style=zoom-out><span class=ladda-label><span class="fa fa-edit m"></span> Publish</span><span class=ladda-spinner></span></button></div></div></form></div></div><div infinite-scroll=getReceivedMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !identity || received.loading || received.finished ||\xA0activeTab != 0"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.receivedPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.receivedNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.receivedNegative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=identity ng-repeat="msg in received | filter:msgFilter | orderBy:\'-data.timestamp\' as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="apiReady && !isCurrentUser && !received.loading && receivedFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if="apiReady && isCurrentUser && !received.loading && received.length == 0" class="alert alert-warning text-center"><i class="fa fa-info pull-right"></i><p>You have not received any trust ratings yet.</p><p>You need trust ratings to have your messages saved and displayed by others.</p><p>You can also ask someone to verify that this account belongs to your already trusted identity.</p><p><button ng-click=copyIdLink() class="btn btn-primary mar-top10">Copy link to this page</button></p><p>Or show them your QR code:</p><div class=mar-top20><qrcode data={{idUrl}} size=240></qrcode></div></div><div ng-if=received.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=isUniqueType><uib-tab-heading>Sent ({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative}})</uib-tab-heading><div infinite-scroll=getSentMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !identity || sent.loading || sent.finished ||\xA0activeTab != 1"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span>Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.sentPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.sentNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.sentNegative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=identity ng-repeat="msg in sent | filter:msgFilter | orderBy:\'-data.timestamp\' as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="!sent.loading && sentFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if=sent.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=true><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-show="connections.$resolved && connectionsLength > 0" ng-bind="connectionsLength - 1"></span><span ng-hide=connections.$resolved></span>)</uib-tab-heading><div id=connections><!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="id in connections" style={{id.rowStyle}} ng-class=id.rowClass ng-click="!id.isCurrent && connectionClicked($event, id)" class=id-row><td><div class="visible-xs mar-bot5"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><div><a style=min-width:45px class="pull-left btn btn-lg btn-social-icon mar-right15" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span> <span ng-if=id.iconStyle&&!id.link class="pull-left btn btn-lg btn-social-icon" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span></span></a><div class="hidden-xs pull-left"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><!--\n                              <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n                            --><div class=pull-right ng-if=!id.isCurrent><button autocomplete=off name=confirm class="ladda-button btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{id.conf}}</button> <button autocomplete=off name=unverify class="ladda-button btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{id.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!id.isCurrent class="active connectingmsgs"><td class="connectingmsgs ladda-button" data-style=zoom-in data-spinner-color=#000><div uib-collapse=!id.collapse><div ng-repeat="msg in id.connecting_msgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.data.type === \'verify_identity\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.data.type === \'unverify_identity\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" class=id-link><identicon identity=msg class=mar-right5 border=3 width=30 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span ng-bind=msg.author_name||msg.data.author[0][1]></span> </a></strong>- <span ng-bind="msg.data.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-change=guessAttributeType() ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder="value (e.g. alice@example.com)" ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder="type (e.g. email)" ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [newVerification.type, newVerification.value]] }, { conf: 0, ref: 0, name: newVerification.type, val: newVerification.value })" class="ladda-button btn btn-default" data-style=zoom-out ng-disabled="!authentication.user || !(newVerification.type && newVerification.value)"><span class="glyphicon glyphicon-plus"></span> Add</button></td></tr></tbody></table></div><div ng-if=!connections.$resolved style=position:relative;padding:20px us-spinner></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/identities/upload.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><form name=form><div class=drop-box ngf-select ngf-drop ng-model=file name=file ngf-pattern="\'image/*\'" ngf-accept="\'image/*\'" ngf-max-size=20MB ngf-min-height=100 ngf-resize="{width: 100, height: 100}" style=width:100%;height:300px;>Drop file or click</div><button class="btn btn-primary" type=submit ng-click=uploadModalCallback(file)>{{ modalButtonText }}</button></form></div></div></div>');
$templateCache.put('app/main/about.html','<div class=container><div class=col-md-8><h3>About Identifi</h3><p class=lead>Identifi is an address book application that stores its data in a distributed fashion on the BitTorrent-like <a href=https://ipfs.io>IPFS</a> network. The stored information is not owned or centrally administered by anyone.</p><p>In addition to keeping your contact details such as phone number or bitcoin address up-to-date, you can give other users <b>trust ratings and feedback</b>. You can filter all shown information by your <b>web of trust</b>, for example by displaying only the information stored by your friends and the people they trust.</p><p>Identifi is free and open source software. The project is in alpha development stage.</p><ul><li><a href=https://github.com/identifi/identifi>Source code</a></li><li><a href=https://medium.com/@mmalmi/learning-to-trust-strangers-167b652a654f>Learning to Trust Strangers</a> - a blog post outlining the concept</li><li><a href=https://cdn.rawgit.com/identifi/identifi-lib/b979abf6/example/browser.html>Technical description of Identifi with live code</a></li></ul><h4>Available at</h4><ul><li><a href=https://identi.fi>https://identi.fi</a></li><li><a href=https://identifi.github.io/ >https://identifi.github.io/</a></li><li><a href=https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/ >https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/</a></li><li><a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome extension</a></li><!-- TODO: add dynamically updated /ipfs url --></ul><h3>Privacy policy</h3><p>The Identifi network stores user-submitted identifiers which can be of arbitrary type, for example <i>name</i>, <i>email address</i> or <i>phone number</i>. All stored information is made public and broadcast to the <a href=https://ipfs.io>IPFS</a> network.</p></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><identicon identity=match.label border=3 width=46 class=mar-right10></identicon><span ng-bind-html="(match.label.profile.name || match.label.profile.nickname) | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><textarea rows=6 class=form-control placeholder="Enter private key" ng-model=privateKeySerialized></textarea><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--> <button class="btn btn-primary" ng-click=generateKey()>Generate new key</button> <button class="btn btn-default pull-right" ng-disabled=!privateKeySerialized ng-click=downloadKey()><i class="fa fa-download"></i> Download key</button> <button class="btn btn-primary" ng-disabled=!privateKeySerialized ng-click="loginWithKey(privateKeySerialized, publicKeyPEM)">Log in</button></div></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="alert alert-info">Viewing as: <strong ng-if=viewpoint><a ui-sref="identities.show({ type: viewpoint.linkTo.name, value: viewpoint.linkTo.val })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon identity=viewpoint border=3 width=35></identicon></span><span ng-bind=viewpoint.mostVerifiedAttributes.name.attribute.val></span></a></strong><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({max_distance: -1})" ng-class="{active: filters.max_distance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 1})" ng-class="{active: filters.max_distance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 2})" ng-class="{active: filters.max_distance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 3})" ng-class="{active: filters.max_distance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 0})" ng-class="{active: filters.max_distance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em;"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class=container><section><div id=messages class=row><div class=col-md-4><div ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div infinite-scroll=find() infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || msgs.loading || msgs.finished" infinite-scroll-listen-for-event=msgScrollCheck><message ng-repeat="msg in msgs.list | filter:msgFilter" msg-data=msg ng-click="openMessage($event, msg, \'lg\')"></message></div><div us-spinner ng-if=!messages.$resolved style=position:relative;padding:20px></div><div class="alert alert-info text-center" ng-if="!msgs.loading && !msgs.list.length">No messages to show</div></div></div></section></div>');
$templateCache.put('app/messages/show.html','<section ng-init=findOne()><div class="col-md-8 col-md-offset-2 msg-col"><message msg-data=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by: <a ng-if=false ng-bind=message.signerName||message.signerKeyHash ui-sref="identities.show({type: \'keyID\', value: message.signerKeyHash })"></a> <strong ng-if=message.verifiedBy><a ui-sref="identities.show({ type: \'keyID\', value: message.signerKeyHash })" class=id-link><identicon identity=message.verifiedBy class=mar-right5 border=3 width=35></identicon><span ng-bind=message.verifiedBy.mostVerifiedAttributes.name.attribute.val></span> <small>{{message.signerKeyHash}}</small></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-controller=MessagesController ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':$ctrl.msgData.isVerification}" style={{$ctrl.msgData.bgColor}} ng-if=$ctrl.msgData.data><div class=message-panel ng-class="{ \'panel-body\': !$ctrl.msgData.isVerification, \'panel-heading\': $ctrl.msgData.isVerification || $ctrl.msgData.isUnverification }"><p><span class="mar-left5 pull-right" ng-class=$ctrl.msgData.iconStyle ng-repeat="n in $ctrl.msgData.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=$ctrl.msgData.local></span> <strong><a ui-sref="identities.show({ type: $ctrl.msgData.linkToAuthor[0], value: $ctrl.msgData.linkToAuthor[1] })" class=id-link><identicon identity="($ctrl.msgData.authorIsSelf && $ctrl.pageInfo) || $ctrl.msgData.author" class=mar-right5 border=3 width=35></identicon><span ng-bind="($ctrl.msgData.authorIsSelf && $ctrl.pageInfo.primaryName)||$ctrl.msgData.author_name||$ctrl.msgData.linkToAuthor[1]"></span> </a></strong><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: $ctrl.msgData.linkToRecipient[0], value: $ctrl.msgData.linkToRecipient[1] })" ng-bind="($ctrl.msgData.recipientIsSelf && $ctrl.pageInfo.primaryName)||$ctrl.msgData.recipient_name||$ctrl.msgData.linkToRecipient[1]" class=id-link></a> - <a ui-sref="messages.show({ id: ($ctrl.msgData.ipfs_hash || $ctrl.msgData.hash) })" ng-bind="$ctrl.msgData.data.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block;></a></p><p ng-if="$ctrl.msgData.isVerification || $ctrl.msgData.isUnverification"><small ng-repeat="recipient in $ctrl.msgData.data.recipient">{{recipient[0]}}: <span ng-if="recipient[0] == \'email\' || recipient[0] == \'url\'" ng-bind-html="recipient[1] | linky"></span> <span ng-if="!(recipient[0] == \'email\' || recipient[0] == \'url\')" ng-bind=recipient[1]></span> <i class="fa fa-link" ng-if="!$last && $ctrl.msgData.isVerification"></i> <i class="fa fa-chain-broken" ng-if="!$last && $ctrl.msgData.isUnverification"></i></small></p><p ng-bind-html=$ctrl.msgData.data.comment|linky></p></div></div>');}]);