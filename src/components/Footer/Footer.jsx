import React from 'react'
import * as F from './Footer.style'
export default function Footer() {
  return (
    <F.Footer>
      <div className="container">
        <F.Footer1>
          <div>© 2021 Shopee. Tất cả các quyền được bảo lưu</div>
          <F.Language>
            Ngôn Ngữ
            <span>Tiếng Anh</span>
            <span>Tiếng Việt</span>
          </F.Language>
        </F.Footer1>
        <F.Footer2>
          <div>Công ty TNHH Shopee</div>
          <div>
            Tầng 28, Tòa nhà trung tâm Lotte Hà Nội, 54 Liễu Giai, phường Cống Vị, Quận Ba Đình, Hà Nội. Tổng đài hỗ
            trợ: 19001221 - Email: cskh@hotro.shopee.vn
          </div>
          <div>Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)</div>
          <div>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</div>
          <div>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
        </F.Footer2>
      </div>
    </F.Footer>
  )
}
