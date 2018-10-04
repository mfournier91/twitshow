const React = require('react')

class NewTweet extends React.Component {
  render() {
    return (
      <div>
        <h3 className="center">Compose new Tweet</h3>
        <form className="new-tweet">
          <textarea className="textarea" placeholder="What's happening" maxlength="280"></textarea>
          <button class="btn" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default NewTweet