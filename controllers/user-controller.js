const { User, Thought } = require('../models');

const userController = {
    
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this userId' });
            return;
        }
        // remove userId from friendId's friend list
        User.findOneAndUpdate(
            { _id: params.friendId },
            { $pull: { friends: params.userId } },
            { new: true, runValidators: true }
        )
        .then(dbUserData2 => {
            if(!dbUserData2) {
                res.status(404).json({ message: 'No user found with this friendId' })
                return;
            }
            res.json({message: 'Successfully deleted the friend'});
        })
        .catch(err => res.json(err));
    })
    .catch(err => res.json(err));
}
}

    module.exports = userController;
