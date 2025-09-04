import React, { useState } from 'react';

const FilesComponent = ({ projectId }) => {
    const [files, setFiles] = useState([
        {
            id: '1',
            name: 'project-requirements.pdf',
            type: 'pdf',
            size: '2.4 MB',
            uploadedAt: '2025-08-20T10:30:00Z',
            uploadedBy: { name: 'John Doe', avatar: 'JD' },
            url: '#'
        },
        {
            id: '2',
            name: 'wireframes.sketch',
            type: 'sketch',
            size: '15.7 MB',
            uploadedAt: '2025-08-22T14:45:00Z',
            uploadedBy: { name: 'Jane Smith', avatar: 'JS' },
            url: '#'
        },
        {
            id: '3',
            name: 'database-schema.sql',
            type: 'sql',
            size: '854 KB',
            uploadedAt: '2025-08-25T09:15:00Z',
            uploadedBy: { name: 'Mike Johnson', avatar: 'MJ' },
            url: '#'
        },
        {
            id: '4',
            name: 'api-documentation.md',
            type: 'md',
            size: '1.2 MB',
            uploadedAt: '2025-08-28T16:20:00Z',
            uploadedBy: { name: 'John Doe', avatar: 'JD' },
            url: '#'
        },
        {
            id: '5',
            name: 'brand-assets.zip',
            type: 'zip',
            size: '45.3 MB',
            uploadedAt: '2025-08-30T11:10:00Z',
            uploadedBy: { name: 'Jane Smith', avatar: 'JS' },
            url: '#'
        }
    ]);

    const [dragOver, setDragOver] = useState(false);
    const [showUpload, setShowUpload] = useState(false);

    const getFileIcon = (type) => {
        const icons = {
            pdf: '📄',
            sketch: '🎨',
            sql: '🗃️',
            md: '📝',
            zip: '🗜️',
            jpg: '🖼️',
            png: '🖼️',
            doc: '📄',
            docx: '📄',
            default: '📁'
        };
        return icons[type] || icons.default;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragOver(false);

        const droppedFiles = Array.from(e.dataTransfer.files);
        handleFileUpload(droppedFiles);
    };

    const handleFileSelect = (e) => {
        const selectedFiles = Array.from(e.target.files);
        handleFileUpload(selectedFiles);
    };

    const handleFileUpload = (uploadedFiles) => {
        // Mock file upload
        uploadedFiles.forEach(file => {
            const newFile = {
                id: Date.now() + Math.random(),
                name: file.name,
                type: file.name.split('.').pop().toLowerCase(),
                size: formatFileSize(file.size),
                uploadedAt: new Date().toISOString(),
                uploadedBy: { name: 'John Doe', avatar: 'JD' },
                url: '#'
            };

            setFiles(prev => [newFile, ...prev]);
        });

        setShowUpload(false);
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    };

    const handleDelete = (fileId) => {
        setFiles(prev => prev.filter(file => file.id !== fileId));
    };

    return (
        <div className="files-component">
            <div className="files-header">
                <h3>Project Files</h3>
                <div className="files-actions">
                    <span className="files-count">{files.length} files</span>
                    <button
                        className="upload-btn"
                        onClick={() => setShowUpload(true)}
                    >
                        + Upload Files
                    </button>
                </div>
            </div>

            {showUpload && (
                <div className="upload-section">
                    <div
                        className={`upload-area ${dragOver ? 'drag-over' : ''}`}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => document.getElementById('file-input').click()}
                    >
                        <div className="upload-content">
                            <span className="upload-icon">📤</span>
                            <p>Drag files here or click to browse</p>
                            <small>Support for all file types up to 100MB</small>
                        </div>
                    </div>

                    <input
                        id="file-input"
                        type="file"
                        multiple
                        onChange={handleFileSelect}
                        style={{ display: 'none' }}
                    />

                    <div className="upload-actions">
                        <button
                            className="cancel-upload"
                            onClick={() => setShowUpload(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}

            <div className="files-list">
                {files.length === 0 ? (
                    <div className="no-files">
                        <p>No files uploaded yet</p>
                        <p>Upload your first file to get started</p>
                    </div>
                ) : (
                    files.map(file => (
                        <div key={file.id} className="file-item">
                            <div className="file-info">
                                <div className="file-icon">{getFileIcon(file.type)}</div>
                                <div className="file-details">
                                    <h4 className="file-name">{file.name}</h4>
                                    <div className="file-meta">
                                        <span className="file-size">{file.size}</span>
                                        <span className="file-separator">•</span>
                                        <span className="file-date">{formatDate(file.uploadedAt)}</span>
                                        <span className="file-separator">•</span>
                                        <span className="file-uploader">
                                            by {file.uploadedBy.name}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="file-actions">
                                <button className="file-action-btn download" title="Download">
                                    ⬇️
                                </button>
                                <button className="file-action-btn share" title="Share">
                                    🔗
                                </button>
                                <button
                                    className="file-action-btn delete"
                                    title="Delete"
                                    onClick={() => handleDelete(file.id)}
                                >
                                    🗑️
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default FilesComponent;