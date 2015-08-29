/**
 * Created by josh on 8/27/15.
 *
 * This is the handler for all the bundling of dependencies that WebPack uses
 */

export default(ngModule, angular) => {
    require('./pollManager/pollManager')(angular);
    require('./common/models/Poll')(angular);
    require('./common/services/pollService')(angular);
    require('./vote/vote')(angular);
    require('./pollCreator/pollCreator')(angular);
}