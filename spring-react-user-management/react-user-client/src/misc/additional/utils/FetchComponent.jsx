import { BaseComponent } from './BaseComponent.jsx';

export class FetchComponent extends BaseComponent {

    fetchAllUsers = (state) => {
        fetch(this._links.getAll)
            .then(resp => resp.json())
            .then(r => this.setState({[state]: r})) // GET ALL Users Fetch
    }

}