import React from 'react';
import { Link } from "gatsby"
import { Tag, Icon } from 'antd';

const myTag = ({ date, label }) => {

  return (
    <div>
      <small>
        <Icon type="calendar" style={{ marginRight: 5 }} />
        {date}
      </small>
      <small>
        <Icon type="tags-o" style={{ marginLeft: 10 }} />
        <Link
          style={{ marginLeft: 3, cursor: 'pointer', boxShadow: 'none' }} to={`/Label/${label}`}>
          <Tag color={`#f50`} style={{ cursor: 'pointer' }}>{label}</Tag>
        </Link>
      </small>
    </div>
  )
}

export default myTag