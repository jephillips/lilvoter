/**
 * Created by josh on 8/24/15.
 */

export default angular => {
    angular.module('app.model.poll', [])
        .factory('Poll', function () {
            function Poll(title) {
                var poll = this;
                poll.title = title;
            }

            return Poll;
        });
}