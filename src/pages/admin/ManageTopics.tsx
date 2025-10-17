import React from "react";

export default function ManageTopics() {
  return (
    <div>
      <h2>Quản lý danh sách chủ đề</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tên chủ đề</th>
            <th>Số bài viết</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Công nghệ</td>
            <td>10</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Giải trí</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
