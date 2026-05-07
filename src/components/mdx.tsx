import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { ExternalLink } from 'lucide-react';
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import { EnvVariableConfig } from '@/components/env-variable-config';
import {ToGithubGroup, ToGithub } from '@/components/to-github';


export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    ExternalLink,
    File,
    Files,
    Folder,
    EnvVariableConfig,
    ToGithubGroup,
    ToGithub,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}
