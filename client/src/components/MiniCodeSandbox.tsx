import React, { useState, useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import lessonCode from '../data/lessonCode';

interface MiniCodeSandboxProps {
  language: string;
  lessonId?: number;
}

const MiniCodeSandbox: React.FC<MiniCodeSandboxProps> = ({ language, lessonId = 0 }) => {
  const defaultCode =
    lessonCode[language]?.[lessonId] || '// Try writing your code here...';

  const [code, setCode] = useState(defaultCode);
  const [output, setOutput] = useState('');

  // 🔄 Update code when lesson changes
  useEffect(() => {
    setCode(defaultCode);
  }, [language, lessonId]);

  const runCode = () => {
    try {
      const capturedLogs: string[] = [];
      const originalLog = console.log;

      console.log = (...args: any[]) => {
        capturedLogs.push(args.join(' '));
      };

      // Run user code
      eval(code);

      // Restore
      console.log = originalLog;
      setOutput(capturedLogs.join('\n'));
    } catch (error: any) {
      setOutput('❌ ' + error.message);
    }
  };

  return (
    <div className="mt-4">
      <h6>💻 Try it out</h6>
      <CodeMirror
        value={code}
        height="200px"
        extensions={[javascript()]}
        onChange={(val) => setCode(val)}
      />
      <button className="btn btn-primary mt-2" onClick={runCode}>
        ▶️ Run Code
      </button>
      <div className="mt-3 p-2 bg-light border" style={{ minHeight: '100px' }}>
        <strong>🖥️ Output:</strong>
        <pre className="mt-2">{output}</pre>
      </div>
    </div>
  );
};

export default MiniCodeSandbox;
