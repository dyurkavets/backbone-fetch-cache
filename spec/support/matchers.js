(function() {
  function isFunc(object) {
    return typeof object === 'function';
  }

  function supportsAPromiseMethods(object) {
    return (
      isFunc(object.state) &&
      isFunc(object.always) &&
      isFunc(object.then) &&
      isFunc(object.promise) &&
      isFunc(object.pipe) &&
      isFunc(object.done) &&
      isFunc(object.fail) &&
      isFunc(object.progress)
    );
  }

  function supportsAjaxPromiseMethods(object) {
    return (
      isFunc(object.success) &&
      isFunc(object.error) &&
      isFunc(object.complete) &&
      isFunc(object.abort)
    );
  }

  function supportsDeferredMethods(object) {
    return (
      isFunc(object.notify) &&
      isFunc(object.notifyWith) &&
      isFunc(object.reject) &&
      isFunc(object.rejectWith) &&
      isFunc(object.resolve) &&
      isFunc(object.resolveWith)
    );
  }

  beforeEach(function() {
    this.addMatchers({
      toBeAPromise: function(expected) {
        return (
          supportsAPromiseMethods(this.actual) &&
          supportsAjaxPromiseMethods(this.actual) &&
          !supportsDeferredMethods(this.actual)
        );
      },
      toBeResolved: function(expected) {
        return this.actual.state() === 'resolved';
      },
      toBeUnresolved: function(expected) {
        return this.actual.state() === 'pending';
      },
      toBeRejected: function(expected) {
        return this.actual.state() === 'rejected';
      }
    });
  });
})();
