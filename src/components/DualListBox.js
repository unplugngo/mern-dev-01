class Widget extends React.Component {
    state = {
        selected: ['one'],
    };
 
    onChange = (selected) => {
        this.setState({ selected });
    };
 
    render() {
        const { selected } = this.state;
 
        return (
            <DualListBox
                options={options}
                selected={selected}
                onChange={this.onChange}
            />
        );
    }
}