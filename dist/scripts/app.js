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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubW9kdWxlLmpzIiwic291cmNlcyI6WyJpbmRleC5tb2R1bGUuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixFQUNFLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsU0FBM0IsRUFBc0MsWUFBdEMsRUFBb0QsWUFBcEQsRUFDQSxRQURBLEVBQ1UsWUFEVixFQUN3QixXQUR4QixFQUNxQyxjQURyQyxFQUNxRCxrQkFEckQsRUFFQSxpQkFGQSxFQUVtQixvQkFGbkIsRUFFeUMsVUFGekMsRUFFcUQsbUJBRnJELEVBR0EsbUJBSEEsRUFHcUIsY0FIckIsQ0FERjs7RUFNQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQWlDLENBQUMsTUFBbEMsQ0FBeUMsUUFBekMsRUFBbUQ7SUFBRSxRQUFBLENBQUEsQ0FBQTthQUNuRCxRQUFBLENBQUMsS0FBRCxDQUFBO2VBQ0Usa0JBQUEsQ0FBbUIsa0JBQUEsQ0FBbUIsS0FBbkIsQ0FBbkI7TUFERjtJQURtRCxDQUFGO0dBQW5EOztFQUlBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxvQkFBekMsRUFBK0Q7SUFBRSxRQUFBLENBQUEsQ0FBQTthQUMvRCxRQUFBLENBQUMsS0FBRCxDQUFBO2VBQ0Usa0JBQUEsQ0FBbUIsS0FBbkI7TUFERjtJQUQrRCxDQUFGO0dBQS9EOztFQUtBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxXQUF6QyxFQUFzRCxRQUFBLENBQUMsSUFBRCxDQUFBO1dBQ3BELFFBQUEsQ0FBQyxJQUFELEVBQU8sTUFBUCxDQUFBO01BQ0UsSUFBRyxPQUFPLElBQVAsS0FBZSxRQUFmLElBQTRCLE1BQS9CO1FBQ0UsSUFBQSxHQUFPLElBQUksQ0FBQyxPQUFMLENBQWEsSUFBSSxNQUFKLENBQVcsR0FBQSxHQUFNLE1BQU4sR0FBZSxHQUExQixFQUErQixJQUEvQixDQUFiLEVBQW1ELFdBQW5EO0FBQ1AsZUFBTyxJQUFJLENBQUMsV0FBTCxDQUFpQixJQUFJLENBQUMsUUFBTCxDQUFBLENBQWpCLEVBRlQ7O0FBR0EsYUFBTztJQUpUO0VBRG9ELENBQXREOztFQU9BLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxNQUFsQyxDQUF5QyxTQUF6QyxFQUFvRCxRQUFBLENBQUEsQ0FBQTtXQUNsRCxRQUFBLENBQUMsS0FBRCxDQUFBO0FBQ0UsVUFBQSxDQUFBLEVBQUE7TUFBQSxDQUFBLEdBQUksQ0FDRixJQURFLEVBRUYsSUFGRSxFQUdGLElBSEUsRUFJRixJQUpFO01BTUosQ0FBQSxHQUFJLEtBQUEsR0FBUTthQUNaLEtBQUEsR0FBUSxDQUFDLENBQUUsQ0FBQSxDQUFDLENBQUEsR0FBSSxFQUFMLENBQUEsR0FBVyxFQUFYLENBQUYsSUFBb0IsQ0FBRSxDQUFBLENBQUEsQ0FBdEIsSUFBNEIsQ0FBRSxDQUFBLENBQUEsQ0FBL0I7SUFSVjtFQURrRCxDQUFwRDtBQXRCQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInLFxuICBbJ25nQW5pbWF0ZScsICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLFxuICAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ3VpLmJvb3RzdHJhcCcsICdhbmd1bGFyLXBhcmFsbGF4JyxcbiAgJ2luZmluaXRlLXNjcm9sbCcsICdMb2NhbFN0b3JhZ2VNb2R1bGUnLCAncnpNb2R1bGUnLCAnYW5ndWxhci1jbGlwYm9hcmQnLFxuICAnbW9ub3NwYWNlZC5xcmNvZGUnLCAnbmdGaWxlVXBsb2FkJ11cblxuYW5ndWxhci5tb2R1bGUoJ2lkZW50aWZpQW5ndWxhcicpLmZpbHRlciAnZXNjYXBlJywgWyAtPlxuICAoaW5wdXQpIC0+XG4gICAgZW5jb2RlVVJJQ29tcG9uZW50IGVuY29kZVVSSUNvbXBvbmVudChpbnB1dClcbiBdXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuZmlsdGVyICdlbmNvZGVVUklDb21wb25lbnQnLCBbIC0+XG4gIChpbnB1dCkgLT5cbiAgICBlbmNvZGVVUklDb21wb25lbnQgaW5wdXRcbiBdXG5cbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5maWx0ZXIgJ2hpZ2hsaWdodCcsICgkc2NlKSAtPlxuICAodGV4dCwgcGhyYXNlKSAtPlxuICAgIGlmIHR5cGVvZiB0ZXh0ID09ICdzdHJpbmcnIGFuZCBwaHJhc2VcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UobmV3IFJlZ0V4cCgnKCcgKyBwaHJhc2UgKyAnKScsICdnaScpLCAnPGI+JDE8L2I+JylcbiAgICAgIHJldHVybiAkc2NlLnRydXN0QXNIdG1sIHRleHQudG9TdHJpbmcoKVxuICAgIHJldHVybiB0ZXh0XG5cbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5maWx0ZXIgJ29yZGluYWwnLCAtPlxuICAoaW5wdXQpIC0+XG4gICAgcyA9IFtcbiAgICAgICd0aCdcbiAgICAgICdzdCdcbiAgICAgICduZCdcbiAgICAgICdyZCdcbiAgICBdXG4gICAgdiA9IGlucHV0ICUgMTAwXG4gICAgaW5wdXQgKyAoc1sodiAtIDIwKSAlIDEwXSBvciBzW3ZdIG9yIHNbMF0pXG4iXX0=

(function() {
  angular.module('identifiAngular').component('message', {
    bindings: {
      ipfs: '=?',
      msgData: '=',
      pageInfo: '=?'
    },
    templateUrl: 'app/components/message/message.template.html'
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyJjb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsU0FESCxDQUNhLFNBRGIsRUFFSTtJQUFBLFFBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxJQUFOO01BQ0EsT0FBQSxFQUFTLEdBRFQ7TUFFQSxRQUFBLEVBQVU7SUFGVixDQURGO0lBSUEsV0FBQSxFQUFhO0VBSmIsQ0FGSjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbiAgLmNvbXBvbmVudCAnbWVzc2FnZScsXG4gICAgYmluZGluZ3M6XG4gICAgICBpcGZzOiAnPT8nXG4gICAgICBtc2dEYXRhOiAnPSdcbiAgICAgIHBhZ2VJbmZvOiAnPT8nXG4gICAgdGVtcGxhdGVVcmw6ICdhcHAvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UudGVtcGxhdGUuaHRtbCdcbiJdfQ==

(function() {
  angular.module('identifiAngular').directive('acmeMalarkey', function() {
    var MalarkeyController, directive, linkFunc;
    MalarkeyController = function($log, githubContributor) {
      'ngInject';
      var activate, getContributors, vm;
      vm = this;
      activate = function() {
        return getContributors().then(function() {
          $log.info('Activated Contributors View');
        });
      };
      getContributors = function() {
        return githubContributor.getContributors(10).then(function(data) {
          vm.contributors = data;
          return vm.contributors;
        });
      };
      vm.contributors = [];
      activate();
    };
    linkFunc = function(scope, el, attr, vm) {
      var typist, watcher;
      watcher = void 0;
      typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });
      el.addClass('acme-malarkey');
      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause()["delete"]();
      });
      watcher = scope.$watch('vm.contributors', function() {
        angular.forEach(vm.contributors, function(contributor) {
          typist.type(contributor.login).pause()["delete"]();
        });
      });
      scope.$on('$destroy', function() {
        watcher();
      });
    };
    return directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc,
      controller: MalarkeyController,
      controllerAs: 'vm'
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9tYWxhcmtleS9tYWxhcmtleS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFsYXJrZXkvbWFsYXJrZXkuZGlyZWN0aXZlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDRSxDQUFDLFNBREgsQ0FDYSxjQURiLEVBQzZCLFNBQUE7QUFFekIsUUFBQTtJQUFBLGtCQUFBLEdBQXFCLFNBQUMsSUFBRCxFQUFPLGlCQUFQO01BQ25CO0FBQUEsVUFBQTtNQUNBLEVBQUEsR0FBSztNQUVMLFFBQUEsR0FBVyxTQUFBO2VBQ1QsZUFBQSxDQUFBLENBQWlCLENBQUMsSUFBbEIsQ0FBdUIsU0FBQTtVQUNyQixJQUFJLENBQUMsSUFBTCxDQUFVLDZCQUFWO1FBRHFCLENBQXZCO01BRFM7TUFLWCxlQUFBLEdBQWtCLFNBQUE7ZUFDaEIsaUJBQWlCLENBQUMsZUFBbEIsQ0FBa0MsRUFBbEMsQ0FBcUMsQ0FBQyxJQUF0QyxDQUEyQyxTQUFDLElBQUQ7VUFDekMsRUFBRSxDQUFDLFlBQUgsR0FBa0I7aUJBQ2xCLEVBQUUsQ0FBQztRQUZzQyxDQUEzQztNQURnQjtNQUtsQixFQUFFLENBQUMsWUFBSCxHQUFrQjtNQUNsQixRQUFBLENBQUE7SUFmbUI7SUFrQnJCLFFBQUEsR0FBVyxTQUFDLEtBQUQsRUFBUSxFQUFSLEVBQVksSUFBWixFQUFrQixFQUFsQjtBQUNULFVBQUE7TUFBQSxPQUFBLEdBQVU7TUFDVixNQUFBLEdBQVMsUUFBQSxDQUFTLEVBQUcsQ0FBQSxDQUFBLENBQVosRUFDUDtRQUFBLFNBQUEsRUFBVyxFQUFYO1FBQ0EsV0FBQSxFQUFhLEVBRGI7UUFFQSxVQUFBLEVBQVksR0FGWjtRQUdBLElBQUEsRUFBTSxJQUhOO1FBSUEsT0FBQSxFQUFTLEdBSlQ7T0FETztNQU1ULEVBQUUsQ0FBQyxRQUFILENBQVksZUFBWjtNQUNBLE9BQU8sQ0FBQyxPQUFSLENBQWdCLEtBQUssQ0FBQyxXQUF0QixFQUFtQyxTQUFDLEtBQUQ7UUFDakMsTUFBTSxDQUFDLElBQVAsQ0FBWSxLQUFaLENBQWtCLENBQUMsS0FBbkIsQ0FBQSxDQUEwQixFQUFDLE1BQUQsRUFBMUIsQ0FBQTtNQURpQyxDQUFuQztNQUdBLE9BQUEsR0FBVSxLQUFLLENBQUMsTUFBTixDQUFhLGlCQUFiLEVBQWdDLFNBQUE7UUFDeEMsT0FBTyxDQUFDLE9BQVIsQ0FBZ0IsRUFBRSxDQUFDLFlBQW5CLEVBQWlDLFNBQUMsV0FBRDtVQUMvQixNQUFNLENBQUMsSUFBUCxDQUFZLFdBQVcsQ0FBQyxLQUF4QixDQUE4QixDQUFDLEtBQS9CLENBQUEsQ0FBc0MsRUFBQyxNQUFELEVBQXRDLENBQUE7UUFEK0IsQ0FBakM7TUFEd0MsQ0FBaEM7TUFNVixLQUFLLENBQUMsR0FBTixDQUFVLFVBQVYsRUFBc0IsU0FBQTtRQUNwQixPQUFBLENBQUE7TUFEb0IsQ0FBdEI7SUFsQlM7V0F1QlgsU0FBQSxHQUNFO01BQUEsUUFBQSxFQUFVLEdBQVY7TUFDQSxLQUFBLEVBQU87UUFBQSxXQUFBLEVBQWEsR0FBYjtPQURQO01BRUEsUUFBQSxFQUFVLFFBRlY7TUFHQSxJQUFBLEVBQU0sUUFITjtNQUlBLFVBQUEsRUFBWSxrQkFKWjtNQUtBLFlBQUEsRUFBYyxJQUxkOztFQTVDdUIsQ0FEN0I7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInXG4gIC5kaXJlY3RpdmUgJ2FjbWVNYWxhcmtleScsIC0+XG5cbiAgICBNYWxhcmtleUNvbnRyb2xsZXIgPSAoJGxvZywgZ2l0aHViQ29udHJpYnV0b3IpIC0+XG4gICAgICAnbmdJbmplY3QnXG4gICAgICB2bSA9IHRoaXNcblxuICAgICAgYWN0aXZhdGUgPSAtPlxuICAgICAgICBnZXRDb250cmlidXRvcnMoKS50aGVuIC0+XG4gICAgICAgICAgJGxvZy5pbmZvICdBY3RpdmF0ZWQgQ29udHJpYnV0b3JzIFZpZXcnXG4gICAgICAgICAgcmV0dXJuXG5cbiAgICAgIGdldENvbnRyaWJ1dG9ycyA9IC0+XG4gICAgICAgIGdpdGh1YkNvbnRyaWJ1dG9yLmdldENvbnRyaWJ1dG9ycygxMCkudGhlbiAoZGF0YSkgLT5cbiAgICAgICAgICB2bS5jb250cmlidXRvcnMgPSBkYXRhXG4gICAgICAgICAgdm0uY29udHJpYnV0b3JzXG5cbiAgICAgIHZtLmNvbnRyaWJ1dG9ycyA9IFtdXG4gICAgICBhY3RpdmF0ZSgpXG4gICAgICByZXR1cm5cblxuICAgIGxpbmtGdW5jID0gKHNjb3BlLCBlbCwgYXR0ciwgdm0pIC0+XG4gICAgICB3YXRjaGVyID0gdW5kZWZpbmVkXG4gICAgICB0eXBpc3QgPSBtYWxhcmtleShlbFswXSxcbiAgICAgICAgdHlwZVNwZWVkOiA0MFxuICAgICAgICBkZWxldGVTcGVlZDogNDBcbiAgICAgICAgcGF1c2VEZWxheTogODAwXG4gICAgICAgIGxvb3A6IHRydWVcbiAgICAgICAgcG9zdGZpeDogJyAnKVxuICAgICAgZWwuYWRkQ2xhc3MgJ2FjbWUtbWFsYXJrZXknXG4gICAgICBhbmd1bGFyLmZvckVhY2ggc2NvcGUuZXh0cmFWYWx1ZXMsICh2YWx1ZSkgLT5cbiAgICAgICAgdHlwaXN0LnR5cGUodmFsdWUpLnBhdXNlKCkuZGVsZXRlKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB3YXRjaGVyID0gc2NvcGUuJHdhdGNoKCd2bS5jb250cmlidXRvcnMnLCAtPlxuICAgICAgICBhbmd1bGFyLmZvckVhY2ggdm0uY29udHJpYnV0b3JzLCAoY29udHJpYnV0b3IpIC0+XG4gICAgICAgICAgdHlwaXN0LnR5cGUoY29udHJpYnV0b3IubG9naW4pLnBhdXNlKCkuZGVsZXRlKClcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgcmV0dXJuXG4gICAgICApXG4gICAgICBzY29wZS4kb24gJyRkZXN0cm95JywgLT5cbiAgICAgICAgd2F0Y2hlcigpXG4gICAgICAgIHJldHVyblxuICAgICAgcmV0dXJuXG5cbiAgICBkaXJlY3RpdmUgPVxuICAgICAgcmVzdHJpY3Q6ICdFJ1xuICAgICAgc2NvcGU6IGV4dHJhVmFsdWVzOiAnPSdcbiAgICAgIHRlbXBsYXRlOiAnJm5ic3A7J1xuICAgICAgbGluazogbGlua0Z1bmNcbiAgICAgIGNvbnRyb2xsZXI6IE1hbGFya2V5Q29udHJvbGxlclxuICAgICAgY29udHJvbGxlckFzOiAndm0nXG4iXX0=

(function() {
  // coffeelint: disable=max_line_length
  angular.module('identifiAngular').directive('identicon', function() {
    return {
      scope: {
        identity: '=',
        ipfs: '='
      },
      link: function(scope, element, attrs) {
        var update;
        attrs.showDistance = typeof attrs.showDistance === 'undefined' ? true : !!parseInt(attrs.showDistance);
        attrs.border = isNaN(attrs.border) ? 3 : attrs.border;
        update = function() {
          var identicon;
          if (scope.identity && scope.identity.identicon) {
            identicon = scope.identity.identicon(attrs.width, attrs.border, attrs.showDistance, scope.ipfs);
            element.empty();
            return element.append(identicon);
          }
        };
        return scope.$watchGroup(['identity'], update);
      }
    };
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9pZGVudGljb24vaWRlbnRpY29uLmRpcmVjdGl2ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDRSxDQUFDLFNBREgsQ0FDYSxXQURiLEVBQzBCLFFBQUEsQ0FBQSxDQUFBO1dBQ3RCO01BQUEsS0FBQSxFQUNFO1FBQUEsUUFBQSxFQUFVLEdBQVY7UUFDQSxJQUFBLEVBQU07TUFETixDQURGO01BR0EsSUFBQSxFQUFNLFFBQUEsQ0FBQyxLQUFELEVBQVEsT0FBUixFQUFpQixLQUFqQixDQUFBO0FBQ0osWUFBQTtRQUFBLEtBQUssQ0FBQyxZQUFOLEdBQXdCLE9BQU8sS0FBSyxDQUFDLFlBQWIsS0FBNkIsV0FBaEMsR0FBaUQsSUFBakQsR0FBMkQsQ0FBQyxDQUFDLFFBQUEsQ0FBUyxLQUFLLENBQUMsWUFBZjtRQUNsRixLQUFLLENBQUMsTUFBTixHQUFrQixLQUFBLENBQU0sS0FBSyxDQUFDLE1BQVosQ0FBSCxHQUE0QixDQUE1QixHQUFtQyxLQUFLLENBQUM7UUFDeEQsTUFBQSxHQUFTLFFBQUEsQ0FBQSxDQUFBO0FBQ1AsY0FBQTtVQUFBLElBQUcsS0FBSyxDQUFDLFFBQU4sSUFBa0IsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFwQztZQUNFLFNBQUEsR0FBWSxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQWYsQ0FBeUIsS0FBSyxDQUFDLEtBQS9CLEVBQXNDLEtBQUssQ0FBQyxNQUE1QyxFQUFvRCxLQUFLLENBQUMsWUFBMUQsRUFBd0UsS0FBSyxDQUFDLElBQTlFO1lBQ1osT0FBTyxDQUFDLEtBQVIsQ0FBQTttQkFDQSxPQUFPLENBQUMsTUFBUixDQUFlLFNBQWYsRUFIRjs7UUFETztlQUtULEtBQUssQ0FBQyxXQUFOLENBQWtCLENBQUMsVUFBRCxDQUFsQixFQUFnQyxNQUFoQztNQVJJO0lBSE47RUFEc0IsQ0FEMUI7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIiMgY29mZmVlbGludDogZGlzYWJsZT1tYXhfbGluZV9sZW5ndGhcbmFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInXG4gIC5kaXJlY3RpdmUgJ2lkZW50aWNvbicsIC0+XG4gICAgc2NvcGU6XG4gICAgICBpZGVudGl0eTogJz0nXG4gICAgICBpcGZzOiAnPSdcbiAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzKSAtPlxuICAgICAgYXR0cnMuc2hvd0Rpc3RhbmNlID0gaWYgdHlwZW9mIGF0dHJzLnNob3dEaXN0YW5jZSA9PSAndW5kZWZpbmVkJyB0aGVuIHRydWUgZWxzZSAhIXBhcnNlSW50KGF0dHJzLnNob3dEaXN0YW5jZSlcbiAgICAgIGF0dHJzLmJvcmRlciA9IGlmIGlzTmFOKGF0dHJzLmJvcmRlcikgdGhlbiAzIGVsc2UgYXR0cnMuYm9yZGVyXG4gICAgICB1cGRhdGUgPSAtPlxuICAgICAgICBpZiBzY29wZS5pZGVudGl0eSAmJiBzY29wZS5pZGVudGl0eS5pZGVudGljb25cbiAgICAgICAgICBpZGVudGljb24gPSBzY29wZS5pZGVudGl0eS5pZGVudGljb24oYXR0cnMud2lkdGgsIGF0dHJzLmJvcmRlciwgYXR0cnMuc2hvd0Rpc3RhbmNlLCBzY29wZS5pcGZzKVxuICAgICAgICAgIGVsZW1lbnQuZW1wdHkoKVxuICAgICAgICAgIGVsZW1lbnQuYXBwZW5kKGlkZW50aWNvbilcbiAgICAgIHNjb3BlLiR3YXRjaEdyb3VwIFsnaWRlbnRpdHknXSwgdXBkYXRlXG4iXX0=

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9mb2N1cy9mb2N1cy5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLGlCQUFmLENBQ0EsQ0FBQyxTQURELENBQ1csU0FEWCxFQUNzQixRQUFBLENBQUEsQ0FBQTtXQUNwQixRQUFBLENBQUMsS0FBRCxFQUFRLElBQVIsRUFBYyxJQUFkLENBQUE7TUFDRSxLQUFLLENBQUMsR0FBTixDQUFVLFNBQVYsRUFBcUIsUUFBQSxDQUFDLENBQUQsRUFBSSxJQUFKLENBQUE7UUFDbkIsSUFBRyxJQUFBLEtBQVEsSUFBSSxDQUFDLE9BQWhCO1VBQ0UsSUFBSyxDQUFBLENBQUEsQ0FBRSxDQUFDLEtBQVIsQ0FBQSxFQURGOztNQURtQixDQUFyQjtJQURGO0VBRG9CLENBRHRCOztFQVNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDQSxDQUFDLE9BREQsQ0FDUyxPQURULEVBQ2tCLFFBQUEsQ0FBQyxVQUFELEVBQWEsUUFBYixDQUFBO1dBQ2hCLFFBQUEsQ0FBQyxJQUFELENBQUE7TUFDRSxRQUFBLENBQVMsUUFBQSxDQUFBLENBQUE7UUFDUCxVQUFVLENBQUMsVUFBWCxDQUFzQixTQUF0QixFQUFpQyxJQUFqQztNQURPLENBQVQ7SUFERjtFQURnQixDQURsQjtBQVRBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbi5kaXJlY3RpdmUgJ2ZvY3VzT24nLCAtPlxuICAoc2NvcGUsIGVsZW0sIGF0dHIpIC0+XG4gICAgc2NvcGUuJG9uICdmb2N1c09uJywgKGUsIG5hbWUpIC0+XG4gICAgICBpZiBuYW1lID09IGF0dHIuZm9jdXNPblxuICAgICAgICBlbGVtWzBdLmZvY3VzKClcbiAgICAgIHJldHVyblxuICAgIHJldHVyblxuXG5hbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuLmZhY3RvcnkgJ2ZvY3VzJywgKCRyb290U2NvcGUsICR0aW1lb3V0KSAtPlxuICAobmFtZSkgLT5cbiAgICAkdGltZW91dCAtPlxuICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0ICdmb2N1c09uJywgbmFtZVxuICAgICAgcmV0dXJuXG4gICAgcmV0dXJuXG4iXX0=

(function() {
  // Messages service used to communicate with Messages REST endpoints
  angular.module('identifiAngular').factory('Messages', [
    '$resource',
    '$location',
    function($resource,
    $location) {
      var host,
    path;
      path = $location.absUrl();
      host = path.match(/\/ip[nf]s\//) ? 'https://identi.fi/' : '';
      return $resource(host + 'api/messages/:id');
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuc2VydmljZS5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuc2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtFQUNBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxPQUFsQyxDQUEwQyxVQUExQyxFQUFzRDtJQUNwRCxXQURvRDtJQUVwRCxXQUZvRDtJQUdwRCxRQUFBLENBQUMsU0FBRDtJQUFZLFNBQVosQ0FBQTtBQUNFLFVBQUEsSUFBQTtJQUFBO01BQUEsSUFBQSxHQUFPLFNBQVMsQ0FBQyxNQUFWLENBQUE7TUFDUCxJQUFBLEdBQVUsSUFBSSxDQUFDLEtBQUwsQ0FBVyxhQUFYLENBQUgsR0FBaUMsb0JBQWpDLEdBQTJEO2FBQ2xFLFNBQUEsQ0FBVSxJQUFBLEdBQU8sa0JBQWpCO0lBSEYsQ0FIb0Q7R0FBdEQ7QUFEQSIsInNvdXJjZXNDb250ZW50IjpbIiMgTWVzc2FnZXMgc2VydmljZSB1c2VkIHRvIGNvbW11bmljYXRlIHdpdGggTWVzc2FnZXMgUkVTVCBlbmRwb2ludHNcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5mYWN0b3J5ICdNZXNzYWdlcycsIFtcbiAgJyRyZXNvdXJjZSdcbiAgJyRsb2NhdGlvbidcbiAgKCRyZXNvdXJjZSwgJGxvY2F0aW9uKSAtPlxuICAgIHBhdGggPSAkbG9jYXRpb24uYWJzVXJsKClcbiAgICBob3N0ID0gaWYgcGF0aC5tYXRjaCAvXFwvaXBbbmZdc1xcLy8gdGhlbiAnaHR0cHM6Ly9pZGVudGkuZmkvJyBlbHNlICcnXG4gICAgJHJlc291cmNlIGhvc3QgKyAnYXBpL21lc3NhZ2VzLzppZCdcbl1cbiJdfQ==

(function() {
  'use strict';
  var hasProp = {}.hasOwnProperty;

  // Messages controller
  angular.module('identifiAngular').controller('MessagesController', [
    '$scope',
    '$rootScope',
    '$window',
    '$stateParams',
    '$location',
    '$http',
    // 'Authentication'
    'Messages',
    'config',
    '$timeout',
    'localStorageService',
    function($scope,
    $rootScope,
    $window,
    $stateParams,
    $location,
    $http,
    Messages,
    config,
    $timeout,
    localStorageService) { //, Authentication
      $scope.idType = $stateParams.type;
      $scope.idValue = $stateParams.value;
      $scope.filters.type = 'rating';
      $scope.resetMsgs = function() {
        var msgs,
    prop,
    value;
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
        return new Array(Math.max(1,
    Math.abs(rating)));
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
        // Get latest messages from ipfs index
        searchKey = '';
        if ($scope.msgs.list.length) {
          searchKey = $scope.msgs.list[$scope.msgs.list.length - 1].searchKey;
        }
        return $scope.identifiIndex.messagesByTimestamp.searchText('',
    $scope.filters.limit,
    searchKey,
    true).then(function(res) { // TODO: implement in identifi-lib
          var i,
    len,
    m,
    messages,
    pair,
    ref,
    ref1;
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
          Array.prototype.push.apply($scope.msgs.list,
    messages);
          if (res.length < $scope.filters.limit - 1) { // bug
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
        angular.extend($scope.filters,
    filters);
        $scope.resetMsgs();
        return $timeout(function() {
          return $rootScope.$broadcast('msgScrollCheck');
        });
      };
      // Find existing Message
      $scope.findOne = function() {
        var hash,
    processResponse;
        if ($stateParams.id) {
          hash = $stateParams.id;
          processResponse = function() {
            $scope.processMessages([$scope.message],
    {},
    true);
            $scope.setPageTitle('Message ' + hash);
            $scope.setMsgRawData($scope.message);
            $scope.message.signerKeyHash = $scope.message.getSignerKeyID();
            return $scope.identifiIndex.get($scope.message.signerKeyHash,
    'keyID').then(function(profile) {
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
          return $scope.$watch('apiReady',
    function(isReady) {
            if (isReady) {
              if (hash.match(/^Qm[1-9A-Za-z]{40,50}$/)) { // looks like an ipfs address
                return $scope.ipfsGet(hash).then(function(res) {
                  $scope.message = $window.identifiLib.Message.fromJws(res);
                  $scope.message.ipfs_hash = hash;
                  return processResponse();
                }).catch(function(e) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtBQUFBLE1BQUEsMkJBQUE7OztFQUVBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FBaUMsQ0FBQyxVQUFsQyxDQUE2QyxvQkFBN0MsRUFBbUU7SUFDakUsUUFEaUU7SUFFakUsWUFGaUU7SUFHakUsU0FIaUU7SUFJakUsY0FKaUU7SUFLakUsV0FMaUU7SUFNakUsT0FOaUU7O0lBUWpFLFVBUmlFO0lBU2pFLFFBVGlFO0lBVWpFLFVBVmlFO0lBV2pFLHFCQVhpRTtJQVlqRSxRQUFBLENBQUMsTUFBRDtJQUFTLFVBQVQ7SUFBcUIsT0FBckI7SUFBOEIsWUFBOUI7SUFBNEMsU0FBNUM7SUFBdUQsS0FBdkQ7SUFBOEQsUUFBOUQ7SUFBd0UsTUFBeEU7SUFBZ0YsUUFBaEY7SUFBMEYsbUJBQTFGLENBQUEsRUFBQTtNQUNFLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLFlBQVksQ0FBQztNQUM3QixNQUFNLENBQUMsT0FBUCxHQUFpQixZQUFZLENBQUM7TUFFOUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFmLEdBQXNCO01BRXRCLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFFBQUEsQ0FBQSxDQUFBO0FBQ2pCLFlBQUEsSUFBQTtJQUFBLElBQUE7SUFBQTtRQUFBLElBQUEsR0FBTyxDQUFBO2VBQ1AsTUFBTSxDQUFDLElBQVAsR0FDRTtVQUFBLE9BQUEsRUFBUyxLQUFUO1VBQ0EsUUFBQSxFQUFVLEtBRFY7VUFFQSxJQUFBOztBQUFhO1lBQUEsS0FBQSxZQUFBOzs7MkJBQU47WUFBTSxDQUFBOzs7UUFGYjtNQUhlO01BTW5CLE1BQU0sQ0FBQyxTQUFQLENBQUE7TUFFQSxNQUFNLENBQUMsU0FBUCxHQUFtQixRQUFBLENBQUMsTUFBRCxDQUFBO2VBQ2pCLElBQUksS0FBSixD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aEUsQ0FBcUUsUUFBQSxDQUFDLE9BQUQsQ0FBQTtjQUNuRSxJQUFBLENBQU8sT0FBUDtnQkFDRSxPQUFBLEdBQVUsSUFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQXhCLENBQWlDO2tCQUFDLEtBQUEsRUFBTTtvQkFBQztzQkFBQyxJQUFBLEVBQU0sT0FBUDtzQkFBZ0IsR0FBQSxFQUFLLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQXBDLENBQUQ7O2dCQUFQLENBQWpDLEVBRFo7O3FCQUVBLE1BQU0sQ0FBQyxNQUFQLENBQWMsUUFBQSxDQUFBLENBQUE7dUJBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFmLEdBQTRCO2NBQS9CLENBQWQ7WUFIbUUsQ0FBckU7VUFMZ0I7aUJBVWxCLE1BQU0sQ0FBQyxNQUFQLENBQWMsVUFBZDtJQUEwQixRQUFBLENBQUMsT0FBRCxDQUFBO1lBQ3hCLElBQUcsT0FBSDtjQUNFLElBQUcsSUFBSSxDQUFDLEtBQUwsQ0FBVyx3QkFBWCxDQUFIO3VCQUNFLE1BQU0sQ0FBQyxPQUFQLENBQWUsSUFBZixDQUFvQixDQUFDLElBQXJCLENBQTBCLFFBQUEsQ0FBQyxHQUFELENBQUE7a0JBQ3hCLE1BQU0sQ0FBQyxPQUFQLEdBQWlCLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQTVCLENBQW9DLEdBQXBDO2tCQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQWYsR0FBMkI7eUJBQzNCLGVBQUEsQ0FBQTtnQkFId0IsQ0FBMUIsQ0FJQSxDQUFDLEtBSkQsQ0FJTyxRQUFBLENBQUMsQ0FBRCxDQUFBO3lCQUNMLE9BQU8sQ0FBQyxHQUFSLENBQVksQ0FBWjtnQkFESyxDQUpQLEVBREY7ZUFERjs7VUFEd0IsQ0FBMUIsRUFaRjs7TUFEZTtJQXJFbkIsQ0FaaUU7R0FBbkU7QUFGQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuIyBNZXNzYWdlcyBjb250cm9sbGVyXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuY29udHJvbGxlciAnTWVzc2FnZXNDb250cm9sbGVyJywgW1xuICAnJHNjb3BlJ1xuICAnJHJvb3RTY29wZSdcbiAgJyR3aW5kb3cnXG4gICckc3RhdGVQYXJhbXMnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgIyAnQXV0aGVudGljYXRpb24nXG4gICdNZXNzYWdlcydcbiAgJ2NvbmZpZydcbiAgJyR0aW1lb3V0J1xuICAnbG9jYWxTdG9yYWdlU2VydmljZSdcbiAgKCRzY29wZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHN0YXRlUGFyYW1zLCAkbG9jYXRpb24sICRodHRwLCBNZXNzYWdlcywgY29uZmlnLCAkdGltZW91dCwgbG9jYWxTdG9yYWdlU2VydmljZSkgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuaWRUeXBlID0gJHN0YXRlUGFyYW1zLnR5cGVcbiAgICAkc2NvcGUuaWRWYWx1ZSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuXG4gICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9ICdyYXRpbmcnXG5cbiAgICAkc2NvcGUucmVzZXRNc2dzID0gLT5cbiAgICAgIG1zZ3MgPSB7fVxuICAgICAgJHNjb3BlLm1zZ3MgPVxuICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICBmaW5pc2hlZDogZmFsc2VcbiAgICAgICAgbGlzdDogKHZhbHVlIGZvciBvd24gcHJvcCwgdmFsdWUgb2YgbXNncylcbiAgICAkc2NvcGUucmVzZXRNc2dzKClcblxuICAgICRzY29wZS5pY29uQ291bnQgPSAocmF0aW5nKSAtPlxuICAgICAgbmV3IEFycmF5KE1hdGgubWF4KDEsIE1hdGguYWJzKHJhdGluZykpKVxuXG4gICAgJHNjb3BlLmljb25TdHlsZSA9IChyYXRpbmcpIC0+XG4gICAgICBpY29uU3R5bGUgPSAnbmV1dHJhbCdcbiAgICAgIGlmIHJhdGluZyA+IDBcbiAgICAgICAgaWNvblN0eWxlID0gJ3Bvc2l0aXZlJ1xuICAgICAgZWxzZSBpZiByYXRpbmcgPCAwXG4gICAgICAgIGljb25TdHlsZSA9ICduZWdhdGl2ZSdcbiAgICAgIGljb25TdHlsZVxuXG4gICAgJHNjb3BlLmljb25DbGFzcyA9IChyYXRpbmcpIC0+XG4gICAgICBpY29uU3R5bGUgPSAnZ2x5cGhpY29uLXF1ZXN0aW9uLXNpZ24nXG4gICAgICBpZiByYXRpbmcgPiAwXG4gICAgICAgIGljb25TdHlsZSA9ICdnbHlwaGljb24tdGh1bWJzLXVwJ1xuICAgICAgZWxzZSBpZiByYXRpbmcgPCAwXG4gICAgICAgIGljb25TdHlsZSA9ICdnbHlwaGljb24tdGh1bWJzLWRvd24nXG4gICAgICBpY29uU3R5bGVcblxuICAgICRzY29wZS5jb2xsYXBzZUZpbHRlcnMgPSAkd2luZG93LmlubmVyV2lkdGggPCA5OTJcblxuICAgICRzY29wZS5maW5kID0gLT5cbiAgICAgIHJldHVybiBpZiAkc2NvcGUubXNncy5sb2FkaW5nXG4gICAgICAkc2NvcGUubXNncy5sb2FkaW5nID0gdHJ1ZVxuICAgICAgIyBHZXQgbGF0ZXN0IG1lc3NhZ2VzIGZyb20gaXBmcyBpbmRleFxuICAgICAgc2VhcmNoS2V5ID0gJydcbiAgICAgIGlmICRzY29wZS5tc2dzLmxpc3QubGVuZ3RoXG4gICAgICAgIHNlYXJjaEtleSA9ICRzY29wZS5tc2dzLmxpc3RbJHNjb3BlLm1zZ3MubGlzdC5sZW5ndGggLSAxXS5zZWFyY2hLZXlcbiAgICAgICRzY29wZS5pZGVudGlmaUluZGV4Lm1lc3NhZ2VzQnlUaW1lc3RhbXAuc2VhcmNoVGV4dCgnJywgJHNjb3BlLmZpbHRlcnMubGltaXQsIHNlYXJjaEtleSwgdHJ1ZSkgIyBUT0RPOiBpbXBsZW1lbnQgaW4gaWRlbnRpZmktbGliXG4gICAgICAudGhlbiAocmVzKSAtPlxuICAgICAgICBtZXNzYWdlcyA9IFtdXG4gICAgICAgIGZvciBwYWlyIGluIHJlc1xuICAgICAgICAgIG0gPSAkd2luZG93LmlkZW50aWZpTGliLk1lc3NhZ2UuZnJvbUp3cyhwYWlyLnZhbHVlLmp3cylcbiAgICAgICAgICBtLmlwZnNfaGFzaCA9IHBhaXIudmFsdWUuaXBmc19oYXNoXG4gICAgICAgICAgbS5hdXRob3JQb3MgPSBwYWlyLnZhbHVlLmF1dGhvcl9wb3NcbiAgICAgICAgICBtLmF1dGhvck5lZyA9IHBhaXIudmFsdWUuYXV0aG9yX25lZ1xuICAgICAgICAgIG0uYXV0aG9yVHJ1c3REaXN0YW5jZSA9IHBhaXIudmFsdWUuZGlzdGFuY2VcbiAgICAgICAgICBtLmF1dGhvck5hbWUgPSBwYWlyLnZhbHVlLmF1dGhvcl9uYW1lXG4gICAgICAgICAgbS5zZWFyY2hLZXkgPSBwYWlyLmtleVxuICAgICAgICAgIG0uaXNWZXJpZmljYXRpb24gPSBtLnNpZ25lZERhdGEudHlwZSBpbiBbJ3ZlcmlmaWNhdGlvbicsICd2ZXJpZnlfaWRlbnRpdHknXVxuICAgICAgICAgIG0uaXNVbnZlcmlmaWNhdGlvbiA9IG0uc2lnbmVkRGF0YS50eXBlIGluIFsndW52ZXJpZmljYXRpb24nLCAndW52ZXJpZnlfaWRlbnRpdHknXVxuICAgICAgICAgIG1lc3NhZ2VzLnB1c2gobSlcbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBtZXNzYWdlc1xuICAgICAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSgkc2NvcGUubXNncy5saXN0LCBtZXNzYWdlcylcbiAgICAgICAgaWYgcmVzLmxlbmd0aCA8ICRzY29wZS5maWx0ZXJzLmxpbWl0IC0gMSAjIGJ1Z1xuICAgICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLm1zZ3MuZmluaXNoZWQgPSB0cnVlXG4gICAgICAgICRzY29wZS4kYXBwbHkgLT4gJHNjb3BlLm1zZ3MubG9hZGluZyA9IGZhbHNlXG5cbiAgICAkc2NvcGUuc2V0RmlsdGVycyA9IChmaWx0ZXJzKSAtPlxuICAgICAgY29uc29sZS5sb2cgJ3NldEZpbHRlcnMnXG4gICAgICBhbmd1bGFyLmV4dGVuZCAkc2NvcGUuZmlsdGVycywgZmlsdGVyc1xuICAgICAgJHNjb3BlLnJlc2V0TXNncygpXG4gICAgICAkdGltZW91dCAtPiAkcm9vdFNjb3BlLiRicm9hZGNhc3QgJ21zZ1Njcm9sbENoZWNrJ1xuXG4gICAgIyBGaW5kIGV4aXN0aW5nIE1lc3NhZ2VcbiAgICAkc2NvcGUuZmluZE9uZSA9IC0+XG4gICAgICBpZiAkc3RhdGVQYXJhbXMuaWRcbiAgICAgICAgaGFzaCA9ICRzdGF0ZVBhcmFtcy5pZFxuICAgICAgICBwcm9jZXNzUmVzcG9uc2UgPSAtPlxuICAgICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMoWyRzY29wZS5tZXNzYWdlXSwge30sIHRydWUpXG4gICAgICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSAnTWVzc2FnZSAnICsgaGFzaFxuICAgICAgICAgICRzY29wZS5zZXRNc2dSYXdEYXRhKCRzY29wZS5tZXNzYWdlKVxuICAgICAgICAgICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUhhc2ggPSAkc2NvcGUubWVzc2FnZS5nZXRTaWduZXJLZXlJRCgpXG4gICAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0KCRzY29wZS5tZXNzYWdlLnNpZ25lcktleUhhc2gsICdrZXlJRCcpLnRoZW4gKHByb2ZpbGUpIC0+XG4gICAgICAgICAgICB1bmxlc3MgcHJvZmlsZVxuICAgICAgICAgICAgICBwcm9maWxlID0gbmV3ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkoe2F0dHJzOlt7bmFtZTogJ2tleUlEJywgdmFsOiAkc2NvcGUubWVzc2FnZS5zaWduZXJLZXlIYXNofV19KVxuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5ID0gcHJvZmlsZVxuXG4gICAgICAgICRzY29wZS4kd2F0Y2ggJ2FwaVJlYWR5JywgKGlzUmVhZHkpIC0+XG4gICAgICAgICAgaWYgaXNSZWFkeVxuICAgICAgICAgICAgaWYgaGFzaC5tYXRjaCAvXlFtWzEtOUEtWmEtel17NDAsNTB9JC8gIyBsb29rcyBsaWtlIGFuIGlwZnMgYWRkcmVzc1xuICAgICAgICAgICAgICAkc2NvcGUuaXBmc0dldChoYXNoKS50aGVuIChyZXMpIC0+XG4gICAgICAgICAgICAgICAgJHNjb3BlLm1lc3NhZ2UgPSAkd2luZG93LmlkZW50aWZpTGliLk1lc3NhZ2UuZnJvbUp3cyhyZXMpXG4gICAgICAgICAgICAgICAgJHNjb3BlLm1lc3NhZ2UuaXBmc19oYXNoID0gaGFzaFxuICAgICAgICAgICAgICAgIHByb2Nlc3NSZXNwb25zZSgpXG4gICAgICAgICAgICAgIC5jYXRjaCAoZSkgLT5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyBlXG5cbiAgICByZXR1cm5cbl1cbiJdfQ==

(function() {
  'use strict';
  angular.module('identifiAngular').controller('MainController', [
    '$scope',
    '$rootScope',
    '$location',
    '$http',
    '$state',
    'config',
    'localStorageService',
    '$uibModal',
    '$window',
    '$q',
    'focus',
    //'Authentication'
    //'Menus'
    //'Persona'
    function($scope,
    $rootScope,
    $location,
    $http,
    $state,
    config,
    localStorageService,
    $uibModal,
    $window,
    $q,
    focus) { // Authentication, Menus, Persona
      var privateKey,
    scrollTo,
    setIndex;
      $scope.gun = new Gun(['http://localhost:8765/gun',
    'https://identifi.herokuapp.com/gun']);
      // set authentication
      $scope.authentication = {}; // Authentication
      $scope.ipfsRoot = 'https://identi.fi'; // used for profile / cover photos
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
        start: true,
        repo: 'ipfs7-identifi'
      });
      $scope.loginWithKey = function(privateKeySerialized) {
        $scope.privateKey = $window.identifiLib.Key.fromJwk(privateKeySerialized);
        localStorageService.set('identifiKey',
    privateKeySerialized);
        $scope.authentication.user = {
          idType: 'keyID',
          idValue: $scope.privateKey.keyID
        };
        if ($scope.loginModal) {
          $scope.loginModal.close();
        }
        return $scope.$watch('apiReady',
    function(isReady) {
          if (isReady) {
            return $scope.identifiIndex.get($scope.privateKey.keyID,
    'keyID').then(function(identity) {
              if (identity) {
                return $scope.authentication.identity = identity;
              } else {
                return $scope.authentication.identity = $window.identifiLib.Identity.create($scope.gun.get('identifi').get('identities'),
    {
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
      $scope.ipfs.on('ready',
    function() {
        $scope.ipfsReady = true;
        return $window.ipfs = $scope.ipfs;
      });
      setIndex = function(results) {
        $scope.identifiIndex = results;
        console.log('Got index',
    $scope.identifiIndex);
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
      // $window.identifiLib.Index.create($scope.gun.get('identifi')).then(setIndex)
      setIndex(new $window.identifiLib.Index($scope.gun.get('identifi')));
      $scope.setPageTitle = function(title) {
        $rootScope.pageTitle = 'Identifi';
        if (title) {
          return $rootScope.pageTitle += ' - ' + title;
        }
      };
      $scope.ipfsGet = function(uri,
    getJson) {
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
            return $scope.ipfs.on('ready',
    function() {
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
      // Create new Message
      $scope.createMessage = function(event,
    params,
    id) {
        var message,
    options;
        if (event) {
          event.stopPropagation();
        }
        // Create new Message object
        message = null;
        if (params.type === 'rating') {
          params.maxRating |= 3;
          params.minRating |= -3;
          message = $window.identifiLib.Message.createRating(params,
    $scope.privateKey);
          console.log(message);
        } else {
          message = $window.identifiLib.Message.createVerification(params,
    $scope.privateKey);
        }
        options = {};
        return $scope.identifiIndex.addMessage(message).catch(function(e) { // publishMessage
          console.error(e);
          return $scope.error = e;
        });
      };
      $scope.addAttribute = function() {
        return $location.path('#/identities/create/' + $scope.query.term);
      };
      $scope.login = function() {
        return $scope.filters.max_distance = -1; // because the user doesn't have a trust index yet
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
        return $scope.$on('$stateChangeStart',
    function() {
          return $scope.loginModal.close();
        });
      };
      $scope.openUploadModal = function(callback,
    modalButtonText) {
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
        return $scope.$on('$stateChangeStart',
    function() {
          return $scope.uploadModal.close();
        });
      };
      $scope.uploadFile = function(blob) {
        return new Promise(function(resolve,
    reject) {
          var fileReader;
          console.log('uploading',
    blob);
          fileReader = new FileReader();
          fileReader.onload = function(event) {
            var buffer;
            buffer = $scope.ipfs.types.Buffer.from(event.target.result);
            console.log('buffer',
    buffer);
            return $scope.ipfs.files.add(buffer,
    function(err,
    files) {
              if (err) {
                return reject('adding to ipfs failed',
    err);
              } else {
                resolve(files);
                return console.log('done:',
    err,
    files);
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
      $scope.msgFilter = function(value,
    index,
    array) {
        var data,
    neutralRating;
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
        return msg.strData = JSON.stringify(showRawData,
    void 0,
    2);
      };
      $scope.profileFromData = function(data,
    fallbackId) {
        if (data.attrs && data.attrs.length) {
          return $window.identifiLib.Identity.create($scope.gun.get('identifi').get('identities'),
    {
            attrs: data.attrs
          });
        }
        return $window.identifiLib.Identity.create($scope.gun.get('identifi').get('identities'),
    {
          attrs: [fallbackId]
        });
      };
      $scope.openMessage = function(event,
    message,
    size) {
        var modalInstance,
    t;
        t = event.target;
        if (angular.element(t).closest('a').length) {
          return;
        }
        $scope.setMsgRawData(message);
        $scope.message = message;
        // TODO: check sig
        $scope.message.signerKeyHash = $scope.message.getSignerKeyID();
        $scope.identifiIndex.get($scope.message.signerKeyHash,
    'keyID').then(function(profile) {
          if (!profile) {
            profile = $window.identifiLib.Identity.create($scope.gun.get('identifi').get('identities'),
    {
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
        return $scope.$on('$stateChangeStart',
    function() {
          return modalInstance.close();
        });
      };
      $scope.filters = $scope.filters || config.defaultFilters;
      $scope.isCollapsed = false;
      // $scope.menu = Menus.getMenu('topbar')
      $scope.toggleCollapsibleMenu = function() {
        return $scope.isCollapsed = !$scope.isCollapsed;
      };
      $scope.processMessages = function(messages,
    msgOptions,
    verifySignature) {
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
            msg.author = author;
            if (msg.author) {
              msg.author.gun.get('trustDistance').on(function(d) {
                return msg.authorTrustDistance = d;
              });
            }
            return $scope.$apply(function() {
              var alpha,
    i,
    index,
    maxRatingDiff,
    minRatingDiff,
    neutralRating,
    rating,
    ref,
    ref1,
    signedData,
    smallestIndex;
              // TODO: make sure message signature is checked
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
        return angular.forEach(messages,
    function(msg,
    key) {
          var k,
    v;
          for (k in msgOptions) {
            v = msgOptions[k];
            msg[k] = v;
          }
          return processMessage(msg);
        });
      };
      // Collapsing the menu after navigation
      $scope.$on('$stateChangeSuccess',
    function() {
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
            $window.scrollTo(0,
    pos.top - 60);
          } else if (pos.bottom > $window.pageYOffset + ($window.innerHeight || document.documentElement.clientHeight)) {
            $window.scrollTo(0,
    pos.bottom - ($window.innerHeight || document.documentElement.clientHeight) + 15);
          }
        }
      };
      $scope.setIdentityNames = function(i,
    htmlSafe) {
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
                  i.nickname = i.nickname.replace('<',
    '&lt;');
                }
              }
              if (htmlSafe) {
                return i.primaryName = i.primaryName.replace('<',
    '&lt;');
              }
            }
          });
        });
      };
      $scope.searchRequest = null;
      $scope.search = function(query,
    limit) {
        var cursor,
    searchKey;
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
          $scope.searchRequest = $scope.identifiIndex.search(searchKey,
    void 0,
    limit,
    cursor).then(function(identities) {
            return {identities,
    searchKey};
          });
        } else {
          // TODO: use distance index in identifiLib?
          $scope.searchRequest = $scope.identifiIndex.search(searchKey,
    void 0,
    limit,
    cursor).then(function(identities) {
            return {identities,
    searchKey};
          });
        }
        $scope.searchRequest = $scope.searchRequest.then(function(res) {
          var identities;
          if (res.searchKey !== $scope.searchKey) {
            return;
          }
          identities = res.identities;
          if (limit) {
            identities.splice(limit);
          }
          identities.forEach(function(i) {
            i.gun.on(function(data) {
              i.data = data;
              return i.gun.get('linkTo').once(function(linkTo) {
                return $scope.$apply(function() {
                  return i.linkTo = linkTo;
                });
              });
            });
            return $scope.setIdentityNames(i,
    true);
          });
          searchKey = encodeURIComponent((query || $scope.query.term || '').toLowerCase());
          if (searchKey !== $scope.previousSearchKey) { // search key changed
            return;
          }
          $scope.ids.list = $scope.ids.list || [];
          if (identities.length < limit) {
            $scope.ids.finished = true;
          }
          if (identities.length && $scope.ids.list.length && $scope.getIdKey(identities[0].linkTo) === $scope.getIdKey($scope.ids.list[$scope.ids.list.length - 1].linkTo)) {
            identities.shift(); // Prevent duplicate
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
        var el,
    id,
    wait;
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
            return $state.go('identities.show',
    {
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
            }),
    300);
            $scope.timer = wait;
            break;
        }
      };
      return $scope.dropdownSearchSelect = function(item) {
        $state.go('identities.show',
    {
          type: item.linkTo.name,
          value: item.linkTo.val
        });
        return $scope.query.term = '';
      };
    }
  ]);

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLGdCQUE3QyxFQUErRDtJQUM3RCxRQUQ2RDtJQUU3RCxZQUY2RDtJQUc3RCxXQUg2RDtJQUk3RCxPQUo2RDtJQUs3RCxRQUw2RDtJQU03RCxRQU42RDtJQU83RCxxQkFQNkQ7SUFRN0QsV0FSNkQ7SUFTN0QsU0FUNkQ7SUFVN0QsSUFWNkQ7SUFXN0QsT0FYNkQ7Ozs7SUFnQjdELFFBQUEsQ0FBQyxNQUFEO0lBQVMsVUFBVDtJQUFxQixTQUFyQjtJQUFnQyxLQUFoQztJQUF1QyxNQUF2QztJQUErQyxNQUEvQztJQUNBLG1CQURBO0lBQ3FCLFNBRHJCO0lBQ2dDLE9BRGhDO0lBQ3lDLEVBRHpDO0lBQzZDLEtBRDdDLENBQUEsRUFBQTtBQUVFLFVBQUEsVUFBQTtJQUFBLFFBQUE7SUFBQTtNQUFBLE1BQU0sQ0FBQyxHQUFQLEdBQWEsSUFBSSxHQUFKLENBQVEsQ0FBQywyQkFBRDtJQUE4QixvQ0FBOUIsQ0FBUixFQUFiOztNQUdBLE1BQU0sQ0FBQyxjQUFQLEdBQXdCLENBQUEsRUFIeEI7TUFLQSxNQUFNLENBQUMsUUFBUCxHQUFrQixvQkFMbEI7TUFPQSxNQUFNLENBQUMsUUFBUCxHQUFrQixRQUFBLENBQUMsRUFBRCxDQUFBO1FBQ2hCLElBQUcsS0FBSyxDQUFDLE9BQU4sQ0FBYyxFQUFkLENBQUg7QUFDRSxpQkFBTyxrQkFBQSxDQUFtQixFQUFHLENBQUEsQ0FBQSxDQUF0QixDQUFBLEdBQTRCLEdBQTVCLEdBQWtDLGtCQUFBLENBQW1CLEVBQUcsQ0FBQSxDQUFBLENBQXRCLEVBRDNDO1NBQUEsTUFBQTtBQUdFLGlCQUFPLGtCQUFBLENBQW1CLEVBQUUsQ0FBQyxJQUF0QixDQUFBLEdBQThC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QUQsQ0FBQTtRQUM1QixNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWO0lBQTZCO1VBQUUsSUFBQSxFQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBcEI7VUFBMEIsS0FBQSxFQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFBN0MsQ0FBN0I7ZUFDQSxNQUFNLENBQUMsS0FBSyxDQUFDLElBQWIsR0FBb0I7TUFGUTtJQWxkaEMsQ0FoQjZEO0dBQS9EO0FBREEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5jb250cm9sbGVyICdNYWluQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRyb290U2NvcGUnXG4gICckbG9jYXRpb24nXG4gICckaHR0cCdcbiAgJyRzdGF0ZSdcbiAgJ2NvbmZpZycsXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAnJHVpYk1vZGFsJ1xuICAnJHdpbmRvdydcbiAgJyRxJ1xuICAnZm9jdXMnXG5cbiAgIydBdXRoZW50aWNhdGlvbidcbiAgIydNZW51cydcbiAgIydQZXJzb25hJ1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkbG9jYXRpb24sICRodHRwLCAkc3RhdGUsIGNvbmZpZyxcbiAgbG9jYWxTdG9yYWdlU2VydmljZSwgJHVpYk1vZGFsLCAkd2luZG93LCAkcSwgZm9jdXMpIC0+ICMgQXV0aGVudGljYXRpb24sIE1lbnVzLCBQZXJzb25hXG4gICAgJHNjb3BlLmd1biA9IG5ldyBHdW4oWydodHRwOi8vbG9jYWxob3N0Ojg3NjUvZ3VuJywgJ2h0dHBzOi8vaWRlbnRpZmkuaGVyb2t1YXBwLmNvbS9ndW4nXSlcblxuICAgICMgc2V0IGF1dGhlbnRpY2F0aW9uXG4gICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge30gIyBBdXRoZW50aWNhdGlvblxuXG4gICAgJHNjb3BlLmlwZnNSb290ID0gJ2h0dHBzOi8vaWRlbnRpLmZpJyAjIHVzZWQgZm9yIHByb2ZpbGUgLyBjb3ZlciBwaG90b3NcblxuICAgICRzY29wZS5nZXRJZEtleSA9IChpZCkgLT5cbiAgICAgIGlmIEFycmF5LmlzQXJyYXkoaWQpXG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaWRbMF0pICsgJzonICsgZW5jb2RlVVJJQ29tcG9uZW50KGlkWzFdKVxuICAgICAgZWxzZVxuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGlkLm5hbWUpICsgJzonICsgZW5jb2RlVVJJQ29tcG9uZW50KGlkLnZhbClcblxuICAgICRzY29wZS5xdWVyeSA9IHt9XG4gICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICRzY29wZS5wcmV2aW91c1NlYXJjaEtleSA9ICcnXG4gICAgJHNjb3BlLmlkcyA9IHsgbGlzdDogW10gfVxuICAgICRzY29wZS5waG9uZVJlZ2V4ID0gL15cXCs/XFxkKyQvXG5cbiAgICAkc2NvcGUuaXBmcyA9IG5ldyBJcGZzKFxuICAgICAgaW5pdDogdHJ1ZVxuICAgICAgc3RhcnQ6IHRydWVcbiAgICAgIHJlcG86ICdpcGZzNy1pZGVudGlmaSdcbiAgICApXG5cbiAgICAkc2NvcGUubG9naW5XaXRoS2V5ID0gKHByaXZhdGVLZXlTZXJpYWxpemVkKSAtPlxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSAkd2luZG93LmlkZW50aWZpTGliLktleS5mcm9tSndrKHByaXZhdGVLZXlTZXJpYWxpemVkKVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2lkZW50aWZpS2V5JywgcHJpdmF0ZUtleVNlcmlhbGl6ZWQpXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlciA9XG4gICAgICAgIGlkVHlwZTogJ2tleUlEJ1xuICAgICAgICBpZFZhbHVlOiAkc2NvcGUucHJpdmF0ZUtleS5rZXlJRFxuICAgICAgJHNjb3BlLmxvZ2luTW9kYWwuY2xvc2UoKSBpZiAkc2NvcGUubG9naW5Nb2RhbFxuICAgICAgJHNjb3BlLiR3YXRjaCAnYXBpUmVhZHknLCAoaXNSZWFkeSkgLT5cbiAgICAgICAgaWYgaXNSZWFkeVxuICAgICAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmdldCgkc2NvcGUucHJpdmF0ZUtleS5rZXlJRCwgJ2tleUlEJykudGhlbiAoaWRlbnRpdHkpIC0+XG4gICAgICAgICAgICBpZiBpZGVudGl0eVxuICAgICAgICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkgPSBpZGVudGl0eVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHkgPSAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5LmNyZWF0ZShcbiAgICAgICAgICAgICAgICAkc2NvcGUuZ3VuLmdldCgnaWRlbnRpZmknKS5nZXQoJ2lkZW50aXRpZXMnKSxcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiBbe25hbWU6ICdrZXlJRCcsIHZhbDogJHNjb3BlLnByaXZhdGVLZXkua2V5SUR9XSB9XG4gICAgICAgICAgICAgIClcblxuICAgIHByaXZhdGVLZXkgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnaWRlbnRpZmlLZXknKVxuICAgIGlmIHByaXZhdGVLZXlcbiAgICAgICRzY29wZS5sb2dpbldpdGhLZXkocHJpdmF0ZUtleSlcblxuICAgICRzY29wZS5pcGZzLm9uICdyZWFkeScsIC0+XG4gICAgICAkc2NvcGUuaXBmc1JlYWR5ID0gdHJ1ZVxuICAgICAgJHdpbmRvdy5pcGZzID0gJHNjb3BlLmlwZnNcblxuICAgIHNldEluZGV4ID0gKHJlc3VsdHMpIC0+XG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleCA9IHJlc3VsdHNcbiAgICAgIGNvbnNvbGUubG9nICdHb3QgaW5kZXgnLCAkc2NvcGUuaWRlbnRpZmlJbmRleFxuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0Vmlld3BvaW50KCkudGhlbiAodnApIC0+XG4gICAgICAgICRzY29wZS52aWV3cG9pbnQgPSB2cFxuICAgICAgICAkc2NvcGUudmlld3BvaW50Lmd1bi5nZXQoJ2xpbmtUbycpLm9wZW4gKGxpbmtUbykgLT5cbiAgICAgICAgICAkc2NvcGUudmlld3BvaW50LmxpbmtUbyA9IGxpbmtUb1xuICAgICAgICAkc2NvcGUudmlld3BvaW50Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoYXR0cnMpIC0+XG4gICAgICAgICAgJHNjb3BlLnZpZXdwb2ludC5hdHRycyA9IGF0dHJzXG4gICAgICAgICAgJHNjb3BlLnZpZXdwb2ludC5tb3N0VmVyaWZpZWRBdHRyaWJ1dGVzID0gJHdpbmRvdy5pZGVudGlmaUxpYi5JZGVudGl0eS5nZXRNb3N0VmVyaWZpZWRBdHRyaWJ1dGVzKGF0dHJzKVxuICAgICAgICAkc2NvcGUuYXBpUmVhZHkgPSB0cnVlXG4gICAgICAgIGlmICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5saXN0J1xuICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuXG4gICAgIyAkd2luZG93LmlkZW50aWZpTGliLkluZGV4LmNyZWF0ZSgkc2NvcGUuZ3VuLmdldCgnaWRlbnRpZmknKSkudGhlbihzZXRJbmRleClcbiAgICBzZXRJbmRleCBuZXcgJHdpbmRvdy5pZGVudGlmaUxpYi5JbmRleCgkc2NvcGUuZ3VuLmdldCgnaWRlbnRpZmknKSlcblxuICAgICRzY29wZS5zZXRQYWdlVGl0bGUgPSAodGl0bGUpIC0+XG4gICAgICAkcm9vdFNjb3BlLnBhZ2VUaXRsZSA9ICdJZGVudGlmaSdcbiAgICAgIGlmICh0aXRsZSlcbiAgICAgICAgJHJvb3RTY29wZS5wYWdlVGl0bGUgKz0gJyAtICcgKyB0aXRsZVxuXG4gICAgJHNjb3BlLmlwZnNHZXQgPSAodXJpLCBnZXRKc29uKSAtPlxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlIChyZXNvbHZlKSAtPlxuICAgICAgICBnbyA9IC0+XG4gICAgICAgICAgJHNjb3BlLmlwZnMuZmlsZXMuY2F0KHVyaSkudGhlbiAoZmlsZSkgLT5cbiAgICAgICAgICAgIGZpbGUgPSAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIoZmlsZSlcbiAgICAgICAgICAgIGlmIGdldEpzb25cbiAgICAgICAgICAgICAgZmlsZSA9IEpTT04ucGFyc2UoZmlsZS50b1N0cmluZygpKVxuICAgICAgICAgICAgcmVzb2x2ZSBmaWxlXG5cbiAgICAgICAgaWYgJHNjb3BlLmlwZnNSZWFkeVxuICAgICAgICAgIGdvKClcbiAgICAgICAgZWxzZVxuICAgICAgICAgICRzY29wZS5pcGZzLm9uICdyZWFkeScsIC0+XG4gICAgICAgICAgICBnbygpXG5cbiAgICAkc2NvcGUubmV3TWVzc2FnZSA9XG4gICAgICByYXRpbmc6IDFcbiAgICAgIGNvbW1lbnQ6ICcnXG4gICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbiA9XG4gICAgICB0eXBlOiAnJ1xuICAgICAgdmFsdWU6ICcnXG4gICAgIyBDcmVhdGUgbmV3IE1lc3NhZ2VcbiAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZSA9IChldmVudCwgcGFyYW1zLCBpZCkgLT5cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpIGlmIGV2ZW50XG4gICAgICAjIENyZWF0ZSBuZXcgTWVzc2FnZSBvYmplY3RcbiAgICAgIG1lc3NhZ2UgPSBudWxsXG4gICAgICBpZiBwYXJhbXMudHlwZSA9PSAncmF0aW5nJ1xuICAgICAgICBwYXJhbXMubWF4UmF0aW5nIHw9IDNcbiAgICAgICAgcGFyYW1zLm1pblJhdGluZyB8PSAtM1xuICAgICAgICBtZXNzYWdlID0gJHdpbmRvdy5pZGVudGlmaUxpYi5NZXNzYWdlLmNyZWF0ZVJhdGluZyhwYXJhbXMsICRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgICBjb25zb2xlLmxvZyBtZXNzYWdlXG4gICAgICBlbHNlXG4gICAgICAgIG1lc3NhZ2UgPSAkd2luZG93LmlkZW50aWZpTGliLk1lc3NhZ2UuY3JlYXRlVmVyaWZpY2F0aW9uKHBhcmFtcywgJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICBvcHRpb25zID0ge31cblxuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguYWRkTWVzc2FnZShtZXNzYWdlKSAjIHB1Ymxpc2hNZXNzYWdlXG4gICAgICAuY2F0Y2ggKGUpIC0+XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgICAgJHNjb3BlLmVycm9yID0gZVxuXG4gICAgJHNjb3BlLmFkZEF0dHJpYnV0ZSA9IC0+XG4gICAgICAkbG9jYXRpb24ucGF0aCAnIy9pZGVudGl0aWVzL2NyZWF0ZS8nICsgJHNjb3BlLnF1ZXJ5LnRlcm1cblxuICAgICRzY29wZS5sb2dpbiA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPSAtMSAjIGJlY2F1c2UgdGhlIHVzZXIgZG9lc24ndCBoYXZlIGEgdHJ1c3QgaW5kZXggeWV0XG5cbiAgICAkc2NvcGUub3BlbkxvZ2luTW9kYWwgPSAtPlxuICAgICAgJHNjb3BlLmxvZ2luTW9kYWwgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9sb2dpbi5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiAnbGcnXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgICRzY29wZS5sb2dpbk1vZGFsLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgJHNjb3BlLmxvZ2luTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLm9wZW5VcGxvYWRNb2RhbCA9IChjYWxsYmFjaywgbW9kYWxCdXR0b25UZXh0KSAtPlxuICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsQ2FsbGJhY2sgPSBjYWxsYmFja1xuICAgICAgJHNjb3BlLm1vZGFsQnV0dG9uVGV4dCA9IG1vZGFsQnV0dG9uVGV4dCBvciAnVXBsb2FkJ1xuICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsID0gJHVpYk1vZGFsLm9wZW4oXG4gICAgICAgIGFuaW1hdGlvbjogJHNjb3BlLmFuaW1hdGlvbnNFbmFibGVkXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvdXBsb2FkLm1vZGFsLmh0bWwnXG4gICAgICAgIHNpemU6ICdsZydcbiAgICAgICAgc2NvcGU6ICRzY29wZVxuICAgICAgKVxuICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS51cGxvYWRGaWxlID0gKGJsb2IpIC0+XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UgKHJlc29sdmUsIHJlamVjdCkgLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ3VwbG9hZGluZycsIGJsb2JcbiAgICAgICAgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcbiAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZXZlbnQpIC0+XG4gICAgICAgICAgYnVmZmVyID0gJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyLmZyb20oZXZlbnQudGFyZ2V0LnJlc3VsdClcbiAgICAgICAgICBjb25zb2xlLmxvZyAnYnVmZmVyJywgYnVmZmVyXG4gICAgICAgICAgJHNjb3BlLmlwZnMuZmlsZXMuYWRkIGJ1ZmZlciwgKGVyciwgZmlsZXMpIC0+XG4gICAgICAgICAgICBpZiBlcnJcbiAgICAgICAgICAgICAgcmVqZWN0KCdhZGRpbmcgdG8gaXBmcyBmYWlsZWQnLCBlcnIpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIHJlc29sdmUoZmlsZXMpXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nICdkb25lOicsIGVyciwgZmlsZXNcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuXG4gICAgJHNjb3BlLmdlbmVyYXRlS2V5ID0gLT5cbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0gJHdpbmRvdy5pZGVudGlmaUxpYi5LZXkuZ2VuZXJhdGUoKVxuICAgICAgY29uc29sZS5sb2cgJHNjb3BlLnByaXZhdGVLZXlcbiAgICAgICRzY29wZS5wcml2YXRlS2V5U2VyaWFsaXplZCA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuS2V5LnRvSndrKCRzY29wZS5wcml2YXRlS2V5KVxuXG4gICAgJHNjb3BlLmRvd25sb2FkS2V5ID0gLT5cbiAgICAgIGhpZGRlbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIGhpZGRlbkVsZW1lbnQuaHJlZiA9ICdkYXRhOnRleHQvY3N2O2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSSgkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQpXG4gICAgICBoaWRkZW5FbGVtZW50LnRhcmdldCA9ICdfYmxhbmsnXG4gICAgICBoaWRkZW5FbGVtZW50LmRvd25sb2FkID0gJ2lkZW50aWZpX3ByaXZhdGVfa2V5LnR4dCdcbiAgICAgIGhpZGRlbkVsZW1lbnQuY2xpY2soKVxuXG4gICAgJHNjb3BlLmxvZ291dCA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPSAwXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleVNlcmlhbGl6ZWQgPSAnJ1xuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge31cbiAgICAgIGxvY2FsU3RvcmFnZVNlcnZpY2UuY2xlYXJBbGwoKVxuICAgICAgJHN0YXRlLmdvKCdpZGVudGl0aWVzLmxpc3QnKVxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBudWxsXG4gICAgICAkc2NvcGUucHVibGljS2V5ID0gbnVsbFxuXG4gICAgJHNjb3BlLm1zZ0ZpbHRlciA9ICh2YWx1ZSwgaW5kZXgsIGFycmF5KSAtPlxuICAgICAgZGF0YSA9IHZhbHVlLmRhdGEgb3IgdmFsdWUuc2lnbmVkRGF0YVxuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlLm1hdGNoIC9ecmF0aW5nL1xuICAgICAgICAgIGlmIGRhdGEudHlwZSAhPSAncmF0aW5nJ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChkYXRhLm1heFJhdGluZyArIGRhdGEubWluUmF0aW5nKSAvIDJcbiAgICAgICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6cG9zaXRpdmUnIGFuZCBkYXRhLnJhdGluZyA8PSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpuZWdhdGl2ZScgYW5kIGRhdGEucmF0aW5nID49IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOm5ldXRyYWwnIGFuZCBkYXRhLnJhdGluZyAhPSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgZWxzZSBpZiBkYXRhLnR5cGUgIT0gJHNjb3BlLmZpbHRlcnMudHlwZVxuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZSA9PSAwIGFuZCB0eXBlb2YgdmFsdWUuYXV0aG9yVHJ1c3REaXN0YW5jZSAhPSAnbnVtYmVyJ1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZSA+IDAgYW5kIHZhbHVlLmF1dGhvclRydXN0RGlzdGFuY2UgPiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2VcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIHJldHVybiB0cnVlXG5cbiAgICAkc2NvcGUucmVtb3ZlRm9jdXMgPSAoZXZlbnQpIC0+XG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmJsdXIoKVxuXG4gICAgJHNjb3BlLmFkZEVudHJ5Q2xpY2tlZCA9IC0+XG4gICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMuY3JlYXRlJ1xuICAgICAgZm9jdXMoJ2lkTmFtZUZvY3VzJylcblxuICAgICRzY29wZS5sb2dvQ2xpY2tlZCA9IC0+XG4gICAgICBmb2N1cygnc2VhcmNoRm9jdXMnKVxuICAgICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLmxpc3QnXG4gICAgICAgIGlmICRzY29wZS5xdWVyeS50ZXJtICE9ICcnXG4gICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAgICRzY29wZS5pZHMuZmluaXNoZWQgPSBmYWxzZVxuICAgICAgICAkc3RhdGUuZ28gJ2lkZW50aXRpZXMubGlzdCdcblxuICAgICRzY29wZS5zZXRNc2dSYXdEYXRhID0gKG1zZykgLT5cbiAgICAgIHNob3dSYXdEYXRhID1cbiAgICAgICAgaGFzaDogbXNnLmhhc2hcbiAgICAgICAgZGF0YTogbXNnLmRhdGFcbiAgICAgICAgcHJpb3JpdHk6IG1zZy5wcmlvcml0eVxuICAgICAgICBqd3M6IG1zZy5qd3NcbiAgICAgIG1zZy5zdHJEYXRhID0gSlNPTi5zdHJpbmdpZnkoc2hvd1Jhd0RhdGEsIHVuZGVmaW5lZCwgMilcblxuICAgICRzY29wZS5wcm9maWxlRnJvbURhdGEgPSAoZGF0YSwgZmFsbGJhY2tJZCkgLT5cbiAgICAgIGlmIGRhdGEuYXR0cnMgYW5kIGRhdGEuYXR0cnMubGVuZ3RoXG4gICAgICAgIHJldHVybiAkd2luZG93LmlkZW50aWZpTGliLklkZW50aXR5LmNyZWF0ZSgkc2NvcGUuZ3VuLmdldCgnaWRlbnRpZmknKS5nZXQoJ2lkZW50aXRpZXMnKSwge2F0dHJzOmRhdGEuYXR0cnN9KVxuICAgICAgcmV0dXJuICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkuY3JlYXRlKCRzY29wZS5ndW4uZ2V0KCdpZGVudGlmaScpLmdldCgnaWRlbnRpdGllcycpLCB7YXR0cnM6W2ZhbGxiYWNrSWRdfSlcblxuICAgICRzY29wZS5vcGVuTWVzc2FnZSA9IChldmVudCwgbWVzc2FnZSwgc2l6ZSkgLT5cbiAgICAgIHQgPSBldmVudC50YXJnZXRcbiAgICAgIHJldHVybiBpZiBhbmd1bGFyLmVsZW1lbnQodCkuY2xvc2VzdCgnYScpLmxlbmd0aFxuICAgICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEobWVzc2FnZSlcbiAgICAgICRzY29wZS5tZXNzYWdlID0gbWVzc2FnZVxuICAgICAgIyBUT0RPOiBjaGVjayBzaWdcbiAgICAgICRzY29wZS5tZXNzYWdlLnNpZ25lcktleUhhc2ggPSAkc2NvcGUubWVzc2FnZS5nZXRTaWduZXJLZXlJRCgpXG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5nZXQoJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SGFzaCwgJ2tleUlEJykudGhlbiAocHJvZmlsZSkgLT5cbiAgICAgICAgdW5sZXNzIHByb2ZpbGVcbiAgICAgICAgICBwcm9maWxlID0gJHdpbmRvdy5pZGVudGlmaUxpYi5JZGVudGl0eS5jcmVhdGUoXG4gICAgICAgICAgICAkc2NvcGUuZ3VuLmdldCgnaWRlbnRpZmknKS5nZXQoJ2lkZW50aXRpZXMnKSxcbiAgICAgICAgICAgIHthdHRyczpbe25hbWU6ICdrZXlJRCcsIHZhbDogJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyS2V5SGFzaH1dfVxuICAgICAgICAgIClcbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5ID0gcHJvZmlsZVxuICAgICAgbW9kYWxJbnN0YW5jZSA9ICR1aWJNb2RhbC5vcGVuKFxuICAgICAgICBhbmltYXRpb246ICRzY29wZS5hbmltYXRpb25zRW5hYmxlZFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9zaG93Lm1vZGFsLmh0bWwnXG4gICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgc2NvcGU6ICRzY29wZVxuICAgICAgKVxuICAgICAgbW9kYWxJbnN0YW5jZS5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdGFydCcsIC0+XG4gICAgICAgIG1vZGFsSW5zdGFuY2UuY2xvc2UoKVxuXG4gICAgJHNjb3BlLmZpbHRlcnMgPSAkc2NvcGUuZmlsdGVycyBvciBjb25maWcuZGVmYXVsdEZpbHRlcnNcblxuICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlXG4gICAgIyAkc2NvcGUubWVudSA9IE1lbnVzLmdldE1lbnUoJ3RvcGJhcicpXG5cbiAgICAkc2NvcGUudG9nZ2xlQ29sbGFwc2libGVNZW51ID0gLT5cbiAgICAgICRzY29wZS5pc0NvbGxhcHNlZCA9ICEkc2NvcGUuaXNDb2xsYXBzZWRcblxuICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgPSAobWVzc2FnZXMsIG1zZ09wdGlvbnMsIHZlcmlmeVNpZ25hdHVyZSkgLT5cbiAgICAgIHByb2Nlc3NNZXNzYWdlID0gKG1zZykgLT5cbiAgICAgICAgbXNnLmRhdGEgPSBtc2cuc2lnbmVkRGF0YVxuICAgICAgICBpZiAobXNnLmdldEF1dGhvciBhbmQgbm90IChtc2dPcHRpb25zIGFuZCBtc2dPcHRpb25zLmF1dGhvcklzU2VsZikpXG4gICAgICAgICAgcCA9IG1zZy5nZXRBdXRob3IoJHNjb3BlLmlkZW50aWZpSW5kZXgpXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBwID0gUHJvbWlzZS5yZXNvbHZlKClcbiAgICAgICAgcC50aGVuIChhdXRob3IpIC0+XG4gICAgICAgICAgbXNnLmF1dGhvciA9IGF1dGhvclxuICAgICAgICAgIGlmIG1zZy5hdXRob3JcbiAgICAgICAgICAgIG1zZy5hdXRob3IuZ3VuLmdldCgndHJ1c3REaXN0YW5jZScpLm9uIChkKSAtPiBtc2cuYXV0aG9yVHJ1c3REaXN0YW5jZSA9IGRcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgICAjIFRPRE86IG1ha2Ugc3VyZSBtZXNzYWdlIHNpZ25hdHVyZSBpcyBjaGVja2VkXG5cbiAgICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBtc2cuZGF0YS5hdXRob3JbMF1cbiAgICAgICAgICAgIGkgPSB1bmRlZmluZWRcbiAgICAgICAgICAgIGkgPSAwXG4gICAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gMTAwMFxuICAgICAgICAgICAgd2hpbGUgaSA8IG1zZy5kYXRhLmF1dGhvci5sZW5ndGhcbiAgICAgICAgICAgICAgaW5kZXggPSBjb25maWcudW5pcXVlQXR0cmlidXRlVHlwZXMuaW5kZXhPZihtc2cuZGF0YS5hdXRob3JbaV1bMF0pXG4gICAgICAgICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBtc2cuZGF0YS5hdXRob3JbaV1cbiAgICAgICAgICAgICAgZWxzZSBpZiAhbXNnLmF1dGhvcl9uYW1lIGFuZCBtc2cuZGF0YS5hdXRob3JbaV1bMF0gaW4gWyduYW1lJywgJ25pY2tuYW1lJ11cbiAgICAgICAgICAgICAgICBtc2cuYXV0aG9yX25hbWUgPSBtc2cuZGF0YS5hdXRob3JbaV1bMV1cbiAgICAgICAgICAgICAgaSsrXG4gICAgICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gbXNnLmRhdGEucmVjaXBpZW50WzBdXG4gICAgICAgICAgICBpID0gMFxuICAgICAgICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgICAgICAgIHdoaWxlIGkgPCBtc2cuZGF0YS5yZWNpcGllbnQubGVuZ3RoXG4gICAgICAgICAgICAgIGluZGV4ID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YobXNnLmRhdGEucmVjaXBpZW50W2ldWzBdKVxuICAgICAgICAgICAgICBpZiBpbmRleCA+IC0xIGFuZCBpbmRleCA8IHNtYWxsZXN0SW5kZXhcbiAgICAgICAgICAgICAgICBzbWFsbGVzdEluZGV4ID0gaW5kZXhcbiAgICAgICAgICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gbXNnLmRhdGEucmVjaXBpZW50W2ldXG4gICAgICAgICAgICAgIGVsc2UgaWYgIW1zZy5yZWNpcGllbnRfbmFtZSBhbmQgbXNnLmRhdGEucmVjaXBpZW50W2ldWzBdIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgICAgICAgbXNnLnJlY2lwaWVudF9uYW1lID0gbXNnLmRhdGEucmVjaXBpZW50W2ldWzFdXG4gICAgICAgICAgICAgIGkrK1xuICAgICAgICAgICAgc2lnbmVkRGF0YSA9IG1zZy5kYXRhXG4gICAgICAgICAgICBhbHBoYSA9IHVuZGVmaW5lZFxuICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICcnXG4gICAgICAgICAgICBtc2cuaGFzU3VjY2VzcyA9ICcnXG4gICAgICAgICAgICBtc2cuYmdDb2xvciA9ICcnXG4gICAgICAgICAgICBtc2cuaWNvbkNvdW50ID0gbmV3IEFycmF5KDEpXG4gICAgICAgICAgICBzd2l0Y2ggc2lnbmVkRGF0YS50eXBlXG4gICAgICAgICAgICAgIHdoZW4gJ3ZlcmlmeV9pZGVudGl0eScsICd2ZXJpZmljYXRpb24nXG4gICAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLW9rIHBvc2l0aXZlJ1xuICAgICAgICAgICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJ2hhcy1zdWNjZXNzJ1xuICAgICAgICAgICAgICAgIG1zZy5pc1ZlcmlmaWNhdGlvbiA9IHRydWVcbiAgICAgICAgICAgICAgd2hlbiAnY29ubmVjdGlvbidcbiAgICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tb2sgcG9zaXRpdmUnXG4gICAgICAgICAgICAgICAgbXNnLmhhc1N1Y2Nlc3MgPSAnaGFzLXN1Y2Nlc3MnXG4gICAgICAgICAgICAgIHdoZW4gJ3VudmVyaWZ5X2lkZW50aXR5JywgJ3VudmVyaWZpY2F0aW9uJ1xuICAgICAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1yZW1vdmUgbmVnYXRpdmUnXG4gICAgICAgICAgICAgICAgbXNnLmhhc1N1Y2Nlc3MgPSAnaGFzLWVycm9yJ1xuICAgICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6ICNGRkYwREU7Ym9yZGVyLWNvbG9yOiNGRkUyQzY7J1xuICAgICAgICAgICAgICAgIG1zZy5pc1VudmVyaWZpY2F0aW9uID0gdHJ1ZVxuICAgICAgICAgICAgICB3aGVuICdyYXRpbmcnXG4gICAgICAgICAgICAgICAgcmF0aW5nID0gc2lnbmVkRGF0YS5yYXRpbmdcbiAgICAgICAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKHNpZ25lZERhdGEubWluUmF0aW5nICsgc2lnbmVkRGF0YS5tYXhSYXRpbmcpIC8gMlxuICAgICAgICAgICAgICAgIG1heFJhdGluZ0RpZmYgPSBzaWduZWREYXRhLm1heFJhdGluZyAtIG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgICBtaW5SYXRpbmdEaWZmID0gc2lnbmVkRGF0YS5taW5SYXRpbmcgLSBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgICAgaWYgcmF0aW5nID4gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy11cCBwb3NpdGl2ZSdcbiAgICAgICAgICAgICAgICAgIG1zZy5pY29uQ291bnQgPSBpZiBtYXhSYXRpbmdEaWZmIDwgMiB0aGVuIG1zZy5pY29uQ291bnQgZWxzZSBuZXcgQXJyYXkoTWF0aC5jZWlsKDMgKiByYXRpbmcgLyBtYXhSYXRpbmdEaWZmKSlcbiAgICAgICAgICAgICAgICAgIGFscGhhID0gKHJhdGluZyAtIG5ldXRyYWxSYXRpbmcgLSAwLjUpIC8gbWF4UmF0aW5nRGlmZiAvIDEuMjUgKyAwLjJcbiAgICAgICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjIzLDI0MCwyMTYsJyArIGFscGhhICsgJyk7J1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgcmF0aW5nIDwgbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy1kb3duIG5lZ2F0aXZlJ1xuICAgICAgICAgICAgICAgICAgbXNnLmljb25Db3VudCA9IGlmIG1pblJhdGluZ0RpZmYgPiAtMiB0aGVuIG1zZy5pY29uQ291bnQgZWxzZSBuZXcgQXJyYXkoTWF0aC5jZWlsKDMgKiByYXRpbmcgLyBtaW5SYXRpbmdEaWZmKSlcbiAgICAgICAgICAgICAgICAgIGFscGhhID0gKHJhdGluZyAtIG5ldXRyYWxSYXRpbmcgKyAwLjUpIC8gbWluUmF0aW5nRGlmZiAvIDEuMjUgKyAwLjJcbiAgICAgICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDIsMjIyLDIyMiwnICsgYWxwaGEgKyAnKTsnXG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjogI2ZjZjhlMzsnXG4gICAgICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tcXVlc3Rpb24tc2lnbiBuZXV0cmFsJ1xuXG4gICAgICBhbmd1bGFyLmZvckVhY2ggbWVzc2FnZXMsIChtc2csIGtleSkgLT5cbiAgICAgICAgbXNnW2tdID0gdiBmb3IgaywgdiBvZiBtc2dPcHRpb25zXG4gICAgICAgIHByb2Nlc3NNZXNzYWdlKG1zZylcblxuICAgICMgQ29sbGFwc2luZyB0aGUgbWVudSBhZnRlciBuYXZpZ2F0aW9uXG4gICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3VjY2VzcycsIC0+XG4gICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZVxuXG4gICAgc2Nyb2xsVG8gPSAoZWwpIC0+XG4gICAgICBpZiAhZWxcbiAgICAgICAgcmV0dXJuXG4gICAgICBwb3MgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgaWYgcG9zLnRvcFxuICAgICAgICBpZiBwb3MudG9wIC0gNjAgPCAkd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MudG9wIC0gNjBcbiAgICAgICAgZWxzZSBpZiBwb3MuYm90dG9tID4gJHdpbmRvdy5wYWdlWU9mZnNldCArICgkd2luZG93LmlubmVySGVpZ2h0IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MuYm90dG9tIC0gKCR3aW5kb3cuaW5uZXJIZWlnaHQgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyAxNVxuICAgICAgcmV0dXJuXG5cbiAgICAkc2NvcGUuc2V0SWRlbnRpdHlOYW1lcyA9IChpLCBodG1sU2FmZSkgLT5cbiAgICAgIGkuZ3VuLmdldCgnYXR0cnMnKS5vcGVuIChhdHRycykgLT5cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgIG12YSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkuZ2V0TW9zdFZlcmlmaWVkQXR0cmlidXRlcyhhdHRycylcbiAgICAgICAgICBpZiBtdmEubmFtZVxuICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IG12YS5uYW1lLmF0dHJpYnV0ZS52YWxcbiAgICAgICAgICBlbHNlIGlmIG12YS5uaWNrbmFtZVxuICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IG12YS5uaWNrbmFtZS5hdHRyaWJ1dGUudmFsXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgaS5wcmltYXJ5TmFtZSA9IE9iamVjdC52YWx1ZXMoYXR0cnMpWzBdLnZhbFxuICAgICAgICAgIGlmIGkucHJpbWFyeU5hbWVcbiAgICAgICAgICAgIGlmIG12YS5uaWNrbmFtZSBhbmQgbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWwgIT0gaS5wcmltYXJ5TmFtZVxuICAgICAgICAgICAgICBpLm5pY2tuYW1lID0gbXZhLm5pY2tuYW1lLmF0dHJpYnV0ZS52YWxcbiAgICAgICAgICAgICAgaS5uaWNrbmFtZSA9IGkubmlja25hbWUucmVwbGFjZSgnPCcsICcmbHQ7JykgaWYgaHRtbFNhZmVcbiAgICAgICAgICAgIGkucHJpbWFyeU5hbWUgPSBpLnByaW1hcnlOYW1lLnJlcGxhY2UoJzwnLCAnJmx0OycpIGlmIGh0bWxTYWZlXG5cbiAgICAkc2NvcGUuc2VhcmNoUmVxdWVzdCA9IG51bGxcbiAgICAkc2NvcGUuc2VhcmNoID0gKHF1ZXJ5LCBsaW1pdCkgLT5cbiAgICAgICRzY29wZS5pZHMubG9hZGluZyA9IHRydWVcbiAgICAgICRzY29wZS5pZGVudGl0aWVzQnlIYXNoID0ge31cbiAgICAgIHNlYXJjaEtleSA9IGVuY29kZVVSSUNvbXBvbmVudCgocXVlcnkgb3IgJHNjb3BlLnF1ZXJ5LnRlcm0gb3IgJycpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAkc2NvcGUuc2VhcmNoS2V5ID0gc2VhcmNoS2V5XG4gICAgICBpZiBzZWFyY2hLZXkgIT0gJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5XG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAgICRzY29wZS5pZHMuZmluaXNoZWQgPSBmYWxzZVxuICAgICAgICAkc2NvcGUuaWRlbnRpdGllc0J5SGFzaCA9IHt9XG4gICAgICAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXkgPSBzZWFyY2hLZXlcbiAgICAgIGxpbWl0ID0gbGltaXQgb3IgMzBcbiAgICAgIGN1cnNvciA9IGZhbHNlXG4gICAgICBpZiAkc2NvcGUuaWRzLmxpc3QubGVuZ3RoXG4gICAgICAgIGN1cnNvciA9ICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmxpc3QubGVuZ3RoIC0gMV0uY3Vyc29yXG4gICAgICBpZiBzZWFyY2hLZXkubGVuZ3RoXG4gICAgICAgICRzY29wZS5zZWFyY2hSZXF1ZXN0ID0gJHNjb3BlLmlkZW50aWZpSW5kZXguc2VhcmNoKHNlYXJjaEtleSwgdW5kZWZpbmVkLCBsaW1pdCwgY3Vyc29yKVxuICAgICAgICAudGhlbiAoaWRlbnRpdGllcykgLT4ge2lkZW50aXRpZXMsIHNlYXJjaEtleX1cbiAgICAgICAgIyBUT0RPOiB1c2UgZGlzdGFuY2UgaW5kZXggaW4gaWRlbnRpZmlMaWI/XG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5zZWFyY2hSZXF1ZXN0ID0gJHNjb3BlLmlkZW50aWZpSW5kZXguc2VhcmNoKHNlYXJjaEtleSwgdW5kZWZpbmVkLCBsaW1pdCwgY3Vyc29yKVxuICAgICAgICAudGhlbiAoaWRlbnRpdGllcykgLT4ge2lkZW50aXRpZXMsIHNlYXJjaEtleX1cbiAgICAgICRzY29wZS5zZWFyY2hSZXF1ZXN0ID0gJHNjb3BlLnNlYXJjaFJlcXVlc3QudGhlbiAocmVzKSAtPlxuICAgICAgICByZXR1cm4gaWYgcmVzLnNlYXJjaEtleSAhPSAkc2NvcGUuc2VhcmNoS2V5XG4gICAgICAgIGlkZW50aXRpZXMgPSByZXMuaWRlbnRpdGllc1xuICAgICAgICBpZGVudGl0aWVzLnNwbGljZShsaW1pdCkgaWYgbGltaXRcbiAgICAgICAgaWRlbnRpdGllcy5mb3JFYWNoIChpKSAtPlxuICAgICAgICAgIGkuZ3VuLm9uIChkYXRhKSAtPlxuICAgICAgICAgICAgaS5kYXRhID0gZGF0YVxuICAgICAgICAgICAgaS5ndW4uZ2V0KCdsaW5rVG8nKS5vbmNlIChsaW5rVG8pIC0+XG4gICAgICAgICAgICAgICRzY29wZS4kYXBwbHkgLT5cbiAgICAgICAgICAgICAgICBpLmxpbmtUbyA9IGxpbmtUb1xuICAgICAgICAgICRzY29wZS5zZXRJZGVudGl0eU5hbWVzKGksIHRydWUpXG4gICAgICAgIHNlYXJjaEtleSA9IGVuY29kZVVSSUNvbXBvbmVudCgocXVlcnkgb3IgJHNjb3BlLnF1ZXJ5LnRlcm0gb3IgJycpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIGlmIHNlYXJjaEtleSAhPSAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXlcbiAgICAgICAgICByZXR1cm4gIyBzZWFyY2gga2V5IGNoYW5nZWRcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gJHNjb3BlLmlkcy5saXN0IG9yIFtdXG4gICAgICAgIGlmIGlkZW50aXRpZXMubGVuZ3RoIDwgbGltaXRcbiAgICAgICAgICAkc2NvcGUuaWRzLmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICBpZiBpZGVudGl0aWVzLmxlbmd0aCAmJiAkc2NvcGUuaWRzLmxpc3QubGVuZ3RoICYmXG4gICAgICAgICRzY29wZS5nZXRJZEtleShpZGVudGl0aWVzWzBdLmxpbmtUbykgPT0gJHNjb3BlLmdldElkS2V5KCRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmxpc3QubGVuZ3RoIC0gMV0ubGlua1RvKVxuICAgICAgICAgIGlkZW50aXRpZXMuc2hpZnQoKSAjIFByZXZlbnQgZHVwbGljYXRlXG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9ICRzY29wZS5pZHMubGlzdC5jb25jYXQoaWRlbnRpdGllcylcbiAgICAgICAgaWYgaWRlbnRpdGllcy5sZW5ndGggPiAwICYmICRzY29wZS5pZHMubGlzdC5sZW5ndGggPT0gaWRlbnRpdGllcy5sZW5ndGhcbiAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleSA9IDBcbiAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbMF0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5pZHMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICRzY29wZS5pZHMubGlzdFxuICAgICAgcmV0dXJuICRzY29wZS5zZWFyY2hSZXF1ZXN0XG5cbiAgICAkc2NvcGUuc2VhcmNoS2V5ZG93biA9IChldmVudCkgLT5cbiAgICAgIHN3aXRjaCAoaWYgZXZlbnQgdGhlbiBldmVudC53aGljaCBlbHNlIC0xKVxuICAgICAgICB3aGVuIDM4XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlmICRzY29wZS5pZHMuYWN0aXZlS2V5ID4gMFxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5IC0gMV0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXktLVxuICAgICAgICAgIHNjcm9sbFRvIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkpXG4gICAgICAgIHdoZW4gNDBcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPCAoJHNjb3BlLmlkcy5saXN0Lmxlbmd0aCB8fCAwKSAtIDFcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleV0uYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmFjdGl2ZUtleSArIDFdLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgICRzY29wZS5pZHMuYWN0aXZlS2V5KytcbiAgICAgICAgICBzY3JvbGxUbyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0JyArICRzY29wZS5pZHMuYWN0aXZlS2V5KVxuICAgICAgICB3aGVuIDEzXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGlkID0gJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XVxuICAgICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiBpZC5saW5rVG8ubmFtZSwgdmFsdWU6IGlkLmxpbmtUby52YWwgfVxuICAgICAgICB3aGVuIC0xXG4gICAgICAgICAgY2xlYXJUaW1lb3V0ICRzY29wZS50aW1lclxuICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICAgICAkc2NvcGUuc2VhcmNoKClcbiAgICAgICAgd2hlbiAzMywgMzQsIDM1LCAzNiwgMzcsIDM5XG4gICAgICAgIGVsc2VcbiAgICAgICAgICBlbCA9IGFuZ3VsYXIuZWxlbWVudChldmVudC5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAgIGNsZWFyVGltZW91dCAkc2NvcGUudGltZXJcbiAgICAgICAgICB3YWl0ID0gc2V0VGltZW91dCgoLT5cbiAgICAgICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gZWwudmFsKClcbiAgICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgKSwgMzAwKVxuICAgICAgICAgICRzY29wZS50aW1lciA9IHdhaXRcbiAgICAgICAgICBicmVha1xuXG4gICAgJHNjb3BlLmRyb3Bkb3duU2VhcmNoU2VsZWN0ID0gKGl0ZW0pIC0+XG4gICAgICAkc3RhdGUuZ28oJ2lkZW50aXRpZXMuc2hvdycsIHsgdHlwZTogaXRlbS5saW5rVG8ubmFtZSwgdmFsdWU6IGl0ZW0ubGlua1RvLnZhbCB9KVxuICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuXVxuIl19

(function() {
  'use strict';
  // Identities controller
  angular.module('identifiAngular').controller('IdentitiesController', [
    '$scope',
    '$state',
    '$rootScope',
    '$window',
    '$stateParams',
    '$location',
    '$http',
    '$q',
    '$timeout',
    'clipboard',
    // 'Authentication'
    'config',
    'localStorageService',
    function($scope,
    $state,
    $rootScope,
    $window,
    $stateParams,
    $location,
    $http,
    $q,
    $timeout,
    clipboard,
    config,
    localStorageService) { //, Authentication
      var thumbsDownObj,
    thumbsUpObj;
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
      $scope.$on('MessageAdded',
    function(event,
    args) {
        return $state.reload();
      });
      $scope.copyIdLink = function() {
        return clipboard.copyText($scope.idUrl);
      };
      $scope.addEntry = function(event,
    entry) {
        var linkTo,
    params,
    recipient;
        recipient = [];
        linkTo = null;
        if (entry.name) {
          recipient.push(['name',
    entry.name]);
        }
        if (entry.email) {
          recipient.push(['email',
    entry.email]);
          linkTo = {
            type: 'email',
            value: entry.email
          };
        }
        if (entry.url) {
          recipient.push(['url',
    entry.url]);
          if (!linkTo) {
            linkTo = {
              type: 'url',
              value: entry.url
            };
          }
        }
        if (entry.phone) {
          recipient.push(['phone',
    entry.phone]);
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
        return $scope.createMessage(event,
    params).then(function(response) {
          return $state.go('identities.show',
    linkTo);
        },
    function(error) {
          return console.log("error",
    error);
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
        return $scope.identity.gun.get('attrs').open(function(attrs) {
          var alpha,
    c,
    conn,
    connections,
    i,
    len,
    mostConfirmations,
    percentage,
    ref;
          console.log(attrs);
          connections = attrs || [];
          if (connections.length > 0) {
            c = connections[0];
            mostConfirmations = c.conf;
          } else {
            mostConfirmations = 1;
          }
          $scope.connections = Object.values(connections).sort(function(a,
    b) {
            return (b.conf - 2 * b.ref) - (a.conf - 2 * a.ref);
          });
          ref = $scope.connections;
          for (i = 0, len = ref.length; i < len; i++) {
            conn = ref[i];
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
              // conn.rowStyle = 'background-color: rgba(223,240,216,' + alpha + ')'
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
      $scope.getConnectingMsgs = function(id1,
    id2) {
        var getVerifications;
        getVerifications = $q(function(resolve) {
          if (!$scope.verifications.length) {
            if ($scope.receivedIndex) {
              return $scope.receivedIndex.searchText('',
    10000,
    false,
    true).then(function(res) {
                res.forEach(function(row) {
                  var msg,
    ref;
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
            var hasId1,
    hasId2,
    i,
    id,
    len,
    ref;
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
      $scope.connectionClicked = function(event,
    id) {
        if (id.connecting_msgs) {
          return id.collapse = !id.collapse;
        } else {
          return $scope.getConnectingMsgs([$scope.idType,
    $scope.idValue],
    id).then(function(msgs) {
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
        return $scope.identifiIndex.getSentMsgs($scope.identity,
    $scope.filters.limit,
    cursor).then(function(sent) {
          $scope.processMessages(sent,
    {
            authorIsSelf: true
          });
          return $scope.$apply(function() {
            Array.prototype.push.apply($scope.sent,
    sent);
            $scope.sent.loading = false;
            if (sent.length < $scope.filters.limit - 1) {
              return $scope.sent.finished = true;
            }
          });
        }).catch(function(error) {
          console.log('error loading sent messages',
    error);
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
        return $scope.identifiIndex.getReceivedMsgs($scope.identity,
    $scope.filters.limit,
    cursor).then(function(received) {
          $scope.processMessages(received,
    {
            recipientIsSelf: true
          });
          return $scope.$apply(function() {
            Array.prototype.push.apply($scope.received,
    received);
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
        }).catch(function(error) {
          console.log('error loading received messages',
    error);
          return $scope.received.finished = true;
        });
      };
      $scope.setFilters = function(filters) {
        angular.extend($scope.filters,
    filters);
        $scope.sent = [];
        $scope.received = [];
        return $timeout(function() {
          return $rootScope.$broadcast('msgScrollCheck');
        });
      };
      $scope.uploadProfilePhoto = function(blob,
    identity) {
        return $scope.uploadFile(blob).then(function(files) {
          var recipient,
    v;
          console.log(files,
    $scope.identity);
          recipient = [[$scope.idType,
    $scope.idValue],
    ['profilePhoto',
    '/ipfs/' + files[0].path]];
          v = $window.identifiLib.Message.createVerification({recipient},
    $scope.privateKey);
          $scope.identifiIndex.addMessage(v);
          return $scope.uploadModal.close();
        });
      };
      $scope.uploadCoverPhoto = function(blob,
    identity) {
        return $scope.uploadFile(blob).then(function(files) {
          var recipient,
    v;
          console.log(files,
    $scope.identity);
          recipient = [[$scope.idType,
    $scope.idValue],
    ['coverPhoto',
    '/ipfs/' + files[0].path]];
          v = $window.identifiLib.Message.createVerification({recipient},
    $scope.privateKey);
          $scope.identifiIndex.addMessage(v);
          return $scope.uploadModal.close();
        });
      };
      $scope.openProfilePhotoUploadModal = function() {
        if (!$scope.authentication.identity) {
          return;
        }
        return $scope.openUploadModal($scope.uploadProfilePhoto,
    'Upload profile photo');
      };
      $scope.openCoverPhotoUploadModal = function() {
        if (!$scope.authentication.identity) {
          return;
        }
        return $scope.openUploadModal($scope.uploadCoverPhoto,
    'Upload cover photo');
      };
      $scope.findOne = function() {
        $scope.idType = $stateParams.type;
        $scope.idValue = $stateParams.value;
        if ($window.location.hostname.indexOf('.') > -1) { // differentiate between localhost / chrome plugin uri and DNS name
          $scope.idUrl = $state.href('identities.show',
    {
            type: $scope.idType,
            value: $scope.idValue
          },
    {
            absolute: true
          });
        } else {
          $scope.idUrl = 'https://identi.fi/' + $state.href('identities.show',
    {
            type: $scope.idType,
            value: $scope.idValue
          });
        }
        $scope.isCurrentUser = $scope.authentication && $scope.authentication.user && $scope.idType === $scope.authentication.user.idType && $scope.idValue === $scope.authentication.user.idValue;
        $scope.isUniqueType = config.uniqueAttributeTypes.indexOf($scope.idType) > -1;
        if (!$scope.isUniqueType) {
          $state.go('identities.list',
    {
            search: $scope.idValue
          });
          if ($scope.tabs) {
            $scope.tabs[2].active = true;
          }
        }
        $scope.setPageTitle($scope.idValue);
        return $scope.$watch('apiReady',
    function(isReady) {
          if (isReady) {
            return $scope.identifiIndex.get($scope.idValue,
    $scope.idType).then(function(profile) {
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
                  return $scope.identity = $window.identifiLib.Identity.create($scope.gun.get('identifi').get('identities'),
    {
                    attrs: [
                      {
                        name: $scope.idType,
                        val: $scope.idValue
                      }
                    ]
                  });
                });
              }
            }).catch(function(err) {
              return console.log('error fetching profile',
    err);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLGFBQUE7O0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLHNCQUE3QyxFQUFxRTtJQUNuRSxRQURtRTtJQUVuRSxRQUZtRTtJQUduRSxZQUhtRTtJQUluRSxTQUptRTtJQUtuRSxjQUxtRTtJQU1uRSxXQU5tRTtJQU9uRSxPQVBtRTtJQVFuRSxJQVJtRTtJQVNuRSxVQVRtRTtJQVVuRSxXQVZtRTs7SUFZbkUsUUFabUU7SUFhbkUscUJBYm1FO0lBY25FLFFBQUEsQ0FBQyxNQUFEO0lBQVMsTUFBVDtJQUFpQixVQUFqQjtJQUE2QixPQUE3QjtJQUFzQyxZQUF0QztJQUFvRCxTQUFwRDtJQUErRCxLQUEvRDtJQUFzRSxFQUF0RTtJQUEwRSxRQUExRTtJQUFvRixTQUFwRjtJQUErRixNQUEvRjtJQUF1RyxtQkFBdkcsQ0FBQSxFQUFBO0FBQ0UsVUFBQSxhQUFBO0lBQUE7TUFBQSxNQUFNLENBQUMsU0FBUCxHQUFtQjtNQUNuQixNQUFNLENBQUMsV0FBUCxHQUFxQixRQUFBLENBQUMsS0FBRCxDQUFBO2VBQVcsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFBOUI7TUFDckIsTUFBTSxDQUFDLElBQVAsR0FBYztNQUNkLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO01BQ2xCLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLENBQUE7TUFDckIsV0FBQSxHQUFjLENBQUE7TUFDZCxhQUFBLEdBQWdCLENBQUE7TUFDaEIsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsTUFBTSxDQUFDLFVBQVAsR0FBb0I7TUFDcEIsTUFBTSxDQUFDLGFBQVAsR0FBdUI7TUFDdkIsSUFBMkMsWUFBWSxDQUFDLE1BQXhEO1FBQUEsTUFBTSxDQUFD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TSxDQUFDLE1BQWI7d0JBQXFCLEdBQUEsRUFBSSxNQUFNLENBQUM7c0JBQWhDLENBQUQ7O2tCQUFQLENBRmdCO2dCQUROLENBQWQsRUFmRjs7WUFEMkQsQ0FBN0QsQ0FxQkEsQ0FBQyxLQXJCRCxDQXFCTyxRQUFBLENBQUMsR0FBRCxDQUFBO3FCQUNMLE9BQU8sQ0FBQyxHQUFSLENBQVksd0JBQVo7SUFBc0MsR0FBdEM7WUFESyxDQXJCUCxFQURGOztRQUR3QixDQUExQjtNQWhCZTtNQTBDakIsSUFBRyxNQUFNLENBQUMsRUFBUCxDQUFVLGlCQUFWLENBQUg7ZUFDRSxNQUFNLENBQUMsT0FBUCxDQUFBLEVBREY7O0lBclRGLENBZG1FO0dBQXJFO0FBRkEiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbiMgSWRlbnRpdGllcyBjb250cm9sbGVyXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuY29udHJvbGxlciAnSWRlbnRpdGllc0NvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckc3RhdGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJHdpbmRvdydcbiAgJyRzdGF0ZVBhcmFtcydcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAnJHEnXG4gICckdGltZW91dCdcbiAgJ2NsaXBib2FyZCdcbiAgIyAnQXV0aGVudGljYXRpb24nXG4gICdjb25maWcnXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAoJHNjb3BlLCAkc3RhdGUsICRyb290U2NvcGUsICR3aW5kb3csICRzdGF0ZVBhcmFtcywgJGxvY2F0aW9uLCAkaHR0cCwgJHEsICR0aW1lb3V0LCBjbGlwYm9hcmQsIGNvbmZpZywgbG9jYWxTdG9yYWdlU2VydmljZSkgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuYWN0aXZlVGFiID0gMFxuICAgICRzY29wZS5hY3RpdmF0ZVRhYiA9ICh0YWJJZCkgLT4gJHNjb3BlLmFjdGl2ZVRhYiA9IHRhYklkXG4gICAgJHNjb3BlLnNlbnQgPSBbXVxuICAgICRzY29wZS5yZWNlaXZlZCA9IFtdXG4gICAgJHNjb3BlLmNvbm5lY3Rpb25zID0ge31cbiAgICB0aHVtYnNVcE9iaiA9IHt9XG4gICAgdGh1bWJzRG93bk9iaiA9IHt9XG4gICAgJHNjb3BlLnRodW1ic1VwID0gW11cbiAgICAkc2NvcGUudGh1bWJzRG93biA9IFtdXG4gICAgJHNjb3BlLnZlcmlmaWNhdGlvbnMgPSBbXVxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJHN0YXRlUGFyYW1zLnNlYXJjaCBpZiAkc3RhdGVQYXJhbXMuc2VhcmNoXG4gICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbiA9XG4gICAgICB0eXBlOiAnJ1xuICAgICAgdmFsdWU6ICcnXG4gICAgJHNjb3BlLmZpbHRlcnMudHlwZSA9IG51bGxcbiAgICAkc2NvcGUuY29sbGFwc2VMZXZlbCA9IHt9XG4gICAgJHNjb3BlLmNvbGxhcHNlRmlsdGVycyA9ICR3aW5kb3cuaW5uZXJXaWR0aCA8IDk5MlxuICAgICRzY29wZS5zbGlkZXIgPVxuICAgICAgdmFsdWU6IDBcbiAgICAgIG9wdGlvbnM6XG4gICAgICAgIGZsb29yOiAtM1xuICAgICAgICBjZWlsOiAzXG4gICAgICAgIGhpZGVQb2ludGVyTGFiZWxzOiB0cnVlXG4gICAgICAgIGhpZGVMaW1pdExhYmVsczogdHJ1ZVxuXG4gICAgJHNjb3BlLiRvbiAnTWVzc2FnZUFkZGVkJywgKGV2ZW50LCBhcmdzKSAtPlxuICAgICAgJHN0YXRlLnJlbG9hZCgpXG5cbiAgICAkc2NvcGUuY29weUlkTGluayA9IC0+XG4gICAgICBjbGlwYm9hcmQuY29weVRleHQgJHNjb3BlLmlkVXJsXG5cbiAgICAkc2NvcGUuYWRkRW50cnkgPSAoZXZlbnQsIGVudHJ5KSAtPlxuICAgICAgcmVjaXBpZW50ID0gW11cbiAgICAgIGxpbmtUbyA9IG51bGxcbiAgICAgIGlmIGVudHJ5Lm5hbWVcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWyduYW1lJywgZW50cnkubmFtZV1cbiAgICAgIGlmIGVudHJ5LmVtYWlsXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsnZW1haWwnLCBlbnRyeS5lbWFpbF1cbiAgICAgICAgbGlua1RvID0geyB0eXBlOiAnZW1haWwnLCB2YWx1ZTogZW50cnkuZW1haWwgfVxuICAgICAgaWYgZW50cnkudXJsXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsndXJsJywgZW50cnkudXJsXVxuICAgICAgICBsaW5rVG8gPSB7IHR5cGU6ICd1cmwnLCB2YWx1ZTogZW50cnkudXJsIH0gdW5sZXNzIGxpbmtUb1xuICAgICAgaWYgZW50cnkucGhvbmVcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWydwaG9uZScsIGVudHJ5LnBob25lXVxuICAgICAgICBsaW5rVG8gPSB7IHR5cGU6ICdwaG9uZScsIHZhbHVlOiBlbnRyeS5waG9uZSB9IHVubGVzcyBsaW5rVG9cbiAgICAgIHBhcmFtcyA9XG4gICAgICAgIHR5cGU6ICd2ZXJpZnlfaWRlbnRpdHknXG4gICAgICAgIHJlY2lwaWVudDogcmVjaXBpZW50XG4gICAgICAkc2NvcGUuY3JlYXRlTWVzc2FnZShldmVudCwgcGFyYW1zKS50aGVuIChyZXNwb25zZSkgLT5cbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCBsaW5rVG9cbiAgICAgICwgKGVycm9yKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBcImVycm9yXCIsIGVycm9yXG5cbiAgICAkc2NvcGUuZ3Vlc3NBdHRyaWJ1dGVUeXBlID0gLT5cbiAgICAgIGlmICRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUubGVuZ3RoXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuQXR0cmlidXRlLmd1ZXNzVHlwZU9mKCRzY29wZS5uZXdWZXJpZmljYXRpb24udmFsdWUpXG4gICAgICAgIHVubGVzcyAkc2NvcGUubmV3VmVyaWZpY2F0aW9uLnR5cGVcbiAgICAgICAgICB1bmxlc3MgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi52YWx1ZS5tYXRjaCAvXFxgfFxcfnxcXCF8XFxAfFxcI3xcXCR8XFwlfFxcXnxcXCZ8XFwqfFxcKHxcXCl8XFwrfFxcPXxcXFt8XFx7fFxcXXxcXH18XFx8fFxcXFx8XFwnfFxcPHxcXCx8XFwufFxcPnxcXD98XFwvfFxcXCJcInxcXDt8XFw6L1xuICAgICAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlID0gJ25hbWUnXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24udHlwZSA9ICcnXG5cbiAgICAkc2NvcGUuZ2V0Q29ubmVjdGlvbnMgPSAtPlxuICAgICAgJHNjb3BlLmlkZW50aXR5Lmd1bi5nZXQoJ2F0dHJzJykub3BlbiAoYXR0cnMpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nIGF0dHJzXG4gICAgICAgIGNvbm5lY3Rpb25zID0gYXR0cnMgb3IgW11cbiAgICAgICAgaWYgY29ubmVjdGlvbnMubGVuZ3RoID4gMFxuICAgICAgICAgIGMgPSBjb25uZWN0aW9uc1swXVxuICAgICAgICAgIG1vc3RDb25maXJtYXRpb25zID0gYy5jb25mXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBtb3N0Q29uZmlybWF0aW9ucyA9IDFcbiAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zID0gT2JqZWN0LnZhbHVlcyhjb25uZWN0aW9ucykuc29ydCAoYSwgYikgLT5cbiAgICAgICAgICAoYi5jb25mIC0gMiAqIGIucmVmKSAtIChhLmNvbmYgLSAyICogYS5yZWYpXG4gICAgICAgIGZvciBjb25uIGluICRzY29wZS5jb25uZWN0aW9uc1xuICAgICAgICAgIGNvbm4uaXNDdXJyZW50ID0gY29ubi5uYW1lID09ICRzY29wZS5pZFR5cGUgYW5kIGNvbm4udmFsID09ICRzY29wZS5pZFZhbHVlXG4gICAgICAgICAgc3dpdGNoIGNvbm4ubmFtZVxuICAgICAgICAgICAgd2hlbiAnZW1haWwnXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGUnXG4gICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLXN1Y2Nlc3MnXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9ICdtYWlsdG86JyArIGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAnYml0Y29pbl9hZGRyZXNzJywgJ2JpdGNvaW4nXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWJpdGNvaW4nXG4gICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLXByaW1hcnknXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9ICdodHRwczovL2Jsb2NrY2hhaW4uaW5mby9hZGRyZXNzLycgKyBjb25uLnZhbFxuICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgIHdoZW4gJ2dwZ19maW5nZXJwcmludCcsICdncGdfa2V5aWQnXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWtleSdcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZGVmYXVsdCdcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gJ2h0dHBzOi8vcGdwLm1pdC5lZHUvcGtzL2xvb2t1cD9vcD1nZXQmc2VhcmNoPTB4JyArIGNvbm4udmFsXG4gICAgICAgICAgICB3aGVuICdhY2NvdW50J1xuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1hdCdcbiAgICAgICAgICAgIHdoZW4gJ25pY2tuYW1lJ1xuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWZvbnQnXG4gICAgICAgICAgICB3aGVuICduYW1lJ1xuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWZvbnQnXG4gICAgICAgICAgICB3aGVuICd0ZWwnLCAncGhvbmUnXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZWFycGhvbmUnXG4gICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLXN1Y2Nlc3MnXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9ICd0ZWw6JyArIGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgd2hlbiAna2V5SUQnXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWtleSdcbiAgICAgICAgICAgIHdoZW4gJ2NvdmVyUGhvdG8nXG4gICAgICAgICAgICAgIGlmIGNvbm4udmFsLm1hdGNoIC9eXFwvaXBmc1xcL1sxLTlBLVphLXpdezQwLDYwfSQvXG4gICAgICAgICAgICAgICAgJHNjb3BlLmlwZnNHZXQoY29ubi52YWwpLnRoZW4gKGNvdmVyUGhvdG8pIC0+XG4gICAgICAgICAgICAgICAgICAkc2NvcGUuY292ZXJQaG90byA9ICRzY29wZS5jb3ZlclBob3RvIG9yIHsgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKGRhdGE6aW1hZ2U7YmFzZTY0LCcgKyBjb3ZlclBob3RvLnRvU3RyaW5nKCdiYXNlNjQnKSArICcpJyB9XG4gICAgICAgICAgICB3aGVuICdwcm9maWxlUGhvdG8nXG4gICAgICAgICAgICAgIGlmIGNvbm4udmFsLm1hdGNoIC9eXFwvaXBmc1xcL1sxLTlBLVphLXpdezQwLDYwfSQvXG4gICAgICAgICAgICAgICAgJHNjb3BlLnByb2ZpbGVQaG90byA9ICRzY29wZS5wcm9maWxlUGhvdG8gb3IgKCRzY29wZS5pcGZzUm9vdCBvciAnJykgKyBjb25uLnZhbFxuICAgICAgICAgICAgd2hlbiAndXJsJ1xuICAgICAgICAgICAgICBjb25uLmxpbmsgPSBjb25uLnZhbFxuICAgICAgICAgICAgICBpZiBjb25uLnZhbC5pbmRleE9mKCdmYWNlYm9vay5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWZhY2Vib29rJ1xuICAgICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWZhY2Vib29rJ1xuICAgICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsLnNwbGl0KCdmYWNlYm9vay5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZSBpZiBjb25uLnZhbC5pbmRleE9mKCd0d2l0dGVyLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtdHdpdHRlcidcbiAgICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi10d2l0dGVyJ1xuICAgICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsLnNwbGl0KCd0d2l0dGVyLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ3BsdXMuZ29vZ2xlLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZ29vZ2xlLXBsdXMnXG4gICAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ3BsdXMuZ29vZ2xlLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ2xpbmtlZGluLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtbGlua2VkaW4nXG4gICAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tbGlua2VkaW4nXG4gICAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2xpbmtlZGluLmNvbS8nKVsxXVxuICAgICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ2dpdGh1Yi5jb20vJykgPiAtMVxuICAgICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWdpdGh1YidcbiAgICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1naXRodWInXG4gICAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgICBjb25uLmxpbmtOYW1lID0gY29ubi52YWwuc3BsaXQoJ2dpdGh1Yi5jb20vJylbMV1cbiAgICAgICAgICAgICAgICBjb25uLnF1aWNrQ29udGFjdCA9IHRydWVcbiAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tbGluaydcbiAgICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgIGlmIGNvbm4udmFsIGFuZCBjb25uLnZhbC5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgICAgY29ubi5saW5rID0gKCRzY29wZS5pcGZzUm9vdCBvciAnJykgKyBjb25uLnZhbFxuICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpbmsnXG4gICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgIGlmIGNvbm4uY29uZiArIGNvbm4ucmVmID4gMFxuICAgICAgICAgICAgcGVyY2VudGFnZSA9IGNvbm4uY29uZiAqIDEwMCAvIChjb25uLmNvbmYgKyBjb25uLnJlZilcbiAgICAgICAgICAgIGlmIHBlcmNlbnRhZ2UgPj0gODBcbiAgICAgICAgICAgICAgYWxwaGEgPSBjb25uLmNvbmYgLyBtb3N0Q29uZmlybWF0aW9ucyAqIDAuNyArIDAuM1xuICAgICAgICAgICAgICAjIGNvbm4ucm93U3R5bGUgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKSdcbiAgICAgICAgICAgIGVsc2UgaWYgcGVyY2VudGFnZSA+PSA2MFxuICAgICAgICAgICAgICBjb25uLnJvd0NsYXNzID0gJ3dhcm5pbmcnXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGNvbm4ucm93Q2xhc3MgPSAnZGFuZ2VyJ1xuICAgICAgICAgICRzY29wZS5oYXNRdWlja0NvbnRhY3RzID0gJHNjb3BlLmhhc1F1aWNrQ29udGFjdHMgb3IgY29ubi5xdWlja0NvbnRhY3RcbiAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zTGVuZ3RoID0gT2JqZWN0LmtleXMoJHNjb3BlLmNvbm5lY3Rpb25zKS5sZW5ndGhcblxuXG4gICAgJHNjb3BlLmdldENvbm5lY3RpbmdNc2dzID0gKGlkMSwgaWQyKSAtPlxuICAgICAgZ2V0VmVyaWZpY2F0aW9ucyA9ICRxIChyZXNvbHZlKSAtPlxuICAgICAgICBpZiAhJHNjb3BlLnZlcmlmaWNhdGlvbnMubGVuZ3RoXG4gICAgICAgICAgaWYgJHNjb3BlLnJlY2VpdmVkSW5kZXhcbiAgICAgICAgICAgICRzY29wZS5yZWNlaXZlZEluZGV4LnNlYXJjaFRleHQoJycsIDEwMDAwLCBmYWxzZSwgdHJ1ZSkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgICByZXMuZm9yRWFjaCAocm93KSAtPlxuICAgICAgICAgICAgICAgIG1zZyA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5mcm9tSndzKHJvdy52YWx1ZS5qd3MpXG4gICAgICAgICAgICAgICAgaWYgKG1zZy5zaWduZWREYXRhLnR5cGUgaW4gWyd2ZXJpZnlfaWRlbnRpdHknLCAndmVyaWZpY2F0aW9uJywgJ3VudmVyaWZ5X2lkZW50aXR5JywgJ3VudmVyaWZpY2F0aW9uJ10pXG4gICAgICAgICAgICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gbXNnLnNpZ25lZERhdGEuYXV0aG9yWzBdXG4gICAgICAgICAgICAgICAgICAkc2NvcGUudmVyaWZpY2F0aW9ucy5wdXNoIG1zZ1xuICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgZWxzZVxuICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgZ2V0VmVyaWZpY2F0aW9ucy50aGVuIC0+XG4gICAgICAgIG1zZ3MgPSBbXVxuICAgICAgICAkc2NvcGUudmVyaWZpY2F0aW9ucy5mb3JFYWNoIChtc2cpIC0+XG4gICAgICAgICAgaGFzSWQxID0gaGFzSWQyID0gZmFsc2VcbiAgICAgICAgICBmb3IgaWQgaW4gbXNnLnNpZ25lZERhdGEucmVjaXBpZW50XG4gICAgICAgICAgICByZXR1cm4gbXNncy5wdXNoIG1zZyBpZiBpZFswXcKgPT0gaWQyLm5hbWUgYW5kIGlkWzFdID09IGlkMi52YWxcbiAgICAgICAgcmV0dXJuIG1zZ3NcblxuICAgICRzY29wZS5jb25uZWN0aW9uQ2xpY2tlZCA9IChldmVudCwgaWQpIC0+XG4gICAgICBpZiBpZC5jb25uZWN0aW5nX21zZ3NcbiAgICAgICAgaWQuY29sbGFwc2UgPSAhaWQuY29sbGFwc2VcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLmdldENvbm5lY3RpbmdNc2dzKFskc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZV0sIGlkKS50aGVuIChtc2dzKSAtPlxuICAgICAgICAgIGlkLmNvbm5lY3RpbmdfbXNncyA9IG1zZ3NcbiAgICAgICAgICBpZC5jb2xsYXBzZSA9ICFpZC5jb2xsYXBzZVxuXG4gICAgJHNjb3BlLmdldFNlbnRNc2dzID0gLT5cbiAgICAgIHJldHVybiBpZiAkc2NvcGUuc2VudC5sb2FkaW5nIG9yIG5vdCAkc2NvcGUuaWRlbnRpdHlcbiAgICAgICRzY29wZS5zZW50LmxvYWRpbmcgPSB0cnVlXG4gICAgICBjdXJzb3IgPSBpZiAkc2NvcGUuc2VudC5sZW5ndGggdGhlbiAkc2NvcGUuc2VudFskc2NvcGUuc2VudC5sZW5ndGggLSAxXS5jdXJzb3IgZWxzZSAnJ1xuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0U2VudE1zZ3MoJHNjb3BlLmlkZW50aXR5LCAkc2NvcGUuZmlsdGVycy5saW1pdCwgY3Vyc29yKVxuICAgICAgLnRoZW4gKHNlbnQpIC0+XG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgc2VudCwgeyBhdXRob3JJc1NlbGY6IHRydWUgfVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLnNlbnQsIHNlbnQpXG4gICAgICAgICAgJHNjb3BlLnNlbnQubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgaWYgc2VudC5sZW5ndGggPCAkc2NvcGUuZmlsdGVycy5saW1pdCAtIDFcbiAgICAgICAgICAgICRzY29wZS5zZW50LmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgLmNhdGNoIChlcnJvcikgLT5cbiAgICAgICAgY29uc29sZS5sb2cgJ2Vycm9yIGxvYWRpbmcgc2VudCBtZXNzYWdlcycsIGVycm9yXG4gICAgICAgICRzY29wZS5zZW50LmZpbmlzaGVkID0gdHJ1ZVxuXG4gICAgJHNjb3BlLmdldFJlY2VpdmVkTXNncyA9IC0+XG4gICAgICByZXR1cm4gaWYgJHNjb3BlLnJlY2VpdmVkLmxvYWRpbmcgb3Igbm90ICRzY29wZS5pZGVudGl0eVxuICAgICAgJHNjb3BlLnJlY2VpdmVkLmxvYWRpbmcgPSB0cnVlXG4gICAgICBjdXJzb3IgPSBpZiAkc2NvcGUucmVjZWl2ZWQubGVuZ3RoIHRoZW4gJHNjb3BlLnJlY2VpdmVkWyRzY29wZS5yZWNlaXZlZC5sZW5ndGggLSAxXS5jdXJzb3IgZWxzZSAnJ1xuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0UmVjZWl2ZWRNc2dzKCRzY29wZS5pZGVudGl0eSwgJHNjb3BlLmZpbHRlcnMubGltaXQsIGN1cnNvcilcbiAgICAgIC50aGVuIChyZWNlaXZlZCkgLT5cbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyByZWNlaXZlZCwgeyByZWNpcGllbnRJc1NlbGY6IHRydWUgfVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLnJlY2VpdmVkLCByZWNlaXZlZClcbiAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgaWYgcmVjZWl2ZWQubGVuZ3RoIDwgJHNjb3BlLmZpbHRlcnMubGltaXQgLSAxXG4gICAgICAgICAgICAkc2NvcGUucmVjZWl2ZWQuZmluaXNoZWQgPSB0cnVlXG4gICAgICAgICAgcmVjZWl2ZWQuZm9yRWFjaCAobXNnKSAtPlxuICAgICAgICAgICAgbmV1dHJhbFJhdGluZyA9IChtc2cuZGF0YS5tYXhSYXRpbmcgKyBtc2cuZGF0YS5taW5SYXRpbmcpIC8gMlxuICAgICAgICAgICAgaWYgT2JqZWN0LmtleXModGh1bWJzVXBPYmopLmxlbmd0aCA8IDEyIGFuZCBtc2cuZGF0YS5yYXRpbmcgPiBuZXV0cmFsUmF0aW5nXG4gICAgICAgICAgICAgIHRodW1ic1VwT2JqW0pTT04uc3RyaW5naWZ5KG1zZy5zaWduZWREYXRhLmF1dGhvcildID0gbXNnXG4gICAgICAgICAgICAgICRzY29wZS50aHVtYnNVcCA9IE9iamVjdC52YWx1ZXModGh1bWJzVXBPYmopXG4gICAgICAgICAgICAgICRzY29wZS5oYXNUaHVtYnNVcCA9IHRydWVcbiAgICAgICAgICAgIGVsc2UgaWYgT2JqZWN0LmtleXModGh1bWJzRG93bk9iaikubGVuZ3RoIDwgMTIgYW5kIG1zZy5kYXRhLnJhdGluZyA8IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgdGh1bWJzRG93bk9ialtKU09OLnN0cmluZ2lmeShtc2cuc2lnbmVkRGF0YS5hdXRob3IpXSA9IG1zZ1xuICAgICAgICAgICAgICAkc2NvcGUudGh1bWJzRG93biA9IE9iamVjdC52YWx1ZXModGh1bWJzRG93bk9iailcbiAgICAgICAgICAgICAgJHNjb3BlLmhhc1RodW1ic0Rvd24gPSB0cnVlXG4gICAgICAuY2F0Y2ggKGVycm9yKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnZXJyb3IgbG9hZGluZyByZWNlaXZlZCBtZXNzYWdlcycsIGVycm9yXG4gICAgICAgICRzY29wZS5yZWNlaXZlZC5maW5pc2hlZCA9IHRydWVcblxuICAgICRzY29wZS5zZXRGaWx0ZXJzID0gKGZpbHRlcnMpIC0+XG4gICAgICBhbmd1bGFyLmV4dGVuZCAkc2NvcGUuZmlsdGVycywgZmlsdGVyc1xuICAgICAgJHNjb3BlLnNlbnQgPSBbXVxuICAgICAgJHNjb3BlLnJlY2VpdmVkID0gW11cbiAgICAgICR0aW1lb3V0IC0+ICRyb290U2NvcGUuJGJyb2FkY2FzdCAnbXNnU2Nyb2xsQ2hlY2snXG5cbiAgICAkc2NvcGUudXBsb2FkUHJvZmlsZVBob3RvID0gKGJsb2IsIGlkZW50aXR5KSAtPlxuICAgICAgJHNjb3BlLnVwbG9hZEZpbGUoYmxvYikudGhlbiAoZmlsZXMpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nIGZpbGVzLCAkc2NvcGUuaWRlbnRpdHlcbiAgICAgICAgcmVjaXBpZW50ID0gW1skc2NvcGUuaWRUeXBlLCAkc2NvcGUuaWRWYWx1ZV0sIFsncHJvZmlsZVBob3RvJywgJy9pcGZzLycgKyBmaWxlc1swXS5wYXRoXV1cbiAgICAgICAgdiA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuTWVzc2FnZS5jcmVhdGVWZXJpZmljYXRpb24oe3JlY2lwaWVudH0sICRzY29wZS5wcml2YXRlS2V5KVxuICAgICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5hZGRNZXNzYWdlKHYpXG4gICAgICAgICRzY29wZS51cGxvYWRNb2RhbC5jbG9zZSgpXG5cbiAgICAkc2NvcGUudXBsb2FkQ292ZXJQaG90byA9IChibG9iLCBpZGVudGl0eSkgLT5cbiAgICAgICRzY29wZS51cGxvYWRGaWxlKGJsb2IpLnRoZW4gKGZpbGVzKSAtPlxuICAgICAgICBjb25zb2xlLmxvZyBmaWxlcywgJHNjb3BlLmlkZW50aXR5XG4gICAgICAgIHJlY2lwaWVudCA9IFtbJHNjb3BlLmlkVHlwZSwgJHNjb3BlLmlkVmFsdWVdLCBbJ2NvdmVyUGhvdG8nLCAnL2lwZnMvJyArIGZpbGVzWzBdLnBhdGhdXVxuICAgICAgICB2ID0gJHdpbmRvdy5pZGVudGlmaUxpYi5NZXNzYWdlLmNyZWF0ZVZlcmlmaWNhdGlvbih7cmVjaXBpZW50fSwgJHNjb3BlLnByaXZhdGVLZXkpXG4gICAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmFkZE1lc3NhZ2UodilcbiAgICAgICAgJHNjb3BlLnVwbG9hZE1vZGFsLmNsb3NlKClcblxuICAgICRzY29wZS5vcGVuUHJvZmlsZVBob3RvVXBsb2FkTW9kYWwgPSAtPlxuICAgICAgcmV0dXJuIHVubGVzcyAkc2NvcGUuYXV0aGVudGljYXRpb24uaWRlbnRpdHlcbiAgICAgICRzY29wZS5vcGVuVXBsb2FkTW9kYWwoJHNjb3BlLnVwbG9hZFByb2ZpbGVQaG90bywgJ1VwbG9hZCBwcm9maWxlIHBob3RvJylcblxuICAgICRzY29wZS5vcGVuQ292ZXJQaG90b1VwbG9hZE1vZGFsID0gLT5cbiAgICAgIHJldHVybiB1bmxlc3MgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLmlkZW50aXR5XG4gICAgICAkc2NvcGUub3BlblVwbG9hZE1vZGFsKCRzY29wZS51cGxvYWRDb3ZlclBob3RvLCAnVXBsb2FkIGNvdmVyIHBob3RvJylcblxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgICRzY29wZS5pZFR5cGUgPSAkc3RhdGVQYXJhbXMudHlwZVxuICAgICAgJHNjb3BlLmlkVmFsdWUgPSAkc3RhdGVQYXJhbXMudmFsdWVcbiAgICAgIGlmICR3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUuaW5kZXhPZignLicpID4gLTEgIyBkaWZmZXJlbnRpYXRlIGJldHdlZW4gbG9jYWxob3N0IC8gY2hyb21lIHBsdWdpbiB1cmkgYW5kIEROUyBuYW1lXG4gICAgICAgICRzY29wZS5pZFVybCA9ICRzdGF0ZS5ocmVmKCdpZGVudGl0aWVzLnNob3cnLCB7dHlwZTogJHNjb3BlLmlkVHlwZSwgdmFsdWU6ICRzY29wZS5pZFZhbHVlfSwge2Fic29sdXRlOiB0cnVlfSlcbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLmlkVXJsID0gJ2h0dHBzOi8vaWRlbnRpLmZpLycgKyAkc3RhdGUuaHJlZignaWRlbnRpdGllcy5zaG93Jywge3R5cGU6ICRzY29wZS5pZFR5cGUsIHZhbHVlOiAkc2NvcGUuaWRWYWx1ZX0pXG4gICAgICAkc2NvcGUuaXNDdXJyZW50VXNlciA9ICRzY29wZS5hdXRoZW50aWNhdGlvbiBhbmRcbiAgICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgYW5kXG4gICAgICAgICRzY29wZS5pZFR5cGUgPT0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRUeXBlIGFuZFxuICAgICAgICAkc2NvcGUuaWRWYWx1ZSA9PSAkc2NvcGUuYXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlXG4gICAgICAkc2NvcGUuaXNVbmlxdWVUeXBlID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YoJHNjb3BlLmlkVHlwZSkgPiAtMVxuICAgICAgaWYgISRzY29wZS5pc1VuaXF1ZVR5cGVcbiAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLmxpc3QnLCB7IHNlYXJjaDogJHNjb3BlLmlkVmFsdWUgfVxuICAgICAgICAkc2NvcGUudGFic1syXS5hY3RpdmUgPSB0cnVlIGlmICRzY29wZS50YWJzXG4gICAgICAkc2NvcGUuc2V0UGFnZVRpdGxlICRzY29wZS5pZFZhbHVlXG4gICAgICAkc2NvcGUuJHdhdGNoICdhcGlSZWFkeScsIChpc1JlYWR5KSAtPlxuICAgICAgICBpZiBpc1JlYWR5XG4gICAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0KCRzY29wZS5pZFZhbHVlLCAkc2NvcGUuaWRUeXBlKS50aGVuIChwcm9maWxlKSAtPlxuICAgICAgICAgICAgaWYgcHJvZmlsZVxuICAgICAgICAgICAgICAkc2NvcGUuaWRlbnRpdHkgPSBwcm9maWxlXG4gICAgICAgICAgICAgICRzY29wZS5zZXRQYWdlVGl0bGUoJHNjb3BlLmlkZW50aXR5LnByaW1hcnlOYW1lKVxuICAgICAgICAgICAgICBpZiBwcm9maWxlLmd1blxuICAgICAgICAgICAgICAgIHByb2ZpbGUuZ3VuLm9uIChkYXRhKSAtPlxuICAgICAgICAgICAgICAgICAgcHJvZmlsZS5kYXRhID0gZGF0YVxuICAgICAgICAgICAgICAgIHByb2ZpbGUuZ3VuLmdldCgnYXR0cnMnKS5vbiAtPlxuICAgICAgICAgICAgICAgICAgJHNjb3BlLnNldElkZW50aXR5TmFtZXMoJHNjb3BlLmlkZW50aXR5KVxuICAgICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZ2V0Q29ubmVjdGlvbnMoKVxuICAgICAgICAgICAgICAgIHByb2ZpbGUuZ3VuLmdldCgnc2VudCcpLm9uIC0+XG4gICAgICAgICAgICAgICAgICAkc2NvcGUuZ2V0U2VudE1zZ3MoMClcbiAgICAgICAgICAgICAgICBwcm9maWxlLmd1bi5nZXQoJ3JlY2VpdmVkJykub24gLT5cbiAgICAgICAgICAgICAgICAgICRzY29wZS5nZXRSZWNlaXZlZE1zZ3MoMClcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgICAgICAgICRzY29wZS5pZGVudGl0eSA9ICR3aW5kb3cuaWRlbnRpZmlMaWIuSWRlbnRpdHkuY3JlYXRlKFxuICAgICAgICAgICAgICAgICAgJHNjb3BlLmd1bi5nZXQoJ2lkZW50aWZpJykuZ2V0KCdpZGVudGl0aWVzJyksXG4gICAgICAgICAgICAgICAgICB7YXR0cnM6W3tuYW1lOiRzY29wZS5pZFR5cGUsIHZhbDokc2NvcGUuaWRWYWx1ZX1dfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAuY2F0Y2ggKGVycikgLT5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nICdlcnJvciBmZXRjaGluZyBwcm9maWxlJywgZXJyXG5cbiAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMuc2hvdydcbiAgICAgICRzY29wZS5maW5kT25lKClcbl1cbiJdfQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucnVuLmpzIiwic291cmNlcyI6WyJpbmRleC5ydW4uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsR0FESCxDQUNPLFFBQUEsQ0FBQyxJQUFELEVBQU8sVUFBUCxFQUFtQixNQUFuQixFQUEyQixZQUEzQixFQUF5QyxPQUF6QyxFQUFrRCxtQkFBbEQsQ0FBQTtJQUNIO0lBQ0EsSUFBSSxDQUFDLEtBQUwsQ0FBVyxjQUFYO1dBQ0EsVUFBVSxDQUFDLEdBQVgsQ0FBZSxxQkFBZixFQUFzQyxRQUFBLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsUUFBakIsQ0FBQTtNQUNwQyxVQUFVLENBQUMsU0FBWCxHQUF1QixNQUFNLENBQUMsT0FBTyxDQUFDLEtBQWYsSUFBd0I7TUFDL0MsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsT0FBeEIsRUFBaUMsT0FBTyxDQUFDLElBQXpDO01BQ0EsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsYUFBeEIsRUFBdUMsWUFBdkM7YUFDQSxPQUFPLENBQUMsUUFBUixDQUFpQixDQUFqQixFQUFtQixDQUFuQjtJQUpvQyxDQUF0QztFQUhHLENBRFA7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlICdpZGVudGlmaUFuZ3VsYXInXG4gIC5ydW4gKCRsb2csICRyb290U2NvcGUsICRzdGF0ZSwgJHN0YXRlUGFyYW1zLCAkd2luZG93LCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAkbG9nLmRlYnVnICdydW5CbG9jayBlbmQnXG4gICAgJHJvb3RTY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN1Y2Nlc3MnLCAoZXZlbnQsIGN1cnJlbnQsIHByZXZpb3VzKSAtPlxuICAgICAgJHJvb3RTY29wZS5wYWdlVGl0bGUgPSAkc3RhdGUuY3VycmVudC50aXRsZSB8fCAnSWRlbnRpZmknXG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnc3RhdGUnLCBjdXJyZW50Lm5hbWUpXG4gICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnc3RhdGVQYXJhbXMnLCAkc3RhdGVQYXJhbXMpXG4gICAgICAkd2luZG93LnNjcm9sbFRvKDAsMClcbiJdfQ==

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucm91dGUuanMiLCJzb3VyY2VzIjpbImluZGV4LnJvdXRlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsaUJBQWYsQ0FDRSxDQUFDLE1BREgsQ0FDVSxRQUFBLENBQUMsY0FBRCxFQUFpQixrQkFBakIsQ0FBQTtJQUNOO0lBQ0EsY0FDRSxDQUFDLEtBREgsQ0FDUyxZQURULEVBRUk7TUFBQSxHQUFBLEVBQUssRUFBTDtNQUNBLFFBQUEsRUFBVSxZQURWO01BRUEsUUFBQSxFQUFVO0lBRlYsQ0FGSixDQUtFLENBQUMsS0FMSCxDQUtTLGlCQUxULEVBTUk7TUFBQSxHQUFBLEVBQUssRUFBTDtNQUNBLFdBQUEsRUFBYSwwQkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYyxZQUhkO01BSUEsTUFBQSxFQUNFO1FBQUEsTUFBQSxFQUFRO01BQVIsQ0FMRjtNQU1BLEtBQUEsRUFBTztJQU5QLENBTkosQ0FhRSxDQUFDLEtBYkgsQ0FhUyxtQkFiVCxFQWNJO01BQUEsR0FBQSxFQUFLLG9CQUFMO01BQ0EsV0FBQSxFQUFhLDRCQURiO01BRUEsVUFBQSxFQUFZLHNCQUZaO01BR0EsWUFBQSxFQUFjO0lBSGQsQ0FkSixDQWtCRSxDQUFDLEtBbEJILENBa0JTLGlCQWxCVCxFQW1CSTtNQUFBLEdBQUEsRUFBSywwQkFBTDtNQUNBLFdBQUEsRUFBYSwwQkFEYjtNQUVBLFVBQUEsRUFBWSxzQkFGWjtNQUdBLFlBQUEsRUFBYztJQUhkLENBbkJKLENBdUJFLENBQUMsS0F2QkgsQ0F1QlMsVUF2QlQsRUF3Qkk7TUFBQSxHQUFBLEVBQUssV0FBTDtNQUNBLFFBQUEsRUFBVSxZQURWO01BRUEsUUFBQSxFQUFVO0lBRlYsQ0F4QkosQ0EyQkUsQ0FBQyxLQTNCSCxDQTJCUyxlQTNCVCxFQTRCSTtNQUFBLEdBQUEsRUFBSyxFQUFMO01BQ0EsV0FBQSxFQUFhLHdCQURiO01BRUEsVUFBQSxFQUFZLG9CQUZaO01BR0EsWUFBQSxFQUFjLFVBSGQ7TUFJQSxLQUFBLEVBQU87SUFKUCxDQTVCSixDQWlDRSxDQUFDLEtBakNILENBaUNTLGVBakNULEVBa0NJO01BQUEsR0FBQSxFQUFLLE1BQUw7TUFDQSxXQUFBLEVBQWEsd0JBRGI7TUFFQSxVQUFBLEVBQVksb0JBRlo7TUFHQSxZQUFBLEVBQWM7SUFIZCxDQWxDSixDQXNDRSxDQUFDLEtBdENILENBc0NTLE9BdENULEVBdUNJO01BQUEsR0FBQSxFQUFLLFFBQUw7TUFDQSxXQUFBLEVBQWEscUJBRGI7TUFFQSxLQUFBLEVBQU87SUFGUCxDQXZDSjtXQTJDQSxrQkFBa0IsQ0FBQyxTQUFuQixDQUE2QixHQUE3QjtFQTdDTSxDQURWO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnaWRlbnRpZmlBbmd1bGFyJ1xuICAuY29uZmlnICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAkc3RhdGVQcm92aWRlclxuICAgICAgLnN0YXRlICdpZGVudGl0aWVzJyxcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgICB0ZW1wbGF0ZTogXCI8dWktdmlldy8+XCJcbiAgICAgICAgYWJzdHJhY3Q6IHRydWVcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcy5saXN0JyxcbiAgICAgICAgdXJsOiAnJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL2xpc3QuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ0lkZW50aXRpZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdpZGVudGl0aWVzJ1xuICAgICAgICBwYXJhbXM6XG4gICAgICAgICAgc2VhcmNoOiAnJ1xuICAgICAgICB0aXRsZTogJ0lkZW50aWZpIC0gR2xvYmFsIEFkZHJlc3MgQm9vaydcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcy5jcmVhdGUnLFxuICAgICAgICB1cmw6ICcvaWRlbnRpdGllcy9jcmVhdGUnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL2lkZW50aXRpZXMvY3JlYXRlLmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdJZGVudGl0aWVzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnaWRlbnRpdGllcydcbiAgICAgIC5zdGF0ZSAnaWRlbnRpdGllcy5zaG93JyxcbiAgICAgICAgdXJsOiAnL2lkZW50aXRpZXMvOnR5cGUvOnZhbHVlJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9pZGVudGl0aWVzL3Nob3cuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ0lkZW50aXRpZXNDb250cm9sbGVyJ1xuICAgICAgICBjb250cm9sbGVyQXM6ICdpZGVudGl0aWVzJ1xuICAgICAgLnN0YXRlICdtZXNzYWdlcycsXG4gICAgICAgIHVybDogJy9tZXNzYWdlcydcbiAgICAgICAgdGVtcGxhdGU6IFwiPHVpLXZpZXcvPlwiXG4gICAgICAgIGFic3RyYWN0OiB0cnVlXG4gICAgICAuc3RhdGUgJ21lc3NhZ2VzLmxpc3QnLFxuICAgICAgICB1cmw6ICcnXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL21lc3NhZ2VzL2xpc3QuaHRtbCdcbiAgICAgICAgY29udHJvbGxlcjogJ01lc3NhZ2VzQ29udHJvbGxlcidcbiAgICAgICAgY29udHJvbGxlckFzOiAnbWVzc2FnZXMnXG4gICAgICAgIHRpdGxlOiAnSWRlbnRpZmkgLSBMYXRlc3QgbWVzc2FnZXMnXG4gICAgICAuc3RhdGUgJ21lc3NhZ2VzLnNob3cnLFxuICAgICAgICB1cmw6ICcvOmlkJ1xuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9zaG93Lmh0bWwnXG4gICAgICAgIGNvbnRyb2xsZXI6ICdNZXNzYWdlc0NvbnRyb2xsZXInXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ21lc3NhZ2VzJ1xuICAgICAgLnN0YXRlICdhYm91dCcsXG4gICAgICAgIHVybDogJy9hYm91dCdcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9hYm91dC5odG1sJ1xuICAgICAgICB0aXRsZTogJ0lkZW50aWZpIC0gQWJvdXQnXG5cbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcvJ1xuIl19

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uc3RhbnRzLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25zdGFudHMuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsUUFESCxDQUNZLFFBRFosRUFFSTtJQUFBLGNBQUEsRUFDRTtNQUFBLElBQUEsRUFBTSxJQUFOO01BQ0EsS0FBQSxFQUFPLEVBRFA7TUFFQSxZQUFBLEVBQWM7SUFGZCxDQURGO0lBSUEsb0JBQUEsRUFBc0IsQ0FDcEIsT0FEb0IsRUFFcEIsS0FGb0IsRUFHcEIsT0FIb0IsRUFJcEIsS0FKb0IsRUFLcEIsT0FMb0IsRUFNcEIsU0FOb0IsRUFPcEIsU0FQb0IsRUFRcEIsV0FSb0IsRUFTcEIsaUJBVG9CO0VBSnRCLENBRko7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKVxuICAuY29uc3RhbnQgJ2NvbmZpZycsXG4gICAgZGVmYXVsdEZpbHRlcnM6XG4gICAgICB0eXBlOiBudWxsXG4gICAgICBsaW1pdDogNTBcbiAgICAgIG1heF9kaXN0YW5jZTogMFxuICAgIHVuaXF1ZUF0dHJpYnV0ZVR5cGVzOiBbXG4gICAgICAnZW1haWwnLFxuICAgICAgJ3VybCcsXG4gICAgICAna2V5SUQnLFxuICAgICAgJ3RlbCcsXG4gICAgICAncGhvbmUnLFxuICAgICAgJ2FjY291bnQnLFxuICAgICAgJ2JpdGNvaW4nLFxuICAgICAgJ2dwZ19rZXlpZCcsXG4gICAgICAnZ3BnX2ZpbmdlcnByaW50J1xuICAgIF1cbiJdfQ==

(function() {
  angular.module('identifiAngular').config(function($logProvider) {
    'ngInject';
    // Enable log
    return $logProvider.debugEnabled(true);
  });

  // Set options third-party lib

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY29uZmlnLmpzIiwic291cmNlcyI6WyJpbmRleC5jb25maWcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUNFLENBQUMsTUFESCxDQUNVLFFBQUEsQ0FBQyxZQUFELENBQUE7SUFDTixXQUFBOztXQUVBLFlBQVksQ0FBQyxZQUFiLENBQTBCLElBQTFCO0VBSE0sQ0FEVjs7RUFBQTtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ2lkZW50aWZpQW5ndWxhcidcbiAgLmNvbmZpZyAoJGxvZ1Byb3ZpZGVyKSAtPlxuICAgICduZ0luamVjdCdcbiAgICAjIEVuYWJsZSBsb2dcbiAgICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkIHRydWVcbiAgICAjIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuIl19

angular.module('identifiAngular').run(['$templateCache', function($templateCache) {$templateCache.put('app/identities/create.html','<div ng-init="newEntry = {}" class="container mar-bot30" ng-controller=IdentitiesController><div class=row><div class="col-xs-12 col-sm-8 col-sm-offset-2"><h3>Add public entry</h3><div class="panel panel-danger" ng-if=error><div class=panel-heading ng-bind=error></div></div><div class="panel panel-info" ng-hide=authentication.user><div class=panel-heading>Please log in to add entries.</div></div><form class=form name=addEntryForm ng-submit="addEntry($event, newEntry)"><div class=form-group><label for=idName>Name *</label> <input type=text required autofocus id=idName focus-on=idNameFocus name=idName ng-model=newEntry.name class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idEmail.$invalid }"><label for=idEmail>Email</label> <input type=email id=idEmail name=idEmail ng-model=newEntry.email class=form-control></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idPhone.$invalid }"><label for=idPhone>Phone number</label> <input type=text name=idPhone id=idPhone ng-pattern=phoneRegex ng-model=newEntry.phone class=form-control><p class=help-block>International format, no special characters other than leading +</p></div><div class=form-group ng-class="{ \'has-error\': addEntryForm.idUrl.$invalid }"><label for=idUrl>Url</label> <input type=url id=idUrl name=idUrl ng-model=newEntry.url class=form-control><p class=help-block>Social media profile or other personal url</p></div><button class="btn btn-primary" ng-disabled="!(authentication.user && (newEntry.email || newEntry.url || newEntry.phone) && !(addEntryForm.idName.$invalid || addEntryForm.idEmail.$invalid || addEntryForm.idPhone.$invalid || addEntryForm.idUrl.$invalid))">Add public entry</button><p class=help-block>More details can be added afterwards.</p></form></div></div></div>');
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top25-xs></div><div ng-if="!query.term && !authentication.user" class=jumbotron><div class=align-center><h1>Global address book</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-book fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-book"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Find out who said what about a person or an organization.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Show content from trusted and real identities only.</p></div></div></div></div><table id=search-results class="table table-hover" infinite-scroll=search(query.term) infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || ids.loading || ids.finished"><tbody><tr ng-if="!query.term || (!ids.loading && !ids.list.length)" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ng-click=addEntryClicked()>Add entry</a></td></tr><tr ng-repeat="result in ids.list" id=result{{$index}} ng-hide=!result.linkTo ui-sref="identities.show({ type: result.linkTo.name, value: result.linkTo.val })" class=search-result-row ng-class="{active: result.active}"><td class=gravatar-col><identicon identity=result border=3 width=50 positive-score=result.pos negative-score=result.neg ipfs=ipfs></identicon></td><td><span ng-if="result.data.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.data.trustDistance > 0" ng-bind="result.data.trustDistance | ordinal" class="label label-default pull-right"></span> <a ng-bind-html=result.primaryName|highlight:query.term ui-sref="identities.show({ type: result.linkTo.name, value: result.linkTo.val })"></a> <small ng-if=!(result.mostVerifiedAttributes.name||result.mostVerifiedAttributes.nickname) class=list-group-item-text><span ng-bind-html=result.data.attrs[0].name|highlight:query.term></span></small><br><small><span ng-if=result.nickname ng-bind-html=result.nickname|highlight:query.term class=mar-right10></span> <span ng-if=result.profile.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.profile.email|highlight:query.term></span> </span><span ng-if=result.profile.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.profile.facebook|highlight:query.term></span> </span><span ng-if=result.profile.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.profile.twitter|highlight:query.term></span> </span><span ng-if=result.profile.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.profile.googlePlus|highlight:query.term></span> </span><span ng-if=result.mostVerifiedAttributes.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.mostVerifiedAttributes.bitcoin.attribute.val|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if="apiReady && !ids.loading && !ids.list.length">No results</div></section></div>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div ng-click=openCoverPhotoUploadModal() class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 0 }" ng-click=activateTab(0)><span class=hidden-xs>Received </span>({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative || received.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Sent </span>({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Identity </span>(<span ng-bind="connectionsLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType><div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon ng-click=openProfilePhotoUploadModal() identity=identity ipfs=ipfs border=4 show-distance=0 width=230></identicon><!-- <a ng-href="" class="circle {{profileImageCircleClass}}">\n                    <span class="arc"></span>\n                    <img ng-src="{{profilePhotoUrl}}" width="230" height="230" class="profile-image mar-right5">\n                  </a> --></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs visible-sm" ng-if=!(identity.mostVerifiedAttributes.name||identity.mostVerifiedAttributes.nickname)><span ng-bind=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a> </small></span><span ng-bind=identity.primaryName></span> <span ng-hide="!identity.nickname || identity.nickname == identity.primaryName">(<span class=text-muted ng-bind=identity.nickname></span>) </span><span ng-if="identity.data.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="identity.data.trustDistance > 0 && identity.data.trustDistance < 1000" ng-bind="identity.data.trustDistance | ordinal" class="label label-default pull-right"></span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><p><b>Received: <span ng-if="identity.data.receivedPositive || identity.data.receivedNegative"><span ng-bind="identity.data.receivedPositive / (identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.receivedPositive || identity.data.receivedNegative)">&mdash;</span></b><br>Sent: <span ng-if="identity.data.sentPositive || identity.data.sentNegative"><span ng-bind="identity.data.sentPositive / (identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative) * 100 | number:0"></span>% positive </span><span ng-if="!(identity.data.sentPositive || identity.data.sentNegative)">&mdash;</span></p><!--\n                <p class="received-stats">\n                  <div><strong>Received</strong></div>\n                  <div>\n                    <strong>\n                      <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.receivedPositive">-</span></span>\n                      <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.receivedNeutral">-</span></span>\n                      <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.receivedNegative">-</span></span>\n                    </strong>\n                  </div>\n                </p>\n                <p>\n                  <div>Sent</div>\n                  <div>\n                    <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="identity.data.sentPositive">-</span></span>\n                    <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="identity.data.sentNeutral">-</span></span>\n                    <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="identity.data.sentNegative">-</span></span>\n                  </div>\n                </p> --><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="id in connections" ng-if=id.quickContact><a ng-href={{id.link}}><span ng-class=id.iconStyle></span><span ng-bind="id.linkName || id.val"></span></a></li><li ng-if=stats.first_seen><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && hasThumbsUp" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div><div ng-if="isUniqueType && hasThumbsDown" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown | orderBy:\'authorTrustDistance\'" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon ipfs=ipfs identity=msg.author class=no-glow border=3 width=60></identicon></a></div></div></div></div></div></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><uib-tabset active=activeTab><uib-tab ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span> <span class=visible-xs>Recv ({{0+identity.data.receivedPositive+identity.data.receivedNeutral+identity.data.receivedNegative}})</span></uib-tab-heading><div ng-show=authentication.user class="panel panel-default panel-success"><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment, recipient: [[idType, idValue]] })"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="Write feedback"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button type=submit class="pull-right ladda-button btn btn-primary" data-style=zoom-out><span class=ladda-label><span class="fa fa-edit m"></span> Publish</span><span class=ladda-spinner></span></button></div></div></form></div></div><div infinite-scroll=getReceivedMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !identity || received.loading || received.finished ||\xA0activeTab != 0"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.receivedPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.receivedNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.receivedNegative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message ipfs=ipfs msg-data=msg page-info=identity ng-repeat="msg in received | filter:msgFilter | orderBy:\'-data.timestamp\' as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="apiReady && !isCurrentUser && !received.loading && receivedFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if="apiReady && isCurrentUser && !received.loading && received.length == 0" class="alert alert-warning text-center"><i class="fa fa-info pull-right"></i><p>You have not received any trust ratings yet.</p><p>You need trust ratings to have your messages saved and displayed by others.</p><p>You can also ask someone to verify that this account belongs to your already trusted identity.</p><p><button ng-click=copyIdLink() class="btn btn-primary mar-top10">Copy link to this page</button></p><p>Or show them your QR code:</p><div class=mar-top20><qrcode data={{idUrl}} size=240></qrcode></div></div><div ng-if=received.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=isUniqueType><uib-tab-heading>Sent ({{0+identity.data.sentPositive+identity.data.sentNeutral+identity.data.sentNegative}})</uib-tab-heading><div infinite-scroll=getSentMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !identity || sent.loading || sent.finished ||\xA0activeTab != 1"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span>Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+identity.data.sentPositive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+identity.data.sentNeutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+identity.data.sentNegative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message ipfs=ipfs msg-data=msg page-info=identity ng-repeat="msg in sent | filter:msgFilter | orderBy:\'-data.timestamp\' as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="!sent.loading && sentFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if=sent.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=true><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-show="connections.$resolved && connectionsLength > 0" ng-bind="connectionsLength - 1"></span><span ng-hide=connections.$resolved></span>)</uib-tab-heading><div id=connections><!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="id in connections" style={{id.rowStyle}} ng-class=id.rowClass ng-click="!id.isCurrent && connectionClicked($event, id)" class=id-row><td><div class="visible-xs mar-bot5"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><div><a style=min-width:45px class="pull-left btn btn-lg btn-social-icon mar-right15" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span> <span ng-if=id.iconStyle&&!id.link class="pull-left btn btn-lg btn-social-icon" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span></span></a><div class="hidden-xs pull-left"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><!--\n                              <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n                            --><div class=pull-right ng-if=!id.isCurrent><button autocomplete=off name=confirm class="ladda-button btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{id.conf}}</button> <button autocomplete=off name=unverify class="ladda-button btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{id.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!id.isCurrent class="active connectingmsgs"><td class="connectingmsgs ladda-button" data-style=zoom-in data-spinner-color=#000><div uib-collapse=!id.collapse><div ng-repeat="msg in id.connecting_msgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.data.type === \'verify_identity\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.data.type === \'unverify_identity\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" class=id-link><identicon ipfs=ipfs identity=msg class=mar-right5 border=3 width=30 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span ng-bind=msg.author_name||msg.data.author[0][1]></span> </a></strong>- <span ng-bind="msg.data.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-change=guessAttributeType() ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder="value (e.g. alice@example.com)" ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder="type (e.g. email)" ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [newVerification.type, newVerification.value]] }, { conf: 0, ref: 0, name: newVerification.type, val: newVerification.value })" class="ladda-button btn btn-default" data-style=zoom-out ng-disabled="!authentication.user || !(newVerification.type && newVerification.value)"><span class="glyphicon glyphicon-plus"></span> Add</button></td></tr></tbody></table></div><div ng-if=!connections.$resolved style=position:relative;padding:20px us-spinner></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/identities/upload.modal.html','<div class="col-md-10 col-md-offset-1" ng-controller=IdentitiesController><div class="panel panel-default mar-top15"><div class=panel-heading><form name=form><div class="drop-box mar-bot10" ngf-select ngf-drop ng-model=file name=file ngf-pattern="\'image/*\'" ngf-accept="\'image/*\'" ngf-max-size=5MB ngf-min-height=100 style=width:100%;min-height:300px;text-align:center><div ng-if=!file style="padding:120px 0">Drop file or click</div><img ng-if=file ngf-src=file width=70%></div><button class="btn btn-primary" ng-disabled=!file type=submit ng-click=uploadModalCallback(file)>{{ modalButtonText }}</button></form></div></div></div>');
$templateCache.put('app/main/about.html','<div class=container><div class=col-md-8><h3>About Identifi</h3><p class=lead>Identifi is an address book application that stores its data in a distributed fashion on the BitTorrent-like <a href=https://ipfs.io>IPFS</a> network. The stored information is not owned or centrally administered by anyone.</p><p>In addition to keeping your contact details such as phone number or bitcoin address up-to-date, you can give other users <b>trust ratings and feedback</b>. You can filter all shown information by your <b>web of trust</b>, for example by displaying only the information stored by your friends and the people they trust.</p><p>Identifi is free and open source software. The project is in alpha development stage.</p><ul><li><a href=https://github.com/identifi/identifi>Source code</a></li><li><a href=https://medium.com/@mmalmi/learning-to-trust-strangers-167b652a654f>Learning to Trust Strangers</a> - a blog post outlining the concept</li><li><a href=https://cdn.rawgit.com/identifi/identifi-lib/b979abf6/example/browser.html>Technical description of Identifi with live code</a></li></ul><h4>Available at</h4><ul><li><a href=https://identi.fi>https://identi.fi</a></li><li><a href=https://identifi.github.io/ >https://identifi.github.io/</a></li><li><a href=https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/ >https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/</a></li><li><a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome extension</a></li><!-- TODO: add dynamically updated /ipfs url --></ul><h3>Privacy policy</h3><p>The Identifi network stores user-submitted identifiers which can be of arbitrary type, for example <i>name</i>, <i>email address</i> or <i>phone number</i>. All stored information is made public and broadcast to the <a href=https://ipfs.io>IPFS</a> network.</p></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row ng-if=match.label.linkTo><identicon ipfs=ipfs identity=match.label border=3 width=46 class=mar-right10></identicon><span ng-bind-html="match.label.primaryName | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><textarea rows=6 class=form-control placeholder="Enter private key" ng-model=privateKeySerialized></textarea><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--> <button class="btn btn-primary" ng-click=generateKey()>Generate new key</button> <button class="btn btn-default pull-right" ng-disabled=!privateKeySerialized ng-click=downloadKey()><i class="fa fa-download"></i> Download key</button> <button class="btn btn-primary" ng-disabled=!privateKeySerialized ng-click="loginWithKey(privateKeySerialized, publicKeyPEM)">Log in</button></div></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="alert alert-info">Viewing as: <strong ng-if=viewpoint><a ui-sref="identities.show({ type: viewpoint.linkTo.name, value: viewpoint.linkTo.val })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon ipfs=ipfs identity=viewpoint border=3 width=35></identicon></span><span ng-bind=viewpoint.mostVerifiedAttributes.name.attribute.val></span></a></strong><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({max_distance: -1})" ng-class="{active: filters.max_distance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 1})" ng-class="{active: filters.max_distance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 2})" ng-class="{active: filters.max_distance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 3})" ng-class="{active: filters.max_distance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 0})" ng-class="{active: filters.max_distance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em;"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class=container><section><div id=messages class=row><div class=col-md-4><div ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div infinite-scroll=find() infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || msgs.loading || msgs.finished" infinite-scroll-listen-for-event=msgScrollCheck><message ng-repeat="msg in msgs.list | filter:msgFilter" msg-data=msg ng-click="openMessage($event, msg, \'lg\')"></message></div><div us-spinner ng-if=!messages.$resolved style=position:relative;padding:20px></div><div class="alert alert-info text-center" ng-if="!msgs.loading && !msgs.list.length">No messages to show</div></div></div></section></div>');
$templateCache.put('app/messages/show.html','<section ng-init=findOne()><div class="col-md-8 col-md-offset-2 msg-col"><message ipfs=ipfs msg-data=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by: <a ng-if=false ng-bind=message.signerName||message.signerKeyHash ui-sref="identities.show({type: \'keyID\', value: message.signerKeyHash })"></a> <strong ng-if=message.verifiedBy><a ui-sref="identities.show({ type: \'keyID\', value: message.signerKeyHash })" class=id-link><identicon ipfs=ipfs identity=message.verifiedBy class=mar-right5 border=3 width=35></identicon><span ng-bind=message.verifiedBy.mostVerifiedAttributes.name.attribute.val></span> <small>{{message.signerKeyHash}}</small></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-controller=MessagesController ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':$ctrl.msgData.isVerification}" style={{$ctrl.msgData.bgColor}} ng-if=$ctrl.msgData.data><div class=message-panel ng-class="{ \'panel-body\': !$ctrl.msgData.isVerification, \'panel-heading\': $ctrl.msgData.isVerification || $ctrl.msgData.isUnverification }"><p><span class="mar-left5 pull-right" ng-class=$ctrl.msgData.iconStyle ng-repeat="n in $ctrl.msgData.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=$ctrl.msgData.local></span> <strong><a ui-sref="identities.show({ type: $ctrl.msgData.linkToAuthor[0], value: $ctrl.msgData.linkToAuthor[1] })" class=id-link><identicon ipfs=$ctrl.ipfs identity="($ctrl.msgData.authorIsSelf && $ctrl.pageInfo) || $ctrl.msgData.author" class=mar-right5 border=3 width=35></identicon><span ng-bind="($ctrl.msgData.authorIsSelf && $ctrl.pageInfo.primaryName)||$ctrl.msgData.author_name||$ctrl.msgData.linkToAuthor[1]"></span> </a></strong><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: $ctrl.msgData.linkToRecipient[0], value: $ctrl.msgData.linkToRecipient[1] })" ng-bind="($ctrl.msgData.recipientIsSelf && $ctrl.pageInfo.primaryName)||$ctrl.msgData.recipient_name||$ctrl.msgData.linkToRecipient[1]" class=id-link></a> - <a ui-sref="messages.show({ id: ($ctrl.msgData.ipfs_hash || $ctrl.msgData.hash) })" ng-bind="$ctrl.msgData.data.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block;></a></p><p ng-if="$ctrl.msgData.isVerification || $ctrl.msgData.isUnverification"><small ng-repeat="recipient in $ctrl.msgData.data.recipient">{{recipient[0]}}: <span ng-if="recipient[0] == \'email\' || recipient[0] == \'url\'" ng-bind-html="recipient[1] | linky"></span> <span ng-if="!(recipient[0] == \'email\' || recipient[0] == \'url\')" ng-bind=recipient[1]></span> <i class="fa fa-link" ng-if="!$last && $ctrl.msgData.isVerification"></i> <i class="fa fa-chain-broken" ng-if="!$last && $ctrl.msgData.isUnverification"></i></small></p><p ng-bind-html=$ctrl.msgData.data.comment|linky></p></div></div>');}]);