import React from "react";

class Googlepro extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      allTheseWords:'',
      exactWords:'', 
      anyTheseWords:'', 
      noneTheseWords:'',
      rangeFrom:'',
      rangeTo:'',
      exactWebsite:''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    let { allTheseWords, exactWords, anyTheseWords, noneTheseWords, rangeFrom, rangeTo, exactWebsite } = this.state
  
    let allTheseWordsFmtd = this.replaceSpace(allTheseWords)
    let exactWordsFmtd = this.replaceSpace(exactWords)
    let anyTheseWordsFmtd = this.replaceSpace(anyTheseWords)
    let noneTheseWordsFmtd = this.replaceSpace(noneTheseWords)
    let rangeFromFmtd = this.replaceSpace(rangeFrom)
    let rangeToFmtd = this.replaceSpace(rangeTo)
    let exactWebsiteFmtd = this.replaceSpace(exactWebsite)

    // TODO: need to format the inputs. maybe just replace the spaces with plus sign

    window.open(`
      https://www.google.com.ph/search?as_q=${allTheseWordsFmtd}&as_epq=${exactWordsFmtd}&as_oq=${anyTheseWordsFmtd}&as_eq=${noneTheseWordsFmtd}&as_nlo=${rangeFromFmtd}&as_nhi=${rangeToFmtd}&as_sitesearch=${exactWebsiteFmtd}&as_occt=any&safe=images&as_qdr=all`,
      '_blank');

  }

  handleChange(event){
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name] : event.target.value
    })
  }

  replaceSpace = function(input) {
    console.log(`doing a replace ${input}`)
    if (input.length > 0) {
      input = input.replace(" ","+")
      return input
    } else {
      return ""
    }
  }

  render() {
    return (
      <div className="contact">
        <div className="container">
          <div class="row align-items-center my-5">
            <div class="w-100 p-3 col-lg-5">
              <form onSubmit={this.handleSubmit}>
                <label htmlFor="all_these_words">
                  all these words: &nbsp;
                </label>
                <input type="text" 
                    name="allTheseWords"
                      value={this.state.allTheseWords} 
                      onChange={this.handleChange} 
                />

                <label>
                  exact word or phrase: &nbsp;
                  <input type="text" 
                    name="exactWords"
                      value={this.state.exactWords} 
                      onChange={this.handleChange} 
                  />
                </label>
                <label>
                  any of these words: &nbsp;
                  <input type="text" 
                    name="anyTheseWords"
                      value={this.state.anyTheseWords} 
                      onChange={this.handleChange} 
                  />
                </label>
                <label>
                  none of these words: &nbsp;
                  <input type="text" 
                    name="noneTheseWords"
                      value={this.state.noneTheseWords} 
                      onChange={this.handleChange} 
                  />
                </label>
                <label>
                  number range from: &nbsp;
                  <input type="text" 
                    name="rangeFrom"
                      value={this.state.rangeFrom} 
                      onChange={this.handleChange} 
                  />
                </label>
                <label>
                  number range to: &nbsp;
                  <input type="text" 
                    name="rangeTo"
                      value={this.state.rangeTo} 
                      onChange={this.handleChange} 
                  />
                </label>
                <label>
                  exact website: &nbsp;
                  <input type="text" 
                    name="exactWebsite"
                      value={this.state.exactWebsite} 
                      onChange={this.handleChange} 
                  />
                </label>
                <br />
                <input type="submit" value="Search!" />
              </form>
            </div>
          </div>
          </div>
      </div>
    );
  }
}

export default Googlepro;