Meteor.methods({
  UpdateMessages() {
    Messages.upsert('Messages', { $set: { time: new Date() } })
  },
})