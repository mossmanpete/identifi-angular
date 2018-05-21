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
            if (m.signedData.author && m.signedData.author[0][1] === 'B1N1eMWAc8EpwN0lARFSw3PRUtxGJgujUz5RvhHUGQs=') {
              console.log(pair.value);
            }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5qcyIsInNvdXJjZXMiOlsibWVzc2FnZXMvbWVzc2FnZXMuY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQTtBQUFBLE1BQUE7O0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLG9CQUE3QyxFQUFtRTtJQUNqRSxRQURpRSxFQUVqRSxZQUZpRSxFQUdqRSxTQUhpRSxFQUlqRSxjQUppRSxFQUtqRSxXQUxpRSxFQU1qRSxPQU5pRSxFQVFqRSxVQVJpRSxFQVNqRSxRQVRpRSxFQVVqRSxVQVZpRSxFQVdqRSxxQkFYaUUsRUFZakUsU0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixPQUFyQixFQUE4QixZQUE5QixFQUE0QyxTQUE1QyxFQUF1RCxLQUF2RCxFQUE4RCxRQUE5RCxFQUF3RSxNQUF4RSxFQUFnRixRQUFoRixFQUEwRixtQkFBMUY7TUFDRSxNQUFNLENBQUMsTUFBUCxHQUFnQixZQUFZLENBQUM7TUFDN0IsTUFBTSxDQUFDLE9BQVAsR0FBaUIsWUFBWSxDQUFDO01BRTlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBZixHQUFzQjtNQUV0QixNQUFNLENBQUMsU0FBUCxHQUFtQixTQUFBO0FBQ2pCLFlBQUE7UUFBQSxJQUFBLEdBQU8sbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEIsQ0FBQSxJQUE0QztlQUNuRCxNQUFNLENBQUMsSUFBUCxHQUNFO1VBQUEsT0FBQSxFQUFTLEtBQVQ7VUFDQSxRQUFBLEVBQVUsS0FEVjtVQUVBLElBQUE7O0FBQU87aUJBQUEsWUFBQTs7OzJCQUFBO0FBQUE7O2NBRlA7O01BSGU7TUFNbkIsTUFBTSxDQUFDLFNBQVAsQ0FBQTtNQUVBLE1BQU0sQ0FBQyxTQUFQLEdBQW1CLFNBQUMsTUFBRDtlQUNqQixJQUFJLEtBQUosQ0FBVSxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQsRUFBWSxJ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SFAsRUFERjtlQUFBLE1BQUE7dUJBUUUsaUJBQUEsQ0FBQSxFQVJGO2VBREY7O1VBRHdCLENBQTFCLEVBckJGOztNQURlO0lBcEVuQixDQVppRTtHQUFuRTtBQUZBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG4jIE1lc3NhZ2VzIGNvbnRyb2xsZXJcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5jb250cm9sbGVyICdNZXNzYWdlc0NvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJHdpbmRvdydcbiAgJyRzdGF0ZVBhcmFtcydcbiAgJyRsb2NhdGlvbidcbiAgJyRodHRwJ1xuICAjICdBdXRoZW50aWNhdGlvbidcbiAgJ01lc3NhZ2VzJ1xuICAnY29uZmlnJ1xuICAnJHRpbWVvdXQnXG4gICdsb2NhbFN0b3JhZ2VTZXJ2aWNlJ1xuICAoJHNjb3BlLCAkcm9vdFNjb3BlLCAkd2luZG93LCAkc3RhdGVQYXJhbXMsICRsb2NhdGlvbiwgJGh0dHAsIE1lc3NhZ2VzLCBjb25maWcsICR0aW1lb3V0LCBsb2NhbFN0b3JhZ2VTZXJ2aWNlKSAtPiAjLCBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5pZFR5cGUgPSAkc3RhdGVQYXJhbXMudHlwZVxuICAgICRzY29wZS5pZFZhbHVlID0gJHN0YXRlUGFyYW1zLnZhbHVlXG5cbiAgICAkc2NvcGUuZmlsdGVycy50eXBlID0gJ3JhdGluZydcblxuICAgICRzY29wZS5yZXNldE1zZ3MgPSAtPlxuICAgICAgbXNncyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhbE1lc3NhZ2VzJykgb3Ige31cbiAgICAgICRzY29wZS5tc2dzID1cbiAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgZmluaXNoZWQ6IGZhbHNlXG4gICAgICAgIGxpc3Q6ICh2YWx1ZSBmb3Igb3duIHByb3AsIHZhbHVlIG9mIG1zZ3MpXG4gICAgJHNjb3BlLnJlc2V0TXNncygpXG5cbiAgICAkc2NvcGUuaWNvbkNvdW50ID0gKHJhdGluZykgLT5cbiAgICAgIG5ldyBBcnJheShNYXRoLm1heCgxLCBNYXRoLmFicyhyYXRpbmcpKSlcblxuICAgICRzY29wZS5pY29uU3R5bGUgPSAocmF0aW5nKSAtPlxuICAgICAgaWNvblN0eWxlID0gJ25ldXRyYWwnXG4gICAgICBpZiByYXRpbmcgPiAwXG4gICAgICAgIGljb25TdHlsZSA9ICdwb3NpdGl2ZSdcbiAgICAgIGVsc2UgaWYgcmF0aW5nIDwgMFxuICAgICAgICBpY29uU3R5bGUgPSAnbmVnYXRpdmUnXG4gICAgICBpY29uU3R5bGVcblxuICAgICRzY29wZS5pY29uQ2xhc3MgPSAocmF0aW5nKSAtPlxuICAgICAgaWNvblN0eWxlID0gJ2dseXBoaWNvbi1xdWVzdGlvbi1zaWduJ1xuICAgICAgaWYgcmF0aW5nID4gMFxuICAgICAgICBpY29uU3R5bGUgPSAnZ2x5cGhpY29uLXRodW1icy11cCdcbiAgICAgIGVsc2UgaWYgcmF0aW5nIDwgMFxuICAgICAgICBpY29uU3R5bGUgPSAnZ2x5cGhpY29uLXRodW1icy1kb3duJ1xuICAgICAgaWNvblN0eWxlXG5cbiAgICAkc2NvcGUuY29sbGFwc2VGaWx0ZXJzID0gJHdpbmRvdy5pbm5lcldpZHRoIDwgOTkyXG5cbiAgICAkc2NvcGUuZmluZCA9IC0+XG4gICAgICByZXR1cm4gaWYgJHNjb3BlLm1zZ3MubG9hZGluZ1xuICAgICAgJHNjb3BlLm1zZ3MubG9hZGluZyA9IHRydWVcbiAgICAgICMgR2V0IGxhdGVzdCBtZXNzYWdlcyBmcm9tIGlwZnMgaW5kZXhcbiAgICAgIHNlYXJjaEtleSA9ICcnXG4gICAgICBpZiAkc2NvcGUubXNncy5saXN0Lmxlbmd0aFxuICAgICAgICBzZWFyY2hLZXkgPSAkc2NvcGUubXNncy5saXN0WyRzY29wZS5tc2dzLmxpc3QubGVuZ3RoIC0gMV0uc2VhcmNoS2V5XG4gICAgICAkc2NvcGUuaWRlbnRpZmlJbmRleC5tZXNzYWdlc0J5VGltZXN0YW1wLnNlYXJjaFRleHQoJycsICRzY29wZS5maWx0ZXJzLmxpbWl0LCBzZWFyY2hLZXksIHRydWUpICMgVE9ETzogaW1wbGVtZW50IGluIGlkZW50aWZpLWxpYlxuICAgICAgLnRoZW4gKHJlcykgLT5cbiAgICAgICAgbWVzc2FnZXMgPSBbXVxuICAgICAgICBmb3IgcGFpciBpbiByZXNcbiAgICAgICAgICBtID0gJHdpbmRvdy5pZGVudGlmaUxpYi5NZXNzYWdlLmZyb21Kd3MocGFpci52YWx1ZS5qd3MpXG4gICAgICAgICAgbS5hdXRob3JQb3MgPSBwYWlyLnZhbHVlLmF1dGhvcl9wb3NcbiAgICAgICAgICBtLmF1dGhvck5lZyA9IHBhaXIudmFsdWUuYXV0aG9yX25lZ1xuICAgICAgICAgIG0uYXV0aG9yVHJ1c3REaXN0YW5jZSA9IHBhaXIudmFsdWUuZGlzdGFuY2VcbiAgICAgICAgICBtLmF1dGhvck5hbWUgPSBwYWlyLnZhbHVlLmF1dGhvcl9uYW1lXG4gICAgICAgICAgbS5zZWFyY2hLZXkgPSBwYWlyLmtleVxuICAgICAgICAgIG0uaXNWZXJpZmljYXRpb24gPSBtLnNpZ25lZERhdGEudHlwZSBpbiBbJ3ZlcmlmaWNhdGlvbicsICd2ZXJpZnlfaWRlbnRpdHknXVxuICAgICAgICAgIG0uaXNVbnZlcmlmaWNhdGlvbiA9IG0uc2lnbmVkRGF0YS50eXBlIGluIFsndW52ZXJpZmljYXRpb24nLCAndW52ZXJpZnlfaWRlbnRpdHknXVxuICAgICAgICAgIG1lc3NhZ2VzLnB1c2gobSlcbiAgICAgICAgICBjb25zb2xlLmxvZyBwYWlyLnZhbHVlIGlmIG0uc2lnbmVkRGF0YS5hdXRob3IgJiYgbS5zaWduZWREYXRhLmF1dGhvclswXVsxXSA9PSAnQjFOMWVNV0FjOEVwd04wbEFSRlN3M1BSVXR4R0pndWpVejVSdmhIVUdRcz0nXG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgbWVzc2FnZXNcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLm1zZ3MubGlzdCwgbWVzc2FnZXMpXG4gICAgICAgIGlmIHJlcy5sZW5ndGggPCAkc2NvcGUuZmlsdGVycy5saW1pdCAtIDEgIyBidWdcbiAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tc2dzLmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5tc2dzLmxvYWRpbmcgPSBmYWxzZVxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5maWx0ZXJzLCBmaWx0ZXJzXG4gICAgICAkc2NvcGUucmVzZXRNc2dzKClcbiAgICAgICR0aW1lb3V0IC0+ICRyb290U2NvcGUuJGJyb2FkY2FzdCAnbXNnU2Nyb2xsQ2hlY2snXG5cbiAgICAjIEZpbmQgZXhpc3RpbmcgTWVzc2FnZVxuICAgICRzY29wZS5maW5kT25lID0gLT5cbiAgICAgIGlmICRzdGF0ZVBhcmFtcy5pZFxuICAgICAgICBwcm9jZXNzUmVzcG9uc2UgPSAtPlxuICAgICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMoWyRzY29wZS5tZXNzYWdlXSwge30sIHRydWUpXG4gICAgICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSAnTWVzc2FnZSAnICsgaGFzaFxuICAgICAgICAgICRzY29wZS5zZXRNc2dSYXdEYXRhKCRzY29wZS5tZXNzYWdlKVxuICAgICAgICAgICRzY29wZS5tZXNzYWdlLmF1dGhvckdyYXZhdGFyID0gQ3J5cHRvSlMuTUQ1KCRzY29wZS5tZXNzYWdlLmF1dGhvckVtYWlsIG9yICRzY29wZS5tZXNzYWdlLmRhdGEuYXV0aG9yWzBdWzFdKS50b1N0cmluZygpXG4gICAgICAgICAgJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50R3JhdmF0YXIgPSBDcnlwdG9KUy5NRDUoJHNjb3BlLm1lc3NhZ2UucmVjaXBpZW50RW1haWwgb3IgJHNjb3BlLm1lc3NhZ2UuZGF0YS5yZWNpcGllbnRbMF1bMV0pLnRvU3RyaW5nKClcbiAgICAgICAgICAkc2NvcGUubWVzc2FnZS5oYXNoID0gaGFzaFxuICAgICAgICAgICRzY29wZS5nZXRJZGVudGl0eVByb2ZpbGUgeyB0eXBlOiAna2V5SUQnLCB2YWx1ZTogJHNjb3BlLm1lc3NhZ2Uuc2lnbmVyX2tleWlkIH0sIChwcm9maWxlKSAtPlxuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5ID0gcHJvZmlsZVxuXG4gICAgICAgIGdldE1lc3NhZ2VGcm9tQXBpID0gLT5cbiAgICAgICAgICAkc2NvcGUubWVzc2FnZSA9IE1lc3NhZ2VzLmdldFxuICAgICAgICAgICAgaWQ6IGhhc2hcbiAgICAgICAgICAgIHZpZXdwb2ludF9uYW1lOiAkc2NvcGUuZmlsdGVycy52aWV3cG9pbnRfbmFtZVxuICAgICAgICAgICAgdmlld3BvaW50X3ZhbHVlOiAkc2NvcGUuZmlsdGVycy52aWV3cG9pbnRfdmFsdWVcbiAgICAgICAgICAgIG1heF9kaXN0YW5jZTogJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlXG4gICAgICAgICAgLCBwcm9jZXNzUmVzcG9uc2VcblxuICAgICAgICBoYXNoID0gJHN0YXRlUGFyYW1zLmlkXG4gICAgICAgIHF1ZXJ5ID0gbnVsbFxuICAgICAgICAkc2NvcGUuJHdhdGNoICdhcGlSZWFkeScsIChpc1JlYWR5KSAtPlxuICAgICAgICAgIGlmIGlzUmVhZHlcbiAgICAgICAgICAgIGlmIGhhc2gubWF0Y2ggL15RbVsxLTlBLVphLXpdezQwLDUwfSQvICMgbG9va3MgbGlrZSBhbiBpcGZzIGFkZHJlc3NcbiAgICAgICAgICAgICAgJHNjb3BlLmlwZnNHZXQoaGFzaCkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgICAgICRzY29wZS5tZXNzYWdlID0geyAnandzJzogcmVzIH0gIyBzYW1lIGZvcm1hdCBhcyB0aGUgb2JqZWN0IHJldHVybmVkIGJ5IE1lc3NhZ2VzLmdldFxuICAgICAgICAgICAgICAgIHByb2Nlc3NSZXNwb25zZSgpXG4gICAgICAgICAgICAgIC5jYXRjaCAoZXJyKSAtPiAjIGZhbGxiYWNrIGdvIGxvY2FsIGlmIGlwZnMgbm90IGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nICdmYWlsZWQgdG8gZ2V0IG1zZyBmcm9tIGlwZnMnLCBlcnJcbiAgICAgICAgICAgICAgICBnZXRNZXNzYWdlRnJvbUFwaSgpXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIGdldE1lc3NhZ2VGcm9tQXBpKClcblxuICAgIHJldHVyblxuXVxuIl19

(function() {
  'use strict';
  angular.module('identifiAngular').controller('MainController', [
    '$scope', '$rootScope', '$location', '$http', '$state', 'config', 'localStorageService', '$uibModal', '$window', '$q', function($scope, $rootScope, $location, $http, $state, config, localStorageService, $uibModal, $window, $q) {

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
          if ($scope.filters.max_distance === 0 && typeof value.distance !== 'number') {
            return false;
          } else if ($scope.filters.max_distance > 0 && value.distance > $scope.filters.max_distance) {
            return false;
          }
        }
        return true;
      };
      $scope.removeFocus = function(event) {
        return event.currentTarget.blur();
      };
      $scope.logoClicked = function() {
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
        var k, ref, v;
        if (data.attrs && data.attrs.length) {
          data.dist = data.attrs[0].dist + 0;
          data.pos = data.attrs[0].pos;
          data.neg = data.attrs[0].neg;
          ref = data.attrs;
          for (k in ref) {
            v = ref[k];
            switch (v.name) {
              case 'name':
                if (!data.name) {
                  data.name = v.val;
                }
                break;
              case 'nickname':
                if (!data.nickname) {
                  data.nickname = v.val;
                }
                break;
              case 'email':
                data.gravatar = CryptoJS.MD5(v.val).toString();
            }
          }
        }
        if (data.nickname && !data.name) {
          data.name = data.nickname;
        }
        if (!data.name) {
          data.name = fallbackId.value;
        }
        if (!data.gravatar) {
          data.gravatar = CryptoJS.MD5(fallbackId.value).toString();
        }
        return data;
      };
      $scope.openMessage = function(event, message, size) {
        var modalInstance, t;
        t = event.target;
        if (angular.element(t).closest('a').length) {
          return;
        }
        $scope.setMsgRawData(message);
        $scope.message = message;
        if (!$scope.hasValidSignature(message)) {
          return;
        }
        $scope.identifiIndex.get($scope.message.signer_keyid, 'keyID').then(function(profile) {
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
      $scope.hasValidSignature = function(msg, parsedJws) {
        var isValid, pem, pubKey;
        parsedJws = parsedJws || KJUR.jws.JWS.parse(msg.jws);
        pem = KJUR.asn1.ASN1Util.getPEMStringFromHex(parsedJws.headerObj.kid, "PUBLIC KEY");
        pubKey = KEYUTIL.getKey(pem);
        isValid = KJUR.jws.JWS.verify(msg.jws, pubKey, ['ES256']);
        if (isValid) {
          console.log('valid signature');
        } else {
          console.error('invalid signature');
        }
        return isValid;
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
          if (verifySignature && !$scope.hasValidSignature(msg, parsedJws)) {
            return;
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
              return msg.hasSuccess = 'has-success';
            case 'connection':
              msg.iconStyle = 'glyphicon glyphicon-ok positive';
              return msg.hasSuccess = 'has-success';
            case 'unverify_identity':
            case 'unverification':
              msg.iconStyle = 'glyphicon glyphicon-remove negative';
              msg.hasSuccess = 'has-error';
              return msg.bgColor = 'background-color: #FFF0DE;border-color:#FFE2C6;';
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
        limit = limit || 50;
        cursor = false;
        if ($scope.ids.list.length) {
          cursor = $scope.ids.list[$scope.ids.list.length - 1].searchKey;
        }
        if (searchKey.length) {
          $scope.searchRequest = $scope.identifiIndex.search(searchKey, void 0, limit, cursor);
        } else {
          $scope.searchRequest = $scope.identifiIndex.search(searchKey, void 0, limit, cursor);
        }
        $scope.searchRequest = $scope.searchRequest.then(function(identities) {
          searchKey = encodeURIComponent((query || $scope.query.term || '').toLowerCase());
          if (searchKey !== $scope.previousSearchKey) {
            return;
          }
          $scope.ids.list = $scope.ids.list || [];
          $scope.ids.list = $scope.ids.list.concat(identities);
          if (identities.length > 0) {
            $scope.ids.activeKey = 0;
          }
          if (true || identities.length < limit) {
            return $scope.ids.finished = true;
          }
        });
        return $scope.searchRequest.then(function() {
          $scope.$apply(function() {
            return $scope.ids.loading = false;
          });
          console.log($scope.ids.list);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi9tYWluLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbIm1haW4vbWFpbi5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBQ0EsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLGdCQUE3QyxFQUErRDtJQUM3RCxRQUQ2RCxFQUU3RCxZQUY2RCxFQUc3RCxXQUg2RCxFQUk3RCxPQUo2RCxFQUs3RCxRQUw2RCxFQU03RCxRQU42RCxFQU83RCxxQkFQNkQsRUFRN0QsV0FSNkQsRUFTN0QsU0FUNkQsRUFVN0QsSUFWNkQsRUFlN0QsU0FBQyxNQUFELEVBQVMsVUFBVCxFQUFxQixTQUFyQixFQUFnQyxLQUFoQyxFQUF1QyxNQUF2QyxFQUErQyxNQUEvQyxFQUNBLG1CQURBLEVBQ3FCLFNBRHJCLEVBQ2dDLE9BRGhDLEVBQ3lDLEVBRHpDOztBQUVFOzs7Ozs7Ozs7QUFBQSxVQUFBO01BV0EsTUFBTSxDQUFDLGNBQVAsR0FBd0I7TUFDeEIsTUFBTSxDQUFDLGFBQVAsR0FBdUIsbUJBQW1CLENBQUMsR0FBcEIsQ0FBd0IsZUFBeEIsQ0FBQSxJQUE0QztNQUNuRSxtQkFBbUIsQ0FBQyxHQUFwQixDQUF3QixlQUF4QixFQUF5QyxNQUFNLENBQUMsYUFBaEQ7TUFFQSxNQUFNLENBQUMsUUFBUCxHQUFrQjtRQUFFLEtBQUEsRUFBTyxJQUFUOztNQUNsQixNQUFNLENBQUMsV0FBUCxHQUFxQjtNQUVyQixNQUFNLENBQUMsUUFBUCxHQUFrQixTQUFDLEVBQUQ7UUFDaEIsSUFBRyxLQUFLLENBQUMsT0FBTixDQUFjLEVBQWQsQ0FBSDtBQUNFLGlCQUFPLGtCQUFBLENBQW1CLEVBQUcsQ0FBQSxDQUFBLENBQXRCLENBQUEsR0FBNEIsR0FBNUIsR0FBa0Msa0JBQUEsQ0FBbUIsRUFBRyxDQUFBLENBQUEsQ0FBdEIsRUFEM0M7U0FBQSxNQUFBO0FBR0UsaUJBQU8sa0JBQUEsQ0FBbUIsRUFB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U0FBQTtjQUNqQixNQUFNLENBQUMsS0FBSyxDQUFDLElBQWIsR0FBb0IsRUFBRSxDQUFDLEdBQUgsQ0FBQTtjQUNwQixNQUFNLENBQUMsTUFBUCxDQUFBO1lBRmlCLENBQUQsQ0FBWCxFQUlKLEdBSkk7WUFLUCxNQUFNLENBQUMsS0FBUCxHQUFlO0FBQ2Y7QUFqQ0o7TUFEcUI7YUFvQ3ZCLE1BQU0sQ0FBQyxvQkFBUCxHQUE4QixTQUFDLElBQUQ7UUFDNUIsTUFBTSxDQUFDLEVBQVAsQ0FBVSxpQkFBVixFQUE2QjtVQUFFLElBQUEsRUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQXBCO1VBQTBCLEtBQUEsRUFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQTdDO1NBQTdCO2VBQ0EsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLEdBQW9CO01BRlE7SUFuZ0JoQyxDQWY2RDtHQUEvRDtBQURBIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5hbmd1bGFyLm1vZHVsZSgnaWRlbnRpZmlBbmd1bGFyJykuY29udHJvbGxlciAnTWFpbkNvbnRyb2xsZXInLCBbXG4gICckc2NvcGUnXG4gICckcm9vdFNjb3BlJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckc3RhdGUnXG4gICdjb25maWcnLFxuICAnbG9jYWxTdG9yYWdlU2VydmljZSdcbiAgJyR1aWJNb2RhbCdcbiAgJyR3aW5kb3cnXG4gICckcSdcblxuICAjJ0F1dGhlbnRpY2F0aW9uJ1xuICAjJ01lbnVzJ1xuICAjJ1BlcnNvbmEnXG4gICgkc2NvcGUsICRyb290U2NvcGUsICRsb2NhdGlvbiwgJGh0dHAsICRzdGF0ZSwgY29uZmlnLFxuICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLCAkdWliTW9kYWwsICR3aW5kb3csICRxKSAtPiAjIEF1dGhlbnRpY2F0aW9uLCBNZW51cywgUGVyc29uYVxuICAgICMjI1xuICAgIFBlcnNvbmEud2F0Y2hcbiAgICAgIGxvZ2dlZEluVXNlcjogQXV0aGVudGljYXRpb24udXNlci5lbWFpbFxuICAgICAgb25sb2dpbjogKGFzc2VydGlvbikgLT5cbiAgICAgICAgJGh0dHAucG9zdCgnL2F1dGgvcGVyc29uYScsIGFzc2VydGlvbjogYXNzZXJ0aW9uKS50aGVuIC0+XG4gICAgICAgICAgbG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAjIEZJWE1FXG4gICAgICAgICAgICAgICAgICAgICAgICBvbmxvZ291dDogLT5cbiAgICAjIyNcblxuICAgICMgc2V0IGF1dGhlbnRpY2F0aW9uXG4gICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uID0ge30gIyBBdXRoZW50aWNhdGlvblxuICAgICRzY29wZS5sb2NhbE1lc3NhZ2VzID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2FsTWVzc2FnZXMnKSBvciB7fVxuICAgIGxvY2FsU3RvcmFnZVNlcnZpY2Uuc2V0KCdsb2NhbE1lc3NhZ2VzJywgJHNjb3BlLmxvY2FsTWVzc2FnZXMpXG5cbiAgICAkc2NvcGUubm9kZUluZm8gPSB7IGtleUlEOiBudWxsIH1cbiAgICAkc2NvcGUuaXBmc1N0b3JhZ2UgPSB7fVxuXG4gICAgJHNjb3BlLmdldElkS2V5ID0gKGlkKSAtPlxuICAgICAgaWYgQXJyYXkuaXNBcnJheShpZClcbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChpZFswXSkgKyAnOicgKyBlbmNvZGVVUklDb21wb25lbnQoaWRbMV0pXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaWQubmFtZSkgKyAnOicgKyBlbmNvZGVVUklDb21wb25lbnQoaWQudmFsKVxuXG4gICAgJHNjb3BlLmxvZ2luV2l0aEtleSA9IChwcml2YXRlS2V5UEVNKSAtPlxuICAgICAgJHNjb3BlLnByaXZhdGVLZXkgPSBLRVlVVElMLmdldEtleUZyb21QbGFpblByaXZhdGVQS0NTOFBFTShwcml2YXRlS2V5UEVNKVxuICAgICAgJHNjb3BlLnB1YmxpY0tleSA9IG5ldyBLSlVSLmNyeXB0by5FQ0RTQSh7J2N1cnZlJzogJ3NlY3AyNTZrMScsICdwdWInOiAkc2NvcGUucHJpdmF0ZUtleS5wdWJLZXlIZXh9KVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ3ByaXZhdGVLZXlQRU0nLCBwcml2YXRlS2V5UEVNKVxuICAgICAgcHVibGljS2V5SGV4ID0gS0VZVVRJTC5nZXRIZXhGcm9tUEVNKEtFWVVUSUwuZ2V0UEVNKCRzY29wZS5wdWJsaWNLZXkpKVxuICAgICAgcHVibGljS2V5SGFzaCA9IENyeXB0b0pTLmVuYy5CYXNlNjQuc3RyaW5naWZ5KENyeXB0b0pTLlNIQTI1NihwdWJsaWNLZXlIZXgpKVxuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgPVxuICAgICAgICBpZFR5cGU6ICdrZXlJRCdcbiAgICAgICAgaWRWYWx1ZTogcHVibGljS2V5SGFzaFxuICAgICAgJHNjb3BlLmxvZ2luTW9kYWwuY2xvc2UoKSBpZiAkc2NvcGUubG9naW5Nb2RhbFxuXG4gICAgcHJpdmF0ZUtleSA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdwcml2YXRlS2V5UEVNJylcbiAgICBpZiBwcml2YXRlS2V5XG4gICAgICAkc2NvcGUubG9naW5XaXRoS2V5KHByaXZhdGVLZXkpXG4gICAgdG9rZW4gPSAkbG9jYXRpb24uc2VhcmNoKCkudG9rZW5cbiAgICBpZiB0b2tlblxuICAgICAgandzID0gS0pVUi5qd3MuSldTLnBhcnNlKHRva2VuKS5wYXlsb2FkT2JqXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24udG9rZW4gPSB0b2tlblxuICAgICAgJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIgPSBqd3MudXNlclxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ3Rva2VuJywgdG9rZW4pXG4gICAgICBwcmV2aW91c1N0YXRlID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ3N0YXRlJykgfHwgJ2lkZW50aXRpZXMubGlzdCdcbiAgICAgIHByZXZpb3VzU3RhdGVQYXJhbXMgPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgnc3RhdGVQYXJhbXMnKSB8fCB7fVxuICAgICAgJHN0YXRlLmdvKHByZXZpb3VzU3RhdGUsIHByZXZpb3VzU3RhdGVQYXJhbXMpXG4gICAgZWxzZVxuICAgICAgdG9rZW4gPSBsb2NhbFN0b3JhZ2VTZXJ2aWNlLmdldCgndG9rZW4nKVxuICAgICAgaWYgdG9rZW5cbiAgICAgICAgandzID0gS0pVUi5qd3MuSldTLnBhcnNlKHRva2VuKS5wYXlsb2FkT2JqXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi50b2tlbiA9IHRva2VuXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyID0gandzLnVzZXJcblxuICAgICRzY29wZS5xdWVyeSA9IHt9XG4gICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICRzY29wZS5wcmV2aW91c1NlYXJjaEtleSA9ICcnXG4gICAgJHNjb3BlLmlkcyA9IHsgbGlzdDogW10gfVxuICAgICRzY29wZS5waG9uZVJlZ2V4ID0gL15cXCs/XFxkKyQvXG5cbiAgICAkc2NvcGUuaXBmcyA9IG5ldyBJcGZzKFxuICAgICAgaW5pdDogdHJ1ZVxuICAgICAgRVhQRVJJTUVOVEFMOiB7XG4gICAgICAgIHB1YnN1YjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHN0YXJ0OiB0cnVlXG4gICAgICByZXBvOiAnaXBmczYtaWRlbnRpZmknXG4gICAgICBjb25maWc6IEJvb3RzdHJhcDogW1xuICAgICAgICAnL2RuczQvYW1zLTEuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MZXIyNjVOUmdTcDJMQTNkUGFleWtpUzFKNkRpZlRDODhmNXVWUUtOQWQnXG4gICAgICAgICcvZG5zNC9zZm8tMS5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xqdTZtN3hUaDNEdW9rdlQzODg2UVJZcXhBemIxa1NoYWFuSmdXMzZ5eCdcbiAgICAgICAgJy9kbnM0L2xvbi0xLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTE1lV3FCN1lHVkxKTjNwTkxRcG1tRWszNXY2d1l0c01HTHpTcjVRQlUzJ1xuICAgICAgICAnL2RuczQvc2ZvLTIuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MblNHY2NGdVpRSnpSYWRIbjk1VzJDclNGbVp1VGREV1A4SFhhSGNhOXonXG4gICAgICAgICcvZG5zNC9zZm8tMy5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xQcHB1QnRRU0d3S0RaVDJNNzNVTHBqdmZkM2FaNmhhNG9GR0wxS3JHTSdcbiAgICAgICAgJy9kbnM0L3NncC0xLmJvb3RzdHJhcC5saWJwMnAuaW8vdGNwLzQ0My93c3MvaXBmcy9RbVNvTFNhZlRNQnNQS2FkVEVnYVhjdERRVmNxTjg4Q05MSFhNa1ROd01LUG51J1xuICAgICAgICAnL2RuczQvbnljLTEuYm9vdHN0cmFwLmxpYnAycC5pby90Y3AvNDQzL3dzcy9pcGZzL1FtU29MdWVSNHhCZVViWTlXWjl4R1VVeHVuYktXY3JORlREQWFkUUptb2NuV20nXG4gICAgICAgICcvZG5zNC9ueWMtMi5ib290c3RyYXAubGlicDJwLmlvL3RjcC80NDMvd3NzL2lwZnMvUW1Tb0xWNEJibTUxak05QzRnRFlaUTlDeTNVNmFYTUpEQWJ6Z3UyZnphRHM2NCdcbiAgICAgIF0pXG5cbiAgICAjIEdldCBwb3NzaWJsZSBsb2dpbiBvcHRpb25zXG4gICAgJGh0dHAuZ2V0KCcvYXBpJywgeyB0aW1lb3V0OiAyMDAwIH0pXG4gICAgLnRoZW4gKHJlcykgLT5cbiAgICAgICRzY29wZS5ub2RlSW5mbyA9IGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5ub2RlSW5mbywgcmVzLmRhdGFcbiAgICAsIChlcnIpIC0+XG4gICAgICAkc2NvcGUubm9kZUluZm8gPSB7IGxvZ2luT3B0aW9uczogW3RydWVdLCBrZXlJRDogbnVsbCB9XG5cbiAgICAkc2NvcGUuaXBmcy5vbiAncmVhZHknLCAtPlxuICAgICAgY29uc29sZS5sb2cgJHNjb3BlLmlwZnNcbiAgICAgICR3aW5kb3cuaXBmcyA9ICRzY29wZS5pcGZzXG4gICAgICAkc2NvcGUuaXBmcy5wdWJzdWIuc3Vic2NyaWJlICdpZGVudGlmaScsIChtc2cpIC0+XG4gICAgICAgIG1zZyA9IHsgandzOiAkc2NvcGUuaXBmcy50eXBlcy5CdWZmZXIobXNnLmRhdGEpLnRvU3RyaW5nKCkgfVxuICAgICAgICBoYXNoID0gQ3J5cHRvSlMuZW5jLkJhc2U2NC5zdHJpbmdpZnkoQ3J5cHRvSlMuU0hBMjU2KG1zZy5qd3MpKVxuICAgICAgICBjb25zb2xlLmxvZyAnaWRlbnRpZmkgbWVzc2FnZSByZWNlaXZlZCcsIG1zZywgaGFzaFxuICAgICAgICBsb2NhbE1lc3NhZ2VzID0gbG9jYWxTdG9yYWdlU2VydmljZS5nZXQoJ2xvY2FsTWVzc2FnZXMnKVxuICAgICAgICAkc2NvcGUucHJvY2Vzc01lc3NhZ2VzKFttc2ddKVxuICAgICAgICBsb2NhbE1lc3NhZ2VzW2hhc2hdwqA9IG1zZ1xuICAgICAgICBsb2NhbFN0b3JhZ2VTZXJ2aWNlLnNldCgnbG9jYWxNZXNzYWdlcycsIGxvY2FsTWVzc2FnZXMpXG4gICAgICAjJHNjb3BlLmluaXRJcGZzSW5kZXhlcygpXG5cbiAgICAkc2NvcGUuaW5pdElwZnNJbmRleGVzID0gLT5cbiAgICAgICR3aW5kb3cuaWRlbnRpZmlMaWIuSW5kZXgubG9hZCgpXG4gICAgICAudGhlbiAocmVzdWx0cykgLT5cbiAgICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXggPSByZXN1bHRzXG4gICAgICAgIGNvbnNvbGUubG9nICdHb3QgaW5kZXgnLCAkc2NvcGUuaWRlbnRpZmlJbmRleFxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5hcGlSZWFkeSA9IHRydWVcblxuICAgICAgaW5kZXhSb290ID0gJy9pcG5zL1FtYmIxRFJ3ZDc1clprNVRvdFRYSll6RFNKTDZCYU5UMURBUTZWYktjS0xoYnMnXG4gICAgICAkaHR0cC5nZXQgJ2h0dHBzOi8vaWRlbnRpLmZpJyArIGluZGV4Um9vdCArICcvaW5mbydcbiAgICAgIC5jYXRjaCAoZXJyKSAtPlxuICAgICAgICAkaHR0cC5nZXQgJ2h0dHBzOi8vaXBmcy5pbycgKyBpbmRleFJvb3QgKyAnL2luZm8nXG4gICAgICAudGhlbiAocmVzKSAtPlxuICAgICAgICAkc2NvcGUubm9kZUluZm8ucHJvZmlsZSA9ICRzY29wZS5wcm9maWxlRnJvbURhdGEocmVzLmRhdGEsIFsna2V5SUQnLCByZXMuZGF0YS5rZXlJRF0pXG4gICAgICAuY2F0Y2ggKGUpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdpbml0aWFsaXphdGlvbiBmYWlsZWQ6JywgZVxuXG4gICAgJHNjb3BlLmluaXRJcGZzSW5kZXhlcygpXG5cbiAgICAkc2NvcGUuc2V0UGFnZVRpdGxlID0gKHRpdGxlKSAtPlxuICAgICAgJHJvb3RTY29wZS5wYWdlVGl0bGUgPSAnSWRlbnRpZmknXG4gICAgICBpZiAodGl0bGUpXG4gICAgICAgICRyb290U2NvcGUucGFnZVRpdGxlICs9ICcgLSAnICsgdGl0bGVcblxuICAgICRzY29wZS5pcGZzR2V0ID0gKHVyaSwgZ2V0SnNvbikgLT5cbiAgICAgIGpzSXBmc0dldCA9IC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdHZXR0aW5nIGZyb20ganMtaXBmcycsIHVyaVxuICAgICAgICAkc2NvcGUuaXBmcy5maWxlcy5jYXQodXJpKS50aGVuIChzdHJlYW0pIC0+XG4gICAgICAgICAgbmV3IFByb21pc2UgKHJlc29sdmUsIHJlamVjdCkgLT5cbiAgICAgICAgICAgIHN0cmVhbS5vbiAnZGF0YScsIChmaWxlKSAtPlxuICAgICAgICAgICAgICBmaWxlID0gJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyKGZpbGUpLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgZmlsZSA9IEpTT04ucGFyc2UoZmlsZSkgaWYgZ2V0SnNvblxuICAgICAgICAgICAgICByZXNvbHZlKGZpbGUpXG4gICAgICAgICAgICBzdHJlYW0ub24gJ2Vycm9yJywgKGVycm9yKSAtPlxuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG5cbiAgICAgIGlmICRzY29wZS5pcGZzU3RvcmFnZS5hcGlSb290XG4gICAgICAgIHJldHVybiAkaHR0cC5nZXQoJHNjb3BlLmlwZnNTdG9yYWdlLmFwaVJvb3QgKyAnL2lwZnMvJyArIHVyaSlcbiAgICAgICAgLnRoZW4gKHJlcykgLT4gcmVzLmRhdGFcbiAgICAgICAgLmNhdGNoIC0+IGpzSXBmc0dldCgpXG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBqc0lwZnNHZXQoKVxuXG4gICAgJHNjb3BlLm5ld01lc3NhZ2UgPVxuICAgICAgcmF0aW5nOiAxXG4gICAgICBjb21tZW50OiAnJ1xuICAgICRzY29wZS5uZXdWZXJpZmljYXRpb24gPVxuICAgICAgdHlwZTogJydcbiAgICAgIHZhbHVlOiAnJ1xuICAgICMgQ3JlYXRlIG5ldyBNZXNzYWdlXG4gICAgJHNjb3BlLmNyZWF0ZU1lc3NhZ2UgPSAoZXZlbnQsIHBhcmFtcywgaWQpIC0+XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKSBpZiBldmVudFxuICAgICAgIyBDcmVhdGUgbmV3IE1lc3NhZ2Ugb2JqZWN0XG4gICAgICBtZXNzYWdlID1cbiAgICAgICAgY29udGV4dDogJ2lkZW50aWZpJ1xuXG4gICAgICBpZiBwYXJhbXMudHlwZSA9PSAncmF0aW5nJ1xuICAgICAgICBhbmd1bGFyLmV4dGVuZCBtZXNzYWdlLFxuICAgICAgICAgIG1heFJhdGluZzogM1xuICAgICAgICAgIG1pblJhdGluZzogLTNcbiAgICAgIGFuZ3VsYXIuZXh0ZW5kIG1lc3NhZ2UsIHBhcmFtc1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgICBpZiAkc2NvcGUucHJpdmF0ZUtleVxuICAgICAgICBwdWJsaWNLZXlIZXggPSBLRVlVVElMLmdldEhleEZyb21QRU0oS0VZVVRJTC5nZXRQRU0oJHNjb3BlLnB1YmxpY0tleSkpXG4gICAgICAgIHB1YmxpY0tleUhhc2ggPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnN0cmluZ2lmeShDcnlwdG9KUy5TSEEyNTYocHVibGljS2V5SGV4KSlcbiAgICAgICAgbWVzc2FnZS5hdXRob3IgPSBbWydrZXlJRCcsIHB1YmxpY0tleUhhc2hdXVxuICAgICAgICBtZXNzYWdlLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxuICAgICAgICBoZWFkZXIgPSBKU09OLnN0cmluZ2lmeSh7IGFsZzogJ0VTMjU2Jywga2lkOiBwdWJsaWNLZXlIZXggfSlcbiAgICAgICAgcGF5bG9hZCA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpXG4gICAgICAgIGp3cyA9IEtKVVIuandzLkpXUy5zaWduKFwiRVMyNTZcIiwgaGVhZGVyLCBwYXlsb2FkLCAkc2NvcGUucHJpdmF0ZUtleSlcbiAgICAgICAgaGFzaCA9IENyeXB0b0pTLmVuYy5CYXNlNjQuc3RyaW5naWZ5KENyeXB0b0pTLlNIQTI1Nihqd3MpKVxuICAgICAgICBtZXNzYWdlID0geyBqd3M6IGp3cywgaGFzaDogaGFzaCB9XG4gICAgICAgICRzY29wZS5pcGZzLmZpbGVzLmFkZChuZXcgJHNjb3BlLmlwZnMudHlwZXMuQnVmZmVyKGp3cykpLnRoZW4gKGkpIC0+XG4gICAgICAgICAgJHNjb3BlLmlwZnMucHVic3ViLnB1Ymxpc2goJ2lkZW50aWZpJywgbmV3ICRzY29wZS5pcGZzLnR5cGVzLkJ1ZmZlcihqd3MpKVxuICAgICAgZWxzZVxuICAgICAgICBvcHRpb25zID1cbiAgICAgICAgICBoZWFkZXJzOlxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnQmVhcmVyICcgKyAkc2NvcGUuYXV0aGVudGljYXRpb24udG9rZW5cblxuICAgICAgJGh0dHAucG9zdCgnL2FwaS9tZXNzYWdlcycsIG1lc3NhZ2UsIG9wdGlvbnMpXG4gICAgICAuY2F0Y2ggLT5cbiAgICAgICAgJGh0dHAucG9zdCgnaHR0cHM6Ly9pZGVudGkuZmkvYXBpL21lc3NhZ2VzJywgbWVzc2FnZSwgb3B0aW9ucylcbiAgICAgIC50aGVuICgocmVzcG9uc2UpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nIHJlc3BvbnNlXG4gICAgICAgICMgQ2xlYXIgZm9ybSBmaWVsZHNcbiAgICAgICAgJHNjb3BlLm5ld01lc3NhZ2UuY29tbWVudCA9ICcnXG4gICAgICAgICRzY29wZS5uZXdNZXNzYWdlLnJhdGluZyA9IDFcbiAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi50eXBlID0gJydcbiAgICAgICAgJHNjb3BlLm5ld1ZlcmlmaWNhdGlvbi52YWx1ZSA9ICcnXG4gICAgICAgICRzY29wZS4kcm9vdC4kYnJvYWRjYXN0ICdNZXNzYWdlQWRkZWQnLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGFcbiAgICAgICAgICBpZDogaWRcbiAgICAgICAgJHNjb3BlLmdldElwZnNJbmRleGVzICRzY29wZS5pcGZzU3RvcmFnZS5hcGlSb290ICsgJy9pcGZzLycgKyByZXNwb25zZS5kYXRhLmlwZnNJbmRleFJvb3QgaWYgcmVzcG9uc2UuZGF0YS5pcGZzSW5kZXhSb290XG4gICAgICAgIHJlc3BvbnNlLmRhdGFcbiAgICAgICksIChlcnJvclJlc3BvbnNlKSAtPlxuICAgICAgICAkc2NvcGUuZXJyb3IgPSBlcnJvclJlc3BvbnNlLmRhdGEgfHwgSlNPTi5zdHJpbmdpZnkoZXJyb3JSZXNwb25zZSlcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvclJlc3BvbnNlKVxuXG4gICAgJHNjb3BlLmFkZEF0dHJpYnV0ZSA9IC0+XG4gICAgICAkbG9jYXRpb24ucGF0aCAnIy9pZGVudGl0aWVzL2NyZWF0ZS8nICsgJHNjb3BlLnF1ZXJ5LnRlcm1cblxuICAgICRzY29wZS5sb2dpbiA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPSAtMSAjIGJlY2F1c2UgdGhlIHVzZXIgZG9lc24ndCBoYXZlIGEgdHJ1c3QgaW5kZXggeWV0XG5cbiAgICAkc2NvcGUub3BlbkxvZ2luTW9kYWwgPSAtPlxuICAgICAgJHNjb3BlLmxvZ2luTW9kYWwgPSAkdWliTW9kYWwub3BlbihcbiAgICAgICAgYW5pbWF0aW9uOiAkc2NvcGUuYW5pbWF0aW9uc0VuYWJsZWRcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9sb2dpbi5tb2RhbC5odG1sJ1xuICAgICAgICBzaXplOiAnbGcnXG4gICAgICAgIHNjb3BlOiAkc2NvcGVcbiAgICAgIClcbiAgICAgICRzY29wZS5sb2dpbk1vZGFsLnJlbmRlcmVkLnRoZW4gLT5cbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgICRzY29wZS4kb24gJyRzdGF0ZUNoYW5nZVN0YXJ0JywgLT5cbiAgICAgICAgJHNjb3BlLmxvZ2luTW9kYWwuY2xvc2UoKVxuXG4gICAgJHNjb3BlLmdlbmVyYXRlS2V5ID0gLT5cbiAgICAgIGtleXBhaXIgPSBLRVlVVElMLmdlbmVyYXRlS2V5cGFpcignRUMnLCAnc2VjcDI1NmsxJylcbiAgICAgICRzY29wZS5wcml2YXRlS2V5ID0ga2V5cGFpci5wcnZLZXlPYmpcbiAgICAgICRzY29wZS5wdWJsaWNLZXkgPSBrZXlwYWlyLnB1YktleU9ialxuICAgICAgJHNjb3BlLnByaXZhdGVLZXlQRU0gPSBLRVlVVElMLmdldFBFTSgkc2NvcGUucHJpdmF0ZUtleSwgJ1BLQ1M4UFJWJylcblxuICAgICRzY29wZS5kb3dubG9hZEtleSA9IC0+XG4gICAgICBoaWRkZW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgICBoaWRkZW5FbGVtZW50LmhyZWYgPSAnZGF0YTp0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04LCcgKyBlbmNvZGVVUkkoJHNjb3BlLnByaXZhdGVLZXlQRU0pXG4gICAgICBoaWRkZW5FbGVtZW50LnRhcmdldCA9ICdfYmxhbmsnXG4gICAgICBoaWRkZW5FbGVtZW50LmRvd25sb2FkID0gJ2lkZW50aWZpX3ByaXZhdGVfa2V5LnR4dCdcbiAgICAgIGhpZGRlbkVsZW1lbnQuY2xpY2soKVxuXG4gICAgJHNjb3BlLmxvZ291dCA9IC0+XG4gICAgICAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2UgPSAwXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleVBFTSA9ICcnXG4gICAgICAkc2NvcGUuYXV0aGVudGljYXRpb24gPSB7fVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5jbGVhckFsbCgpXG4gICAgICAkc3RhdGUuZ28oJ2lkZW50aXRpZXMubGlzdCcpXG4gICAgICAkc2NvcGUucHJpdmF0ZUtleSA9IG51bGxcbiAgICAgICRzY29wZS5wdWJsaWNLZXkgPSBudWxsXG5cbiAgICAkc2NvcGUubXNnRmlsdGVyID0gKHZhbHVlLCBpbmRleCwgYXJyYXkpIC0+XG4gICAgICBkYXRhID0gdmFsdWUuZGF0YSBvciB2YWx1ZS5zaWduZWREYXRhXG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy50eXBlXG4gICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUubWF0Y2ggL15yYXRpbmcvXG4gICAgICAgICAgaWYgZGF0YS50eXBlICE9ICdyYXRpbmcnXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKGRhdGEubWF4UmF0aW5nICsgZGF0YS5taW5SYXRpbmcpIC8gMlxuICAgICAgICAgIGlmICRzY29wZS5maWx0ZXJzLnR5cGUgPT0gJ3JhdGluZzpwb3NpdGl2ZScgYW5kIGRhdGEucmF0aW5nIDw9IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLmZpbHRlcnMudHlwZSA9PSAncmF0aW5nOm5lZ2F0aXZlJyBhbmQgZGF0YS5yYXRpbmcgPj0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZWxzZSBpZiAkc2NvcGUuZmlsdGVycy50eXBlID09ICdyYXRpbmc6bmV1dHJhbCcgYW5kIGRhdGEucmF0aW5nICE9IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmIGRhdGEudHlwZSAhPSAkc2NvcGUuZmlsdGVycy50eXBlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICBpZiAkc2NvcGUuZmlsdGVycy5tYXhfZGlzdGFuY2VcbiAgICAgICAgaWYgJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlID09IDAgYW5kIHR5cGVvZiB2YWx1ZS5kaXN0YW5jZSAhPSAnbnVtYmVyJ1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICBlbHNlIGlmICRzY29wZS5maWx0ZXJzLm1heF9kaXN0YW5jZSA+IDAgYW5kIHZhbHVlLmRpc3RhbmNlID4gJHNjb3BlLmZpbHRlcnMubWF4X2Rpc3RhbmNlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgJHNjb3BlLnJlbW92ZUZvY3VzID0gKGV2ZW50KSAtPlxuICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5ibHVyKClcblxuICAgICRzY29wZS5sb2dvQ2xpY2tlZCA9IC0+XG4gICAgICBpZiAkc3RhdGUuaXMgJ2lkZW50aXRpZXMubGlzdCdcbiAgICAgICAgaWYgJHNjb3BlLnF1ZXJ5LnRlcm0gIT0gJydcbiAgICAgICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG4gICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICBlbHNlXG4gICAgICAgICRzY29wZS5xdWVyeS50ZXJtID0gJydcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gW11cbiAgICAgICAgJHNjb3BlLmlkcy5maW5pc2hlZCA9IGZhbHNlXG4gICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5saXN0J1xuXG4gICAgJHNjb3BlLnNldE1zZ1Jhd0RhdGEgPSAobXNnKSAtPlxuICAgICAgc2hvd1Jhd0RhdGEgPVxuICAgICAgICBoYXNoOiBtc2cuaGFzaFxuICAgICAgICBkYXRhOiBtc2cuZGF0YVxuICAgICAgICBwcmlvcml0eTogbXNnLnByaW9yaXR5XG4gICAgICAgIGp3czogbXNnLmp3c1xuICAgICAgbXNnLnN0ckRhdGEgPSBKU09OLnN0cmluZ2lmeShzaG93UmF3RGF0YSwgdW5kZWZpbmVkLCAyKVxuXG4gICAgJHNjb3BlLnByb2ZpbGVGcm9tRGF0YSA9IChkYXRhLCBmYWxsYmFja0lkKSAtPlxuICAgICAgaWYgZGF0YS5hdHRycyBhbmQgZGF0YS5hdHRycy5sZW5ndGhcbiAgICAgICAgZGF0YS5kaXN0ID0gZGF0YS5hdHRyc1swXS5kaXN0ICsgMFxuICAgICAgICBkYXRhLnBvcyA9IGRhdGEuYXR0cnNbMF0ucG9zXG4gICAgICAgIGRhdGEubmVnID0gZGF0YS5hdHRyc1swXS5uZWdcbiAgICAgICAgZm9yIGssIHYgb2YgZGF0YS5hdHRyc1xuICAgICAgICAgIHN3aXRjaCB2Lm5hbWVcbiAgICAgICAgICAgIHdoZW4gJ25hbWUnXG4gICAgICAgICAgICAgIGRhdGEubmFtZSA9IHYudmFsIHVubGVzcyBkYXRhLm5hbWVcbiAgICAgICAgICAgIHdoZW4gJ25pY2tuYW1lJ1xuICAgICAgICAgICAgICBkYXRhLm5pY2tuYW1lID0gdi52YWwgdW5sZXNzIGRhdGEubmlja25hbWVcbiAgICAgICAgICAgIHdoZW4gJ2VtYWlsJ1xuICAgICAgICAgICAgICBkYXRhLmdyYXZhdGFyID0gQ3J5cHRvSlMuTUQ1KHYudmFsKS50b1N0cmluZygpXG4gICAgICBkYXRhLm5hbWUgPSBkYXRhLm5pY2tuYW1lIGlmIGRhdGEubmlja25hbWUgYW5kIG5vdCBkYXRhLm5hbWVcbiAgICAgIGRhdGEubmFtZSA9IGZhbGxiYWNrSWQudmFsdWUgdW5sZXNzIGRhdGEubmFtZVxuICAgICAgZGF0YS5ncmF2YXRhciA9IENyeXB0b0pTLk1ENShmYWxsYmFja0lkLnZhbHVlKS50b1N0cmluZygpIHVubGVzcyBkYXRhLmdyYXZhdGFyXG4gICAgICByZXR1cm4gZGF0YVxuXG4gICAgJHNjb3BlLm9wZW5NZXNzYWdlID0gKGV2ZW50LCBtZXNzYWdlLCBzaXplKSAtPlxuICAgICAgdCA9IGV2ZW50LnRhcmdldFxuICAgICAgcmV0dXJuIGlmIGFuZ3VsYXIuZWxlbWVudCh0KS5jbG9zZXN0KCdhJykubGVuZ3RoXG4gICAgICAkc2NvcGUuc2V0TXNnUmF3RGF0YShtZXNzYWdlKVxuICAgICAgJHNjb3BlLm1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgICByZXR1cm4gdW5sZXNzICRzY29wZS5oYXNWYWxpZFNpZ25hdHVyZShtZXNzYWdlKVxuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0KCRzY29wZS5tZXNzYWdlLnNpZ25lcl9rZXlpZCwgJ2tleUlEJykudGhlbiAocHJvZmlsZSkgLT5cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPiAkc2NvcGUubWVzc2FnZS52ZXJpZmllZEJ5ID0gcHJvZmlsZVxuICAgICAgbW9kYWxJbnN0YW5jZSA9ICR1aWJNb2RhbC5vcGVuKFxuICAgICAgICBhbmltYXRpb246ICRzY29wZS5hbmltYXRpb25zRW5hYmxlZFxuICAgICAgICB0ZW1wbGF0ZVVybDogJ2FwcC9tZXNzYWdlcy9zaG93Lm1vZGFsLmh0bWwnXG4gICAgICAgIHNpemU6IHNpemVcbiAgICAgICAgc2NvcGU6ICRzY29wZVxuICAgICAgKVxuICAgICAgbW9kYWxJbnN0YW5jZS5yZW5kZXJlZC50aGVuIC0+XG4gICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpXG4gICAgICAkc2NvcGUuJG9uICckc3RhdGVDaGFuZ2VTdGFydCcsIC0+XG4gICAgICAgIG1vZGFsSW5zdGFuY2UuY2xvc2UoKVxuXG4gICAgJHNjb3BlLmZpbHRlcnMgPSAkc2NvcGUuZmlsdGVycyBvciBjb25maWcuZGVmYXVsdEZpbHRlcnNcblxuICAgICMjI1xuICAgICRzY29wZS5hdXRoZW50aWNhdGlvbiA9IEF1dGhlbnRpY2F0aW9uXG4gICAgaWYgQXV0aGVudGljYXRpb24udXNlclxuICAgICAgaWYgQXV0aGVudGljYXRpb24udXNlci5wcm92aWRlciA9PSAncGVyc29uYSdcbiAgICAgICAgQXV0aGVudGljYXRpb24udXNlci5pZFR5cGUgPSAnZW1haWwnXG4gICAgICBlbHNlXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uLnVzZXIuaWRUeXBlID0gJ3VybCdcbiAgICAgIHN3aXRjaCBBdXRoZW50aWNhdGlvbi51c2VyLnByb3ZpZGVyXG4gICAgICAgIHdoZW4gJ3BlcnNvbmEnXG4gICAgICAgICAgQXV0aGVudGljYXRpb24udXNlci5pZFZhbHVlID0gQXV0aGVudGljYXRpb24udXNlci5lbWFpbFxuICAgICAgICB3aGVuICd0d2l0dGVyJ1xuICAgICAgICAgIEF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZSA9ICdodHRwczovL3R3aXR0ZXIuY29tLycgKyBBdXRoZW50aWNhdGlvbi51c2VyLnVzZXJuYW1lXG4gICAgICAgIGVsc2VcbiAgICAgICAgICBBdXRoZW50aWNhdGlvbi51c2VyLmlkVmFsdWUgPSBBdXRoZW50aWNhdGlvbi51c2VyLnByb3ZpZGVyRGF0YS5saW5rXG4gICAgICAgICAgYnJlYWtcbiAgICAjIyNcblxuICAgICRzY29wZS5pc0NvbGxhcHNlZCA9IGZhbHNlXG4gICAgIyAkc2NvcGUubWVudSA9IE1lbnVzLmdldE1lbnUoJ3RvcGJhcicpXG5cbiAgICAkc2NvcGUudG9nZ2xlQ29sbGFwc2libGVNZW51ID0gLT5cbiAgICAgICRzY29wZS5pc0NvbGxhcHNlZCA9ICEkc2NvcGUuaXNDb2xsYXBzZWRcblxuICAgICRzY29wZS5oYXNWYWxpZFNpZ25hdHVyZSA9IChtc2csIHBhcnNlZEp3cykgLT5cbiAgICAgIHBhcnNlZEp3cyA9IHBhcnNlZEp3cyBvciBLSlVSLmp3cy5KV1MucGFyc2UobXNnLmp3cylcbiAgICAgIHBlbSA9IEtKVVIuYXNuMS5BU04xVXRpbC5nZXRQRU1TdHJpbmdGcm9tSGV4KHBhcnNlZEp3cy5oZWFkZXJPYmoua2lkLCBcIlBVQkxJQyBLRVlcIilcbiAgICAgIHB1YktleSA9IEtFWVVUSUwuZ2V0S2V5KHBlbSlcbiAgICAgIGlzVmFsaWQgPSBLSlVSLmp3cy5KV1MudmVyaWZ5KG1zZy5qd3MsIHB1YktleSwgWydFUzI1NiddKVxuICAgICAgaWYgaXNWYWxpZCB0aGVuIGNvbnNvbGUubG9nICd2YWxpZCBzaWduYXR1cmUnIGVsc2UgY29uc29sZS5lcnJvciAnaW52YWxpZCBzaWduYXR1cmUnXG4gICAgICByZXR1cm4gaXNWYWxpZFxuXG4gICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyA9IChtZXNzYWdlcywgbXNnT3B0aW9ucywgdmVyaWZ5U2lnbmF0dXJlKSAtPlxuICAgICAgcHJvY2Vzc01lc3NhZ2UgPSAobXNnKSAtPlxuICAgICAgICBwYXJzZWRKd3MgPSBLSlVSLmp3cy5KV1MucGFyc2UobXNnLmp3cylcbiAgICAgICAgbXNnLmRhdGEgPSBwYXJzZWRKd3MucGF5bG9hZE9ialxuICAgICAgICB1bmxlc3MgbXNnLnNpZ25lcl9rZXlpZFxuICAgICAgICAgIGtleUhhc2ggPSBDcnlwdG9KUy5TSEEyNTYocGFyc2VkSndzLmhlYWRlck9iai5raWQpXG4gICAgICAgICAgbXNnLnNpZ25lcl9rZXlpZCA9IENyeXB0b0pTLmVuYy5CYXNlNjQuc3RyaW5naWZ5KGtleUhhc2gpXG5cbiAgICAgICAgbXNnLmF1dGhvciA9IG1zZy5nZXRBdXRob3IoKSBpZiBtc2cuZ2V0QXV0aG9yXG4gICAgICAgIHJldHVybiBpZiB2ZXJpZnlTaWduYXR1cmUgYW5kIG5vdCAkc2NvcGUuaGFzVmFsaWRTaWduYXR1cmUobXNnLCBwYXJzZWRKd3MpICMgVE9ETzogc2hvdWxkIGRpc3BsYXkgd2FybmluZyBvciBoaWRlIG1zZyBvciBzdGhcblxuICAgICAgICBtc2cubGlua1RvQXV0aG9yID0gbXNnLmRhdGEuYXV0aG9yWzBdXG4gICAgICAgIGkgPSB1bmRlZmluZWRcbiAgICAgICAgaSA9IDBcbiAgICAgICAgc21hbGxlc3RJbmRleCA9IDEwMDBcbiAgICAgICAgd2hpbGUgaSA8IG1zZy5kYXRhLmF1dGhvci5sZW5ndGhcbiAgICAgICAgICBpbmRleCA9IGNvbmZpZy51bmlxdWVBdHRyaWJ1dGVUeXBlcy5pbmRleE9mKG1zZy5kYXRhLmF1dGhvcltpXVswXSlcbiAgICAgICAgICBpZiBpbmRleCA+IC0xIGFuZCBpbmRleCA8IHNtYWxsZXN0SW5kZXhcbiAgICAgICAgICAgIHNtYWxsZXN0SW5kZXggPSBpbmRleFxuICAgICAgICAgICAgbXNnLmxpbmtUb0F1dGhvciA9IG1zZy5kYXRhLmF1dGhvcltpXVxuICAgICAgICAgIGVsc2UgaWYgIW1zZy5hdXRob3JfbmFtZSBhbmQgbXNnLmRhdGEuYXV0aG9yW2ldWzBdIGluIFsnbmFtZScsICduaWNrbmFtZSddXG4gICAgICAgICAgICBtc2cuYXV0aG9yX25hbWUgPSBtc2cuZGF0YS5hdXRob3JbaV1bMV1cbiAgICAgICAgICBpKytcbiAgICAgICAgbXNnLmxpbmtUb1JlY2lwaWVudCA9IG1zZy5kYXRhLnJlY2lwaWVudFswXVxuICAgICAgICBpID0gMFxuICAgICAgICBzbWFsbGVzdEluZGV4ID0gMTAwMFxuICAgICAgICB3aGlsZSBpIDwgbXNnLmRhdGEucmVjaXBpZW50Lmxlbmd0aFxuICAgICAgICAgIGluZGV4ID0gY29uZmlnLnVuaXF1ZUF0dHJpYnV0ZVR5cGVzLmluZGV4T2YobXNnLmRhdGEucmVjaXBpZW50W2ldWzBdKVxuICAgICAgICAgIGlmIGluZGV4ID4gLTEgYW5kIGluZGV4IDwgc21hbGxlc3RJbmRleFxuICAgICAgICAgICAgc21hbGxlc3RJbmRleCA9IGluZGV4XG4gICAgICAgICAgICBtc2cubGlua1RvUmVjaXBpZW50ID0gbXNnLmRhdGEucmVjaXBpZW50W2ldXG4gICAgICAgICAgZWxzZSBpZiAhbXNnLnJlY2lwaWVudF9uYW1lIGFuZCBtc2cuZGF0YS5yZWNpcGllbnRbaV1bMF0gaW4gWyduYW1lJywgJ25pY2tuYW1lJ11cbiAgICAgICAgICAgIG1zZy5yZWNpcGllbnRfbmFtZSA9IG1zZy5kYXRhLnJlY2lwaWVudFtpXVsxXVxuICAgICAgICAgIGkrK1xuICAgICAgICBzaWduZWREYXRhID0gbXNnLmRhdGFcbiAgICAgICAgYWxwaGEgPSB1bmRlZmluZWRcbiAgICAgICAgbXNnLmljb25TdHlsZSA9ICcnXG4gICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJydcbiAgICAgICAgbXNnLmJnQ29sb3IgPSAnJ1xuICAgICAgICBtc2cuaWNvbkNvdW50ID0gbmV3IEFycmF5KDEpXG4gICAgICAgIHN3aXRjaCBzaWduZWREYXRhLnR5cGVcbiAgICAgICAgICB3aGVuICd2ZXJpZnlfaWRlbnRpdHknLCAndmVyaWZpY2F0aW9uJ1xuICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLW9rIHBvc2l0aXZlJ1xuICAgICAgICAgICAgbXNnLmhhc1N1Y2Nlc3MgPSAnaGFzLXN1Y2Nlc3MnXG4gICAgICAgICAgd2hlbiAnY29ubmVjdGlvbidcbiAgICAgICAgICAgIG1zZy5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1vayBwb3NpdGl2ZSdcbiAgICAgICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJ2hhcy1zdWNjZXNzJ1xuICAgICAgICAgIHdoZW4gJ3VudmVyaWZ5X2lkZW50aXR5JywgJ3VudmVyaWZpY2F0aW9uJ1xuICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXJlbW92ZSBuZWdhdGl2ZSdcbiAgICAgICAgICAgIG1zZy5oYXNTdWNjZXNzID0gJ2hhcy1lcnJvcidcbiAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6ICNGRkYwREU7Ym9yZGVyLWNvbG9yOiNGRkUyQzY7J1xuICAgICAgICAgIHdoZW4gJ3JhdGluZydcbiAgICAgICAgICAgIHJhdGluZyA9IHNpZ25lZERhdGEucmF0aW5nXG4gICAgICAgICAgICBuZXV0cmFsUmF0aW5nID0gKHNpZ25lZERhdGEubWluUmF0aW5nICsgc2lnbmVkRGF0YS5tYXhSYXRpbmcpIC8gMlxuICAgICAgICAgICAgbWF4UmF0aW5nRGlmZiA9IHNpZ25lZERhdGEubWF4UmF0aW5nIC0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgbWluUmF0aW5nRGlmZiA9IHNpZ25lZERhdGEubWluUmF0aW5nIC0gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgaWYgcmF0aW5nID4gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tdGh1bWJzLXVwIHBvc2l0aXZlJ1xuICAgICAgICAgICAgICBtc2cuaWNvbkNvdW50ID0gaWYgbWF4UmF0aW5nRGlmZiA8IDIgdGhlbiBtc2cuaWNvbkNvdW50IGVsc2UgbmV3IEFycmF5KE1hdGguY2VpbCgzICogcmF0aW5nIC8gbWF4UmF0aW5nRGlmZikpXG4gICAgICAgICAgICAgIGFscGhhID0gKHJhdGluZyAtIG5ldXRyYWxSYXRpbmcgLSAwLjUpIC8gbWF4UmF0aW5nRGlmZiAvIDEuMjUgKyAwLjJcbiAgICAgICAgICAgICAgbXNnLmJnQ29sb3IgPSAnYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjMsMjQwLDIxNiwnICsgYWxwaGEgKyAnKTsnXG4gICAgICAgICAgICBlbHNlIGlmIHJhdGluZyA8IG5ldXRyYWxSYXRpbmdcbiAgICAgICAgICAgICAgbXNnLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLXRodW1icy1kb3duIG5lZ2F0aXZlJ1xuICAgICAgICAgICAgICBtc2cuaWNvbkNvdW50ID0gaWYgbWluUmF0aW5nRGlmZiA+IC0yIHRoZW4gbXNnLmljb25Db3VudCBlbHNlIG5ldyBBcnJheShNYXRoLmNlaWwoMyAqIHJhdGluZyAvIG1pblJhdGluZ0RpZmYpKVxuICAgICAgICAgICAgICBhbHBoYSA9IChyYXRpbmcgLSBuZXV0cmFsUmF0aW5nICsgMC41KSAvIG1pblJhdGluZ0RpZmYgLyAxLjI1ICsgMC4yXG4gICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDIsMjIyLDIyMiwnICsgYWxwaGEgKyAnKTsnXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgIG1zZy5iZ0NvbG9yID0gJ2JhY2tncm91bmQtY29sb3I6ICNmY2Y4ZTM7J1xuICAgICAgICAgICAgICBtc2cuaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tcXVlc3Rpb24tc2lnbiBuZXV0cmFsJ1xuXG4gICAgICBhbmd1bGFyLmZvckVhY2ggbWVzc2FnZXMsIChtc2csIGtleSkgLT5cbiAgICAgICAgbXNnW2tdID0gdiBmb3IgaywgdiBvZiBtc2dPcHRpb25zXG4gICAgICAgIGlmIG1zZy5pcGZzX2hhc2ggYW5kIG5vdCBtc2cuandzXG4gICAgICAgICAgJHNjb3BlLmlwZnNHZXQobXNnLmlwZnNfaGFzaCkudGhlbiAocmVzKSAtPlxuICAgICAgICAgICAgbXNnLmp3cyA9IHJlc1xuICAgICAgICAgICAgcHJvY2Vzc01lc3NhZ2UobXNnKVxuICAgICAgICBlbHNlIHByb2Nlc3NNZXNzYWdlKG1zZylcblxuICAgICMgQ29sbGFwc2luZyB0aGUgbWVudSBhZnRlciBuYXZpZ2F0aW9uXG4gICAgJHNjb3BlLiRvbiAnJHN0YXRlQ2hhbmdlU3VjY2VzcycsIC0+XG4gICAgICAkc2NvcGUuaXNDb2xsYXBzZWQgPSBmYWxzZVxuXG4gICAgc2Nyb2xsVG8gPSAoZWwpIC0+XG4gICAgICBpZiAhZWxcbiAgICAgICAgcmV0dXJuXG4gICAgICBwb3MgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgaWYgcG9zLnRvcFxuICAgICAgICBpZiBwb3MudG9wIC0gNjAgPCAkd2luZG93LnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MudG9wIC0gNjBcbiAgICAgICAgZWxzZSBpZiBwb3MuYm90dG9tID4gJHdpbmRvdy5wYWdlWU9mZnNldCArICgkd2luZG93LmlubmVySGVpZ2h0IG9yIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpXG4gICAgICAgICAgJHdpbmRvdy5zY3JvbGxUbyAwLCBwb3MuYm90dG9tIC0gKCR3aW5kb3cuaW5uZXJIZWlnaHQgb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgKyAxNVxuICAgICAgcmV0dXJuXG5cbiAgICAkc2NvcGUuc2VhcmNoUmVxdWVzdCA9IG51bGxcbiAgICAkc2NvcGUuc2VhcmNoID0gKHF1ZXJ5LCBsaW1pdCkgLT5cbiAgICAgICRzY29wZS5pZHMubG9hZGluZyA9IHRydWVcbiAgICAgICRzY29wZS5pZGVudGl0aWVzQnlIYXNoID0ge31cbiAgICAgIHNlYXJjaEtleSA9IGVuY29kZVVSSUNvbXBvbmVudCgocXVlcnkgb3IgJHNjb3BlLnF1ZXJ5LnRlcm0gb3IgJycpLnRvTG93ZXJDYXNlKCkpXG4gICAgICBpZiBzZWFyY2hLZXkgIT0gJHNjb3BlLnByZXZpb3VzU2VhcmNoS2V5XG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9IFtdXG4gICAgICAgICRzY29wZS5pZHMuZmluaXNoZWQgPSBmYWxzZVxuICAgICAgICAkc2NvcGUuaWRlbnRpdGllc0J5SGFzaCA9IHt9XG4gICAgICAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXkgPSBzZWFyY2hLZXlcbiAgICAgIGxpbWl0ID0gbGltaXQgb3IgNTBcbiAgICAgIGN1cnNvciA9IGZhbHNlXG4gICAgICBpZiAkc2NvcGUuaWRzLmxpc3QubGVuZ3RoXG4gICAgICAgIGN1cnNvciA9ICRzY29wZS5pZHMubGlzdFskc2NvcGUuaWRzLmxpc3QubGVuZ3RoIC0gMV0uc2VhcmNoS2V5XG4gICAgICBpZiBzZWFyY2hLZXkubGVuZ3RoXG4gICAgICAgICRzY29wZS5zZWFyY2hSZXF1ZXN0ID0gJHNjb3BlLmlkZW50aWZpSW5kZXguc2VhcmNoKHNlYXJjaEtleSwgdW5kZWZpbmVkLCBsaW1pdCwgY3Vyc29yKVxuICAgICAgIyBUT0RPOiBkaXN0YW5jZSBpbmRleCBpbiBpZGVudGlmaUxpYj9cbiAgICAgIGVsc2VcbiAgICAgICAgJHNjb3BlLnNlYXJjaFJlcXVlc3QgPSAkc2NvcGUuaWRlbnRpZmlJbmRleC5zZWFyY2goc2VhcmNoS2V5LCB1bmRlZmluZWQsIGxpbWl0LCBjdXJzb3IpXG4gICAgICAkc2NvcGUuc2VhcmNoUmVxdWVzdCA9ICRzY29wZS5zZWFyY2hSZXF1ZXN0LnRoZW4gKGlkZW50aXRpZXMpIC0+XG4jICAgICAgICBjb25zb2xlLmxvZyBpZGVudGl0aWVzXG4gICAgICAgIHNlYXJjaEtleSA9IGVuY29kZVVSSUNvbXBvbmVudCgocXVlcnkgb3IgJHNjb3BlLnF1ZXJ5LnRlcm0gb3IgJycpLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIGlmIHNlYXJjaEtleSAhPSAkc2NvcGUucHJldmlvdXNTZWFyY2hLZXlcbiAgICAgICAgICByZXR1cm4gIyBzZWFyY2gga2V5IGNoYW5nZWRcbiAgICAgICAgJHNjb3BlLmlkcy5saXN0ID0gJHNjb3BlLmlkcy5saXN0IG9yIFtdXG4gICAgICAgICRzY29wZS5pZHMubGlzdCA9ICRzY29wZS5pZHMubGlzdC5jb25jYXQoaWRlbnRpdGllcylcbiAgICAgICAgaWYgaWRlbnRpdGllcy5sZW5ndGggPiAwXG4gICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPSAwXG4gICAgICAgIGlmIHRydWUgb3IgaWRlbnRpdGllcy5sZW5ndGggPCBsaW1pdFxuICAgICAgICAgICRzY29wZS5pZHMuZmluaXNoZWQgPSB0cnVlXG4gICAgICByZXR1cm4gJHNjb3BlLnNlYXJjaFJlcXVlc3QudGhlbiAtPlxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+ICRzY29wZS5pZHMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgIGNvbnNvbGUubG9nICRzY29wZS5pZHMubGlzdFxuICAgICAgICAkc2NvcGUuaWRzLmxpc3RcblxuICAgICRzY29wZS5zZWFyY2hLZXlkb3duID0gKGV2ZW50KSAtPlxuICAgICAgc3dpdGNoIChpZiBldmVudCB0aGVuIGV2ZW50LndoaWNoIGVsc2UgLTEpXG4gICAgICAgIHdoZW4gMzhcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWYgJHNjb3BlLmlkcy5hY3RpdmVLZXkgPiAwXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXldLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXkgLSAxXS5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAkc2NvcGUuaWRzLmFjdGl2ZUtleS0tXG4gICAgICAgICAgc2Nyb2xsVG8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdCcgKyAkc2NvcGUuaWRzLmFjdGl2ZUtleSlcbiAgICAgICAgd2hlbiA0MFxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBpZiAkc2NvcGUuaWRzLmFjdGl2ZUtleSA8ICgkc2NvcGUuaWRzLmxpc3QubGVuZ3RoIHx8IDApIC0gMVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5XS5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5saXN0WyRzY29wZS5pZHMuYWN0aXZlS2V5ICsgMV0uYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgJHNjb3BlLmlkcy5hY3RpdmVLZXkrK1xuICAgICAgICAgIHNjcm9sbFRvIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHQnICsgJHNjb3BlLmlkcy5hY3RpdmVLZXkpXG4gICAgICAgIHdoZW4gMTNcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgaWQgPSAkc2NvcGUuaWRzLmxpc3RbJHNjb3BlLmlkcy5hY3RpdmVLZXldXG4gICAgICAgICAgJHN0YXRlLmdvICdpZGVudGl0aWVzLnNob3cnLCB7IHR5cGU6IGlkLmxpbmtUby5uYW1lLCB2YWx1ZTogaWQubGlua1RvLnZhbCB9XG4gICAgICAgIHdoZW4gLTFcbiAgICAgICAgICBjbGVhclRpbWVvdXQgJHNjb3BlLnRpbWVyXG4gICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSAnJ1xuICAgICAgICAgICRzY29wZS5zZWFyY2goKVxuICAgICAgICB3aGVuIDMzLCAzNCwgMzUsIDM2LCAzNywgMzlcbiAgICAgICAgZWxzZVxuICAgICAgICAgIGVsID0gYW5ndWxhci5lbGVtZW50KGV2ZW50LmN1cnJlbnRUYXJnZXQpXG4gICAgICAgICAgY2xlYXJUaW1lb3V0ICRzY29wZS50aW1lclxuICAgICAgICAgIHdhaXQgPSBzZXRUaW1lb3V0KCgtPlxuICAgICAgICAgICAgJHNjb3BlLnF1ZXJ5LnRlcm0gPSBlbC52YWwoKVxuICAgICAgICAgICAgJHNjb3BlLnNlYXJjaCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICApLCAzMDApXG4gICAgICAgICAgJHNjb3BlLnRpbWVyID0gd2FpdFxuICAgICAgICAgIGJyZWFrXG5cbiAgICAkc2NvcGUuZHJvcGRvd25TZWFyY2hTZWxlY3QgPSAoaXRlbSkgLT5cbiAgICAgICRzdGF0ZS5nbygnaWRlbnRpdGllcy5zaG93JywgeyB0eXBlOiBpdGVtLmxpbmtUby5uYW1lLCB2YWx1ZTogaXRlbS5saW5rVG8udmFsIH0pXG4gICAgICAkc2NvcGUucXVlcnkudGVybSA9ICcnXG5dXG4iXX0=

(function() {
  'use strict';
  angular.module('identifiAngular').controller('IdentitiesController', [
    '$scope', '$state', '$rootScope', '$window', '$stateParams', '$location', '$http', '$q', '$timeout', 'config', 'localStorageService', function($scope, $state, $rootScope, $window, $stateParams, $location, $http, $q, $timeout, config, localStorageService) {
      var addLocalMessages, messagesAdded;
      $scope.activeTab = 0;
      $scope.activateTab = function(tabId) {
        return $scope.activeTab = tabId;
      };
      $scope.info = {};
      $scope.stats = {};
      $scope.sent = [];
      $scope.received = [];
      $scope.connections = {};
      $scope.thumbsUp = [];
      $scope.thumbsDown = [];
      $scope.verifications = [];
      $scope.distance = null;
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
        var alpha, c, conn, connections, has, hash, i, idKey, j, k, key, len, len1, mostConfirmations, msg, percentage, r, ref, ref1, ref2, ref3, ref4, v;
        $scope.connections = {};
        connections = $scope.identityProfile.data.attrs || [];
        if (connections.length > 0) {
          c = connections[0];
          mostConfirmations = c.conf;
          $scope.stats = {
            received_positive: c.pos,
            received_negative: c.neg,
            received_neutral: c.neut
          };
          $scope.distance = c.dist;
        } else {
          mostConfirmations = 1;
        }
        for (k in connections) {
          v = connections[k];
          $scope.connections[$scope.getIdKey(v)] = Object.assign({}, v);
        }
        ref = $scope.localMessages;
        for (hash in ref) {
          msg = ref[hash];
          msg.data = msg.data || msg.signedData;
          if ((ref1 = msg.data.type) === 'verify_identity' || ref1 === 'unverify_identity') {
            has = false;
            ref2 = msg.data.recipient;
            for (i = 0, len = ref2.length; i < len; i++) {
              r = ref2[i];
              if (r[0] === $scope.idType && r[1] === $scope.idValue) {
                has = true;
                break;
              }
            }
            if (!has) {
              continue;
            }
            ref3 = msg.data.recipient;
            for (j = 0, len1 = ref3.length; j < len1; j++) {
              r = ref3[j];
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
        $scope.getPhotosFromGravatar();
        console.log($scope.info);
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
                  if (((ref = msg.signedData.type) === 'verify_identity' || ref === 'unverify_identity')) {
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
        if ($scope.sent.loading) {
          return;
        }
        $scope.sent.loading = true;
        cursor = $scope.sent.length ? $scope.sent[$scope.sent.length - 1].cursor : '';
        return $scope.identifiIndex.getSentMsgs($scope.identityProfile, $scope.filters.limit, cursor).then(function(sent) {
          console.log('sent', sent);
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
          return $scope.sent.finished = true;
        });
      };
      $scope.getReceivedMsgs = function() {
        var cursor;
        if ($scope.received.loading) {
          return;
        }
        $scope.received.loading = true;
        cursor = $scope.received.length ? $scope.received[$scope.received.length - 1].cursor : '';
        return $scope.identifiIndex.getReceivedMsgs($scope.identityProfile, $scope.filters.limit, cursor).then(function(received) {
          console.log('received', received);
          $scope.processMessages(received, {
            recipientIsSelf: true
          });
          return $scope.$apply(function() {
            var sorted;
            Array.prototype.push.apply($scope.received, received);
            $scope.received.loading = false;
            if (received.length < $scope.filters.limit - 1) {
              $scope.received.finished = true;
            }
            sorted = received.sort(function(a, b) {
              if (a.distance > b.distance) {
                return 1;
              }
              if (a.distance < b.distance) {
                return -1;
              }
              return 0;
            });
            return sorted.forEach(function(msg) {
              var neutralRating;
              if ($scope.thumbsUp.length >= 12 && $scope.thumbsDown.length >= 12) {
                return;
              }
              neutralRating = (msg.data.maxRating + msg.data.minRating) / 2;
              if ($scope.thumbsUp.length < 12 && msg.data.rating > neutralRating) {
                return $scope.thumbsUp.push(msg);
              } else if ($scope.thumbsDown.length < 12 && msg.rating < neutralRating) {
                return $scope.thumbsDown.push(msg);
              }
            });
          });
        })["catch"](function(error) {
          return $scope.received.finished = true;
        });
      };
      $scope.getPhotosFromGravatar = function() {
        var email;
        email = $scope.info.email || $scope.idValue;
        return $scope.gravatar = CryptoJS.MD5(email).toString();
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
              $scope.identityProfile = profile;
              $scope.$apply(function() {
                addLocalMessages();
                return $scope.getConnections();
              });
              $scope.getSentMsgs(0);
              return $scope.getReceivedMsgs(0);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpdGllcy9pZGVudGl0aWVzLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzIjpbImlkZW50aXRpZXMvaWRlbnRpdGllcy5jb250cm9sbGVyLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFBO0VBRUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxpQkFBZixDQUFpQyxDQUFDLFVBQWxDLENBQTZDLHNCQUE3QyxFQUFxRTtJQUNuRSxRQURtRSxFQUVuRSxRQUZtRSxFQUduRSxZQUhtRSxFQUluRSxTQUptRSxFQUtuRSxjQUxtRSxFQU1uRSxXQU5tRSxFQU9uRSxPQVBtRSxFQVFuRSxJQVJtRSxFQVNuRSxVQVRtRSxFQVduRSxRQVhtRSxFQVluRSxxQkFabUUsRUFhbkUsU0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixVQUFqQixFQUE2QixPQUE3QixFQUFzQyxZQUF0QyxFQUFvRCxTQUFwRCxFQUErRCxLQUEvRCxFQUFzRSxFQUF0RSxFQUEwRSxRQUExRSxFQUFvRixNQUFwRixFQUE0RixtQkFBNUY7QUFDRSxVQUFBO01BQUEsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFDbkIsTUFBTSxDQUFDLFdBQVAsR0FBcUIsU0FBQyxLQUFEO2VBQVcsTUFBTSxDQUFDLFNBQVAsR0FBbUI7TUFBOUI7TUFDckIsTUFBTSxDQUFDLElBQVAsR0FBYztNQUNkLE1BQU0sQ0FBQyxLQUFQLEdBQWU7TUFDZixNQUFNLENBQUMsSUFBUCxHQUFjO01BQ2QsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsTUFBTSxDQUFDLFdBQVAsR0FBcUI7TUFDckIsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsTUFBTSxDQUFDLFVBQVAsR0FBb0I7TUFDcEIsTUFBTSxDQUFDLGFBQVAsR0FBdUI7TUFDdkIsTUFBTSxDQUFDLFFBQVAsR0FBa0I7TUFDbEIsSUFBMkMsWUFBWSxDQUFDLE1BQXhEO1FBQUEsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFiLEdBQW9CLFlBQVksQ0FBQyxPQUFq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QixTQUFDLE9BQUQ7VUFDeEIsSUFBRyxPQUFIO21CQUNFLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBckIsQ0FBeUIsTUFBTSxDQUFDLE9BQWhDLEVBQXlDLE1BQU0sQ0FBQyxNQUFoRCxDQUF1RCxDQUFDLElBQXhELENBQTZELFNBQUMsT0FBRDtjQUMzRCxNQUFNLENBQUMsZUFBUCxHQUF5QjtjQUN6QixNQUFNLENBQUMsTUFBUCxDQUFjLFNBQUE7Z0JBQ1osZ0JBQUEsQ0FBQTt1QkFDQSxNQUFNLENBQUMsY0FBUCxDQUFBO2NBRlksQ0FBZDtjQUdBLE1BQU0sQ0FBQyxXQUFQLENBQW1CLENBQW5CO3FCQUNBLE1BQU0sQ0FBQyxlQUFQLENBQXVCLENBQXZCO1lBTjJELENBQTdELENBT0EsRUFBQyxLQUFELEVBUEEsQ0FPTyxTQUFDLEdBQUQ7cUJBQ0wsT0FBTyxDQUFDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQyxHQUF0QztZQURLLENBUFAsRUFERjs7UUFEd0IsQ0FBMUI7UUFXQSxJQUFHLE1BQU0sQ0FBQyxNQUFQLEtBQWlCLE9BQWpCLElBQTZCLE1BQU0sQ0FBQyxPQUFQLEtBQWtCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBbEU7aUJBQ0UsTUFBTSxDQUFDLFFBQVAsR0FBa0IsRUFEcEI7O01BdkJlO01BMEJqQixJQUFHLE1BQU0sQ0FBQyxFQUFQLENBQVUsaUJBQVYsQ0FBSDtlQUNFLE1BQU0sQ0FBQyxPQUFQLENBQUEsRUFERjs7SUEzVEYsQ0FibUU7R0FBckU7QUFGQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuIyBJZGVudGl0aWVzIGNvbnRyb2xsZXJcbmFuZ3VsYXIubW9kdWxlKCdpZGVudGlmaUFuZ3VsYXInKS5jb250cm9sbGVyICdJZGVudGl0aWVzQ29udHJvbGxlcicsIFtcbiAgJyRzY29wZSdcbiAgJyRzdGF0ZSdcbiAgJyRyb290U2NvcGUnXG4gICckd2luZG93J1xuICAnJHN0YXRlUGFyYW1zJ1xuICAnJGxvY2F0aW9uJ1xuICAnJGh0dHAnXG4gICckcSdcbiAgJyR0aW1lb3V0J1xuICAjICdBdXRoZW50aWNhdGlvbidcbiAgJ2NvbmZpZydcbiAgJ2xvY2FsU3RvcmFnZVNlcnZpY2UnXG4gICgkc2NvcGUsICRzdGF0ZSwgJHJvb3RTY29wZSwgJHdpbmRvdywgJHN0YXRlUGFyYW1zLCAkbG9jYXRpb24sICRodHRwLCAkcSwgJHRpbWVvdXQsIGNvbmZpZywgbG9jYWxTdG9yYWdlU2VydmljZSkgLT4gIywgQXV0aGVudGljYXRpb25cbiAgICAkc2NvcGUuYWN0aXZlVGFiID0gMFxuICAgICRzY29wZS5hY3RpdmF0ZVRhYiA9ICh0YWJJZCkgLT4gJHNjb3BlLmFjdGl2ZVRhYiA9IHRhYklkXG4gICAgJHNjb3BlLmluZm8gPSB7fVxuICAgICRzY29wZS5zdGF0cyA9IHt9XG4gICAgJHNjb3BlLnNlbnQgPSBbXVxuICAgICRzY29wZS5yZWNlaXZlZCA9IFtdXG4gICAgJHNjb3BlLmNvbm5lY3Rpb25zID0ge31cbiAgICAkc2NvcGUudGh1bWJzVXAgPSBbXVxuICAgICRzY29wZS50aHVtYnNEb3duID0gW11cbiAgICAkc2NvcGUudmVyaWZpY2F0aW9ucyA9IFtdXG4gICAgJHNjb3BlLmRpc3RhbmNlID0gbnVsbFxuICAgICRzY29wZS5xdWVyeS50ZXJtID0gJHN0YXRlUGFyYW1zLnNlYXJjaCBpZiAkc3RhdGVQYXJhbXMuc2VhcmNoXG4gICAgJHNjb3BlLm5ld0F0dHJpYnV0ZSA9XG4gICAgICB0eXBlOiAnJ1xuICAgICAgdmFsdWU6ICRzdGF0ZVBhcmFtcy52YWx1ZVxuICAgICRzY29wZS5maWx0ZXJzLnR5cGUgPSBudWxsXG4gICAgJHNjb3BlLmNvbGxhcHNlTGV2ZWwgPSB7fVxuICAgICRzY29wZS5jb2xsYXBzZUZpbHRlcnMgPSAkd2luZG93LmlubmVyV2lkdGggPCA5OTJcbiAgICAkc2NvcGUuc2xpZGVyID1cbiAgICAgIHZhbHVlOiAwXG4gICAgICBvcHRpb25zOlxuICAgICAgICBmbG9vcjogLTNcbiAgICAgICAgY2VpbDogM1xuICAgICAgICBoaWRlUG9pbnRlckxhYmVsczogdHJ1ZVxuICAgICAgICBoaWRlTGltaXRMYWJlbHM6IHRydWVcblxuICAgIG1lc3NhZ2VzQWRkZWQgPSBmYWxzZVxuICAgICRzY29wZS4kb24gJ01lc3NhZ2VBZGRlZCcsIChldmVudCwgYXJncykgLT5cbiAgICAgICRzY29wZS5sb2NhbE1lc3NhZ2VzW2FyZ3MubWVzc2FnZS5oYXNoXSA9IGFyZ3MubWVzc2FnZVxuICAgICAgJHNjb3BlLmxvY2FsTWVzc2FnZXNbYXJncy5tZXNzYWdlLmhhc2hdLmxvY2FsID0gdHJ1ZVxuICAgICAgbG9jYWxTdG9yYWdlU2VydmljZS5zZXQoJ2xvY2FsTWVzc2FnZXMnLCAkc2NvcGUubG9jYWxNZXNzYWdlcylcbiAgICAgIG1lc3NhZ2VzQWRkZWQgPSB0cnVlXG4gICAgICByZXR1cm4gdW5sZXNzICRzdGF0ZS5pcyAnaWRlbnRpdGllcy5zaG93J1xuICAgICAgaWYgYXJncy5tZXNzYWdlLnNpZ25lZERhdGEudHlwZSBpbiBbJ3ZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmeV9pZGVudGl0eSddIGFuZCBub3QgYXJncy5pZC5jb25maXJtZWRcbiAgICAgICAgJHNjb3BlLmdldENvbm5lY3Rpb25zKClcbiAgICAgIGVsc2UgaWYgYXJncy5tZXNzYWdlLnNpZ25lZERhdGEudHlwZSA9PSAncmF0aW5nJ1xuICAgICAgICBpZiBtZXNzYWdlc0FkZGVkXG4gICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLnNoaWZ0KClcbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBbYXJncy5tZXNzYWdlXVxuICAgICAgICAkc2NvcGUucmVjZWl2ZWQudW5zaGlmdCBhcmdzLm1lc3NhZ2VcblxuICAgICRzY29wZS5hZGRFbnRyeSA9IChldmVudCwgZW50cnkpIC0+XG4gICAgICByZWNpcGllbnQgPSBbXVxuICAgICAgaWYgZW50cnkubmFtZVxuICAgICAgICByZWNpcGllbnQucHVzaCBbJ25hbWUnLCBlbnRyeS5uYW1lXVxuICAgICAgaWYgZW50cnkuZW1haWxcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWydlbWFpbCcsIGVudHJ5LmVtYWlsXVxuICAgICAgaWYgZW50cnkudXJsXG4gICAgICAgIHJlY2lwaWVudC5wdXNoIFsndXJsJywgZW50cnkudXJsXVxuICAgICAgaWYgZW50cnkucGhvbmVcbiAgICAgICAgcmVjaXBpZW50LnB1c2ggWydwaG9uZScsIGVudHJ5LnBob25lXVxuICAgICAgcGFyYW1zID1cbiAgICAgICAgdHlwZTogJ3ZlcmlmeV9pZGVudGl0eSdcbiAgICAgICAgcmVjaXBpZW50OiByZWNpcGllbnRcbiAgICAgICRzY29wZS5jcmVhdGVNZXNzYWdlKGV2ZW50LCBwYXJhbXMpLnRoZW4gKHJlc3BvbnNlKSAtPlxuICAgICAgICAkc3RhdGUuZ28gJ21lc3NhZ2VzLnNob3cnLCB7IGlkOiByZXNwb25zZS5pcGZzX2hhc2ggfVxuICAgICAgLCAoZXJyb3IpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nIFwiZXJyb3JcIiwgZXJyb3JcblxuICAgICRzY29wZS5nZXRDb25uZWN0aW9ucyA9IC0+XG4gICAgICAkc2NvcGUuY29ubmVjdGlvbnMgPSB7fVxuICAgICAgY29ubmVjdGlvbnMgPSAkc2NvcGUuaWRlbnRpdHlQcm9maWxlLmRhdGEuYXR0cnMgb3IgW11cbiAgICAgIGlmIGNvbm5lY3Rpb25zLmxlbmd0aCA+IDBcbiAgICAgICAgYyA9IGNvbm5lY3Rpb25zWzBdXG4gICAgICAgIG1vc3RDb25maXJtYXRpb25zID0gYy5jb25mXG4gICAgICAgICRzY29wZS5zdGF0cyA9XG4gICAgICAgICAgcmVjZWl2ZWRfcG9zaXRpdmU6IGMucG9zXG4gICAgICAgICAgcmVjZWl2ZWRfbmVnYXRpdmU6IGMubmVnXG4gICAgICAgICAgcmVjZWl2ZWRfbmV1dHJhbDogYy5uZXV0XG4gICAgICAgICRzY29wZS5kaXN0YW5jZSA9IGMuZGlzdFxuICAgICAgZWxzZVxuICAgICAgICBtb3N0Q29uZmlybWF0aW9ucyA9IDFcbiAgICAgIGZvciBrLCB2IG9mIGNvbm5lY3Rpb25zXG4gICAgICAgICRzY29wZS5jb25uZWN0aW9uc1skc2NvcGUuZ2V0SWRLZXkodildID0gT2JqZWN0LmFzc2lnbih7fSwgdilcbiAgICAgIGZvciBoYXNoLCBtc2cgb2YgJHNjb3BlLmxvY2FsTWVzc2FnZXNcbiAgICAgICAgbXNnLmRhdGEgPSBtc2cuZGF0YSBvciBtc2cuc2lnbmVkRGF0YVxuICAgICAgICBpZiBtc2cuZGF0YS50eXBlIGluIFsndmVyaWZ5X2lkZW50aXR5JywgJ3VudmVyaWZ5X2lkZW50aXR5J11cbiAgICAgICAgICBoYXMgPSBmYWxzZVxuICAgICAgICAgIGZvciByIGluIG1zZy5kYXRhLnJlY2lwaWVudFxuICAgICAgICAgICAgaWYgclswXSA9PSAkc2NvcGUuaWRUeXBlIGFuZCByWzFdwqA9PSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAgICAgICBoYXMgPSB0cnVlXG4gICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgY29udGludWUgdW5sZXNzIGhhc1xuICAgICAgICAgIGZvciByIGluIG1zZy5kYXRhLnJlY2lwaWVudFxuICAgICAgICAgICAgdW5sZXNzIHJbMF0gPT0gJHNjb3BlLmlkVHlwZSBhbmQgclsxXcKgPT0gJHNjb3BlLmlkVmFsdWVcbiAgICAgICAgICAgICAgaWRLZXkgPSAkc2NvcGUuZ2V0SWRLZXkocilcbiAgICAgICAgICAgICAgaWYgJHNjb3BlLmNvbm5lY3Rpb25zLmhhc093blByb3BlcnR5KGlkS2V5KVxuICAgICAgICAgICAgICAgICRzY29wZS5jb25uZWN0aW9uc1tpZEtleV0uY29uZiArPSAxIGlmIG1zZy5kYXRhLnR5cGUgPT0gJ3ZlcmlmeV9pZGVudGl0eSdcbiAgICAgICAgICAgICAgICAkc2NvcGUuY29ubmVjdGlvbnNbaWRLZXldLnJlZiArPSAxIGlmIG1zZy5kYXRhLnR5cGUgPT0gJ3VudmVyaWZ5X2lkZW50aXR5J1xuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgJHNjb3BlLmNvbm5lY3Rpb25zW2lkS2V5XSA9XG4gICAgICAgICAgICAgICAgICBuYW1lOiBtc2cuZGF0YS5yZWNpcGllbnRbMV1bMF1cbiAgICAgICAgICAgICAgICAgIHZhbDogbXNnLmRhdGEucmVjaXBpZW50WzFdWzFdXG4gICAgICAgICAgICAgICAgICBjb25mOiBpZiBtc2cuZGF0YS50eXBlID09ICd2ZXJpZnlfaWRlbnRpdHknIHRoZW4gMSBlbHNlIDBcbiAgICAgICAgICAgICAgICAgIHJlZjogaWYgbXNnLmRhdGEudHlwZSA9PSAndW52ZXJpZnlfaWRlbnRpdHknIHRoZW4gMSBlbHNlIDBcbiAgICAgICAgICAgICAgYnJlYWtcbiAgICAgIGZvciBrZXksIGNvbm4gb2YgJHNjb3BlLmNvbm5lY3Rpb25zXG4gICAgICAgIGNvbm4uaXNDdXJyZW50ID0gY29ubi5uYW1lID09ICRzY29wZS5pZFR5cGUgYW5kIGNvbm4udmFsID09ICRzY29wZS5pZFZhbHVlXG4gICAgICAgIHN3aXRjaCBjb25uLm5hbWVcbiAgICAgICAgICB3aGVuICdlbWFpbCdcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGUnXG4gICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1zdWNjZXNzJ1xuICAgICAgICAgICAgY29ubi5saW5rID0gJ21haWx0bzonICsgY29ubi52YWxcbiAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgJHNjb3BlLmluZm8uZW1haWwgPSAkc2NvcGUuaW5mby5lbWFpbCBvciBjb25uLnZhbFxuICAgICAgICAgIHdoZW4gJ2JpdGNvaW5fYWRkcmVzcycsICdiaXRjb2luJ1xuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEtYml0Y29pbidcbiAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLXByaW1hcnknXG4gICAgICAgICAgICBjb25uLmxpbmsgPSAnaHR0cHM6Ly9ibG9ja2NoYWluLmluZm8vYWRkcmVzcy8nICsgY29ubi52YWxcbiAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgIHdoZW4gJ2dwZ19maW5nZXJwcmludCcsICdncGdfa2V5aWQnXG4gICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1rZXknXG4gICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICAgICAgY29ubi5saW5rID0gJ2h0dHBzOi8vcGdwLm1pdC5lZHUvcGtzL2xvb2t1cD9vcD1nZXQmc2VhcmNoPTB4JyArIGNvbm4udmFsXG4gICAgICAgICAgd2hlbiAnYWNjb3VudCdcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWF0J1xuICAgICAgICAgIHdoZW4gJ25pY2tuYW1lJ1xuICAgICAgICAgICAgJHNjb3BlLmluZm8ubmlja25hbWUgPSAkc2NvcGUuaW5mby5uaWNrbmFtZSBvciBjb25uLnZhbFxuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1mb250J1xuICAgICAgICAgIHdoZW4gJ25hbWUnXG4gICAgICAgICAgICAkc2NvcGUuaW5mby5uYW1lID0gJHNjb3BlLmluZm8ubmFtZSBvciBjb25uLnZhbFxuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZ2x5cGhpY29uIGdseXBoaWNvbi1mb250J1xuICAgICAgICAgIHdoZW4gJ3RlbCcsICdwaG9uZSdcbiAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tZWFycGhvbmUnXG4gICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1zdWNjZXNzJ1xuICAgICAgICAgICAgY29ubi5saW5rID0gJ3RlbDonICsgY29ubi52YWxcbiAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgIHdoZW4gJ2tleUlEJ1xuICAgICAgICAgICAgY29ubi5pY29uU3R5bGUgPSAnZmEgZmEta2V5J1xuICAgICAgICAgIHdoZW4gJ2NvdmVyUGhvdG8nXG4gICAgICAgICAgICBpZiBjb25uLnZhbC5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgICAgICAkc2NvcGUuY292ZXJQaG90byA9ICRzY29wZS5jb3ZlclBob3RvIG9yIHsgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcgKyAoJHNjb3BlLmlwZnNTdG9yYWdlLmFwaVJvb3Qgb3IgJycpICsgY29ubi52YWwgKyAnKScgfVxuICAgICAgICAgIHdoZW4gJ3Byb2ZpbGVQaG90bydcbiAgICAgICAgICAgIGlmIGNvbm4udmFsLm1hdGNoIC9eXFwvaXBmc1xcL1sxLTlBLVphLXpdezQwLDYwfSQvXG4gICAgICAgICAgICAgICRzY29wZS5wcm9maWxlUGhvdG8gPSAkc2NvcGUucHJvZmlsZVBob3RvIG9yICgkc2NvcGUuaXBmc1N0b3JhZ2UuYXBpUm9vdCBvciAnJykgKyBjb25uLnZhbFxuICAgICAgICAgIHdoZW4gJ3VybCdcbiAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICBpZiBjb25uLnZhbC5pbmRleE9mKCdmYWNlYm9vay5jb20vJykgPiAtMVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1mYWNlYm9vaydcbiAgICAgICAgICAgICAgY29ubi5idG5TdHlsZSA9ICdidG4tZmFjZWJvb2snXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbC5zcGxpdCgnZmFjZWJvb2suY29tLycpWzFdXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZSBpZiBjb25uLnZhbC5pbmRleE9mKCd0d2l0dGVyLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLXR3aXR0ZXInXG4gICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLXR3aXR0ZXInXG4gICAgICAgICAgICAgIGNvbm4ubGluayA9IGNvbm4udmFsXG4gICAgICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbC5zcGxpdCgndHdpdHRlci5jb20vJylbMV1cbiAgICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ3BsdXMuZ29vZ2xlLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWdvb2dsZS1wbHVzJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1nb29nbGUtcGx1cydcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsLnNwbGl0KCdwbHVzLmdvb2dsZS5jb20vJylbMV1cbiAgICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ2xpbmtlZGluLmNvbS8nKSA+IC0xXG4gICAgICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2ZhIGZhLWxpbmtlZGluJ1xuICAgICAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1saW5rZWRpbidcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsLnNwbGl0KCdsaW5rZWRpbi5jb20vJylbMV1cbiAgICAgICAgICAgICAgY29ubi5xdWlja0NvbnRhY3QgPSB0cnVlXG4gICAgICAgICAgICBlbHNlIGlmIGNvbm4udmFsLmluZGV4T2YoJ2dpdGh1Yi5jb20vJykgPiAtMVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdmYSBmYS1naXRodWInXG4gICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWdpdGh1YidcbiAgICAgICAgICAgICAgY29ubi5saW5rID0gY29ubi52YWxcbiAgICAgICAgICAgICAgY29ubi5saW5rTmFtZSA9IGNvbm4udmFsLnNwbGl0KCdnaXRodWIuY29tLycpWzFdXG4gICAgICAgICAgICAgIGNvbm4ucXVpY2tDb250YWN0ID0gdHJ1ZVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICBjb25uLmljb25TdHlsZSA9ICdnbHlwaGljb24gZ2x5cGhpY29uLWxpbmsnXG4gICAgICAgICAgICAgIGNvbm4uYnRuU3R5bGUgPSAnYnRuLWRlZmF1bHQnXG4gICAgICAgIGlmIGNvbm4udmFsIGFuZCBjb25uLnZhbC5tYXRjaCAvXlxcL2lwZnNcXC9bMS05QS1aYS16XXs0MCw2MH0kL1xuICAgICAgICAgIGNvbm4ubGluayA9ICgkc2NvcGUuaXBmc1N0b3JhZ2UuYXBpUm9vdCBvciAnJykgKyBjb25uLnZhbFxuICAgICAgICAgIGNvbm4ubGlua05hbWUgPSBjb25uLnZhbFxuICAgICAgICAgIGNvbm4uaWNvblN0eWxlID0gJ2dseXBoaWNvbiBnbHlwaGljb24tbGluaydcbiAgICAgICAgICBjb25uLmJ0blN0eWxlID0gJ2J0bi1kZWZhdWx0J1xuICAgICAgICBpZiBjb25uLmNvbmYgKyBjb25uLnJlZiA+IDBcbiAgICAgICAgICBwZXJjZW50YWdlID0gY29ubi5jb25mICogMTAwIC8gKGNvbm4uY29uZiArIGNvbm4ucmVmKVxuICAgICAgICAgIGlmIHBlcmNlbnRhZ2UgPj0gODBcbiAgICAgICAgICAgIGFscGhhID0gY29ubi5jb25mIC8gbW9zdENvbmZpcm1hdGlvbnMgKiAwLjcgKyAwLjNcbiAgICAgICAgICAgICMgY29ubi5yb3dTdHlsZSA9ICdiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMywyNDAsMjE2LCcgKyBhbHBoYSArICcpJ1xuICAgICAgICAgIGVsc2UgaWYgcGVyY2VudGFnZSA+PSA2MFxuICAgICAgICAgICAgY29ubi5yb3dDbGFzcyA9ICd3YXJuaW5nJ1xuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNvbm4ucm93Q2xhc3MgPSAnZGFuZ2VyJ1xuICAgICAgICAkc2NvcGUuaGFzUXVpY2tDb250YWN0cyA9ICRzY29wZS5oYXNRdWlja0NvbnRhY3RzIG9yIGNvbm4ucXVpY2tDb250YWN0XG4gICAgICAkc2NvcGUuZ2V0UGhvdG9zRnJvbUdyYXZhdGFyKClcbiAgICAgIGNvbnNvbGUubG9nICRzY29wZS5pbmZvXG4gICAgICAkc2NvcGUuY29ubmVjdGlvbnNMZW5ndGggPSBPYmplY3Qua2V5cygkc2NvcGUuY29ubmVjdGlvbnMpLmxlbmd0aFxuICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSAoJHNjb3BlLmluZm8ubmFtZSB8fCAkc2NvcGUuaW5mby5uaWNrbmFtZSB8fCAkc2NvcGUuaWRWYWx1ZSlcblxuICAgICRzY29wZS5nZXRDb25uZWN0aW5nTXNncyA9IChpZDEsIGlkMikgLT5cbiAgICAgIGdldFZlcmlmaWNhdGlvbnMgPSAkcSAocmVzb2x2ZSkgLT5cbiAgICAgICAgaWYgISRzY29wZS52ZXJpZmljYXRpb25zLmxlbmd0aFxuICAgICAgICAgIGlmICRzY29wZS5yZWNlaXZlZEluZGV4XG4gICAgICAgICAgICAkc2NvcGUucmVjZWl2ZWRJbmRleC5zZWFyY2hUZXh0KCcnLCAxMDAwMCwgZmFsc2UsIHRydWUpLnRoZW4gKHJlcykgLT5cbiAgICAgICAgICAgICAgcmVzLmZvckVhY2ggKHJvdykgLT5cbiAgICAgICAgICAgICAgICBtc2cgPSByb3cudmFsdWVcbiAgICAgICAgICAgICAgICB1bmxlc3MgbXNnLnNpZ25lZERhdGFcbiAgICAgICAgICAgICAgICAgIG1zZy5zaWduZWREYXRhID0gS0pVUi5qd3MuSldTLnBhcnNlKG1zZy5qd3MpLnBheWxvYWRPYmpcbiAgICAgICAgICAgICAgICBpZiAobXNnLnNpZ25lZERhdGEudHlwZSBpbiBbJ3ZlcmlmeV9pZGVudGl0eScsICd1bnZlcmlmeV9pZGVudGl0eSddKVxuICAgICAgICAgICAgICAgICAgbXNnLmdyYXZhdGFyID0gQ3J5cHRvSlMuTUQ1KG1zZy5hdXRob3JFbWFpbCBvciBtc2cuc2lnbmVkRGF0YS5hdXRob3JbMF1bMV0pLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgIG1zZy5saW5rVG9BdXRob3IgPSBtc2cuc2lnbmVkRGF0YS5hdXRob3JbMF1cbiAgICAgICAgICAgICAgICAgICRzY29wZS52ZXJpZmljYXRpb25zLnB1c2ggbXNnXG4gICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICBnZXRWZXJpZmljYXRpb25zLnRoZW4gLT5cbiAgICAgICAgbXNncyA9IFtdXG4gICAgICAgICRzY29wZS52ZXJpZmljYXRpb25zLmZvckVhY2ggKG1zZykgLT5cbiAgICAgICAgICBoYXNJZDEgPSBoYXNJZDIgPSBmYWxzZVxuICAgICAgICAgIGZvciBpZCBpbiBtc2cuc2lnbmVkRGF0YS5yZWNpcGllbnRcbiAgICAgICAgICAgIHJldHVybiBtc2dzLnB1c2ggbXNnIGlmIGlkWzBdwqA9PSBpZDIubmFtZSBhbmQgaWRbMV0gPT0gaWQyLnZhbFxuICAgICAgICByZXR1cm4gbXNnc1xuXG4gICAgJHNjb3BlLmNvbm5lY3Rpb25DbGlja2VkID0gKGV2ZW50LCBpZCkgLT5cbiAgICAgIGlmIGlkLmNvbm5lY3RpbmdfbXNnc1xuICAgICAgICBpZC5jb2xsYXBzZSA9ICFpZC5jb2xsYXBzZVxuICAgICAgZWxzZVxuICAgICAgICAkc2NvcGUuZ2V0Q29ubmVjdGluZ01zZ3MoWyRzY29wZS5pZFR5cGUsICRzY29wZS5pZFZhbHVlXSwgaWQpLnRoZW4gKG1zZ3MpIC0+XG4gICAgICAgICAgaWQuY29ubmVjdGluZ19tc2dzID0gbXNnc1xuICAgICAgICAgIGlkLmNvbGxhcHNlID0gIWlkLmNvbGxhcHNlXG5cbiAgICAkc2NvcGUuZ2V0U2VudE1zZ3MgPSAtPlxuICAgICAgcmV0dXJuIGlmICRzY29wZS5zZW50LmxvYWRpbmdcbiAgICAgICRzY29wZS5zZW50LmxvYWRpbmcgPSB0cnVlXG4gICAgICBjdXJzb3IgPSBpZiAkc2NvcGUuc2VudC5sZW5ndGggdGhlbiAkc2NvcGUuc2VudFskc2NvcGUuc2VudC5sZW5ndGggLSAxXS5jdXJzb3IgZWxzZSAnJ1xuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0U2VudE1zZ3MoJHNjb3BlLmlkZW50aXR5UHJvZmlsZSwgJHNjb3BlLmZpbHRlcnMubGltaXQsIGN1cnNvcilcbiAgICAgIC50aGVuIChzZW50KSAtPlxuICAgICAgICBjb25zb2xlLmxvZyAnc2VudCcsIHNlbnRcbiAgICAgICAgJHNjb3BlLnByb2Nlc3NNZXNzYWdlcyBzZW50LCB7IHJlY2lwaWVudElzU2VsZjogZmFsc2UgfVxuICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkoJHNjb3BlLnNlbnQsIHNlbnQpXG4gICAgICAgICAgJHNjb3BlLnNlbnQubG9hZGluZyA9IGZhbHNlXG4gICAgICAgICAgaWYgc2VudC5sZW5ndGggPCAkc2NvcGUuZmlsdGVycy5saW1pdCAtIDFcbiAgICAgICAgICAgICRzY29wZS5zZW50LmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgLmNhdGNoIChlcnJvcikgLT5cbiAgICAgICAgJHNjb3BlLnNlbnQuZmluaXNoZWQgPSB0cnVlXG5cbiAgICAkc2NvcGUuZ2V0UmVjZWl2ZWRNc2dzID0gLT5cbiAgICAgIHJldHVybiBpZiAkc2NvcGUucmVjZWl2ZWQubG9hZGluZ1xuICAgICAgJHNjb3BlLnJlY2VpdmVkLmxvYWRpbmcgPSB0cnVlXG4gICAgICBjdXJzb3IgPSBpZiAkc2NvcGUucmVjZWl2ZWQubGVuZ3RoIHRoZW4gJHNjb3BlLnJlY2VpdmVkWyRzY29wZS5yZWNlaXZlZC5sZW5ndGggLSAxXS5jdXJzb3IgZWxzZSAnJ1xuICAgICAgJHNjb3BlLmlkZW50aWZpSW5kZXguZ2V0UmVjZWl2ZWRNc2dzKCRzY29wZS5pZGVudGl0eVByb2ZpbGUsICRzY29wZS5maWx0ZXJzLmxpbWl0LCBjdXJzb3IpXG4gICAgICAudGhlbiAocmVjZWl2ZWQpIC0+XG4gICAgICAgIGNvbnNvbGUubG9nICdyZWNlaXZlZCcsIHJlY2VpdmVkXG4gICAgICAgICRzY29wZS5wcm9jZXNzTWVzc2FnZXMgcmVjZWl2ZWQsIHsgcmVjaXBpZW50SXNTZWxmOiB0cnVlIH1cbiAgICAgICAgJHNjb3BlLiRhcHBseSAtPlxuICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KCRzY29wZS5yZWNlaXZlZCwgcmVjZWl2ZWQpXG4gICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgIGlmIHJlY2VpdmVkLmxlbmd0aCA8ICRzY29wZS5maWx0ZXJzLmxpbWl0IC0gMVxuICAgICAgICAgICAgJHNjb3BlLnJlY2VpdmVkLmZpbmlzaGVkID0gdHJ1ZVxuICAgICAgICAgIHNvcnRlZCA9IHJlY2VpdmVkLnNvcnQgKGEsYikgLT5cbiAgICAgICAgICAgIHJldHVybiAxIGlmIGEuZGlzdGFuY2UgPiBiLmRpc3RhbmNlXG4gICAgICAgICAgICByZXR1cm4gLTEgaWYgYS5kaXN0YW5jZSA8IGIuZGlzdGFuY2VcbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgc29ydGVkLmZvckVhY2ggKG1zZykgLT5cbiAgICAgICAgICAgIHJldHVybiBpZiAkc2NvcGUudGh1bWJzVXAubGVuZ3RoID49IDEyIGFuZCAkc2NvcGUudGh1bWJzRG93bi5sZW5ndGggPj0gMTJcbiAgICAgICAgICAgIG5ldXRyYWxSYXRpbmcgPSAobXNnLmRhdGEubWF4UmF0aW5nICsgbXNnLmRhdGEubWluUmF0aW5nKSAvIDJcbiAgICAgICAgICAgIGlmICRzY29wZS50aHVtYnNVcC5sZW5ndGggPCAxMiBhbmQgbXNnLmRhdGEucmF0aW5nID4gbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICAkc2NvcGUudGh1bWJzVXAucHVzaCBtc2dcbiAgICAgICAgICAgIGVsc2UgaWYgJHNjb3BlLnRodW1ic0Rvd24ubGVuZ3RoIDwgMTIgYW5kICBtc2cucmF0aW5nIDwgbmV1dHJhbFJhdGluZ1xuICAgICAgICAgICAgICAkc2NvcGUudGh1bWJzRG93bi5wdXNoIG1zZ1xuICAgICAgLmNhdGNoIChlcnJvcikgLT5cbiAgICAgICAgJHNjb3BlLnJlY2VpdmVkLmZpbmlzaGVkID0gdHJ1ZVxuXG4gICAgJHNjb3BlLmdldFBob3Rvc0Zyb21HcmF2YXRhciA9IC0+XG4gICAgICBlbWFpbCA9ICRzY29wZS5pbmZvLmVtYWlsIG9yICRzY29wZS5pZFZhbHVlXG4gICAgICAkc2NvcGUuZ3JhdmF0YXIgPSBDcnlwdG9KUy5NRDUoZW1haWwpLnRvU3RyaW5nKClcblxuICAgIGFkZExvY2FsTWVzc2FnZXMgPSAtPlxuICAgICAgbXNncyA9IGxvY2FsU3RvcmFnZVNlcnZpY2UuZ2V0KCdsb2NhbE1lc3NhZ2VzJykgb3Ige31cbiAgICAgIGNvbm5lY3Rpb25zVG9BZGQgPSB7fVxuICAgICAgZm9yIGhhc2gsIG1zZyBvZiBtc2dzXG4gICAgICAgIG1zZy5kYXRhID0gbXNnLmRhdGEgb3IgbXNnLnNpZ25lZERhdGFcbiAgICAgICAgaWYgbXNnLmRhdGEucmVjaXBpZW50WzBdWzBdID09ICRzY29wZS5pZFR5cGUgYW5kIG1zZy5kYXRhLnJlY2lwaWVudFswXVsxXSA9PSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAgICRzY29wZS5yZWNlaXZlZC51bnNoaWZ0KG1zZylcbiAgICAgICAgaWYgbXNnLmRhdGEuYXV0aG9yWzBdWzBdID09ICRzY29wZS5pZFR5cGUgYW5kIG1zZy5kYXRhLmF1dGhvclswXVsxXSA9PSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgICAgICRzY29wZS5zZW50LnVuc2hpZnQobXNnKVxuXG4gICAgJHNjb3BlLnNldEZpbHRlcnMgPSAoZmlsdGVycykgLT5cbiAgICAgIGFuZ3VsYXIuZXh0ZW5kICRzY29wZS5maWx0ZXJzLCBmaWx0ZXJzXG4gICAgICAkc2NvcGUuc2VudCA9IFtdXG4gICAgICAkc2NvcGUucmVjZWl2ZWQgPSBbXVxuICAgICAgYWRkTG9jYWxNZXNzYWdlcygpXG4gICAgICAkdGltZW91dCAtPiAkcm9vdFNjb3BlLiRicm9hZGNhc3QgJ21zZ1Njcm9sbENoZWNrJ1xuXG4gICAgJHNjb3BlLmZpbmRPbmUgPSAtPlxuICAgICAgJHNjb3BlLmlkVHlwZSA9ICRzdGF0ZVBhcmFtcy50eXBlXG4gICAgICAkc2NvcGUuaWRWYWx1ZSA9ICRzdGF0ZVBhcmFtcy52YWx1ZVxuICAgICAgJHNjb3BlLmlzQ3VycmVudFVzZXIgPSAkc2NvcGUuYXV0aGVudGljYXRpb24gYW5kXG4gICAgICAgICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyIGFuZFxuICAgICAgICAkc2NvcGUuaWRUeXBlID09ICRzY29wZS5hdXRoZW50aWNhdGlvbi51c2VyLmlkVHlwZSBhbmRcbiAgICAgICAgJHNjb3BlLmlkVmFsdWUgPT0gJHNjb3BlLmF1dGhlbnRpY2F0aW9uLnVzZXIuaWRWYWx1ZVxuICAgICAgJHNjb3BlLmlzVW5pcXVlVHlwZSA9IGNvbmZpZy51bmlxdWVBdHRyaWJ1dGVUeXBlcy5pbmRleE9mKCRzY29wZS5pZFR5cGUpID4gLTFcbiAgICAgIGlmICEkc2NvcGUuaXNVbmlxdWVUeXBlXG4gICAgICAgICRzdGF0ZS5nbyAnaWRlbnRpdGllcy5saXN0JywgeyBzZWFyY2g6ICRzY29wZS5pZFZhbHVlIH1cbiAgICAgICAgJHNjb3BlLnRhYnNbMl0uYWN0aXZlID0gdHJ1ZVxuICAgICAgJHNjb3BlLnNldFBhZ2VUaXRsZSAkc2NvcGUuaWRWYWx1ZVxuICAgICAgJHNjb3BlLiR3YXRjaCAnYXBpUmVhZHknLCAoaXNSZWFkeSkgLT5cbiAgICAgICAgaWYgaXNSZWFkeVxuICAgICAgICAgICRzY29wZS5pZGVudGlmaUluZGV4LmdldCgkc2NvcGUuaWRWYWx1ZSwgJHNjb3BlLmlkVHlwZSkudGhlbiAocHJvZmlsZSkgLT5cbiAgICAgICAgICAgICRzY29wZS5pZGVudGl0eVByb2ZpbGUgPSBwcm9maWxlXG4gICAgICAgICAgICAkc2NvcGUuJGFwcGx5IC0+XG4gICAgICAgICAgICAgIGFkZExvY2FsTWVzc2FnZXMoKVxuICAgICAgICAgICAgICAkc2NvcGUuZ2V0Q29ubmVjdGlvbnMoKVxuICAgICAgICAgICAgJHNjb3BlLmdldFNlbnRNc2dzKDApXG4gICAgICAgICAgICAkc2NvcGUuZ2V0UmVjZWl2ZWRNc2dzKDApXG4gICAgICAgICAgLmNhdGNoIChlcnIpIC0+XG4gICAgICAgICAgICBjb25zb2xlLmxvZyAnZXJyb3IgZmV0Y2hpbmcgcHJvZmlsZScsIGVyclxuICAgICAgaWYgJHNjb3BlLmlkVHlwZSA9PSAna2V5SUQnIGFuZCAkc2NvcGUuaWRWYWx1ZSA9PSAkc2NvcGUubm9kZUluZm8ua2V5SURcbiAgICAgICAgJHNjb3BlLmRpc3RhbmNlID0gMFxuXG4gICAgaWYgJHN0YXRlLmlzICdpZGVudGl0aWVzLnNob3cnXG4gICAgICAkc2NvcGUuZmluZE9uZSgpXG5dXG4iXX0=

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
$templateCache.put('app/identities/list.html','<div class="container no-padding-xs"><section><div class=mar-top25-xs></div><div ng-if="!query.term && !authentication.user" class=jumbotron><div class=align-center><h1>Global address book</h1></div><div class=row><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-book fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-book"></i> Keep your contacts and trusted online identity up-to-date.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-thumbs-up fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-thumbs-up"></i> Find out who said what about a person or an organization.</p></div></div><div class=col-sm-4><div class=align-center><i class="hidden-xs fa fa-check fa-5x mar-bot20"></i><p><i class="hidden-sm hidden-md hidden-lg fa fa-check"></i> Show content from trusted and real identities only.</p></div></div></div></div><table id=search-results class="table table-hover" infinite-scroll=search(query.term) infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || ids.loading || ids.finished"><tbody><tr ng-if="!query.term || (!ids.loading && !ids.list.length)" ui-sref=identities.create class=search-result-row><td class="gravatar-col align-center"><span style=line-height:46px class="glyphicon glyphicon-plus"></span></td><td><a ui-sref=identities.create>Add entry</a></td></tr><tr ng-repeat="result in ids.list" id=result{{$index}} ng-hide=!result.linkTo ui-sref="identities.show({ type: result.linkTo.name, value: result.linkTo.val })" class=search-result-row ng-class="{active: result.active}"><td class=gravatar-col><identicon identity=result border=3 width=50 positive-score=result.pos negative-score=result.neg></identicon></td><td><span ng-if="result.trustDistance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="result.trustDistance > 0" ng-bind="result.trustDistance | ordinal" class="label label-default pull-right"></span> <a ng-bind-html=(result.mostVerifiedAttributes.name.attribute.val||result.mostVerifiedAttributes.nickname.attribute.val||result.data.attrs[0].val)|highlight:query.term ui-sref="identities.show({ type: result.linkTo.name, value: result.linkTo.val })"></a> <small ng-if=!(result.mostVerifiedAttributes.name||result.mostVerifiedAttributes.nickname) class=list-group-item-text><span ng-bind-html=result.data.attrs[0].name|highlight:query.term></span></small><br><small><span ng-if="result.mostVerifiedAttributes.nickname && result.mostVerifiedAttributes.name && result.mostVerifiedAttributes.name.attribute.val != result.mostVerifiedAttributes.nickname.attribute.val" ng-bind-html=result.mostVerifiedAttributes.nickname.attribute.val|highlight:query.term class=mar-right10></span> <span ng-if=result.profile.email class=mar-right10><span class="glyphicon glyphicon-envelope"></span> <span ng-bind-html=result.profile.email|highlight:query.term></span> </span><span ng-if=result.profile.facebook class=mar-right10><span class="fa fa-facebook"></span> <span ng-bind-html=result.profile.facebook|highlight:query.term></span> </span><span ng-if=result.profile.twitter class=mar-right10><span class="fa fa-twitter"></span> <span ng-bind-html=result.profile.twitter|highlight:query.term></span> </span><span ng-if=result.profile.googlePlus class=mar-right10><span class="fa fa-google-plus"></span> <span ng-bind-html=result.profile.googlePlus|highlight:query.term></span> </span><span ng-if=result.mostVerifiedAttributes.bitcoin class=mar-right10><span class="fa fa-bitcoin"></span> <span ng-bind-html=result.mostVerifiedAttributes.bitcoin.attribute.val|highlight:query.term></span></span></small></td></tr></tbody></table><div class="alert alert-info text-center" ng-if="apiReady && !ids.loading && !ids.list.length">No results</div></section></div>');
$templateCache.put('app/identities/show.html','<section class=cover-container><div class=cover parallax-background parallax-ratio=-0.2 ng-style=coverPhoto></div><div class="container hidden-xs hidden-sm"><div class="heading-row row"><div class="col-md-8 col-md-offset-3"><h4><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></h4></div></div><div class=row><div class="col-md-9 col-md-offset-3"><ul class="list-inline tab-list"><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 0 }" ng-click=activateTab(0)><span class=hidden-xs>Received </span>({{0+stats.received_positive+stats.received_neutral+stats.received_negative || received.length}})</a></li><li ng-if=isUniqueType><a href="" ng-class="{ active: activeTab == 1 }" ng-click=activateTab(1)><span class=hidden-xs>Sent </span>({{0+stats.sent_positive+stats.sent_neutral+stats.sent_negative || sent.length}})</a></li><li><a href="" ng-class="{ active: activeTab == 2 }" ng-click=activateTab(2)><span class=hidden-xs>Identity </span>(<span ng-bind="connectionsLength || 0"></span>)</a></li></ul></div></div></div></section><div class=container><div><section><div class=row><div class="col-md-3 id-left-column"><div ng-if=isUniqueType><div><p class="hidden-md hidden-lg" ng-hide=!stats.name><span ng-bind=idValue id=id-value></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a></small></p><div class=stats-box><div class=row><div class=col-xs-12><p class=align-center><identicon identity=identityProfile border=4 show-distance=0 width=230></identicon><!-- <a ng-href="" class="circle {{profileImageCircleClass}}">\n                    <span class="arc"></span>\n                    <img ng-src="{{profilePhotoUrl}}" width="230" height="230" class="profile-image mar-right5">\n                  </a> --></p></div></div><div class=row><div class=col-xs-12><h4><span class="visible-xs visible-sm" ng-if=!(identityProfile.mostVerifiedAttributes.name||identityProfile.mostVerifiedAttributes.nickname)><span ng-bind=idValue></span> <small class=text-muted><span ng-hide="idType === \'url\'" ng-bind=idType id=id-type></span> <a ng-href={{idValue}} ng-show="idType === \'url\'" ng-bind=idType id=id-type></a> </small></span><span ng-bind=identityProfile.mostVerifiedAttributes.name.attribute.val||identityProfile.mostVerifiedAttributes.nickname.attribute.val></span> <span ng-hide="!identityProfile.mostVerifiedAttributes.nickname || !identityProfile.mostVerifiedAttributes.name || identityProfile.mostVerifiedAttributes.nickname.attribute.val === identityProfile.mostVerifiedAttributes.name.attribute.val">(<span class=text-muted ng-bind=identityProfile.mostVerifiedAttributes.nickname.attribute.val></span>) </span><span ng-if="distance == 0" class="label label-default pull-right">viewpoint</span> <span ng-if="distance > 0" ng-bind="distance | ordinal" class="label label-default pull-right"></span></h4></div></div><div class=row><div class="col-xs-12 col-sm-6 col-md-12 mar-bot10 mar-top10"><p><b>Received: <span ng-if="stats.received_positive || stats.received_negative"><span ng-bind="stats.received_positive / (stats.received_positive+stats.received_neutral+stats.received_negative) * 100 | number:0"></span>% positive </span><span ng-if="!(stats.received_positive || stats.received_negative)">&mdash; </span></b><span ng-if="stats.sent_positive || stats.sent_negative"><br>Sent: <span ng-if="stats.sent_positive || stats.sent_negative"><span ng-bind="stats.sent_positive / (stats.sent_positive+stats.sent_neutral+stats.sent_negative) * 100 | number:0"></span>% positive </span><span ng-if="!(stats.sent_positive || stats.sent_negative )">&mdash;</span></span></p><!--\n                <p class="received-stats">\n                  <div><strong>Received</strong></div>\n                  <div>\n                    <strong>\n                      <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="stats.received_positive">-</span></span>\n                      <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="stats.received_neutral">-</span></span>\n                      <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="stats.received_negative">-</span></span>\n                    </strong>\n                  </div>\n                </p>\n                <p>\n                  <div>Sent</div>\n                  <div>\n                    <span class="positive"><span class="glyphicon glyphicon-thumbs-up"></span> <span ng-bind="stats.sent_positive">-</span></span>\n                    <span class="neutral"><span class="glyphicon glyphicon-question-sign"></span> <span ng-bind="stats.sent_neutral">-</span></span>\n                    <span class="negative"><span class="glyphicon glyphicon-thumbs-down"></span> <span ng-bind="stats.sent_negative">-</span></span>\n                  </div>\n                </p> --><div ng-if=isUniqueType class="mar-top10 quick-contact"><ul class=list-unstyled><li ng-repeat="id in connections" ng-if=id.quickContact><a ng-href={{id.link}}><span ng-class=id.iconStyle></span><span ng-bind="id.linkName || id.val"></span></a></li><li><span class="fa fa-calendar"></span>First seen: <span ng-if=stats.first_seen ng-bind="stats.first_seen|date:\'mediumDate\'"></span> <span ng-if=!stats.first_seen>&mdash;</span></li></ul></div></div><div class="col-xs-12 col-sm-6 col-md-12 mar-top10"><div ng-if="isUniqueType && thumbsUp.length > 0" class="stats-box mar-bot10"><h5>Thumbs up</h5><a ng-repeat="msg in thumbsUp" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon identity=msg.author class=no-glow border=3 width=60></identicon></a></div><div ng-if="isUniqueType && thumbsDown.length > 0" class="stats-box mar-bot10"><h5>Thumbs down</h5><a ng-repeat="msg in thumbsDown" ng-class="{ \'hidden-xs\': $index > 3, \'hidden-sm\': $index > 4 }" class="mar-right5 mar-bot5" ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" uib-tooltip="{{ msg.author_name || msg.linkToAuthor[1] }}"><identicon identity=msg.author class=no-glow border=3 width=60 positive-score=msg.author_pos negative-score=msg.author_neg></identicon></a></div></div></div></div></div></div><div class=hidden-xs ng-include="\'app/messages/distance-selector.partial.html\'"></div></div><div class="col-md-8 id-right-column"><!-- Nav tabs --><uib-tabset active=activeTab><uib-tab ng-if=isUniqueType><uib-tab-heading><span class=hidden-xs>Received ({{0+stats.received_positive+stats.received_neutral+stats.received_negative}})</span> <span class=visible-xs>Recv ({{0+stats.received_positive+stats.received_neutral+stats.received_negative}})</span></uib-tab-heading><div ng-show=authentication.user class="panel panel-default panel-success"><div class=panel-body id=write-feedback><form ng-controller=MessagesController ng-submit="createMessage($event, { type: \'rating\', rating: newMessage.rating, comment: newMessage.comment, recipient: [[idType, idValue]] })"><div class=form-group><textarea name=comment class=form-control id=comment ng-model=newMessage.comment placeholder="Write feedback"></textarea></div><div class=row><div class="col-sm-10 col-xs-12 rating-slider" id=write-msg-slider><rzslider rz-slider-model=newMessage.rating rz-slider-options=slider.options min=-3 max=3 step=1></rzslider><span class="hidden-xs write-msg-icons mar-left5"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span></span></div><div class="col-sm-2 col-xs-12" style=text-align:right><span class="visible-xs pull-left write-msg-icons"><span ng-repeat="i in iconCount(newMessage.rating) track by $index" class="write-msg-icon glyphicon glyphicon-thumbs-up mar-left5" ng-class="[iconStyle(newMessage.rating), iconClass(newMessage.rating)]"></span> </span><button type=submit class="pull-right ladda-button btn btn-primary" data-style=zoom-out><span class=ladda-label><span class="fa fa-edit"></span> Publish</span><span class=ladda-spinner></span></button></div></div></form></div></div><div infinite-scroll=getReceivedMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !receivedIndex || received.loading || received.finished ||\xA0activeTab != 0"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+stats.received_positive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+stats.received_neutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+stats.received_negative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=info ng-repeat="msg in received | filter:msgFilter | orderBy:\'-data.timestamp\' as receivedFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="apiReady && !isCurrentUser && !received.loading && receivedFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if="apiReady && isCurrentUser && !received.loading && received.length == 0" class="alert alert-warning text-center"><i class="fa fa-info pull-right"></i><p>You have not received any trust ratings yet.</p><p>You need trust ratings to have your messages saved and displayed by others.</p><p>You can also ask someone to verify that {{idType}}:{{idValue}} belongs to your already trusted identity.</p></div><div ng-if=received.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=isUniqueType><uib-tab-heading>Sent ({{0+stats.sent_positive+stats.sent_neutral+stats.sent_negative}})</uib-tab-heading><div infinite-scroll=getSentMsgs() infinite-scroll-listen-for-event=msgScrollCheck infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || !sentIndex || sent.loading || sent.finished ||\xA0activeTab != 1"><div class=panel><div class=filters><ul class="nav nav-pills msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a>All</a></li><li ng-class="{active: (filters.type === \'rating\'), hidden: true }" ng-click="setFilters({type: \'rating\'})"><a><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span>Rating</a></li><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="visible-xs-inline glyphicon glyphicon-thumbs-up"></span><span class=hidden-xs>Pos<span class=hidden-md>itive</span></span> ({{0+stats.sent_positive}})</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="visible-xs-inline glyphicon glyphicon-question-sign"></span><span class=hidden-xs>Neut<span class=hidden-md>ral</span></span> ({{0+stats.sent_neutral}})</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="visible-xs-inline glyphicon glyphicon-thumbs-down"></span><span class=hidden-xs>Neg<span class=hidden-md>ative</span></span> ({{0+stats.sent_negative}})</span></a></li><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="visible-xs-inline glyphicon glyphicon-ok"></span><span class=hidden-xs>Verification</span></a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul></div></div><message msg-data=msg page-info=info ng-repeat="msg in sent | filter:msgFilter | orderBy:\'-data.timestamp\' as sentFiltered" ng-click="openMessage($event, msg, \'lg\')"></message></div><div ng-if="!sent.loading && sentFiltered.length == 0" class="alert alert-info text-center">No messages to show</div><div ng-if=sent.loading style=position:relative;padding:20px us-spinner></div></uib-tab><uib-tab ng-if=true><uib-tab-heading>Id<span class=hidden-xs>entity</span> (<span ng-show="connections.$resolved && connectionsLength > 0" ng-bind="connectionsLength - 1"></span><span ng-hide=connections.$resolved></span>)</uib-tab-heading><div id=connections><!-- <input id="authenticity_token" name="authenticity_token" type="hidden" value="z1JM7ffnFK7gOv6S3yzG9UFyakukYHikAU94/3TcT2o="> --><table class="table truncated-table table-hover"><tbody><tr ng-repeat-start="id in connections" style={{id.rowStyle}} ng-class=id.rowClass ng-click="!id.isCurrent && connectionClicked($event, id)" class=id-row><td><div class="visible-xs mar-bot5"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><div><a style=min-width:45px class="pull-left btn btn-lg btn-social-icon mar-right15" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span> <span ng-if=id.iconStyle&&!id.link class="pull-left btn btn-lg btn-social-icon" ng-class=id.btnStyle ng-href={{id.link}}><span ng-class=id.iconStyle></span></span></a><div class="hidden-xs pull-left"><a ui-sref="identities.show({ type: id.name, value: id.val })" ng-bind="id.linkName || id.val" class=id-link></a><br><small ng-bind=id.name></small></div><!--\n                              <input class="form-control linkedComment" type="text" placeholder="comment" disabled>\n                            --><div class=pull-right ng-if=!id.isCurrent><button autocomplete=off name=confirm class="ladda-button btn btn-default btn-confirm" ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Verify data-style=zoom-out><span class="positive glyphicon glyphicon-ok"></span> {{id.conf}}</button> <button autocomplete=off name=unverify class="ladda-button btn btn-default btn-unverify" ng-click="createMessage($event, { type: \'unverify_identity\', recipient: [[idType, idValue], [id.name, id.val]] }, id)" ng-disabled=!authentication.user uib-tooltip=Unverify data-style=zoom-out><span class="negative glyphicon glyphicon-remove"></span> {{id.ref}}</button></div><div class=clear></div></div></td></tr><tr ng-repeat-end ng-if=!id.isCurrent class="active connectingmsgs"><td class="connectingmsgs ladda-button" data-style=zoom-in data-spinner-color=#000><div uib-collapse=!id.collapse><div ng-repeat="msg in id.connecting_msgs" ng-click="openMessage($event, msg, \'lg\')" class=confirmation-panel><span ng-if="msg.data.type === \'verify_identity\'"><span class="positive glyphicon glyphicon-ok hidden-xs mar-left5 pull-right"></span> <span class="positive glyphicon glyphicon-ok visible-xs-inline-block mar-right10"></span> </span><span ng-if="msg.data.type === \'unverify_identity\'"><span class="negative glyphicon glyphicon-remove hidden-xs mar-left5 pull-right"></span> <span class="negative glyphicon glyphicon-remove visible-xs-inline-block mar-right10"></span> </span><strong><a ui-sref="identities.show({ type: msg.linkToAuthor[0], value: msg.linkToAuthor[1] })" class=id-link><identicon identity=msg class=mar-right5 border=3 width=30 positive-score=msg.author_pos negative-score=msg.author_neg></identicon><span ng-bind=msg.author_name||msg.data.author[0][1]></span> </a></strong>- <span ng-bind="msg.data.timestamp|date:\'mediumDate\'" class="text-muted small" style=display:inline-block;></span></div></div></td></tr><tr class="active add-row"><td><input id=addValue ng-model=newVerification.value class=form-control name=linkedValue type=text placeholder=value ng-disabled=!authentication.user> <input id=addType ng-model=newVerification.type class=form-control name=linkedType type=text placeholder=type ng-disabled=!authentication.user><!--<td><input id="addComment" class="form-control" name="linkedComment" type="text" placeholder="comment" disabled></td> --> <button autocomplete=off id=addButton ng-click="createMessage($event, { type: \'verify_identity\', recipient: [[idType, idValue], [newVerification.type, newVerification.value]] }, { conf: 0, ref: 0, name: newVerification.type, val: newVerification.value })" class="ladda-button btn btn-default" data-style=zoom-out ng-disabled=!authentication.user><span class=ladda-label><span class="glyphicon glyphicon-plus"></span> Add</span><span class=ladda-spinner></span></button></td></tr></tbody></table></div><div ng-if=!connections.$resolved style=position:relative;padding:20px us-spinner></div></uib-tab></uib-tabset></div></div></section></div></div>');
$templateCache.put('app/main/about.html','<div class=container><div class=col-md-8><h3>About Identifi</h3><p class=lead>Identifi is an address book application that stores its data in a distributed fashion on the BitTorrent-like <a href=https://ipfs.io>IPFS</a> network. The stored information is not owned or centrally administered by anyone.</p><p>In addition to keeping your contact details such as phone number or bitcoin address up-to-date, you can give other users <b>trust ratings and feedback</b>. You can filter all shown information by your <b>web of trust</b>, for example by displaying only the information stored by your friends and the people they trust.</p><p>Identifi is free and open source software. The project is in alpha development stage.</p><ul><li><a href=http://identifi.org>Project page</a></li><li><a href=https://github.com/identifi>Source code</a></li></ul><h4>Available at</h4><ul><li><a href=https://identi.fi>https://identi.fi</a></li><li><a href=https://identifi.github.io/ >https://identifi.github.io/</a></li><li><a href=https://ipfs.io/ipns/identi.fi/ >https://ipfs.io/ipns/identi.fi/</a></li><li><a href=https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/ >https://ipfs.io/ipns/QmaiM39ABfBEkb1ajyZ9ebfJXYgfyDNNbUaVZSwezwwoDQ/</a></li><li><a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome extension</a></li><!-- TODO: add dynamically updated /ipfs url --></ul><p>Also available as a <a href=https://chrome.google.com/webstore/detail/identifi/oelmiikkaikgnmmjaonjlopkmpcahpgh>Chrome plugin</a>.</p><h3>Privacy policy</h3><p>The Identifi network stores user-submitted identifiers which can be of arbitrary type, for example <i>name</i>, <i>email address</i> or <i>phone number</i>. All stored information is made public and broadcast to the <a href=https://ipfs.io>IPFS</a> network.</p></div></div>');
$templateCache.put('app/main/custom-search-row.html','<a class=search-result-row><identicon identity=match.label border=3 width=46></identicon><span ng-bind-html="(match.label.profile.name || match.label.profile.nickname) | uibTypeaheadHighlight:query"></span></a>');
$templateCache.put('app/main/login.modal.html','<div class="col-md-10 col-md-offset-1"><div class="panel panel-default mar-top15"><div class=panel-heading><textarea rows=6 class=form-control placeholder="Enter private key" ng-model=privateKeyPEM></textarea><!--<div class="checkbox">\n        <label>\n          <input type="checkbox" value="" checked="checked">\n          Remember me\n        </label>\n      </div>--> <button class="btn btn-primary" ng-click=generateKey()>Generate new key</button> <button class="btn btn-default pull-right" ng-disabled=!privateKeyPEM ng-click=downloadKey()><i class="fa fa-download"></i> Download key</button> <button class="btn btn-primary" ng-click="loginWithKey(privateKeyPEM, publicKeyPEM)">Log in</button></div></div></div>');
$templateCache.put('app/messages/distance-selector.partial.html','<div class="alert alert-info">Viewing as: <strong ng-if=nodeInfo.profile><a ui-sref="identities.show({ type: \'keyID\', value: nodeInfo.keyID })" class=id-link><span class="distance-container mar-right5 mar-left5"><identicon identity=nodeInfo.profile border=3 width=35 positive-score=nodeInfo.profile.pos negative-score=nodeInfo.profile.neg></identicon></span><span ng-bind=nodeInfo.profile.name></span></a></strong><br class=hidden-sm>Max distance from viewpoint: <span class="btn-group trust-distance-selector"><button type=button class="btn btn-default" ng-click="setFilters({max_distance: -1})" ng-class="{active: filters.max_distance === -1}" uib-tooltip="Distance filter off">\u2715</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 1})" ng-class="{active: filters.max_distance === 1}">1</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 2})" ng-class="{active: filters.max_distance === 2}">2</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 3})" ng-class="{active: filters.max_distance === 3}">3</button> <button type=button class="btn btn-default" ng-click="setFilters({max_distance: 0})" ng-class="{active: filters.max_distance === 0}" uib-tooltip=Unlimited>\u221E</button></span></div>');
$templateCache.put('app/messages/filters.partial.html','<div class="panel panel-default"><div class="panel-heading visible-xs visible-sm" ng-click="collapseFilters = !collapseFilters"><h4 class=panel-title><a><span class="fa fa-filter"></span> Filters</a></h4></div><div class="panel-body filters" uib-collapse=collapseFilters><ul class="nav nav-pills nav-stacked msg-type-filter"><li ng-class="{active: (filters.type === null) }" ng-click="setFilters({ type: null })"><a><span class="glyphicon glyphicon-home"></span> All</a></li><li ng-class="{active: (filters.type === \'rating\') }" ng-click="setFilters({type: \'rating\'})"><a><span class="glyphicon glyphicon-thumbs-up"></span> Rating</a></li><ul class="nav nav-pills nav-stacked" style="padding-left: 1em;"><li ng-class="{active: (filters.type === \'rating:positive\') }" ng-click="setFilters({type: \'rating:positive\'})"><a><span class=positive><span class="glyphicon glyphicon-thumbs-up"></span> Positive</span></a></li><li ng-class="{active: (filters.type === \'rating:neutral\') }" ng-click="setFilters({type: \'rating:neutral\'})"><a><span class=neutral><span class="glyphicon glyphicon-question-sign"></span> Neutral</span></a></li><li ng-class="{active: (filters.type === \'rating:negative\') }" ng-click="setFilters({type: \'rating:negative\'})"><a><span class=negative><span class="glyphicon glyphicon-thumbs-down"></span> Negative</span></a></li></ul><li ng-class="{active: (filters.type === \'verify_identity\') }" ng-click="setFilters({type:\'verify_identity\'})"><a><span class="glyphicon glyphicon-ok"></span> Verification</a></li><!-- <li ><a href="#" data-val="other"><span class="glyphicon glyphicon-question-sign"></span> Other</a></li> --></ul><div ng-include="\'app/messages/distance-selector.partial.html\'"></div></div></div>');
$templateCache.put('app/messages/list.html','<div class=container><section><div id=messages class=row><div class=col-md-4><div ng-include="\'app/messages/filters.partial.html\'"></div></div><div class=col-md-8><div infinite-scroll=find() infinite-scroll-distance=2 infinite-scroll-disabled="!apiReady || msgs.loading || msgs.finished" infinite-scroll-listen-for-event=msgScrollCheck><message ng-repeat="msg in msgs.list | filter:msgFilter" msg-data=msg ng-click="openMessage($event, msg, \'lg\')"></message></div><div us-spinner ng-if=!messages.$resolved style=position:relative;padding:20px></div><div class="alert alert-info text-center" ng-if="!msgs.loading && !msgs.list.length">No messages to show</div></div></div></section></div>');
$templateCache.put('app/messages/show.html','<section ng-init=findOne()><div class="col-md-8 col-md-offset-2 msg-col"><message msg-data=msg page-info=info ng-repeat="msg in [message]"></message><div class="panel panel-info"><div class=panel-heading>Message origin verified by: <a ng-if=false ng-bind=message.signerName||message.signer_keyid ui-sref="identities.show({type: \'keyID\', value: message.signer_keyid })"></a> <strong ng-if=message.verifiedBy><a ui-sref="identities.show({ type: \'keyID\', value: message.signer_keyid })" class=id-link><span class="distance-container mar-right5"><identicon identity=message.verifiedBy border=3 width=35 positive-score=message.verifiedBy.pos negative-score=message.verifiedBy.neg></identicon><span ng-if="message.verifiedBy.dist >= 0" class=distance ng-bind="message.verifiedBy.dist | ordinal"></span> </span><span ng-bind=message.verifiedBy.name></span> <small>{{message.signer_keyid}}</small></a></strong></div></div><p ng-if=message.data.context><small>Context: {{message.data.context}}</small></p><p><button class="btn btn-default" ng-click="collapseRawData = !collapseRawData">Show raw data</button></p><pre uib-collapse=!collapseRawData ng-bind=message.strData></pre></div></section>');
$templateCache.put('app/messages/show.modal.html','<div ng-controller=MessagesController ng-include="\'app/messages/show.html\'"></div>');
$templateCache.put('app/components/message/message.template.html','<div class="panel msg" ng-class="{\'panel-info\':$ctrl.msgData.isVerification}" style={{$ctrl.msgData.bgColor}} ng-if=$ctrl.msgData.data><div class=message-panel ng-class="{ \'panel-body\': !$ctrl.msgData.isVerification, \'panel-heading\': $ctrl.msgData.isVerification || $ctrl.msgData.isUnverification }"><p><span class="mar-left5 pull-right" ng-class=$ctrl.msgData.iconStyle ng-repeat="n in $ctrl.msgData.iconCount track by $index"></span> <span class="mar-left5 pull-right fa fa-refresh" uib-tooltip=Pending ng-if=$ctrl.msgData.local></span> <strong><a ui-sref="identities.show({ type: $ctrl.msgData.linkToAuthor[0], value: $ctrl.msgData.linkToAuthor[1] })" class=id-link><identicon identity=$ctrl.msgData.author border=3 width=35 positive-score=$ctrl.msgData.author_pos negative-score=$ctrl.msgData.author_neg></identicon><span ng-bind="($ctrl.msgData.authorIsSelf && ($ctrl.pageInfo.name || $ctrl.pageInfo.nickname))||$ctrl.msgData.author_name||$ctrl.msgData.linkToAuthor[1]"></span> </a></strong><small><i class="glyphicon glyphicon-play"></i></small> <a ui-sref="identities.show({ type: $ctrl.msgData.linkToRecipient[0], value: $ctrl.msgData.linkToRecipient[1] })" ng-bind="($ctrl.msgData.recipientIsSelf && ($ctrl.pageInfo.name || $ctrl.pageInfo.nickname))||$ctrl.msgData.recipient_name||$ctrl.msgData.linkToRecipient[1]" class=id-link></a> - <a ui-sref="messages.show({ id: ($ctrl.msgData.ipfs_hash || $ctrl.msgData.hash) })" ng-bind="$ctrl.msgData.data.timestamp|date:\'medium\'" class="text-muted small" style=display:inline-block;></a></p><p ng-if="$ctrl.msgData.isVerification || $ctrl.msgData.isUnverification"><small ng-repeat="recipient in $ctrl.msgData.data.recipient">{{recipient[0]}}: <span ng-if="recipient[0] == \'email\' || recipient[0] == \'url\'" ng-bind-html="recipient[1] | linky"></span> <span ng-if="!(recipient[0] == \'email\' || recipient[0] == \'url\')" ng-bind=recipient[1]></span> <i class="fa fa-link" ng-if="!$last && $ctrl.msgData.isVerification"></i> <i class="fa fa-chain-broken" ng-if="!$last && $ctrl.msgData.isUnverification"></i></small></p><p ng-bind-html=$ctrl.msgData.data.comment|linky></p></div></div>');}]);