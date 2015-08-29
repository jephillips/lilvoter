/**
 * Created by josh on 8/24/15.
 */

export default angular => {
    angular.module('app.model.poll', [])
        .factory('Poll', function () {
            function Poll(title, choices) {
                var poll = this;

                poll.title = title;
                poll.choices = choices;
                poll.createdAt = new Date();
            }
            return Poll;
        });
}