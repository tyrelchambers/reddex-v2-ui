import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Loader from "../../components/Loader/Loader";
import { ThemeContext } from "../../contexts/themeContext";
import { GlobalStyles } from "../../globalStyles";
import { useCustomWebsite } from "../../hooks/useCustomWebsite";
import CustomHeader from "../../layouts/CustomHeader/CustomHeader";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "../../components/MenuBar/MenuBar";
import { Button } from "../../components/Button/Button";
import InputWrapper from "../../components/InputWrapper/InputWrapper";
import Input from "../../components/Input/Input";
import { getStringLength } from "../../utils/getStringLength";
import StringCount from "../../components/StringCount/StringCount";

const StyledWrapper = styled.div`
  .rules {
    line-height: 1.8em;
  }

  .ProseMirror {
    background-color: ${(props) => props.theme.backgroundSecondary};
    margin-top: 1em;
    min-height: 300px;
    border-radius: 0.5em;
    padding: 1em;

    ul {
      list-style-type: disc !important;
    }

    ol {
      list-style-type: decimal !important;
    }

    ul,
    ol {
      padding: 0 1rem;
    }

    blockquote {
      padding-left: 1rem;
      border-left: 2px solid rgba(#0d0d0d, 0.1);
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 1em;
      margin-bottom: 0.5em;
      font-weight: 600;
      color: ${(props) => props.theme.text};
    }

    h1 {
      font-size: 2.5em;
    }

    h2 {
      font-size: 2em;
    }

    h3 {
      font-size: 1.5em;
    }

    h4 {
      font-size: 1.25em;
    }

    h5 {
      font-size: 1em;
    }

    h6 {
      font-size: 0.875em;
    }
  }
`;

const SubmitStory = ({ subdomain }) => {
  const { website, submitStory } = useCustomWebsite({ subdomain });
  const [theme, toggleTheme, themeStyles, setThemeHandler] =
    useContext(ThemeContext);

  const [state, setstate] = useState({
    author: "",
    title: "",
    content: "",
    sentToOthers: "",
    email: "",
  });

  const websiteData = website.data?.config;

  useEffect(() => {
    if (websiteData) {
      setThemeHandler(websiteData.theme.mode);
    }
  }, [setThemeHandler, websiteData]);

  const editor = useEditor({
    extensions: [StarterKit],
  });

  const submitHandler = () => {
    const content = editor.getHTML();
    console.log(website.data);
    submitStory.mutate({
      siteOwner: website.data.userId,
      ...state,
      content,
    });
  };
  return (
    <ThemeProvider
      theme={themeStyles}
      toggleTheme={toggleTheme}
      themeString={theme}
    >
      <GlobalStyles />
      {website.isLoading && <Loader />}

      <StyledWrapper>
        {websiteData && (
          <>
            <CustomHeader website={websiteData} />

            <main className="mt-10 max-w-screen-md ml-auto mr-auto pb-10">
              <h1 className="text-4xl font-bold text">
                {websiteData.submissionForm.title}
              </h1>

              {websiteData.submissionForm.subTitle && (
                <p className="subtitle text-light mt-4 font-bold">
                  {websiteData.submissionForm.subTitle}
                </p>
              )}

              <p className="whitespace-pre-wrap text-light mt-6 rules">
                {websiteData.submissionForm.rules}
              </p>
              <hr className="mt-10 mb-10" />
              <section>
                <h2 className="text-xl font-bold mb-6 text mt-8">
                  Write your story
                </h2>
                {websiteData.submissionForm.modules.filter((mod) => mod.enabled)
                  .length > 0 && (
                  <div className="flex flex-col gap-6 mb-10">
                    {websiteData.submissionForm.modules
                      .filter((mod) => mod.enabled)
                      .map((mod) => (
                        <InputWrapper label={mod.label} key={mod.type}>
                          <Input
                            placeholder={mod.label}
                            name={mod.type}
                            value={state[mod.type]}
                            onInput={(e) =>
                              setstate({ ...state, [mod.type]: e.target.value })
                            }
                          />
                          <div className="flex justify-end">
                            <StringCount
                              str={state[mod.type]}
                              maxLength={255}
                            />
                          </div>
                        </InputWrapper>
                      ))}
                  </div>
                )}

                <MenuBar editor={editor} />
                <EditorContent editor={editor} className="editor" />

                <div className="flex justify-end mt-6">
                  <Button onClick={submitHandler}>Submit story</Button>
                </div>
              </section>
            </main>
          </>
        )}
      </StyledWrapper>
    </ThemeProvider>
  );
};

export default SubmitStory;
