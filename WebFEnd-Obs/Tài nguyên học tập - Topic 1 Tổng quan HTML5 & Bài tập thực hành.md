---
title: "Giáo Trình & Tài Liệu Học Tập: Topic 1 — Tổng Quan Web, Kiến Trúc Front-End & Thực Hành HTML5 Toàn Diện"
course_code: "SW306DV01"
aliases:
  - "Tài nguyên học tập - Topic 1 Tổng quan HTML5 & Bài tập thực hành"
  - "Tài liệu học tập Topic 1"
  - "HTML5 Fundamentals & Practice Lab 1"
  - "Giao trinh Web Front-End Topic 1"
tags:
  - web-front-end
  - topic-1
  - html-css
  - html5
  - semantic-web
  - web-forms
  - bai-tap-thuc-hanh
  - hoa-sen
  - obsidian
created: 2026-09-15
updated: 2026-09-15
related:
  - "[[Tổng quan về môn học]]"
---

# 🌐 Giáo Trình & Tài Liệu Học Tập: Topic 1 — Tổng Quan Web, Kiến Trúc Front-End & Thực Hành HTML5 Toàn Diện
## Môn học: Phát Triển Web Front-End (Front-End Web Development) — Mã học phần: `SW306DV01`

> [!NOTE] **Thông tin định danh tài liệu**
> - **Nguồn tài nguyên đối chiếu:** 
>   1. Bộ slide bài giảng chính thức: `1_TongQuan_HTML_1.pdf` (Đại học Hoa Sen - Khoa CNTT).
>   2. Bộ đề bài tập thực hành: `1_BT_HTML.pdf` (Bao gồm trọn vẹn 8 bài tập từ định dạng, công thức, forms đến layout).
> - **Thư mục bài tập thực hành máy tính đi kèm:** `Topic 1/Bài tập/` (chứa các file `.html` chạy trực tiếp trên trình duyệt).
> - **Mục tiêu:** Cung cấp cuốn cẩm nang học tập hoàn chỉnh, chuẩn mực, đào sâu cả lý thuyết cốt lõi lẫn mã nguồn thực thi để học tập và ôn tập trực tiếp trên **Obsidian**.

---

## 📑 Mục lục điều hướng nhanh

1. [[#Chương 1: Tổng quan Kiến trúc Web Front-End (The Three Pillars of Web Front-End)]]
   - 1.1. Khái niệm cốt lõi & Ba trụ cột nền tảng
   - 1.2. Mối quan hệ tương hỗ: HTML vs. CSS vs. JavaScript
   - 1.3. Mô hình dòng xử lý của trình duyệt (Browser Rendering Pipeline)
2. [[#Chương 2: Lịch sử & Tiến trình Chuẩn hóa Web (Web Standards Roadmap)]]
   - 2.1. Niên biểu phát triển (Từ HTML 1.0 đến HTML5 & Living Standard)
   - 2.2. Vai trò của W3C và WHATWG
   - 2.3. Cuộc cách mạng HTML5: Sự chuyển dịch tư duy kiến trúc web
3. [[#Chương 3: Cấu trúc Nền tảng của Tài liệu HTML5 & Thẻ cơ bản]]
   - 3.1. Bản chất ngôn ngữ HTML (HyperText Markup Language)
   - 3.2. Cấu trúc khung chuẩn của một file HTML5 (`<!DOCTYPE html>`, `head`, `body`)
   - 3.3. Khai báo bảng mã ký tự (`meta charset`) và tối ưu hiển thị
   - 3.4. Nhúng tài nguyên ngoại vi: Thẻ `<link>` và thẻ `<script>`
   - 3.5. Phân biệt phần tử chứa nội dung và phần tử rỗng (Void Elements)
4. [[#Chương 4: Hệ thống Semantic Elements trong HTML5 (Chuẩn ngữ nghĩa)]]
   - 4.1. Vấn đề của "Div Soup" trong HTML4 và sự ra đời của Semantic Web
   - 4.2. Bảng tra cứu các thẻ ngữ nghĩa cấu trúc chính (`header`, `nav`, `section`, `article`, `aside`, `footer`)
   - 4.3. Các thẻ ngữ nghĩa bổ trợ: `<figure>`, `<figcaption>`, `<dialog>`
   - 4.4. Sơ đồ tư duy so sánh bố cục tài liệu chuẩn HTML5
5. [[#Chương 5: Hệ thống Thuộc tính (Attributes) & Custom Data Attributes]]
   - 5.1. Quy tắc cốt lõi khi sử dụng thuộc tính HTML
   - 5.2. Bảng tổng hợp các thuộc tính toàn cục (Global Attributes)
   - 5.3. Thuộc tính dữ liệu tùy biến (Custom Attributes: `data-*`)
6. [[#Chương 6: Hệ thống Sự kiện trong HTML5 (Events Handling)]]
   - 6.1. Sự kiện cửa sổ và tương tác phần tử (`onblur`, `onchange`, `onclick`,...)
   - 6.2. Cơ chế Kéo & Thả (Drag and Drop Events Lifecycle)
7. [[#Chương 7: Biểu mẫu Web thế hệ mới (HTML5 Web Forms 2.0)]]
   - 7.1. Sự phát triển từ Forms trong HTML4 sang Forms 2.0
   - 7.2. Danh mục 13 kiểu nhập liệu (`<input type="...">`) trong HTML5
   - 7.3. Các thuộc tính kiểm soát và nâng cao trải nghiệm (UX & Validation)
   - 7.4. Thẻ hiển thị kết quả `<output>`
8. [[#Chương 8: Các Công nghệ & Tính năng Mở rộng của HTML5]]
   - 8.1. Đa phương tiện thuần (Audio & Video không cần plugin)
   - 8.2. Đồ họa Canvas 2D
   - 8.3. Truyền thông thời gian thực: WebSockets & Server-Sent Events (SSE)
   - 8.4. Lưu trữ cục bộ (Web Storage: `localStorage`, `sessionStorage`)
   - 8.5. Geolocation API và Microdata (Google Rich Snippets)
9. [[#Chương 9: Hướng dẫn Chi tiết & Lời giải Chuẩn 8 Bài Tập Thực Hành (1_BT_HTML)]]
   - 9.1. Bài 1: Định dạng văn bản đặc biệt, công thức hóa học/vật lý & Thẻ liên hệ `<address>`
   - 9.2. Bài 2: Danh sách To Do gạch ngang/gạch chân, input chọn tuần & Khung cuộn
   - 9.3. Bài 3: Bảng điều khiển Form HTML5 đầy đủ 13 loại input
   - 9.4. Bài 4: Dropdown xe hơi nhóm bằng `<optgroup>`, Listbox chọn nhiều, Fieldset & Legend
   - 9.5. Bài 5: Biểu mẫu đặt hàng & giao hàng có kiểm soát tính hợp lệ (Order Form Validation)
   - 9.6. Bài 6: Biểu mẫu phản hồi / liên hệ quảng cáo với các trường bắt buộc (*)
   - 9.7. Bài 7: Form liên hệ phong cách hiện đại với thanh tiêu đề Teal
   - 9.8. Bài 8: Thiết kế layout trang web hoàn chỉnh chuẩn HTML5 Semantic (Tutorial Republic)
10. [[#Chương 10: Checklist Đánh Giá Nghiệm Thu & Lộ Trình Tự Học]]

---

## Chương 1: Tổng quan Kiến trúc Web Front-End (The Three Pillars of Web Front-End)

*(Nội dung trọng tâm rút trích từ Slide trang 1 – 3 của bài giảng `1_TongQuan_HTML_1.pdf`)*

### 1.1. Khái niệm cốt lõi & Ba trụ cột nền tảng

Trong kỹ nghệ phát triển phần mềm giao diện người dùng (*Front-End Engineering*), một trang web hiện đại không chỉ là một tài liệu tĩnh mà là một ứng dụng phần mềm chạy trực tiếp trên máy khách (*Client-side Application*). Kiến trúc này được nâng đỡ bởi 3 trụ cột độc lập nhưng gắn kết chặt chẽ:

```
+-----------------------------------------------------------------------------------+
|                           BA TRỤ CỘT CỦA WEB FRONT-END                            |
+--------------------------+----------------------------+---------------------------+
|          HTML            |            CSS             |        JAVASCRIPT         |
|         (HTML5)          |           (CSS3)           |           (ES6+)          |
+--------------------------+----------------------------+---------------------------+
| • CONTENT (Nội dung)     | • STYLE (Phong cách)       | • BEHAVIORAL (Hành vi)    |
| • STRUCTURAL (Cấu trúc)  | • PRESENTATIONAL (Trình bày)| • INTERACTIVE (Tương tác) |
+--------------------------+----------------------------+---------------------------+
```

1. **HTML (HyperText Markup Language):**
   - **Nhiệm vụ:** Đóng vai trò là **Bộ xương (Skeleton)** và **Nội dung (Content)** của trang web.
   - HTML xác định các thực thể thông tin: đoạn văn nào là tiêu đề, đoạn nào là thân bài, danh sách các mục, hình ảnh, bảng dữ liệu, và các trường biểu mẫu tiếp nhận dữ liệu từ người dùng.
   - HTML thuần túy không quan tâm đến việc nội dung đó hiển thị màu gì, vị trí tọa độ nào trên màn hình.

2. **CSS (Cascading Style Sheets):**
   - **Nhiệm vụ:** Đóng vai trò là **Lớp da và trang phục (Skin & Presentation)** của trang web.
   - CSS định nghĩa quy tắc hiển thị thị giác: màu sắc, phông chữ, khoảng cách đệm (*padding/margin*), hệ thống lưới (*Grid*), bố cục co giãn (*Flexbox*), chuyển động (*Animation*) và độ tương thích với các kích thước màn hình khác nhau (*Responsive Web Design*).

3. **JS (JavaScript):**
   - **Nhiệm vụ:** Đóng vai trò là **Hệ thần kinh và cơ bắp (Muscles & Logic)** của trang web.
   - JavaScript xử lý các hành vi động: tương tác khi nhấp chuột, kiểm tra tính hợp lệ của dữ liệu trước khi gửi, gọi API bất đồng bộ (*AJAX / Fetch*), cập nhật cây DOM mà không cần tải lại toàn bộ trang (*Single Page Application - SPA*).

---

### 1.2. Mối quan hệ tương hỗ: HTML vs. CSS vs. JavaScript

Một nguyên lý tối quan trọng trong lập trình web chuyên nghiệp là **Sự phân tách mối quan tâm (Separation of Concerns - SoC)**:
- **Tách biệt cấu trúc khỏi giao diện:** Không sử dụng các thuộc tính định kiểu cũ trong thẻ HTML (như `align`, `bgcolor`, `font`, `valign`). Toàn bộ việc trang trí phải giao cho CSS đảm nhận thông qua các bộ chọn (*Selectors*) và các tệp `.css` độc lập.
- **Tách biệt cấu trúc khỏi hành vi:** Hạn chế viết trực tiếp mã JavaScript vào các thuộc tính sự kiện inline trong thẻ HTML (như `onclick="alert('Hi')"`). Thay vào đó, sử dụng các hàm lắng nghe sự kiện (`addEventListener`) trong tệp `.js` rời.

---

### 1.3. Mô hình dòng xử lý của trình duyệt (Browser Rendering Pipeline)

Khi người dùng nhập một URL và tải một trang web, trình duyệt thực hiện tuần tự các bước sau:

```
[HTML Code] --------> [HTML Parser] --------> [DOM Tree]
                                                  |
                                                  v
[CSS Code]  --------> [CSS Parser]  --------> [CSSOM Tree]
                                                  |
                                                  +-------> [Render Tree]
                                                                 |
                                                                 v
                                                            [Layout (Reflow)]
                                                                 |
                                                                 v
                                                            [Paint (Raster)]
                                                                 |
                                                                 v
                                                            [Composite] ---> [Hiển thị màn hình]
```

1. **Xây dựng DOM (Document Object Model):** Trình duyệt đọc các byte dữ liệu HTML, chuyển đổi thành các ký tự, mã thông báo (tokens), các node và dựng thành cây phân cấp DOM Tree.
2. **Xây dựng CSSOM (CSS Object Model):** Đồng thời đọc các file CSS và thẻ `<style>`, phân tích cú pháp và xây dựng cây đối tượng CSSOM Tree.
3. **Render Tree:** Kết hợp cây DOM và cây CSSOM để tạo ra cây dựng hình (*Render Tree*), chỉ chứa các nút hiển thị thực tế (bỏ qua `<head>`, các phần tử có `display: none`).
4. **Layout (Reflow):** Tính toán kích thước chính xác và vị trí tọa độ từng phần tử trên màn hình thiết bị.
5. **Painting:** Chuyển đổi các hộp hình học thành các pixel thực tế (vẽ chữ, màu nền, viền, bóng, hình ảnh).

---

## Chương 2: Lịch sử & Tiến trình Chuẩn hóa Web (Web Standards Roadmap)

*(Nội dung trọng tâm rút trích từ Slide trang 4 của bài giảng `1_TongQuan_HTML_1.pdf`)*

### 2.1. Niên biểu phát triển (Từ HTML 1.0 đến HTML5 & Living Standard)

| Giai đoạn | Cột mốc HTML | Cột mốc CSS | Cột mốc JavaScript & Web APIs |
| :---: | :--- | :--- | :--- |
| **1991 – 1992** | **HTML 1.0:** Được Tim Berners-Lee công bố; chỉ hỗ trợ các thẻ văn bản cơ bản và liên kết siêu văn bản. | *Chưa xuất hiện* | *Chưa xuất hiện* |
| **1993 – 1994** | **HTML 2.0:** Chuẩn hóa bởi IETF; hỗ trợ thêm biểu mẫu (Form) và bảng cơ bản. | Các đề xuất sơ khởi về định dạng | *Chưa xuất hiện* |
| **1995 – 1996** | **HTML 3.2:** Bổ sung thẻ bảng phức tạp, applet Java. | **1996:** **CSS 1** đạt chuẩn W3C Recommendation. | **1995:** JavaScript (Mocha/LiveScript) ra đời tại Netscape. |
| **1997 – 1998** | **HTML 4.0 / 4.01:** Đạt chuẩn W3C Recommendation; khuyến khích dùng CSS thay vì thẻ định dạng. | **1998:** **CSS 2** đạt chuẩn W3C Recommendation. | Chuẩn hóa **ECMAScript (ECMA-262)**, DOM Level 1. |
| **1999 – 2000** | **XHTML 1.0:** Cố gắng đưa cú pháp khắt khe của XML vào HTML (bắt buộc đóng tất cả các thẻ, chữ thường). | **1999:** Khởi xướng đề xuất **CSS 3**. | **DOM Level 2** hỗ trợ các sự kiện chuột và bàn phím. |
| **2004 – 2006** | **2004:** W3C muốn dừng HTML để phát triển XHTML 2.0 (không tương thích ngược). Các kỹ sư từ Apple, Mozilla, Opera tách ra thành lập **WHATWG** để tiếp tục phát triển HTML thực tiễn. | **2005:** CSS 2.1 W3C Candidate Recommendation. | Bùng nổ trào lưu **Web 2.0**; kỹ thuật **AJAX** ra đời làm thay đổi trải nghiệm web. |
| **2007 – 2008** | **2007:** W3C thừa nhận thất bại của XHTML 2.0 và hợp tác với WHATWG.<br>**2008:** Công bố bản thảo đầu tiên **HTML5 W3C Working Draft**. | Phát triển các module CSS3 (Selectors, Media Queries). | Web APIs phong phú, các thư viện như jQuery phát triển rực rỡ. |
| **2010 – 2014** | **2012:** W3C Candidate Recommendation.<br>**2014:** W3C chính thức phê duyệt chuẩn **HTML5 Recommendation**. | **CSS3** phổ biến với Flexbox, Border-Radius, Box-Shadow, Transitions. | HTML5 APIs (Geolocation, Web Storage, WebSockets, Canvas) được hỗ trợ rộng rãi. |
| **Hiện nay** | **HTML Living Standard:** WHATWG duy trì chuẩn sống liên tục, W3C đồng thuận công nhận. | **CSS Color 4, CSS Grid, Flexbox, Subgrid, CSS Variables**. | **ES6+ (ES2015 – 2026)**, Single Page Applications, Web Components. |

---

### 2.2. Vai trò của W3C và WHATWG

- **W3C (World Wide Web Consortium):** Tổ chức quốc tế do Tim Berners-Lee sáng lập, chịu trách nhiệm thiết lập các tiêu chuẩn mở dài hạn cho Web (HTML, CSS, XML, SVG, WAI-ARIA).
- **WHATWG (Web Hypertext Application Technology Working Group):** Nhóm kỹ sư thực nghiệm từ các hãng trình duyệt hàng đầu. Triết lý của WHATWG là: **Web là một nền tảng ứng dụng sống động (Living Standard)**, liên tục cải tiến dựa trên nhu cầu thực tiễn của lập trình viên và người dùng, chứ không phải một tài liệu đóng băng phiên bản tĩnh.

---

### 2.3. Cuộc cách mạng HTML5: Sự chuyển dịch tư duy kiến trúc web

HTML5 không đơn thuần là một bản nâng cấp cú pháp mà đánh dấu bước nhảy vọt toàn diện:
1. **Không còn phụ thuộc vào Third-party Plugins:** Trước HTML5, để xem video hoặc nghe nhạc, người dùng bắt buộc phải cài đặt Adobe Flash Player, Microsoft Silverlight hoặc QuickTime (tiềm ẩn lỗ hổng bảo mật nghiêm trọng và hao tổn pin thiết bị di động). HTML5 tích hợp sẵn `<audio>` và `<video>` chạy nguyên bản trên trình duyệt.
2. **Ngữ nghĩa hóa tài liệu (Semantic Web):** Thay thế việc dùng hàng loạt thẻ `<div>` vô nghĩa bằng các thẻ có nghĩa rõ ràng (`<header>`, `<article>`, `<section>`, `<nav>`, `<footer>`).
3. **Mạnh mẽ hóa tính năng Web App:** Bổ sung Canvas 2D, WebGL, Web Storage, Geolocation, Drag and Drop, Web Workers và WebSockets, cho phép xây dựng ứng dụng web phức tạp tương đương phần mềm máy tính (Desktop App).

---

## Chương 3: Cấu trúc Nền tảng của Tài liệu HTML5 & Thẻ cơ bản

*(Nội dung trọng tâm rút trích từ Slide trang 5 – 11 của bài giảng `1_TongQuan_HTML_1.pdf`)*

### 3.1. Bản chất ngôn ngữ HTML

- **Tên viết tắt:** HTML viết tắt của **HyperText Markup Language** (Ngôn ngữ đánh dấu siêu văn bản).
  - *HyperText (Siêu văn bản):* Văn bản chứa các liên kết cho phép người dùng nhảy từ tài liệu này sang tài liệu khác trên Internet.
  - *Markup (Đánh dấu):* Sử dụng các ký hiệu đặc biệt gọi là thẻ (*tags*) để gắn nhãn, phân loại và quy định cấu trúc cho các đoạn văn bản.
- **Phần tử HTML (HTML Element):** Là một đơn vị cấu trúc hoàn chỉnh bao gồm thẻ mở (*start tag*), nội dung nằm giữa, và thẻ đóng (*end tag*).
  $$\text{Element} = \underbrace{\texttt{<p>}}_{\text{Start tag}} + \underbrace{\text{Đây là nội dung đoạn văn}}_{\text{Content}} + \underbrace{\texttt{</p>}}_{\text{End tag}}$$
- **Cách trình duyệt xử lý:** Trình duyệt web (Chrome, Firefox, Safari, Edge) không bao giờ hiển thị trực tiếp các thẻ HTML ra màn hình, mà chỉ dùng các thẻ đó làm chỉ thị để vẽ và render nội dung tương ứng.

---

### 3.2. Cấu trúc khung chuẩn của một file HTML5

Mọi tài liệu HTML5 hợp lệ đều bắt đầu bằng bộ khung cơ bản sau:

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tiêu đề hiển thị trên thanh tab của trình duyệt</title>
</head>
<body>
    <h1>Tiêu đề chính của trang web</h1>
    <p>Nội dung hiển thị trực tiếp cho người dùng xem...</p>
</body>
</html>
```

#### Phân tích chi tiết các thành phần:
- `<!DOCTYPE html>`: Lời khai báo kiểu tài liệu (*Document Type Declaration*).
  - Trong HTML4 hoặc XHTML, khai báo doctype rất dài dòng, phức tạp và đòi hỏi trỏ tới tệp DTD (Document Type Definition).
  - Trong HTML5, khai báo này được tối giản hóa tối đa chỉ còn `<!DOCTYPE html>` (không phân biệt chữ hoa chữ thường). Nó báo hiệu cho trình duyệt biết phải render trang ở **Chế độ chuẩn (Standards Mode)** thay vì Chế độ tương thích cũ (*Quirks Mode*).
- `<html lang="vi">`: Phần tử gốc (*Root element*) bao bọc toàn bộ mã nguồn của trang web. Thuộc tính `lang` giúp máy tìm kiếm và các trình đọc màn hình (*Screen Readers*) nhận diện ngôn ngữ chính của trang.
- `<head>`: Chứa siêu dữ liệu (*Metadata*) của tài liệu, bao gồm bảng mã ký tự, tiêu đề trang, liên kết tệp CSS, mã JavaScript, cấu hình viewport cho di động. Nội dung trong `<head>` không hiển thị trực tiếp lên vùng nội dung của trang.
- `<body>`: Chứa toàn bộ nội dung hiển thị cho người dùng: văn bản, hình ảnh, âm thanh, video, bảng, biểu mẫu.

---

### 3.3. Khai báo bảng mã ký tự (`meta charset`)

```html
<meta charset="UTF-8">
```
- **Tại sao bắt buộc phải có?** Bảng mã ký tự xác định cách máy tính chuyển đổi các byte nhị phân thành các ký tự chữ cái hiển thị. 
- **UTF-8 (Unicode Transformation Format - 8-bit):** Là bảng mã tiêu chuẩn toàn cầu, hỗ trợ đầy đủ tất cả các ký tự của mọi ngôn ngữ trên thế giới, bao gồm tiếng Việt có dấu (`à, á, ả, ã, ạ, ê, ơ, ư,...`) và các biểu tượng cảm xúc (Emoji). Nếu thiếu thẻ này, trang web tiếng Việt có nguy cơ rất cao bị lỗi font chữ (hiển thị thành các ký tự lạ như `???` hoặc `Ã¡`).

---

### 3.4. Nhúng tài nguyên ngoại vi: Thẻ `<link>` và thẻ `<script>`

1. **Liên kết tệp bảng kiểu CSS (`<link>`):**
   ```html
   <!-- Cú pháp chuẩn HTML5 hiện đại (tự hiểu là CSS) -->
   <link rel="stylesheet" href="stylefile.css">

   <!-- Cú pháp đầy đủ tương thích ngược -->
   <link rel="stylesheet" type="text/css" href="stylefile.css">
   ```
   - Thẻ `<link>` luôn được đặt bên trong cặp thẻ `<head>`.
   - Thuộc tính `rel="stylesheet"` xác định mối quan hệ là tệp định dạng kiểu trang web.
   - Thuộc tính `href` chứa đường dẫn tương đối hoặc tuyệt đối tới tệp `.css`.

2. **Nhúng tệp mã JavaScript (`<script>`):**
   ```html
   <!-- Cú pháp chuẩn HTML5 hiện đại -->
   <script src="scriptfile.js"></script>

   <!-- Cú pháp có type (thường dùng trong HTML4) -->
   <script type="text/javascript" src="scriptfile.js"></script>
   ```
   - Trong HTML5, mặc định ngôn ngữ kịch bản của thẻ `<script>` là JavaScript, do đó không cần khai báo `type="text/javascript"`.
   - Có thể đặt trong `<head>` (thường kết hợp `defer` hoặc `async`) hoặc đặt ở cuối thẻ `<body>` trước thẻ đóng `</body>` để đảm bảo cấu trúc DOM được nạp xong trước khi script thực thi.

---

### 3.5. Phân biệt phần tử chứa nội dung và phần tử rỗng (Void Elements)

Trong tài liệu HTML5, các thẻ được phân chia thành 2 nhóm rõ rệt:

| Nhóm phần tử | Đặc điểm | Cú pháp | Danh sách các thẻ tiêu biểu |
| :--- | :--- | :--- | :--- |
| **Phần tử có nội dung (Regular Elements)** | Bắt buộc phải có cặp thẻ mở và thẻ đóng; giữa hai thẻ chứa nội dung văn bản hoặc các phần tử con khác. | `<tag>Nội dung</tag>` | `<h1>` đến `<h6>`, `<p>`, `<div>`, `<span>`, `<ul>`, `<ol>`, `<li>`, `<table>`, `<form>`, `<section>`, `<article>`, `<button>`. |
| **Phần tử rỗng (Void / Self-closing Elements)** | Không được phép chứa bất kỳ nội dung văn bản nào bên trong; **tuyệt đối không có thẻ đóng `</tag>`**. Trong HTML5 không bắt buộc phải có dấu gạch chéo tự đóng `/>`. | `<tag>` hoặc `<tag />` | `<br>` (ngắt dòng), `<hr>` (đường kẻ ngang phân cách), `<img>` (hình ảnh), `<input>` (ô nhập liệu), `<link>` (liên kết tệp ngoài), `<meta>` (siêu dữ liệu). |

> [!WARNING] **Quy tắc cú pháp**
> Nếu cố tình viết nội dung vào bên trong một void element (ví dụ: `<br>Nội dung</br>` hoặc `<img src="...">chú thích</img>`), trình duyệt sẽ báo lỗi cú pháp hoặc tự động đẩy phần nội dung đó ra ngoài, phá vỡ cấu trúc DOM dự kiến.

---

## Chương 4: Hệ thống Semantic Elements trong HTML5 (Chuẩn ngữ nghĩa)

*(Nội dung trọng tâm rút trích từ Slide trang 12 – 15 của bài giảng `1_TongQuan_HTML_1.pdf`)*

### 4.1. Vấn đề của "Div Soup" trong HTML4 và sự ra đời của Semantic Web

Trước khi HTML5 ra đời (thời kỳ HTML4 và XHTML), lập trình viên phải sử dụng thẻ `<div>` kết hợp với thuộc tính `id` hoặc `class` để phân chia cấu trúc trang:

```html
<!-- Bố cục HTML4 kiểu cũ: "DIV SOUP" (Nồi súp thẻ div) -->
<div id="header">...</div>
<div id="nav">...</div>
<div id="main-content">
    <div class="article">...</div>
    <div class="sidebar">...</div>
</div>
<div id="footer">...</div>
```

**Nhược điểm chí mạng của cách làm cũ:**
1. **Thiếu tính ngữ nghĩa (Non-semantic):** Thẻ `<div>` chỉ là một khối chứa rỗng (*block container*), nó không mang bất kỳ ý nghĩa thông tin nào. Trình duyệt, bộ máy tìm kiếm (Google, Bing) và các công cụ trợ năng (*Screen Readers* cho người khiếm thị) không thể biết phần nào là bài viết chính, phần nào là thanh menu điều hướng, phần nào là chân trang bản quyền.
2. **Không đồng bộ giữa các lập trình viên:** Người thì đặt `class="menu"`, người đặt `id="navigation"`, người đặt `class="nav-bar"`. Không có một chuẩn ngữ nghĩa chung nào cho toàn bộ thế giới Web.

---

### 4.2. Bảng tra cứu các thẻ ngữ nghĩa cấu trúc chính

HTML5 giới thiệu bộ thẻ Semantic Elements chuyên biệt để giải quyết triệt để bài toán trên:

```
+-------------------------------------------------------------------+
|                        <header role="banner">                     |
|                Logo công ty, Khẩu hiệu, Banner đầu trang          |
+-------------------------------------------------------------------+
|                              <nav>                                |
|        Menu điều hướng chính: [Home]  [About]  [Contact]          |
+---------------------------------+---------------------------------+
|            <main>               |             <aside>             |
|  +---------------------------+  |  • Thanh bên (Sidebar)          |
|  |        <section>          |  |  • Danh mục tin liên quan       |
|  |  +---------------------+  |  |  • Khối banner quảng cáo        |
|  |  |      <article>      |  |  |  • Trích dẫn bài đọc nhanh      |
|  |  | Tiêu đề bài viết    |  |  |                                 |
|  |  | Nội dung tin tức... |  |  |                                 |
|  |  +---------------------+  |  |                                 |
|  |  +---------------------+  |  |                                 |
|  |  |      <article>      |  |  |                                 |
|  |  +---------------------+  |  |                                 |
|  +---------------------------+  |                                 |
+---------------------------------+---------------------------------+
|                             <footer>                              |
|         Bản quyền ©, Tác giả, Liên kết chính sách bảo mật         |
+-------------------------------------------------------------------+
```

| Thẻ ngữ nghĩa | Ý nghĩa chuẩn W3C | Trường hợp sử dụng chuẩn mực |
| :--- | :--- | :--- |
| **`<header>`** | Đại diện cho phần mở đầu của một trang web hoặc phần mở đầu của một `<section>` / `<article>`. | Chứa logo, thanh tìm kiếm nhanh, tiêu đề chính của trang (`<h1>`), có thể gắn thuộc tính `role="banner"`. |
| **`<nav>`** | Đại diện cho một khu vực chứa các **liên kết điều hướng (Navigation Links)** quan trọng của tài liệu. | Menu chính (*main menu*), thanh điều hướng trang (*pagination*), mục lục bài viết (*table of contents*). Lưu ý: Không phải mọi nhóm liên kết đều cần thẻ `<nav>`, chỉ dùng cho cụm điều hướng chính. |
| **`<section>`** | Đại diện cho một phân đoạn tài liệu hoặc phân đoạn ứng dụng độc lập có tính liên kết chủ đề chung. | Dùng để gom nhóm nội dung theo chương hồi, phần giới thiệu sản phẩm, bảng báo giá. **Chuẩn W3C khuyến nghị một `<section>` nên luôn đi kèm một tiêu đề (`<h1>` – `<h6>`)**. |
| **`<article>`** | Đại diện cho một khối nội dung **hoàn chỉnh, độc lập và tự chứa (Self-contained)**, có thể trích xuất để đăng lại ở nơi khác mà vẫn giữ nguyên ý nghĩa. | Một bài viết tin tức, một bài blog, một bình luận (*comment*) của người dùng, một sản phẩm trong trang thương mại điện tử. **Một `<article>` có thể chứa nhiều `<section>`, và một `<section>` cũng có thể chứa nhiều `<article>`.** |
| **`<aside>`** | Đại diện cho phần nội dung chỉ liên quan gián tiếp hoặc thứ yếu (*tangentially related*) tới nội dung bao quanh nó. | Thanh bên (*sidebar*), hộp trích dẫn bên lề (*pull-quotes*), danh sách bài viết xem nhiều, khối quảng cáo. |
| **`<footer>`** | Đại diện cho phần chân trang của một trang web hoặc phần chân của một `<section>` / `<article>`. | Chứa thông tin bản quyền (copyright), tên tác giả, liên kết điều khoản sử dụng, thông tin liên hệ, nút cuộn lên đầu trang. |
| **`<main>`** | Đại diện cho vùng nội dung trung tâm, độc nhất và quan trọng nhất của tài liệu. | Toàn bộ nội dung độc nhất của trang web đó (loại trừ header, footer, menu dùng chung giữa các trang). Trong một trang web chỉ được phép có duy nhất **một thẻ `<main>`** hiển thị. |

---

### 4.3. Các thẻ ngữ nghĩa bổ trợ

- **`<figure>` và `<figcaption>`:**
  - Được dùng để đóng gói một nội dung minh họa độc lập (như hình ảnh, sơ đồ, biểu đồ thống kê, đoạn mã code mẫu).
  - Thẻ con `<figcaption>` cung cấp dòng chú thích gắn liền với nội dung bên trong `<figure>`:
  ```html
  <figure>
      <img src="html5-architecture.png" alt="Kiến trúc HTML5">
      <figcaption>Hình 1.1: Sơ đồ phân tầng kiến trúc HTML5 Semantic.</figcaption>
  </figure>
  ```
- **`<dialog>`:**
  - Thẻ chuẩn của HTML5 dùng để biểu diễn một hộp thoại hội thoại hoặc cửa sổ tương tác (modal popup) có hỗ trợ sẵn các phương thức JavaScript: `.show()`, `.showModal()`, `.close()`.

---

## Chương 5: Hệ thống Thuộc tính (Attributes) & Custom Data Attributes

*(Nội dung trọng tâm rút trích từ Slide trang 16 – 20 của bài giảng `1_TongQuan_HTML_1.pdf`)*

### 5.1. Quy tắc cốt lõi khi sử dụng thuộc tính HTML

1. **Vị trí khai báo:** Thuộc tính **chỉ được phép khai báo bên trong thẻ mở (Start Tag)** của phần tử. Tuyệt đối không bao giờ được đặt thuộc tính trong thẻ đóng (End Tag).
2. **Cấu trúc cặp Tên-Giá trị:** Hầu hết thuộc tính tuân theo cấu trúc `name="value"`. Trong chuẩn HTML5, giá trị nên được đặt trong dấu ngoặc kép `""` hoặc ngoặc đơn `''`.
3. **Thuộc tính Boolean:** Một số thuộc tính không cần giá trị đi kèm, sự xuất hiện của tên thuộc tính đại diện cho giá trị `true` (ví dụ: `disabled`, `required`, `autofocus`, `hidden`).

---

### 5.2. Bảng tổng hợp các thuộc tính toàn cục (Global Attributes)

Các thuộc tính toàn cục có thể được áp dụng cho **hầu hết mọi phần tử HTML**:

| Thuộc tính | Giá trị chấp nhận | Chức năng & Ý nghĩa nghiệp vụ |
| :--- | :--- | :--- |
| **`id`** | Chuỗi ký tự (duy nhất) | Đặt tên định danh duy nhất cho phần tử trong toàn bộ cây DOM. Dùng để định kiểu CSS (`#myId`), gán nhãn Form (`<label for="...">`), neo liên kết (`#heading1`), và truy xuất nhanh trong JavaScript (`document.getElementById`). |
| **`class`** | Chuỗi ký tự (phân cách bằng dấu cách) | Phân loại phần tử vào một hoặc nhiều nhóm lớp. Dùng để áp dụng phong cách CSS (`.btn-primary`) và thao tác tập hợp phần tử trong JavaScript (`document.querySelectorAll`). |
| **`title`** | Chuỗi văn bản | Hiển thị thông tin bổ sung dưới dạng hộp chú thích pop-up (**Tooltip**) khi người dùng rê chuột lên phần tử. |
| **`style`** | Chuỗi cú pháp CSS | Khai báo các quy tắc CSS trực tiếp lên phần tử (*Inline Stylesheet*). *Khuyến cáo: Hạn chế dùng để đảm bảo tách biệt code.* |
| **`hidden`** | `hidden` hoặc không cần giá trị | Ẩn phần tử khỏi giao diện thị giác của trình duyệt, tương đương quy tắc CSS `display: none`. |
| **`contenteditable`** | `true`, `false` | Cho phép người dùng chỉnh sửa trực tiếp nội dung văn bản của phần tử ngay trên giao diện web (dùng xây dựng các trình soạn thảo Rich Text). |
| **`draggable`** | `true`, `false`, `auto` | Cho phép người dùng thực hiện thao tác kéo thả phần tử trên màn hình. |
| **`tabindex`** | Số nguyên (`-1`, `0`, số dương) | Xác định thứ tự nhận tiêu điểm khi người dùng nhấn phím **Tab** trên bàn phím. Giá trị `0` đưa phần tử vào luồng tab thông thường; `-1` loại bỏ khỏi luồng tab nhưng vẫn có thể focus bằng script. |
| **`accesskey`** | Ký tự phím đơn | Chỉ định phím tắt bàn phím kết hợp với phím hệ thống (như `Alt + phím` hoặc `Ctrl + Alt + phím`) để truy cập ngay lập tức vào phần tử. |
| **`spellcheck`** | `true`, `false` | Bật hoặc tắt tính năng kiểm tra chính tả và ngữ pháp tự động của trình duyệt trên các trường nhập liệu văn bản. |
| **`lang`** | Mã ngôn ngữ ISO (vi, en, fr...) | Quy định ngôn ngữ của nội dung bên trong phần tử. |
| **`dir`** | `ltr` (trái sang phải), `rtl` (phải sang trái), `auto` | Hướng dòng văn bản. |

---

### 5.3. Thuộc tính dữ liệu tùy biến (Custom Data Attributes: `data-*`)

Trước HTML5, nếu muốn lưu trữ các thông tin phụ trợ (như mã sản phẩm, trạng thái thanh toán) lên thẻ HTML, lập trình viên thường phải lạm dụng thuộc tính `class`, `rel` hoặc tự chế các thuộc tính không hợp chuẩn, dẫn đến lỗi validate W3C.

HTML5 giới thiệu chuẩn **`data-*`**:
- **Cú pháp:** Bắt đầu bằng tiền tố `data-` theo sau là tên tùy biến viết thường (ví dụ: `data-product-id`, `data-subject`, `data-price`).
- **Mục đích:** Cho phép lưu trữ dữ liệu tùy biến trực tiếp trên các phần tử HTML mà không làm ảnh hưởng đến giao diện thị giác.
- **Minh họa mã nguồn:**
  ```html
  <div class="product-item" 
       data-product-id="SKU-8942" 
       data-category="electronics" 
       data-price="450000" 
       data-in-stock="true">
      <h3>Tai nghe không dây Bluetooth</h3>
      <p>Giá: 450,000 VNĐ</p>
  </div>
  ```
- **Truy xuất trong JavaScript thông qua API `dataset`:**
  ```javascript
  const product = document.querySelector('.product-item');
  console.log(product.dataset.productId); // "SKU-8942" (tự chuyển kebab-case sang camelCase)
  console.log(product.dataset.price);     // "450000"
  ```

---

## Chương 6: Hệ thống Sự kiện trong HTML5 (Events Handling)

*(Nội dung trọng tâm rút trích từ Slide trang 21 – 22 của bài giảng `1_TongQuan_HTML_1.pdf`)*

### 6.1. Sự kiện cửa sổ và tương tác phần tử

| Tên sự kiện | Phần tử áp dụng | Thời điểm kích hoạt |
| :--- | :--- | :--- |
| **`onclick`** | Mọi phần tử (button, link, div...) | Người dùng nhấp chuột trái vào phần tử. |
| **`ondblclick`** | Mọi phần tử | Người dùng nhấp đúp chuột nhanh vào phần tử. |
| **`onchange`** | `<input>`, `<select>`, `<textarea>` | Giá trị của trường nhập liệu bị thay đổi và người dùng hoàn tất thao tác (mất focus hoặc bấm chọn option mới). |
| **`onblur`** | Window, input, form controls | Phần tử hoặc cửa sổ bị **mất tiêu điểm (loses focus)**. Rất phổ biến khi kiểm tra dữ liệu trường input sau khi người dùng rời đi. |
| **`onfocus`** | Input, textarea, button | Phần tử nhận được tiêu điểm (con trỏ chuột hoặc phím tab nhảy vào). |
| **`oncontextmenu`**| Mọi phần tử | Người dùng nhấp chuột phải để mở menu ngữ cảnh (Context Menu). |

---

### 6.2. Cơ chế Kéo & Thả (Drag and Drop Events Lifecycle)

HTML5 chuẩn hóa API Kéo và Thả nguyên bản (*Native Drag & Drop*), không cần dùng thư viện ngoài. Vòng đời sự kiện được chia thành 2 nhóm:

```
[Phần tử nguồn (Draggable Element)]            [Mục tiêu thả (Drop Target)]
        |                                                   |
 1. ondragstart (Bắt đầu kéo)                               |
        |                                                   |
 2. ondrag (Đang kéo di chuyển)                             |
        |                                                   v
        +-----------------------------------> 3. ondragenter (Đi vào vùng mục tiêu)
        |                                                   |
        +-----------------------------------> 4. ondragover  (Đang rê trên mục tiêu)
        |                                                   |
        +-----------------------------------> 5. ondragleave (Rời khỏi vùng mục tiêu)
        |                                                   |
        +-----------------------------------> 6. ondrop      (Thả phần tử thành công!)
        |                                                   |
 7. ondragend  (Kết thúc chu trình kéo)                     |
```

1. **Trên phần tử được kéo (Source element - có `draggable="true"`):**
   - `ondragstart`: Kích hoạt ngay khi bắt đầu nhấp giữ và kéo phần tử.
   - `ondrag`: Kích hoạt liên tục trong suốt quá trình con trỏ đang kéo phần tử.
   - `ondragend`: Kích hoạt khi người dùng thả chuột (hoàn tất hoặc hủy thao tác kéo).
2. **Trên vùng mục tiêu tiếp nhận (Target element):**
   - `ondragenter`: Kích hoạt khi phần tử kéo vừa chạm vào ranh giới vùng mục tiêu.
   - `ondragover`: Kích hoạt liên tục khi phần tử kéo đang di chuyển lơ lửng bên trên mục tiêu. *(Lưu ý: Bắt buộc phải gọi `event.preventDefault()` trong hàm xử lý này thì sự kiện thả `ondrop` mới kích hoạt được).*
   - `ondragleave`: Kích hoạt khi phần tử kéo rời khỏi ranh giới của mục tiêu mà chưa thả.
   - `ondrop`: Kích hoạt ngay khi người dùng nhả chuột thả phần tử vào đúng mục tiêu.

---

## Chương 7: Biểu mẫu Web thế hệ mới (HTML5 Web Forms 2.0)

*(Nội dung trọng tâm rút trích từ Slide trang 23 – 30 của bài giảng `1_TongQuan_HTML_1.pdf`)*

### 7.1. Sự phát triển từ Forms trong HTML4 sang Forms 2.0

Trong chuẩn HTML4, thẻ `<input>` chỉ hỗ trợ các kiểu nhập liệu sơ khai: `text`, `password`, `checkbox`, `radio`, `submit`, `reset`, `file`, `hidden`, `image`, `button`. 
- Để người dùng nhập email, ngày tháng, số lượng hoặc chọn dải giá, lập trình viên buộc phải sử dụng các đoạn mã JavaScript phức tạp (hoặc jQuery Plugins) để vẽ lịch, kiểm tra biểu thức chính quy (Regex) và chặn submit.
- **HTML5 Web Forms 2.0:** Trình duyệt tự tích hợp sẵn các bộ chọn giao diện nguyên bản (bảng lịch, đồng hồ chọn giờ, thước trượt, bảng chọn màu) và tự động kiểm tra định dạng dữ liệu phía client trước khi gửi dữ liệu lên server.

---

### 7.2. Danh mục 13 kiểu nhập liệu (`<input type="...">`) trong HTML5

| Kiểu Type | Mô tả chức năng | Hành vi hiển thị & Kiểm tra của Trình duyệt |
| :--- | :--- | :--- |
| **`color`** | Chọn mã màu sắc | Mở bảng màu hệ thống (*Color Picker*); trả về giá trị mã màu Hex 7 ký tự (ví dụ: `#ed1c24`). |
| **`date`** | Chọn ngày, tháng, năm | Hiển thị giao diện lịch tương tác; trả về chuỗi định dạng `YYYY-MM-DD` theo chuẩn ISO 8601. |
| **`datetime-local`** | Chọn ngày, tháng, năm và giờ, phút | Hiển thị giao diện lịch kèm giờ địa phương không có múi giờ (`YYYY-MM-DDTHH:mm`). |
| **`datetime`** | Ngày giờ chuẩn UTC | Chuẩn ISO 8601 kèm múi giờ UTC (*Lưu ý: Thực tế các trình duyệt hiện đại đã gộp chung và khuyến nghị dùng `datetime-local`*). |
| **`month`** | Chọn tháng và năm | Cho phép chọn tháng và năm (`YYYY-MM`). |
| **`week`** | Chọn tuần và năm | Cho phép chọn số thứ tự tuần trong năm (`YYYY-Www`, ví dụ: `2026-W38`). |
| **`time`** | Chọn giờ, phút, giây | Hiển thị ô chọn thời gian (`HH:mm` hoặc `HH:mm:ss`). |
| **`number`** | Nhập số học thuần túy | Bàn phím số tự bật trên di động; có nút tăng giảm mũi tên; hỗ trợ thuộc tính `min`, `max`, `step`. |
| **`range`** | Chọn giá trị trong một khoảng | Hiển thị thanh trượt (*Slider Control*); kết hợp thuộc tính `min`, `max`, `step`. |
| **`email`** | Nhập địa chỉ thư điện tử | Tự động kiểm tra định dạng email hợp lệ (`user@domain.com`); tự động hiện phím `@` trên di động. |
| **`url`** | Nhập địa chỉ liên kết web | Tự động kiểm tra định dạng URL có giao thức (`http://` hoặc `https://`). |
| **`tel`** | Nhập số điện thoại | Tự động kích hoạt bàn phím số điện thoại trên di động; thường kết hợp thuộc tính `pattern` để định dạng regex. |
| **`search`** | Nhập từ khóa tìm kiếm | Ô nhập văn bản tối ưu cho tìm kiếm, có nút xóa nhanh ký tự (biểu tượng `x`). |

---

### 7.3. Các thuộc tính kiểm soát và nâng cao trải nghiệm (UX & Validation)

1. **`required`:** Đánh dấu trường dữ liệu bắt buộc phải điền. Nếu để trống khi submit, trình duyệt tự động chặn việc gửi form và hiện bong bóng thông báo lỗi (ví dụ: *"Please fill out this field."*).
2. **`placeholder`:** Cung cấp đoạn văn bản chữ mờ gợi ý bên trong ô nhập. Đoạn chữ này tự động biến mất khi người dùng gõ ký tự đầu tiên và xuất hiện lại nếu ô trống.
3. **`autofocus`:** Tự động đặt con trỏ chuột (tiêu điểm) vào ô nhập ngay khi trang tải xong, giúp người dùng gõ phím ngay mà không cần nhấp chuột.
4. **`min` và `max`:** Quy định giá trị chặn dưới và chặn trên cho các kiểu dữ liệu dạng số, ngày tháng (`number`, `range`, `date`).
5. **`step`:** Bước nhảy giữa các giá trị hợp lệ. Ví dụ: `step="0.1"` cho phép nhập số thập phân 1 chữ số; `step="1800"` cho kiểu `time` tương đương bước nhảy 30 phút (1800 giây).

---

### 7.4. Thẻ hiển thị kết quả `<output>`

Thẻ `<output>` được dùng để phản ánh kết quả của một phép tính toán hoặc xuất dữ liệu được thực thi bởi kịch bản script:

```html
<form oninput="total.value = parseInt(a.value) + parseInt(b.value)">
    <input type="range" id="a" value="20" min="0" max="100"> +
    <input type="number" id="b" value="30" min="0" max="100"> =
    <output name="total" for="a b">50</output>
</form>
```

---

## Chương 8: Các Công nghệ & Tính năng Mở rộng của HTML5

*(Nội dung trọng tâm rút trích từ Slide trang 7 – 9 của bài giảng `1_TongQuan_HTML_1.pdf`)*

1. **Audio & Video (`<audio>`, `<video>`):**
   - Hỗ trợ nhúng trực tiếp tập tin âm thanh (MP3, WAV, OGG) và video (MP4, WebM) vào trang web.
   - Đi kèm các thuộc tính điều khiển tiện ích: `controls`, `autoplay`, `loop`, `muted`, `poster`.
2. **Canvas 2D (`<canvas>`):**
   - Một vùng vẽ đồ họa 2D dựa trên từng điểm ảnh (pixel), được điều khiển lập trình hoàn toàn bằng JavaScript.
   - Thích hợp cho việc vẽ biểu đồ trực quan, xử lý ảnh động, hiệu ứng hạt và xây dựng game web 2D.
3. **Web Storage (Persistent Local Storage):**
   - Thay thế việc sử dụng Cookie vốn có dung lượng nhỏ (4KB) và phải gửi liên tục lên server theo mỗi request HTTP.
   - `localStorage`: Lưu trữ dữ liệu lâu dài trên máy khách không có thời hạn hết hạn.
   - `sessionStorage`: Lưu trữ dữ liệu trong phạm vi một phiên làm việc (mất dữ liệu khi đóng tab).
4. **WebSockets:**
   - Giao thức truyền thông song công toàn phần (Full-duplex), 2 chiều qua một kết nối TCP duy nhất, cho phép server và client trao đổi dữ liệu tức thời với độ trễ cực thấp (phục vụ ứng dụng chat, bảng giá chứng khoán, thông báo real-time).
5. **Server-Sent Events (SSE):**
   - Cơ chế cho phép Web Server chủ động đẩy các sự kiện dữ liệu một chiều (Server-to-Client streaming) tới trình duyệt qua kết nối HTTP chuẩn.
6. **Geolocation API:**
   - Cung cấp tọa độ địa lý (kinh độ, vĩ độ) của thiết bị người dùng (khi được cấp quyền cho phép), phục vụ các ứng dụng bản đồ, định vị cửa hàng gần nhất, thời tiết.
7. **Microdata & Rich Snippets:**
   - Nhúng siêu dữ liệu ngữ nghĩa vào các thẻ HTML (thông qua `itemscope`, `itemtype`, `itemprop`), giúp Google và các công cụ tìm kiếm hiểu chính xác ngữ cảnh trang web để hiển thị các đoạn trích giàu thông tin (**Rich Snippets** như xếp hạng sao, giá sản phẩm, công thức nấu ăn).

---

## Chương 9: Hướng dẫn Chi tiết & Lời giải Chuẩn 8 Bài Tập Thực Hành (1_BT_HTML)

*(Nội dung giải thuật, phân tích yêu cầu giao diện và toàn bộ mã nguồn trọn vẹn của 8 bài tập trong đề bài `1_BT_HTML.pdf`)*

> [!TIP] **Môi trường chạy thực hành**
> Toàn bộ 8 bài tập dưới đây đã được lập trình sẵn thành các file HTML độc lập và lưu tại thư mục:  
> `Topic 1/Bài tập/` (kèm trang điều hướng tổng hợp `Topic 1/Bài tập/index.html`). Sinh viên có thể mở trực tiếp bằng bất kỳ trình duyệt nào để kiểm tra kết quả hiển thị.

---

### 9.1. Bài 1: Định dạng văn bản đặc biệt, công thức hóa học/vật lý & Thẻ liên hệ `<address>`

#### A. Phân tích yêu cầu đề bài
1. **Phần 1 - Thẻ định dạng mã máy tính:**
   - Cần hiển thị các dòng chữ với thẻ ngữ nghĩa tương ứng:
     - Dòng `Computer code` $\rightarrow$ dùng thẻ `<code>` (font monospace đại diện cho đoạn mã lệnh).
     - Dòng `Keyboard input` $\rightarrow$ dùng thẻ `<kbd>` (đại diện cho phím bấm trên bàn phím).
     - Dòng `Sample text` $\rightarrow$ dùng thẻ `<samp>` (đại diện cho kết quả đầu ra mẫu từ chương trình).
     - Dòng `Computer variable` $\rightarrow$ dùng thẻ `<var>` (chữ nghiêng đại diện cho biến số trong toán học/lập trình).
     - Dòng chú thích ghi chú: *"Note: These tags are often used to represents a fragment of computer code."*
2. **Phần 2 - Công thức khoa học (Chỉ số dưới & Chỉ số trên):**
   - Công thức nước: $H_2O \rightarrow$ dùng thẻ chỉ số dưới `<sub>2</sub>`.
   - Công thức khí carbonic: $CO_2 \rightarrow$ dùng thẻ chỉ số dưới `<sub>2</sub>`.
   - Phương trình tương đương khối lượng - năng lượng của Einstein: $E = mc^2 \rightarrow$ dùng thẻ chỉ số trên `<sup>2</sup>`.
3. **Phần 3 - Khối thông tin tác giả:**
   - Dùng thẻ `<address>` để chứa thông tin người viết:
     - Dòng 1: `Written by <a href="mailto:jon.doe@example.com">Jon Doe</a>.` (có liên kết mail).
     - Dòng 2: `Contact us at:`
     - Dòng 3: `Post Box 210, Hollywood`
     - Dòng 4: `USA`

#### B. Mã nguồn HTML chuẩn (`bai1_text_formula.html`)
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Bài 1: Định dạng văn bản đặc biệt & Công thức</title>
</head>
<body>

    <!-- 1. Các thẻ mã máy tính -->
    <p><code>Computer code</code></p>
    <p><kbd>Keyboard input</kbd></p>
    <p><samp>Sample text</samp></p>
    <p><var>Computer variable</var></p>
    <p><em>Note: These tags are often used to represents a fragment of computer code.</em></p>

    <!-- 2. Các công thức hóa học và vật lý -->
    <p>The chemical formula of Water is: H<sub>2</sub>O</p>
    <p>The chemical formula of Carbon Dioxide is: CO<sub>2</sub></p>
    <p>The equation of mass-energy equivalence is: E=mc<sup>2</sup></p>

    <!-- 3. Thông tin liên hệ tác giả -->
    <address>
        Written by <a href="mailto:jon.doe@example.com">Jon Doe</a>.<br>
        Contact us at:<br>
        Post Box 210, Hollywood<br>
        USA
    </address>

</body>
</html>
```

---

### 9.2. Bài 2: Danh sách To Do gạch ngang/gạch chân, input chọn tuần & Khung cuộn

#### A. Phân tích yêu cầu đề bài
1. **Danh sách công việc To Do bên ngoài:**
   - Tiêu đề cấp 2: `<h2>To Do</h2>`.
   - Danh sách không thứ tự `<ul>`:
     - `Buy some cookies` (bình thường).
     - `Do some cleaning` (bình thường).
     - `Relaxation time`: Có nét gạch ngang giữa chữ thể hiện công việc đã hoàn thành hoặc hủy bỏ $\rightarrow$ dùng thẻ `<s>` (strikethrough) hoặc `<del>`.
     - `Visit a doctor`: Có gạch chân dưới chữ $\rightarrow$ dùng thẻ `<u>` (underline) hoặc `<ins>`.
2. **Trường chọn tuần:**
   - Nhãn: `Select Week:`
   - Thẻ nhập: `<input type="week">` (hiển thị ô chọn tuần định dạng `Week --, ----`).
3. **Khung cuộn nội dung (Scroll box):**
   - Trong ảnh đề bài hiển thị một khung chữ nhật có thanh cuộn dọc chứa thông tin liên hệ `<address>` của tác giả Jon Doe, theo sau là danh sách công việc `To Do` lặp lại. Ta sử dụng thẻ `<div>` có định dạng CSS `overflow-y: scroll; height: 180px; border: 1px solid #777;` để tạo hiệu ứng khung cuộn chuẩn xác.

#### B. Mã nguồn HTML chuẩn (`bai2_todo_list.html`)
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Bài 2: To Do List & Khung cuộn nội dung</title>
    <style>
        .scroll-container {
            border: 1px solid #666;
            padding: 12px;
            width: 420px;
            height: 180px;
            overflow-y: scroll;
            margin-top: 12px;
        }
    </style>
</head>
<body>

    <h2>To Do</h2>
    <ul>
        <li>Buy some cookies</li>
        <li>Do some cleaning</li>
        <li><s>Relaxation time</s></li>
        <li><u>Visit a doctor</u></li>
    </ul>

    <p>
        <label for="week-picker">Select Week: </label>
        <input type="week" id="week-picker" name="week">
    </p>

    <!-- Khung cuộn hiển thị nội dung lồng nhau -->
    <div class="scroll-container">
        <address>
            Written by <a href="mailto:jon.doe@example.com">Jon Doe</a>.<br>
            Contact us at:<br>
            Post Box 210, Hollywood<br>
            USA
        </address>

        <h3>To Do</h3>
        <ul>
            <li>Buy some cookies</li>
            <li>Do some cleaning</li>
            <li><s>Relaxation time</s></li>
            <li><u>Visit a doctor</u></li>
        </ul>
    </div>

</body>
</html>
```

---

### 9.3. Bài 3: Bảng điều khiển Form HTML5 đầy đủ 13 loại input

#### A. Phân tích yêu cầu đề bài
Đề bài yêu cầu xây dựng một biểu mẫu bao gồm toàn bộ 13 trường nhập liệu mới của HTML5:
1. `Select Color:` $\rightarrow$ `<input type="color" value="#000000">`
2. `Select Date:` $\rightarrow$ `<input type="date">`
3. `Date & Time:` $\rightarrow$ `<input type="datetime">`
4. `Local Date & Time:` $\rightarrow$ `<input type="datetime-local">`
5. `Email Address:` $\rightarrow$ `<input type="email">`
6. `Select Month:` $\rightarrow$ `<input type="month">`
7. `Select Number:` $\rightarrow$ `<input type="number" value="1">`
8. `Select Number:` $\rightarrow$ `<input type="range" min="0" max="100">` (dạng thước trượt slider)
9. `Search Website:` $\rightarrow$ `<input type="search">`
10. `Telephone Number:` $\rightarrow$ `<input type="tel">`
11. `Select Time:` $\rightarrow$ `<input type="time">`
12. `Website URL:` $\rightarrow$ `<input type="url">` (trong hình đề bài có viền đỏ bao quanh để nhấn mạnh)
13. `Select Week:` $\rightarrow$ `<input type="week">`

Sử dụng cấu trúc bảng `<table>` không viền hoặc CSS Grid để căn chỉnh nhãn bên trái thẳng hàng với ô nhập bên phải.

#### B. Mã nguồn HTML chuẩn (`bai3_form_controls.html`)
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Bài 3: Bộ điều khiển Form HTML5 Đầy Đủ</title>
    <style>
        table { border-collapse: collapse; }
        td { padding: 5px 8px; }
        .red-border { border: 2px solid #ed1c24; }
    </style>
</head>
<body>

    <form action="#" method="get">
        <table>
            <tr>
                <td><label for="color">Select Color:</label></td>
                <td><input type="color" id="color" name="color" value="#000000"></td>
            </tr>
            <tr>
                <td><label for="date">Select Date:</label></td>
                <td><input type="date" id="date" name="date"></td>
            </tr>
            <tr>
                <td><label for="datetime">Date & Time:</label></td>
                <td><input type="datetime" id="datetime" name="datetime"></td>
            </tr>
            <tr>
                <td><label for="dt-local">Local Date & Time:</label></td>
                <td><input type="datetime-local" id="dt-local" name="datetime_local"></td>
            </tr>
            <tr>
                <td><label for="email">Email Address:</label></td>
                <td><input type="email" id="email" name="email"></td>
            </tr>
            <tr>
                <td><label for="month">Select Month:</label></td>
                <td><input type="month" id="month" name="month"></td>
            </tr>
            <tr>
                <td><label for="num">Select Number:</label></td>
                <td><input type="number" id="num" name="number_val" value="1"></td>
            </tr>
            <tr>
                <td><label for="rng">Select Number:</label></td>
                <td><input type="range" id="rng" name="range_val" min="0" max="100"></td>
            </tr>
            <tr>
                <td><label for="search">Search Website:</label></td>
                <td><input type="search" id="search" name="search"></td>
            </tr>
            <tr>
                <td><label for="tel">Telephone Number:</label></td>
                <td><input type="tel" id="tel" name="phone"></td>
            </tr>
            <tr>
                <td><label for="time">Select Time:</label></td>
                <td><input type="time" id="time" name="time"></td>
            </tr>
            <tr>
                <td><label for="url">Website URL:</label></td>
                <td><input type="url" id="url" name="url" class="red-border"></td>
            </tr>
            <tr>
                <td><label for="week">Select Week:</label></td>
                <td><input type="week" id="week" name="week"></td>
            </tr>
        </table>
    </form>

</body>
</html>
```

---

### 9.4. Bài 4: Dropdown xe hơi nhóm bằng `<optgroup>`, Listbox chọn nhiều, Fieldset & Legend

#### A. Phân tích yêu cầu đề bài
1. **Menu chọn xe (Select with Optgroup):**
   - Gom các lựa chọn xe thành 2 nhóm danh mục:
     - Nhóm `Sports cars`: Chứa `Ferrari`, `Lamborghini` (mặc định chọn Lamborghini trong dropdown đơn).
     - Nhóm `Luxury cars`: Chứa `Mercedes`, `Bentley`.
   - Thẻ sử dụng: `<optgroup label="Sports cars">` và `<option>`.
2. **Listbox chọn nhiều (Multiple Selection):**
   - Thẻ `<select multiple size="6">`: Cho phép hiển thị danh sách nhiều dòng và người dùng có thể giữ phím `Ctrl` hoặc `Shift` để chọn nhiều mục cùng lúc.
   - Đi kèm dòng hướng dẫn: *"Note: Press control or shift key on the keyboard while clicking on the other options to enable multiple selections."*
3. **Khối Hobbies (Sở thích):**
   - Sử dụng thẻ `<fieldset>` và nhãn viền `<legend>Hobbies</legend>`.
   - Bên trong chứa các ô đánh dấu chọn nhiều (Checkbox): `Sports`, `Music`, `Reading`.
4. **Khối Gender (Giới tính):**
   - Sử dụng thẻ `<fieldset>` và nhãn viền `<legend>Gender</legend>`.
   - Bên trong chứa các nút chọn một duy nhất (Radio button): `Male`, `Female` (có cùng thuộc tính `name="gender"` để tạo tính loại trừ).

#### B. Mã nguồn HTML chuẩn (`bai4_select_optgroup.html`)
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Bài 4: Select, Optgroup, Checkbox, Radio & Fieldset</title>
    <style>
        .select-group {
            display: flex;
            gap: 20px;
            align-items: flex-start;
        }
        fieldset {
            margin-top: 15px;
            border: 1px solid #777;
            padding: 10px 15px;
            width: 480px;
        }
        legend {
            font-weight: bold;
            padding: 0 5px;
        }
        label {
            margin-right: 15px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <form action="#" method="get">
        
        <div class="select-group">
            <!-- Dropdown đơn -->
            <select name="car_single">
                <optgroup label="Sports cars">
                    <option value="ferrari">Ferrari</option>
                    <option value="lamborghini" selected>Lamborghini</option>
                </optgroup>
                <optgroup label="Luxury cars">
                    <option value="mercedes">Mercedes</option>
                    <option value="bentley">Bentley</option>
                </optgroup>
            </select>

            <!-- Listbox chọn nhiều -->
            <select name="cars_multi" multiple size="6" style="width: 140px;">
                <optgroup label="Sports cars">
                    <option value="ferrari">Ferrari</option>
                    <option value="lamborghini">Lamborghini</option>
                </optgroup>
                <optgroup label="Luxury cars">
                    <option value="mercedes">Mercedes</option>
                    <option value="bentley">Bentley</option>
                </optgroup>
            </select>
        </div>

        <p><em>Note: Press control or shift key on the keyboard while clicking on the other options to enable multiple selections.</em></p>

        <!-- Khối Hobbies -->
        <fieldset>
            <legend>Hobbies</legend>
            <label><input type="checkbox" name="hobbies" value="sports"> Sports</label>
            <label><input type="checkbox" name="hobbies" value="music"> Music</label>
            <label><input type="checkbox" name="hobbies" value="reading"> Reading</label>
        </fieldset>

        <!-- Khối Gender -->
        <fieldset>
            <legend>Gender</legend>
            <label><input type="radio" name="gender" value="male"> Male</label>
            <label><input type="radio" name="gender" value="female"> Female</label>
        </fieldset>

    </form>

</body>
</html>
```

---

### 9.5. Bài 5: Biểu mẫu đặt hàng & giao hàng có kiểm soát tính hợp lệ (Order Form Validation)

#### A. Phân tích yêu cầu đề bài
Đây là bài tập kiểm tra tổng hợp các thuộc tính ràng buộc tính hợp lệ (*Constraints & Validation*) của HTML5:
1. `Title`: Giá trị mặc định là `Mister` $\rightarrow$ `value="Mister"`.
2. `Name`: Bắt buộc nhập $\rightarrow$ `required`. Khi submit mà để trống, trình duyệt bật tooltip: *"Please fill out this field."*.
3. `Phone number`: Tùy chọn không bắt buộc $\rightarrow$ `<input type="tel"> (optional)`.
4. `Email address`: Bắt buộc nhập đúng định dạng email $\rightarrow$ `<input type="email" required>`.
5. `Your website`: Tùy chọn, có chữ mờ gợi ý $\rightarrow$ `<input type="url" placeholder="www.yourmte.com"> (optional)`.
6. `Nr. of items to order`: Số lượng hàng từ 1 đến 10, giá trị mặc định là 1 $\rightarrow$ `type="number" min="1" max="10" value="1"`.
7. `Length`: Chiều dài với bước nhảy 10cm (0.1m), giá trị khởi tạo là 1 $\rightarrow$ `type="number" min="0" step="0.1" value="1"` kèm chú thích `1m (in 10cm increments)`.
8. `Delivery date`: Ngày giao hàng tối thiểu từ ngày 16/12/2010 $\rightarrow$ `type="date" min="2010-12-16"` kèm chú thích `(minimum 16 December 2010)`.
9. `Time of delivery`: Giờ giao hàng theo bước nhảy 30 phút (1800 giây) $\rightarrow$ `type="time" step="1800"` kèm chú thích `(in 30 min increments)`.
10. `Color of the item`: Chọn màu hàng, mặc định màu đỏ `#ed1c24` $\rightarrow$ `type="color" value="#ed1c24"` kèm chú thích `#ed1c24 (default red)`.
11. Nút Submit: `<input type="submit" value="Submit Query">`.
12. Ô tìm kiếm bên dưới: `Search <input type="search"> <input type="submit" value="Go">`.

#### B. Mã nguồn HTML chuẩn (`bai5_order_form.html`)
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Bài 5: Biểu Mẫu Đặt Hàng & Validation</title>
    <style>
        table { border-collapse: collapse; }
        td { padding: 6px 10px; }
        td:first-child { text-align: right; font-weight: bold; width: 160px; }
        .hint { font-size: 13px; color: #555; }
        .search-area { margin-top: 25px; padding-left: 170px; }
    </style>
</head>
<body>

    <form action="#" method="post">
        <table>
            <tr>
                <td><label for="title">Title</label></td>
                <td><input type="text" id="title" name="title" value="Mister"></td>
            </tr>
            <tr>
                <td><label for="name">Name</label></td>
                <td><input type="text" id="name" name="name" required></td>
            </tr>
            <tr>
                <td><label for="phone">Phone number</label></td>
                <td><input type="tel" id="phone" name="phone"> <span class="hint">(optional)</span></td>
            </tr>
            <tr>
                <td><label for="email">Email address</label></td>
                <td><input type="email" id="email" name="email" required></td>
            </tr>
            <tr>
                <td><label for="website">Your website</label></td>
                <td><input type="url" id="website" name="website" placeholder="www.yourmte.com"> <span class="hint">(optional)</span></td>
            </tr>
            <tr>
                <td><label for="items">Nr. of items to order</label></td>
                <td><input type="number" id="items" name="items" min="1" max="10" value="1" style="width: 60px;"> <span class="hint">(1-10)</span></td>
            </tr>
            <tr>
                <td><label for="length">Length</label></td>
                <td><input type="number" id="length" name="length" step="0.1" value="1" style="width: 60px;"> <span class="hint">1m (in 10cm increments)</span></td>
            </tr>
            <tr>
                <td><label for="deliv-date">Delivery date</label></td>
                <td><input type="date" id="deliv-date" name="delivery_date" min="2010-12-16"> <span class="hint">(minimum 16 December 2010)</span></td>
            </tr>
            <tr>
                <td><label for="deliv-time">Time of delivery</label></td>
                <td><input type="time" id="deliv-time" name="delivery_time" step="1800"> <span class="hint">(in 30 min increments)</span></td>
            </tr>
            <tr>
                <td><label for="color">Color of the item</label></td>
                <td><input type="color" id="color" name="item_color" value="#ed1c24"> <span class="hint">#ed1c24 (default red)</span></td>
            </tr>
            <tr>
                <td></td>
                <td style="padding-top: 15px;"><input type="submit" value="Submit Query"></td>
            </tr>
        </table>

        <div class="search-area">
            <label for="search-box">Search </label>
            <input type="search" id="search-box" name="q">
            <input type="submit" value="Go">
        </div>
    </form>

</body>
</html>
```

---

### 9.6. Bài 6: Biểu mẫu phản hồi / liên hệ quảng cáo với các trường bắt buộc (*)

#### A. Phân tích yêu cầu đề bài
1. Trường `Full Name *`:
   - Dấu sao đỏ biểu thị bắt buộc.
   - Được chia thành 2 ô nhập nhỏ nằm ngang: `First` (Họ/tên đệm) và `Last` (Tên chính) $\rightarrow$ sử dụng Flexbox hoặc bảng để bố trí song song.
2. Trường `Email *`:
   - Ô nhập email bắt buộc `required`.
3. Trường `Subject`:
   - Thẻ `<select>` với option mặc định là `Advertise`.
4. Trường `Your Message *`:
   - Khung nhập văn bản nhiều dòng `<textarea rows="5" required>`.
5. Nút `Submit`:
   - Nút gửi biểu mẫu màu xanh lam đậm / xanh cổ vịt.

#### B. Mã nguồn HTML chuẩn (`bai6_feedback_form.html`)
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Bài 6: Feedback & Contact Form</title>
    <style>
        .form-card {
            border: 1px solid #17a2b8;
            padding: 20px;
            width: 450px;
            font-family: Arial, sans-serif;
        }
        .form-row { margin-bottom: 15px; }
        .required { color: red; font-weight: bold; }
        label { display: block; font-weight: bold; margin-bottom: 5px; }
        .name-inputs { display: flex; gap: 10px; }
        .name-inputs input { flex: 1; padding: 6px; }
        input[type="email"], select, textarea { width: 100%; box-sizing: border-box; padding: 6px; }
        .btn-submit {
            background-color: #388087;
            color: white;
            border: none;
            padding: 8px 20px;
            cursor: pointer;
            font-size: 14px;
        }
    </style>
</head>
<body>

    <div class="form-card">
        <form action="#" method="post">
            <div class="form-row">
                <label>Full Name <span class="required">*</span></label>
                <div class="name-inputs">
                    <input type="text" name="first_name" placeholder="First" required>
                    <input type="text" name="last_name" placeholder="Last" required>
                </div>
            </div>

            <div class="form-row">
                <label for="email">Email <span class="required">*</span></label>
                <input type="email" id="email" name="email" required>
            </div>

            <div class="form-row">
                <label for="subject">Subject</label>
                <select id="subject" name="subject">
                    <option value="advertise" selected>Advertise</option>
                    <option value="support">Support</option>
                    <option value="feedback">Feedback</option>
                </select>
            </div>

            <div class="form-row">
                <label for="msg">Your Message <span class="required">*</span></label>
                <textarea id="msg" name="message" rows="5" required></textarea>
            </div>

            <button type="submit" class="btn-submit">Submit</button>
        </form>
    </div>

</body>
</html>
```

---

### 9.7. Bài 7: Form liên hệ phong cách hiện đại với thanh tiêu đề Teal

#### A. Phân tích yêu cầu đề bài
Giao diện thẻ liên hệ phẳng (*Card UI*):
- Khối tiêu đề trên cùng: Nền màu xanh ngọc (*Teal / Mint green* `#34d399`), chữ trắng canh giữa: `Contact Us`.
- Các trường nhập liệu có chữ mờ gợi ý (`placeholder`):
  - `Your Name`
  - `Email Address`
  - `Type your Message` (sử dụng `<textarea>`)
- Nút bấm `Send` chiếm toàn bộ chiều ngang (*full-width*), đồng màu xanh ngọc với tiêu đề.

#### B. Mã nguồn HTML chuẩn (`bai7_contact_us.html`)
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Bài 7: Modern Contact Us</title>
    <style>
        .contact-box {
            width: 380px;
            border: 1px solid #ddd;
            font-family: Arial, sans-serif;
            background: #fff;
        }
        .header-bar {
            background-color: #34d399;
            color: #fff;
            text-align: center;
            padding: 16px;
            font-size: 22px;
            font-weight: bold;
        }
        .body-form { padding: 20px; }
        .body-form input, .body-form textarea {
            width: 100%;
            box-sizing: border-box;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 3px;
        }
        .btn-send {
            width: 100%;
            background-color: #34d399;
            color: #fff;
            border: none;
            padding: 12px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            border-radius: 3px;
        }
        .btn-send:hover { background-color: #10b981; }
    </style>
</head>
<body>

    <div class="contact-box">
        <div class="header-bar">Contact Us</div>
        <div class="body-form">
            <form action="#" method="post">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Email Address" required>
                <textarea name="message" placeholder="Type your Message" rows="4" required></textarea>
                <button type="submit" class="btn-send">Send</button>
            </form>
        </div>
    </div>

</body>
</html>
```

---

### 9.8. Bài 8: Thiết kế layout trang web hoàn chỉnh chuẩn HTML5 Semantic (Tutorial Republic)

#### A. Phân tích yêu cầu đề bài
Đề bài yêu cầu dựng hoàn chỉnh bố cục một trang web chuẩn ngữ nghĩa HTML5 với các phân khu rõ rệt:
1. **Header (`<header>`):** Chứa tên website `Tutorial Republic`.
2. **Khu vực thân trang chia 2 cột:**
   - Cột trái (`<nav>`): Thanh menu điều hướng gồm các liên kết `Home`, `About`, `Contact`.
   - Cột phải (`<main>`): Vùng nội dung chính chứa tiêu đề `Welcome to our site` và đoạn văn bản `Here you will learn to create websites...`.
3. **Footer (`<footer>`):** Chân trang chứa dòng chữ bản quyền `copyright © tutorialrepublic.com` được canh giữa.

#### B. Mã nguồn HTML chuẩn (`bai8_semantic_layout.html`)
```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Bài 8: Tutorial Republic Semantic Layout</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f6f8;
            margin: 20px;
        }
        .site-container {
            width: 850px;
            margin: 0 auto;
            border: 1px solid #7a9cb5;
            background-color: #8da4be;
        }
        header {
            background-color: #7997b5;
            padding: 15px 20px;
            border-bottom: 1px solid #6b86a3;
        }
        header h1 {
            margin: 0;
            font-size: 22px;
            color: #1a202c;
        }
        .main-wrapper {
            display: flex;
            min-height: 220px;
        }
        nav {
            width: 160px;
            padding: 15px 20px;
            background-color: #8da4be;
        }
        nav ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
        }
        nav ul li { margin-bottom: 10px; }
        nav ul li a {
            color: #1e3a8a;
            text-decoration: underline;
        }
        main {
            flex: 1;
            background-color: #e5e9f0;
            padding: 20px 25px;
        }
        main h2 {
            margin-top: 0;
            font-size: 20px;
        }
        footer {
            background-color: #7997b5;
            text-align: center;
            padding: 12px;
            border-top: 1px solid #6b86a3;
            font-size: 14px;
        }
    </style>
</head>
<body>

    <div class="site-container">
        <!-- 1. Header chuẩn ngữ nghĩa -->
        <header>
            <h1>Tutorial Republic</h1>
        </header>

        <!-- 2. Thân trang 2 cột (Nav và Main) -->
        <div class="main-wrapper">
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            <main>
                <h2>Welcome to our site</h2>
                <p>Here you will learn to create websites...</p>
            </main>
        </div>

        <!-- 3. Footer chuẩn ngữ nghĩa -->
        <footer>
            <p>copyright &copy; tutorialrepublic.com</p>
        </footer>
    </div>

</body>
</html>
```

---

## Chương 10: Checklist Đánh Giá Nghiệm Thu & Lộ Trình Tự Học

### 10.1. Bảng đối chiếu hoàn thành bài tập thực hành

| Bài tập | Mục tiêu kỹ thuật chính | Tệp mã nguồn đính kèm | Trạng thái |
| :---: | :--- | :--- | :---: |
| **Bài 1** | Sử dụng đúng các thẻ mã máy tính (`code`, `kbd`, `samp`, `var`), chỉ số trên/dưới (`sub`, `sup`) và thẻ tác giả `<address>`. | `bai1_text_formula.html` | ✅ Đã hoàn thành |
| **Bài 2** | Danh sách việc cần làm (`ul`, `li`), thẻ định dạng `<s>`/`<u>`, input `week` và khung cuộn CSS `overflow-y`. | `bai2_todo_list.html` | ✅ Đã hoàn thành |
| **Bài 3** | Tổng hợp đầy đủ 13 loại input HTML5 (color, date, time, range, number, email, url, week...). | `bai3_form_controls.html` | ✅ Đã hoàn thành |
| **Bài 4** | Phân nhóm danh mục bằng `<optgroup>`, chọn nhiều `multiple`, gom cụm trường bằng `<fieldset>` và `<legend>`. | `bai4_select_optgroup.html` | ✅ Đã hoàn thành |
| **Bài 5** | Kiểm soát hợp lệ Form: `required`, `min`, `max`, `step`, giá trị mặc định và tích hợp ô tìm kiếm `search`. | `bai5_order_form.html` | ✅ Đã hoàn thành |
| **Bài 6** | Form phản hồi với trường họ tên chia đôi, trường bắt buộc `*`, dropdown lựa chọn và khung văn bản `textarea`. | `bai6_feedback_form.html` | ✅ Đã hoàn thành |
| **Bài 7** | Thiết kế UI Card phẳng hiện đại với khối màu ngọc teal `#34d399` và các ô nhập liệu `placeholder`. | `bai7_contact_us.html` | ✅ Đã hoàn thành |
| **Bài 8** | Dựng khung website chuẩn HTML5 Semantic (`header`, `nav`, `main`, `footer`) bố cục 2 cột. | `bai8_semantic_layout.html` | ✅ Đã hoàn thành |

### 10.2. Lộ trình chuẩn bị cho Topic 2 & Topic 3
- [ ] Mở và chạy thử nghiệm từng file trong `Topic 1/Bài tập/` trên trình duyệt Google Chrome, bật cửa sổ **Chrome DevTools (F12)** để quan sát cây DOM và kiểm tra tính hợp lệ của Form.
- [ ] Thử sửa đổi các thuộc tính `required`, `pattern`, `step` trong Bài 5 để kiểm nghiệm cơ chế tự động validate của trình duyệt.
- [ ] Chuẩn bị kiến thức cho **Topic 2:** Đào sâu vào Semantic HTML mở rộng, cấu trúc bảng phức tạp (`thead`, `tbody`, `tfoot`, `rowspan`, `colspan`) và bắt đầu bước vào thế giới **CSS Toàn diện & Mô hình hộp (The CSS Box Model)**.
