import React from 'react';
import { Link } from "gatsby"
import { Tag, Icon } from 'antd';

const myTag = ({ date, label }) => {


  const a = Math.random();
  return (
    <div>
      <small>
        <Icon type="calendar" style={{ marginRight: 5 }} />
        {date}
      </small>
      {label.map((item) => {
        return (
          <small key={item + a}>
            <Icon type="tags-o" style={{ marginLeft: 10 }} />
            <Link
              style={{ marginLeft: 3, cursor: 'pointer', boxShadow: 'none' }} to={`/Label/${item}`}>
              <Tag color={`#f50`} style={{ cursor: 'pointer' }}>{item}</Tag>
            </Link>
          </small>
        )
      })}

    </div>
  )
}

export default myTag