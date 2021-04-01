import React, {FormEvent, useState} from "react";
import {useTypedSelector} from "../../app/hooks/useTypedSelector";
import {useRepositoriesActions} from "./useRepositoriesActions";
import {selectRepositories} from "./repositoriesSlice";

const RepositoryList: React.FC = () => {
    const [term, setTerm] = useState<string>('');
    const {data, error, loading} = useTypedSelector(selectRepositories)
    const {fetchRepositories} = useRepositoriesActions()

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetchRepositories(term);
    };

    console.log({data, error, loading})

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={term} onChange={e => setTerm(e.target.value)}/>
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading...</h3>}
            {!error && !loading &&
                data.map(name=><div key={name}>{name}</div>)
            }
        </div>
    )
};

export default RepositoryList
