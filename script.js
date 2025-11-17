
// Utility functions for data management
function saveToLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Export data to CSV
function exportToCSV(data, filename) {
    // Convert data to CSV format
    const csvRows = [];
    const headers = Object.keys(data[0].data);
    csvRows.push(headers.join(','));

    data.forEach(item => {
        const values = headers.map(header => item.data[header]);
        csvRows.push(values.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Show statistics
function showStatistics(key) {
    const data = getFromLocalStorage(key) || [];
    if (data.length === 0) {
        alert('Chưa có dữ liệu nào được lưu');
        return;
    }

    let stats = {
        totalSubmissions: data.length,
        lastSubmission: new Date(data[data.length - 1].timestamp).toLocaleString(),
    };

    alert(`
        Thống kê ${key}:
        - Tổng số lượt gửi: ${stats.totalSubmissions}
        - Lần gửi gần nhất: ${stats.lastSubmission}
    `);
}

// Career details data
// Career details data
const careerDetails = {
    'tai-chinh': {
        title: 'Tài Chính',
        content: [
            '<h4>Mô tả ngành nghề</h4>',
            '<p>Ngành Tài chính là lĩnh vực về quản lý, phân tích và đầu tư tài chính trong các tổ chức, doanh nghiệp và thị trường tài chính.</p>',
            '<h4>Cơ hội nghề nghiệp</h4>',
            '<ul>',
            '<li>Chuyên viên tư vấn tài chính: 15-45 triệu/tháng</li>',
            '<li>Chuyên viên phân tích đầu tư: 20-60 triệu/tháng</li>',
            '<li>Chuyên viên ngân hàng: 12-35 triệu/tháng</li>',
            '<li>Chuyên viên chứng khoán: 15-50 triệu/tháng</li>',
            '<li>Quản lý quỹ đầu tư: 30-80 triệu/tháng</li>',
            '</ul>',
            '<h4>Kỹ năng cần thiết</h4>',
            '<ul>',
            '<li>Phân tích tài chính chuyên sâu</li>',
            '<li>Thành thạo Excel và các phần mềm tài chính</li>',
            '<li>Khả năng đánh giá rủi ro</li>',
            '<li>Hiểu biết về thị trường tài chính</li>',
            '</ul>',
            '<h4>Triển vọng ngành</h4>',
            '<p>Ngành tài chính đang phát triển mạnh mẽ với sự xuất hiện của Fintech và xu hướng đầu tư số. Nhu cầu nhân lực tăng 22% mỗi năm.</p>'
        ].join('')
    },
    'kinh-te': {
        title: 'Kinh Tế',
        content: [
            '<h4>Mô tả ngành nghề</h4>',
            '<p>Ngành Kinh tế đào tạo chuyên gia về phân tích, dự báo và hoạch định chính sách kinh tế vĩ mô và vi mô.</p>',
            '<h4>Cơ hội nghề nghiệp</h4>',
            '<ul>',
            '<li>Chuyên gia phân tích kinh tế: 18-50 triệu/tháng</li>',
            '<li>Chuyên viên hoạch định chính sách: 20-55 triệu/tháng</li>',
            '<li>Chuyên viên tư vấn doanh nghiệp: 15-45 triệu/tháng</li>',
            '<li>Nghiên cứu viên kinh tế: 12-40 triệu/tháng</li>',
            '</ul>',
            '<h4>Kỹ năng cần thiết</h4>',
            '<ul>',
            '<li>Phân tích dữ liệu kinh tế</li>',
            '<li>Tư duy logic và phản biện</li>',
            '<li>Kỹ năng nghiên cứu</li>',
            '<li>Hiểu biết về thị trường và xu hướng kinh tế</li>',
            '</ul>',
            '<h4>Triển vọng ngành</h4>',
            '<p>Nhu cầu chuyên gia kinh tế tăng 15% mỗi năm. Đặc biệt cao với các vị trí về phân tích và tư vấn chiến lược phát triển.</p>'
        ].join('')
    },
    'y-duoc': {
        title: 'Y Dược',
        content: [
            '<h4>Mô tả ngành nghề</h4>',
            '<p>Ngành Y Dược đào tạo chuyên gia về chăm sóc sức khỏe, điều trị bệnh và nghiên cứu dược phẩm.</p>',
            '<h4>Cơ hội nghề nghiệp</h4>',
            '<ul>',
            '<li>Bác sĩ đa khoa: 20-70 triệu/tháng</li>',
            '<li>Dược sĩ: 15-45 triệu/tháng</li>',
            '<li>Nghiên cứu viên dược phẩm: 25-60 triệu/tháng</li>',
            '<li>Chuyên gia y tế công cộng: 18-50 triệu/tháng</li>',
            '</ul>',
            '<h4>Kỹ năng cần thiết</h4>',
            '<ul>',
            '<li>Kiến thức chuyên môn sâu</li>',
            '<li>Kỹ năng thực hành lâm sàng</li>',
            '<li>Đạo đức nghề nghiệp</li>',
            '<li>Khả năng cập nhật kiến thức liên tục</li>',
            '</ul>',
            '<h4>Triển vọng ngành</h4>',
            '<p>Ngành Y Dược luôn có nhu cầu cao và ổn định. Với xu hướng già hóa dân số và chăm sóc sức khỏe thông minh, nhu cầu tăng 18% mỗi năm.</p>'
        ].join('')
    },
    'su-pham': {
        title: 'Sư Phạm',
        content: [
            '<h4>Mô tả ngành nghề</h4>',
            '<p>Ngành Sư phạm đào tạo giáo viên và chuyên gia giáo dục, trang bị kiến thức và phương pháp giảng dạy.</p>',
            '<h4>Cơ hội nghề nghiệp</h4>',
            '<ul>',
            '<li>Giáo viên phổ thông: 10-25 triệu/tháng</li>',
            '<li>Giảng viên đại học: 15-45 triệu/tháng</li>',
            '<li>Chuyên gia giáo dục: 20-50 triệu/tháng</li>',
            '<li>Quản lý giáo dục: 25-60 triệu/tháng</li>',
            '</ul>',
            '<h4>Kỹ năng cần thiết</h4>',
            '<ul>',
            '<li>Phương pháp sư phạm</li>',
            '<li>Kỹ năng giao tiếp và truyền đạt</li>',
            '<li>Quản lý lớp học hiệu quả</li>',
            '<li>Sáng tạo trong giảng dạy</li>',
            '</ul>',
            '<h4>Triển vọng ngành</h4>',
            '<p>Với xu hướng đổi mới giáo dục và học tập suốt đời, nhu cầu giáo viên chất lượng cao tăng 12% mỗi năm.</p>'
        ].join('')
    },
    'xay-dung': {
        title: 'Xây Dựng',
        content: [
            '<h4>Mô tả ngành nghề</h4>',
            '<p>Ngành Xây dựng đào tạo chuyên gia về thiết kế, thi công và quản lý các công trình xây dựng.</p>',
            '<h4>Cơ hội nghề nghiệp</h4>',
            '<ul>',
            '<li>Kỹ sư xây dựng: 15-45 triệu/tháng</li>',
            '<li>Kiến trúc sư: 18-50 triệu/tháng</li>',
            '<li>Quản lý dự án xây dựng: 25-70 triệu/tháng</li>',
            '<li>Giám sát công trình: 20-55 triệu/tháng</li>',
            '</ul>',
            '<h4>Kỹ năng cần thiết</h4>',
            '<ul>',
            '<li>Thiết kế và đọc bản vẽ</li>',
            '<li>Sử dụng phần mềm chuyên ngành</li>',
            '<li>Quản lý dự án</li>',
            '<li>An toàn lao động</li>',
            '</ul>',
            '<h4>Triển vọng ngành</h4>',
            '<p>Với sự phát triển của đô thị hóa và hạ tầng, nhu cầu nhân lực ngành xây dựng tăng 20% mỗi năm.</p>'
        ].join('')
    },
    'thoi-trang': {
        title: 'Thời Trang',
        content: [
            '<h4>Mô tả ngành nghề</h4>',
            '<p>Ngành Thời trang đào tạo chuyên gia về thiết kế, sản xuất và kinh doanh các sản phẩm thời trang.</p>',
            '<h4>Cơ hội nghề nghiệp</h4>',
            '<ul>',
            '<li>Nhà thiết kế thời trang: 15-50 triệu/tháng</li>',
            '<li>Quản lý thương hiệu: 20-60 triệu/tháng</li>',
            '<li>Stylist: 12-40 triệu/tháng</li>',
            '<li>Merchandiser: 15-45 triệu/tháng</li>',
            '</ul>',
            '<h4>Kỹ năng cần thiết</h4>',
            '<ul>',
            '<li>Thiết kế và sáng tạo</li>',
            '<li>Xu hướng thời trang</li>',
            '<li>Marketing thời trang</li>',
            '<li>Quản lý sản xuất</li>',
            '</ul>',
            '<h4>Triển vọng ngành</h4>',
            '<p>Ngành thời trang đang phát triển nhanh với xu hướng thời trang bền vững và công nghệ. Nhu cầu nhân lực tăng 15% mỗi năm.</p>'
        ].join('')
    },
    'cong-nghe-thong-tin': {
        title: 'Công Nghệ Thông Tin',
        content: [
            '<h4>Mô tả ngành nghề</h4>',
            '<p>Ngành CNTT là lĩnh vực nghiên cứu, thiết kế, phát triển, triển khai và quản lý các hệ thống thông tin. Đây là ngành có tốc độ phát triển nhanh và nhu cầu nhân lực cao.</p>',
            '<h4>Cơ hội nghề nghiệp</h4>',
            '<ul>',
            '<li>Lập trình viên (Developer): 8-40 triệu/tháng</li>',
            '<li>Kỹ sư phần mềm (Software Engineer): 15-50 triệu/tháng</li>',
            '<li>Chuyên gia An ninh mạng (Cybersecurity): 20-60 triệu/tháng</li>',
            '<li>Chuyên gia Trí tuệ nhân tạo (AI Engineer): 25-70 triệu/tháng</li>',
            '<li>Phân tích dữ liệu (Data Analyst): 15-45 triệu/tháng</li>',
            '</ul>',
            '<h4>Kỹ năng cần thiết</h4>',
            '<ul>',
            '<li>Tư duy logic và giải quyết vấn đề</li>',
            '<li>Kỹ năng lập trình và phát triển phần mềm</li>',
            '<li>Khả năng học hỏi công nghệ mới</li>',
            '<li>Làm việc nhóm hiệu quả</li>',
            '</ul>',
            '<h4>Triển vọng ngành</h4>',
            '<p>Theo thống kê, nhu cầu nhân lực ngành CNTT tăng 20% mỗi năm. Đây là một trong những ngành có mức lương khởi điểm cao nhất và cơ hội thăng tiến nhanh.</p>'
        ].join('')
    },
    'marketing': {
        title: 'Marketing',
        content: [
            '<h4>Mô tả ngành nghề</h4>',
            '<p>Marketing là lĩnh vực về nghiên cứu thị trường, xây dựng chiến lược và triển khai các hoạt động quảng bá sản phẩm, thương hiệu.</p>',
            '<h4>Cơ hội nghề nghiệp</h4>',
            '<ul>',
            '<li>Digital Marketing Manager: 15-40 triệu/tháng</li>',
            '<li>Content Marketing Specialist: 10-25 triệu/tháng</li>',
            '<li>SEO/SEM Specialist: 12-35 triệu/tháng</li>',
            '<li>Social Media Manager: 10-30 triệu/tháng</li>',
            '</ul>',
            '<h4>Kỹ năng cần thiết</h4>',
            '<ul>',
            '<li>Tư duy sáng tạo</li>',
            '<li>Kỹ năng phân tích dữ liệu</li>',
            '<li>Hiểu biết về tâm lý khách hàng</li>',
            '<li>Kỹ năng viết và truyền thông</li>',
            '</ul>',
            '<h4>Triển vọng ngành</h4>',
            '<p>Marketing số đang phát triển mạnh mẽ với sự bùng nổ của social media và thương mại điện tử. Nhu cầu nhân sự tăng 15% mỗi năm.</p>'
        ].join('')
    },
    'ke-toan': {
        title: 'Kế Toán',
        content: [
            '<h4>Mô tả ngành nghề</h4>',
            '<p>Kế toán là ngành nghề chuyên về ghi chép, tổng hợp và phân tích các thông tin tài chính của doanh nghiệp, tổ chức.</p>',
            '<h4>Cơ hội nghề nghiệp</h4>',
            '<ul>',
            '<li>Kế toán viên: 8-25 triệu/tháng</li>',
            '<li>Kế toán trưởng: 20-50 triệu/tháng</li>',
            '<li>Kiểm toán viên: 15-45 triệu/tháng</li>',
            '<li>Chuyên viên tư vấn tài chính: 12-35 triệu/tháng</li>',
            '</ul>',
            '<h4>Kỹ năng cần thiết</h4>',
            '<ul>',
            '<li>Thành thạo Excel và phần mềm kế toán</li>',
            '<li>Tư duy phân tích số liệu</li>',
            '<li>Cẩn thận, tỉ mỉ</li>',
            '<li>Hiểu biết về luật kế toán</li>',
            '</ul>',
            '<h4>Triển vọng ngành</h4>',
            '<p>Ngành kế toán luôn có nhu cầu ổn định với mức tăng trưởng 10% mỗi năm. Xu hướng chuyển đổi số đang tạo ra nhiều cơ hội mới cho ngành.</p>'
        ].join('')
    },
    'quan-tri-kinh-doanh': {
        title: 'Quản Trị Kinh Doanh',
        content: [
            '<h4>Mô tả ngành nghề</h4>',
            '<p>Quản trị kinh doanh là ngành học về cách điều hành, tổ chức và phát triển doanh nghiệp một cách hiệu quả.</p>',
            '<h4>Cơ hội nghề nghiệp</h4>',
            '<ul>',
            '<li>Quản lý dự án: 15-45 triệu/tháng</li>',
            '<li>Giám đốc kinh doanh: 25-70 triệu/tháng</li>',
            '<li>Chuyên viên phân tích kinh doanh: 12-35 triệu/tháng</li>',
            '<li>Quản lý vận hành: 18-40 triệu/tháng</li>',
            '</ul>',
            '<h4>Kỹ năng cần thiết</h4>',
            '<ul>',
            '<li>Kỹ năng lãnh đạo</li>',
            '<li>Khả năng phân tích và ra quyết định</li>',
            '<li>Giao tiếp và đàm phán</li>',
            '<li>Quản lý thời gian và nguồn lực</li>',
            '</ul>',
            '<h4>Triển vọng ngành</h4>',
            '<p>Với sự phát triển của nền kinh tế, nhu cầu nhân sự ngành QTKD tăng 18% mỗi năm. Đây là ngành có nhiều cơ hội thăng tiến và phát triển quốc tế.</p>'
        ].join('')
    },
    'ngoai-ngu': {
        title: 'Ngoại Ngữ',
        content: [
            '<h4>Mô tả ngành nghề</h4>',
            '<p>Ngành ngoại ngữ đào tạo chuyên gia về ngôn ngữ, phiên dịch, biên dịch và giao tiếp quốc tế.</p>',
            '<h4>Cơ hội nghề nghiệp</h4>',
            '<ul>',
            '<li>Giáo viên ngoại ngữ: 15-40 triệu/tháng</li>',
            '<li>Phiên dịch viên: 20-50 triệu/tháng</li>',
            '<li>Biên dịch viên: 15-35 triệu/tháng</li>',
            '<li>Chuyên viên quan hệ quốc tế: 18-45 triệu/tháng</li>',
            '</ul>',
            '<h4>Kỹ năng cần thiết</h4>',
            '<ul>',
            '<li>Khả năng ngôn ngữ xuất sắc</li>',
            '<li>Hiểu biết văn hóa đa quốc gia</li>',
            '<li>Kỹ năng giao tiếp</li>',
            '<li>Khả năng làm việc dưới áp lực</li>',
            '</ul>',
            '<h4>Triển vọng ngành</h4>',
            '<p>Với xu hướng toàn cầu hóa, nhu cầu nhân sự ngành ngoại ngữ tăng 12% mỗi năm. Đặc biệt cao với các ngôn ngữ như tiếng Anh, Nhật, Hàn, Trung.</p>'
        ].join('')
    },
    'du-lich-khach-san': {
        title: 'Du Lịch - Khách Sạn',
        content: [
            '<h4>Mô tả ngành nghề</h4>',
            '<p>Ngành Du lịch - Khách sạn đào tạo chuyên gia về quản lý và vận hành các dịch vụ du lịch, nhà hàng, khách sạn.</p>',
            '<h4>Cơ hội nghề nghiệp</h4>',
            '<ul>',
            '<li>Quản lý khách sạn: 20-60 triệu/tháng</li>',
            '<li>Hướng dẫn viên du lịch: 12-30 triệu/tháng</li>',
            '<li>Quản lý nhà hàng: 15-40 triệu/tháng</li>',
            '<li>Chuyên viên tổ chức sự kiện: 15-35 triệu/tháng</li>',
            '</ul>',
            '<h4>Kỹ năng cần thiết</h4>',
            '<ul>',
            '<li>Giao tiếp và ngoại ngữ</li>',
            '<li>Quản lý và tổ chức</li>',
            '<li>Xử lý tình huống linh hoạt</li>',
            '<li>Kỹ năng phục vụ khách hàng</li>',
            '</ul>',
            '<h4>Triển vọng ngành</h4>',
            '<p>Ngành du lịch - khách sạn đang phục hồi mạnh mẽ với tốc độ tăng trưởng 25% mỗi năm. Đặc biệt có nhiều cơ hội làm việc tại các tập đoàn quốc tế.</p>'
        ].join('')
    }
}
;

// Xử lý modal
const modal = document.getElementById('career-modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeModal = document.querySelector('.close-modal');

if (closeModal) {
    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    });
}
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

document.querySelectorAll('#fields li a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const career = this.querySelector('span').textContent;
        const careerKey = career.toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, '-');
        const careerInfo = careerDetails[careerKey] || {
            title: career,
            content: '<p>Thông tin chi tiết về ngành này đang được cập nhật...</p>'
        };
        modalTitle.textContent = careerInfo.title;
        modalContent.innerHTML = careerInfo.content;
        modal.style.display = "block";
    });
});

// Xử lý form đăng ký và lưu vào Google Sheets
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const section = this.closest('section');
        const formType = section ? section.id : 'contact';

        try {
            // Hiển thị loading spinner hoặc thông báo
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Đang gửi...';

            // Gọi hàm xử lý tương ứng dựa trên loại form
            let response;
            switch(formType) {
                case 'cv':
                    response = await handleCVSubmission(formData);
                    break;
                case 'assessment':
                    response = await handleAssessmentForm(formData);
                    break;
                default:
                    response = await handleContactForm(formData);
            }

            // Lưu một bản sao vào localStorage để backup
            const storageKey = formType + 'Data';
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            const submission = {
                timestamp: new Date().toISOString(),
                data: data
            };
            const previousData = getFromLocalStorage(storageKey) || [];
            previousData.push(submission);
            saveToLocalStorage(storageKey, previousData);

            // Hiển thị thông báo thành công
            alert('Thông tin của bạn đã được gửi thành công!');
            this.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Có lỗi xảy ra khi gửi thông tin. Vui lòng thử lại sau!');
        } finally {
            // Khôi phục trạng thái nút submit
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });
});

// Tạo chức năng xem lịch sử
function viewStoredData(key) {
    const data = getFromLocalStorage(key);
    if (data && data.length > 0) {
        console.log(`Stored ${key}:`, data);
        return data;
    }
    return null;
}

// Cải thiện UX
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').length > 1) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation
    const inputs = document.querySelectorAll('input[required], textarea[required], select[required]');
    inputs.forEach(input => {
        input.addEventListener('invalid', function(e) {
            e.preventDefault();
            this.classList.add('invalid');
        });

        input.addEventListener('input', function() {
            if (this.classList.contains('invalid')) {
                this.classList.remove('invalid');
            }
        });
    });

    // Unsaved changes warning
    let formChanged = false;
    const formInputs = document.querySelectorAll('form input, form textarea, form select');
    
    formInputs.forEach(input => {
        input.addEventListener('change', () => {
            formChanged = true;
        });
    });

    window.addEventListener('beforeunload', function(e) {
        if (formChanged) {
            e.preventDefault();
            e.returnValue = '';
        }
    });
});
