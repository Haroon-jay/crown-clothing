import React,{useState} from 'react'
import MenuItem from '../menu-item/menu-item.component'
import "./directory.scss"
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory.selector'
import { createStructuredSelector } from 'reselect'
const Directory = ({sections}) => {
  
    return (
        <div className="directory-menu"> 
            {sections.map(({id,...otherSectionProps})=>(
           <MenuItem {...otherSectionProps}  key={id} />
            ))}
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
  sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory)
