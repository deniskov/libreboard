Template.addCardForm.helpers({});

Template.cardMembersPop.helpers({
    isCardMember: function() {
        var cardId = Template.parentData().cardId;
        var cardMembers = Cards.findOne(cardId).members || [];
        return _.contains(cardMembers, this.userId);
    },
    user: function() {
        return Users.findOne(this.userId);
    }
});

Template.cardLabelsPop.helpers({
    isLabelSelected: function(cardId) {
        return _.contains(Cards.findOne(cardId).labelIds, this._id);
    }
});

Template.editLabelPop.helpers({
    labels: function() {
        var colors = ['green', 'yellow', 'orange', 'red', 'purple', 'blue',
        'sky', 'lime', 'pink', 'black'];
        return _.map(colors, function(color) {
            return { color: color, name: '' };
        });
    }
});
