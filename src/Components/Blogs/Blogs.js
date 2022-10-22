import React from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const reactRouter = 'eactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any route  inside the router file, the user will be redirected to that particular route.'
    const contextApiAns = 'React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it\'s names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.';
    const useRefAns = 'useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.'
    return (
        <div className='my-8'>
            <h3 className='text-4xl text-teal-400 text-center mt-28'>Welcome to Blogs Page</h3>
            <Blog question="what is the perpuse of react router" ans={reactRouter}></Blog>
            <Blog question="How Does Context Api work?" ans={contextApiAns}></Blog>
            <Blog question="what is useRef ? How Does work it ?" ans={useRefAns}></Blog>
        </div>
    );
};

export default Blogs;