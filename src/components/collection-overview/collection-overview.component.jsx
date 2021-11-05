import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import { selectCollections } from '../../redux/shop/shop.selectors';


const CollectionsOverview = (props) => {
  console.log('props:' + props);
  //console.log(collections);
return (
    <div>
      {
        <h1>collections</h1>
      //collections.map(({ id, ...otherCollectionProps }) => (
       // <CollectionPreview key={id} {...otherCollectionProps} />
      //))
      }
    </div>
  ); 
      } 

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
